import summary from '../../scripts/summary.mjs';
import { join } from 'node:path';

const outputBun = JSON.parse(await Bun.file(join(__dirname, 'outputs', 'bun.json')).text()).benchmarks;
const outputNode = JSON.parse(await Bun.file(join(__dirname, 'outputs', 'node.json')).text()).benchmarks;
const outputDeno = JSON.parse(await Bun.file(join(__dirname, 'outputs', 'deno.json')).text()).benchmarks;
const outputCrystal = JSON.parse(await Bun.file(join(__dirname, 'outputs', 'crystal.json')).text()).benchmarks;

await summary(
    [
        'http',
    ], [].concat(outputBun, outputNode, outputDeno, outputCrystal), true
);
