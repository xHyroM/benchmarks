import * as kleur from "../node_modules/mitata/reporter/clr.mjs";

let join;
if (typeof Deno === "undefined") {
    join = (await import("node:path")).join;
} else {
    join = (await import('https://deno.land/std@0.141.0/node/path/mod.ts')).join;
}

/**
 * @param {Output} output 
 * @param {Runtime} runtime 
 * @param {string} path 
 * @param {{[x: (name: string) => string]}} keepFrom 
 * 
 * @typedef {{
 *  benchmarks: any[];
 *  cpu: any;
 *  runtime: string;
 * }} Output
 * 
 * @typedef {'deno'|'bun'|'node'} Runtime
 */
export const save = async(output, runtime, path, language = "javascript", keepFrom) => {
    output.benchmarks = output.benchmarks.map(b => {
        return { ...b, formattedName: `[${runtime}] ${b.name}`, id: b.name, benchmark: keepFrom?.[b.group]?.(b.name) || b.name }
    });
    output.language = language;

    if (typeof Bun !== "undefined") {
        await Bun.write(join(path, "outputs", `${runtime}.json`), JSON.stringify(output));
    } else if (typeof Deno !== "undefined") {
        await Deno.writeTextFile(join(path, "outputs", `${runtime}.json`), JSON.stringify(output));
    } else {
        (await import("fs/promises")).writeFile(join(path, "outputs", `${runtime}.json`), JSON.stringify(output));
    }
}

const sumForBench = (benchmarks, summaryName, main, forCompare, reverse = false) => {
    const mainBenchmark = benchmarks.find(b => b.formattedName.includes(main) && b.id === summaryName);
    if (!mainBenchmark) return;

    for (const bench of forCompare) {
        const comp = benchmarks.find(b => b.formattedName.includes(bench) && b.id === summaryName);
        if (!comp) continue;

        const b = [mainBenchmark, comp];
        console.log(__summary(b, `(${main} & ${bench})`, { reverse: reverse }));
    }
}

export default async(summaries, benchmarks, reverse = false) => {
    for (const summaryName of summaries) {
        console.log(kleur.bold(true, `Summary for ${kleur.green(true, summaryName)}`));

        sumForBench(benchmarks, summaryName, 'node', ['deno', 'bun', 'crystal'], reverse);
        sumForBench(benchmarks, summaryName, 'deno', ['node', 'bun', 'crystal'], reverse);
        sumForBench(benchmarks, summaryName, 'bun', ['node', 'deno', 'crystal'], reverse);
        sumForBench(benchmarks, summaryName, 'crystal', ['node', 'deno', 'bun'], reverse);

        // All
        console.log(__summary(benchmarks.filter(b => b.id === summaryName), '(all)', { reverse: reverse }));
    }
}

export function __summary(benchmarks, type = '(all)', { colors = true, reverse = false } = {}) {
    if (reverse) {
        benchmarks = benchmarks.filter(b => !b.error);
        benchmarks.sort((a, b) => b.stats.avg - a.stats.avg);
        const baseline = benchmarks.find(b => b.baseline) || benchmarks[0];
      
        return kleur.bold(colors, type) + ((null == baseline.group || baseline.group.startsWith?.('$mitata_group')) ? '' : kleur.gray(colors, ` for ${baseline.group}`))
          + `\n  ${kleur.bold(colors, kleur.cyan(colors, baseline.formattedName))}`
      
          + benchmarks.filter(b => b !== baseline).map(b => {
            const diff = Number((1 / baseline.stats.avg * b.stats.avg).toFixed(2));
            const inv_diff = Number((1 / b.stats.avg * baseline.stats.avg).toFixed(2));
            return `\n   ${kleur[1 < diff ? 'red' : 'green'](colors, 1 <= diff ? diff : inv_diff)}x ${1 < diff ? 'slower' : 'faster'} than ${kleur.bold(colors, kleur.cyan(colors, b.formattedName))}`;
          }).join('');
    } else {
        benchmarks = benchmarks.filter(b => !b.error);
        benchmarks.sort((a, b) => a.stats.avg - b.stats.avg);
        const baseline = benchmarks.find(b => b.baseline) || benchmarks[0];
      
        return kleur.bold(colors, type) + ((null == baseline.group || baseline.group.startsWith?.('$mitata_group')) ? '' : kleur.gray(colors, ` for ${baseline.group}`))
          + `\n  ${kleur.bold(colors, kleur.cyan(colors, baseline.formattedName))}`
      
          + benchmarks.filter(b => b !== baseline).map(b => {
            const diff = Number((1 / baseline.stats.avg * b.stats.avg).toFixed(2));
            const inv_diff = Number((1 / b.stats.avg * baseline.stats.avg).toFixed(2));
            return `\n   ${kleur[1 > diff ? 'red' : 'green'](colors, 1 <= diff ? diff : inv_diff)}x ${1 > diff ? 'slower' : 'faster'} than ${kleur.bold(colors, kleur.cyan(colors, b.formattedName))}`;
          }).join('');
    }
  }