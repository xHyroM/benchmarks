// Currently not used, check website/

import { markdownTable } from 'markdown-table';
import { readdirSync, readFileSync } from 'fs';
import { join, extname } from 'path';
import log from '@paperdave/logger';
import { NumberType, Tool, toObject, sort, format, getCPU, getLatestCommits, getFileContentFromCommit } from './utils';

const lastCommits = (await getLatestCommits()).reverse();

const outputs = toObject(
    readdirSync(join(import.meta.dir, '.cache', 'outputs'))
        .map(o => {
            const path = join(import.meta.dir, '.cache', 'outputs', o);

            const content = readdirSync(path);
            if (content.every(e => extname(e) === '')) {
                return { [o]: content.map(c => ({ [c]: readdirSync(join(path, c)) })) };
            }

            return { [o]: content };
        })
);

interface Output {
    group: string;
    file: string;
    benchmark: Benchmark;
}

interface Benchmark {
    language: string;
    runtime: string | null;
    additionalInfo: string | null;
    version: string;
    tool: Tool;
    type: NumberType;
    stats: {
        avg: number;
        min: number;
        max: number;
        p75: number;
        p99: number;
        latency: number;
    }
}

let head = [
    `*Ran on ${getCPU()}*`,
    '',
    '## Table Of Contents',
    '',
    '- Benchmarks',
    ''
].join('\n');

let x = 0;
for (const [benchmarkName, files] of Object.entries(outputs)) {
    let perBenchMarkdown = '';
    let perBenchHead = `<link rel="stylesheet" href="https://xhyrom.github.io/benchmarks/index.css" /><script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>\n`;
    
    head += `   - [${benchmarkName}](./${benchmarkName})\n`;

    const content: Record<string, Record<string, Output>> = {};
    for (const file of files) {
        if (typeof file === 'object') {
            for (const [name, files2] of Object.entries(file)) {
                content[name] = content[name] || {};
                for (const file2 of files2 as any) {
                    content[name][file2] = {
                        group: name,
                        file: file2,
                        benchmark: JSON.parse(readFileSync(join(import.meta.dir, '.cache', 'outputs', benchmarkName, name, file2), { encoding: 'utf-8' }).toString()),
                    };
                }
            }

        } else {
            content['main'] = content['main'] || {};
            content['main'][file] = {
                group: null,
                file,
                benchmark: JSON.parse(readFileSync(join(import.meta.dir, '.cache', 'outputs', benchmarkName, file), { encoding: 'utf-8' }).toString()),
            };
        }
    }

    for (const [group, results] of Object.entries(content)) {
        let size = {
            spaces: 6,
            header: 3,
        };
        if (group !== 'main') {
            perBenchMarkdown += `### <a name="${benchmarkName}-${group}">${group.replaceAll('-', ' ')}</a>\n\n`;
            head += `      - [${group.replaceAll('-', ' ')}](./${benchmarkName}#${benchmarkName}-${group})\n`;
            perBenchHead += `- [${group.replaceAll('-', ' ')}](#${benchmarkName}-${group})\n`;
            size.spaces += 3;
            size.header++;
        };

        for (const language of [...new Set(Object.values(results).map(b => b.benchmark.language))]) {
            let charts: Record<string, any> = {};
            let tables: Record<string, any[]> = {};
            let seriesCharts: Record<string, any[]> = {};
            let data: Record<string, Record<string, any[]>> = {};
            const hasGroup = group !== 'main';
            head += `${' '.repeat(size.spaces)}- [${language}](./${benchmarkName}#${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()})\n`;
            perBenchHead += `${size.spaces === 9 ? '    ' : ''}- [${language}](#${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()})\n`;
            perBenchMarkdown += `${'#'.repeat(size.header)} <a name="${benchmarkName}${hasGroup ? `-${group}` : ''}-${language.toLowerCase()}">${language}</a>\n`;
    
            tables[language] = [
                ['Language', 'Average', 'p75', 'p99', 'Min', 'Max']
            ];

            let chartTitle = '';
            let formatterFunction = '';

            for (const bench_ of Object.values(results)) {
                const bench = bench_.benchmark;

                data[language] = data[language] || {
                    [bench.runtime]: []
                };

                data[language][bench.runtime] = data[language][bench.runtime] || [];

                if (bench.language !== language) continue;
                if (bench.stats.latency && tables[language][0].at(-1) !== 'Latency') tables[language][0].push('Latency');

                //charts[language].xaxis.categories.push(bench.runtime ? `${bench.language} / ${bench.runtime}` : bench.language);
    
                const forPush = [
                    bench.runtime ? `${bench.language} /${bench.additionalInfo ? ` ${bench.additionalInfo} /` : ''}  ${bench.runtime}` : bench.language,
                    format(bench.stats.avg, bench.tool, bench.type),
                    format(bench.stats.min, bench.tool),
                    format(bench.stats.max, bench.tool),
                    format(bench.stats['p75'], bench.tool),
                    format(bench.stats['p99'], bench.tool)
                ];
    
                if (bench.stats.latency) forPush.push(format(bench.stats.latency, 'hyperfine'));
                forPush.push(bench.tool);
                // @ts-expect-error for sorting
                forPush.push(bench.stats.avg);
    
                tables[language].push(forPush);
                seriesCharts[language] = seriesCharts[language] || [];

                if (data[language][bench.runtime].length === 0) {
                    let i = 0;
                    for await(const commit of lastCommits) {
                        const content = await getFileContentFromCommit(commit, `${benchmarkName}/${bench_.group ? `${bench_.group}/` : ''}${bench_.file}`);
                        log.info(`Bench #${i} - ${benchmarkName} - ${bench_.group ? `${bench_.group}/` : ''}${bench_.file} ; ${commit}`);
    
                        data[language][bench.runtime].push(content.stats.avg);
                        i++;
                    }
                }

                seriesCharts[language].push({
                    name: bench.runtime ? `${bench.additionalInfo ? ` ${bench.additionalInfo} /` : ''} ${bench.runtime}` : bench.language,
                    data: [...data[language][bench.runtime], bench.stats.avg],
                });

                data[language][bench.runtime] = [];

                formatterFunction = bench.type === '/iter' ? `function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/iter';

                    if (time < 1e0) return \`\$\{Number((time * 1e3).toFixed(2)).toLocaleString(locale)}\${type} ps\`;
  
                    if (time < 1e3) return \`\${Number(time.toFixed(2)).toLocaleString(locale)}\${type} ns\`;
                    if (time < 1e6) return \`\${Number((time / 1e3).toFixed(2)).toLocaleString(locale)}\${type} µs\`;
                    if (time < 1e9) return \`\${Number((time / 1e6).toFixed(2)).toLocaleString(locale)}\${type} ms\`;
                    if (time < 1e12) return \`\${Number((time / 1e9).toFixed(2)).toLocaleString(locale)}\${type} s\`;
                    if (time < 36e11) return \`\${Number((time / 60e9).toFixed(2)).toLocaleString(locale)}\${type} m\`;
                  
                    return \`\${Number((time / 36e11).toFixed(2)).toLocaleString(locale)}\${type} h\`;
                }` : `function (v) {
                    const time = v;
                    const locale = 'en-US';
                    const type = '/rps';

                    return \`\${Number(time.toFixed(2)).toLocaleString(locale)}\${type}\`;
                }`

                chartTitle = bench.type === '/iter' ? 'time per iteration' : 'requests per second';
                charts[language] = `{
                    chart: {
                        height: 320,
                        type: 'line',
                        toolbar: {
                            show: true,
                        },
                        animations: {
                            enabled: true,
                        },
                    },
                    series: ${JSON.stringify(seriesCharts[language])},
                    stroke: {
                        width: 1,
                        curve: "straight",
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        position: "bottom",
                    },
                    yaxis: {
                        labels: {
                            formatter: ${formatterFunction}
                        },
                        title: {
                            text: "${chartTitle}"
                        },
                    },
                    xaxis: {
                        categories: ${JSON.stringify([...lastCommits, 'Latest'])},
                        labels: {
                            show: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            distributed: true
                        }
                    }
                }`;
            }

            const tablesArray = Object.values(tables);
            const chartsArray = Object.values(charts);

            for (let i = 0; i < tablesArray.length; i++) {
                const table = tablesArray[i];
                const chart = chartsArray[i];

                table.sort(sort);
                for (const c of table.slice(1)) c.splice(c.length - 2, 2);

                perBenchMarkdown += '\n' + markdownTable(table) + '\n\n\n' + [
                    `<div id="chart-${x}"></div>`,
                    `<script>`,
                    `new ApexCharts(document.querySelector('#chart-${x}'), ${chart}).render()`,
                    `</script>`
                ].join('\n') + '\n\n';

                x++;
            }
        }
    }

    await Bun.write(join(import.meta.dir, '..', 'docs', `${benchmarkName}.md`), `${perBenchHead}\n${perBenchMarkdown}`);
}

await Bun.write(join(import.meta.dir, '..', 'docs', 'README.md'), head);
