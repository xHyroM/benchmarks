import { br, size } from '../../node_modules/mitata/reporter/table.mjs';
import * as kleur from '../../node_modules/mitata/reporter/clr.mjs';
import { save } from '../../scripts/summary.mjs';

const __dirname = new URL('.', import.meta.url).pathname;
const formatNumber = (number, locale = 'en-us') => {
    return number.toFixed(2).toLocaleString(locale);
}

// From mitata
function runtime() {
    if ('Bun' in globalThis) return 'bun';
    if ('Deno' in globalThis) return 'deno';
    if ('process' in globalThis) return 'node';
    if ('navigator' in globalThis) return 'browser';
  
    return 'unknown';
}
  
function version() {
    return ({
        unknown: () => '',
        browser: () => '',
        node: () => process.version,
        deno: () => Deno.version.deno,
        bun: () => process.versions.bun,
    })[runtime()]();
}
  
function os() {
    return ({
        unknown: () => 'unknown',
        browser: () => 'unknown',
        deno: () => Deno.build.target,
        bun: () => `${process.arch}-${process.platform}`,
        node: () => `${process.arch}-${process.platform}`,
    })[runtime()]();
}

function header({ size, avg = true, min_max = true, percentiles = true }) {
    return 'benchmark'.padEnd(size, ' ')
      + (!avg ? '' : 'time (avg)'.padStart(14, ' '))
      + (!min_max ? '' : '(min … max)'.padStart(24, ' '))
      + (!percentiles ? '' : ` ${'p75'.padStart(9, ' ')} ${'p99'.padStart(9, ' ')}`);
  }

function benchmark(n, b, { size, avg = true, colors = true, min_max = true, percentiles = true }) {
    return n.padEnd(size, ' ')
      + (!avg ? '' : `${kleur.yellow(colors, formatNumber(b.avg))}/rps`.padStart(14 + 10 * colors, ' '))
      + (!min_max ? '' : `(${kleur.cyan(colors, formatNumber(b.min))} … ${kleur.magenta(colors, formatNumber(b.max))})`.padStart(24 + 2 * 10 * colors, ' '))
      + (!percentiles ? '' : ` ${kleur.gray(colors, formatNumber(b.p75)).padStart(9 + 10 * colors, ' ')} ${kleur.gray(colors, formatNumber(b.p99)).padStart(9 + 10 * colors, ' ')}`);
}
// From mitata ^

const args = typeof Deno !== 'undefined' ? Deno.args : process.argv.slice(2);
const parsed = JSON.parse(args[0]);
const rnt = args[1];
const language = args[2];

const benchmarks = [
    {
        name: 'http',
        group: null,
        warmup: true,
        baseline: false,
        async: true,
        stats: {
            avg: parsed.result.rps.mean,
            min: parsed.result.rps.stddev,
            max: parsed.result.rps.max,
            p75: parsed.result.rps.percentiles['75'],
            p99: parsed.result.rps.percentiles['99'],
            p995: parsed.result.rps.percentiles['99'],
        },
        type: 'rps',
    }
];

const opts = {
    colors: true,
    collect: false,
    json: false,
    size: size(benchmarks.map(b => b.name)),
}

console.log(`Runtime: ${rnt}`);
console.log(header(opts));
console.log(br(opts));
for (const b of benchmarks) {
    console.log(benchmark(b.name, b.stats, opts));
}

await save({
    benchmarks,
    runtime: language === 'javascript' ? `${`${rnt} ${version(rnt)}`.trim()} (${os(rnt)})` : `${language.at(0).toUpperCase() + language.slice(1)} ${process.arch}-${process.platform}`,
}, rnt, __dirname, language);
