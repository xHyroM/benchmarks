import { benchmark, br, header, size } from '../../node_modules/mitata/reporter/table.mjs';
import { save } from '../../scripts/summary.mjs';

const __dirname = new URL('.', import.meta.url).pathname;

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
// From mitata ^

const args = typeof Deno !== 'undefined' ? Deno.args : process.argv.slice(2);
const parsed = JSON.parse(args[0]);
const rnt = args[1];
console.log(parsed);
// WAIT FOR https://github.com/hatoo/oha/issues/177
const benchmarks = [
    {
        name: 'http',
        group: null,
        warmup: true,
        baseline: false,
        async: true,
        stats: {
            avg: parsed.summary.requestsPerSec,
            min: parsed.summary.requestsPerSec,
            max: parsed.summary.requestsPerSec,
            p75: parsed.summary.requestsPerSec,
            p99: parsed.summary.requestsPerSec,
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
    runtime: `${`${rnt} ${version(rnt)}`.trim()} (${os(rnt)})`
}, rnt, __dirname);
