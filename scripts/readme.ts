import { markdownTable } from 'markdown-table';
import { duration } from '../node_modules/mitata/reporter/fmt.mjs';
import benchmarks from './benchmarks';
import { join, resolve } from 'path';
import { exec } from 'bun-utilities';
import { readdir } from 'fs/promises';

const __dirname = new URL('.', import.meta.url).pathname;

const getCPU = () => {
    if (process.platform === 'linux') {
        return exec(['bash', '-c', `lscpu | grep 'Model name' | cut -f 2 -d ":" | awk '{$1=$1}1'`]).stdout.replace(/\n|\r/g, '');
    }

    if (process.platform === 'darwin') {
        return exec(['bash', '-c', `sysctl -n machdep.cpu.brand_string'`]).stdout.replace(/\n|\r/g, '');
    }

    return 'unknown';
}

const sort = (a: any[], b: any[], reverse: boolean = false) => {
    if (reverse) {
        if (a.at(-1) > b.at(-1)) return -1;
        if (a.at(-1) < b.at(-1)) return 1;    
    }

    if (a.at(-1) > b.at(-1)) return 1;
    if (a.at(-1) < b.at(-1)) return -1;
  
    return 0;
}

let head = [
    `*Ran on ${getCPU()}*`,
    '',
    '## Table Of Contents',
    '',
    '- Benchmarks',
    ''
].join('\n');

let tables: Record<string, Record<string, any[]>> = {};
let markdown = '';

for (const promiseBenchmark of benchmarks) {
    const benchmark = await promiseBenchmark;
    head += `   - [${benchmark.name}](#${benchmark.name})${benchmark.category ? ` (${benchmark.category})` : ''}\n`;
    markdown += `## ${benchmark.name.at(0).toUpperCase() + benchmark.name.slice(1)}\n`;

    const path = resolve('.', benchmark.path, 'outputs');
    const outputs: Record<string, { language: string, runtime: string, benchmarks: any[] }> = {};
    for (const output of await readdir(path)) {
        outputs[output] = JSON.parse(await Bun.file(join(path, output)).text())
    }

    for (const value of Object.values(outputs)) {
        for (const b of value.benchmarks) {
            if (tables[b.group] === undefined) tables[b.group] = {};

            tables[b.group][b.name] = tables[b.group][b.name] || [
                ['Language', 'Runtime', 'Benchmark', 'Average', 'p75', 'p99', 'Min', 'Max']
            ];

            tables[b.group][b.name].push([
                value.language,
                value.runtime,
                b.benchmark,
                `${!b.type ? duration(b.stats.avg) : b.stats.avg.toLocaleString('en-US')}/${b.type || 'iter'}`,
                `${!b.type ? duration(b.stats.p75) : b.stats.p75.toLocaleString('en-US')}`,
                `${!b.type ? duration(b.stats.p99) : b.stats.p99.toLocaleString('en-US')}`,
                `${!b.type ? duration(b.stats.min) : b.stats.min.toLocaleString('en-US')}`,
                `${!b.type ? duration(b.stats.max) : b.stats.max.toLocaleString('en-US')}`,
                b.stats.avg
            ]);
        }
    }

    const tempTables = [];
    let headerSize = "###";
    for (const [group, value] of Object.entries(tables)) {
        if (group !== 'null') {
            headerSize = "####";
            markdown += `\n### ${group}\n`;

            const count = head.match(new RegExp(group, 'g'))?.length || 0;
            head += `     - [${group}](#${count > 0 ? `${group.replaceAll(" ", "-")}-${count - 1}` : group.replaceAll(" ", "-")})\n`;
        }

        for (const [key, table] of Object.entries(value)) {
            table.sort((a, b) => sort(a, b, benchmark.name === 'http'));
    
            tempTables.push(table.map(a => Object.assign([], a)));
            for (const b of table.slice(1)) b.pop();
    
            markdown += `\n${headerSize} ${key}\n`
            markdown += `${markdownTable(table)}\n\n`;
        }
    }

    if (tempTables[1]) {
        const flattedTablesArray = tempTables.flat();
        for (const element of flattedTablesArray.slice(1)) {
            if (element.join(',') === flattedTablesArray[0].join(',')) {
                flattedTablesArray.splice(flattedTablesArray.indexOf(element), 1);
            }
        }
        
        flattedTablesArray.sort((a, b) => sort(a, b, benchmark.name === 'http'));
        for (const b of flattedTablesArray.slice(1)) b.pop();

        markdown += `\n${headerSize} everything\n`;
        markdown += `${markdownTable(flattedTablesArray)}\n\n`;
    }

    tables = {};
}

await Bun.write(resolve(__dirname, '..', 'README.md'), `${head}\n${markdown}`);
