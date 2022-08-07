import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

let benchmarks = [];
const findBenchmarks = async(folder) => {
    for await(const file of await (await readdir(folder, { withFileTypes: true })).sort()) {
        if (file.isDirectory() && file.name === 'servers') continue;
        
        if (file.isDirectory()) await findBenchmarks(join(folder, file.name));
        else if (file.name === 'bun.mjs' || file.name === 'custom.mjs') {
            benchmarks.push(folder);
            break;
        }
    };
}

await findBenchmarks(join(__dirname, '..', 'benchmarks'));
export default benchmarks.map(async(benchmark) => {
    return {
        name: benchmark.split('/').pop(),
        path: benchmark,
        groups: [...new Set(JSON.parse(await Bun.file(join(benchmark, 'outputs', 'bun.json')).text()).benchmarks.map(b => b.group))],
        category: benchmark.split('/').slice(0, -1).pop() != 'benchmarks' ? benchmark.split('/').slice(0, -1).pop() : null,
    }
});
