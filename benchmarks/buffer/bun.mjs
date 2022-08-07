import { bench, group, run } from "mitata";
import { join } from "node:path";
import { save } from "../../scripts/summary.mjs";

const longText = await Bun.file(join(__dirname, "..", "..", "utils", "long-text.txt")).text();
const longTextBuffer = (await Bun.file(join(__dirname, "..", "..", "utils", "long-text-buffer.txt")).text()).split('\n');

group("encode - short data", () => {
    bench("Buffer.from('hello').toString('ascii')", () => Buffer.from("hello").toString("ascii"));
    bench("Buffer.from('hello').toString('utf8')", () => Buffer.from("hello").toString("utf8"));
    bench("Buffer.from('hello').toString('utf16le')", () => Buffer.from("hello").toString("utf16le"));
    bench("Buffer.from('hello').toString('ucs2')", () => Buffer.from("hello").toString("ucs2"));
    bench("Buffer.from('hello').toString('base64')", () => Buffer.from("hello").toString("base64"));
    bench("Buffer.from('hello').toString('base64url')", () => Buffer.from("hello").toString("base64url"));
    bench("Buffer.from('hello').toString('latin1')", () => Buffer.from("hello").toString("latin1"));
    bench("Buffer.from('hello').toString('binary')", () => Buffer.from("hello").toString("binary"));
    bench("Buffer.from('hello').toString('hex')", () => Buffer.from("hello").toString("hex"));
});

group("encode - long data", () => {
    bench("Buffer.from(longText).toString('ascii')", () => Buffer.from(longText).toString("ascii"));
    bench("Buffer.from(longText).toString('utf8')", () => Buffer.from(longText).toString("utf8"));
    bench("Buffer.from(longText).toString('utf16le')", () => Buffer.from(longText).toString("utf16le"));
    bench("Buffer.from(longText).toString('ucs2')", () => Buffer.from(longText).toString("ucs2"));
    bench("Buffer.from(longText).toString('base64')", () => Buffer.from(longText).toString("base64"));
    bench("Buffer.from(longText).toString('base64url')", () => Buffer.from(longText).toString("base64url"));
    bench("Buffer.from(longText).toString('latin1')", () => Buffer.from(longText).toString("latin1"));
    bench("Buffer.from(longText).toString('binary')", () => Buffer.from(longText).toString("binary"));
    bench("Buffer.from(longText).toString('hex')", () => Buffer.from(longText).toString("hex"));
});

group("decode - short data", () => {
    bench("Buffer.from('hello', 'ascii').toString()", () => Buffer.from("hello", "ascii").toString());
    bench("Buffer.from('hello', 'utf8').toString()", () => Buffer.from("hello", "utf-8").toString());
    bench("Buffer.from('敨汬', 'utf16le').toString()", () => Buffer.from("敨汬", "utf16le").toString());
    bench("Buffer.from('敨汬', 'ucs2').toString()", () => Buffer.from("敨汬", "ucs2").toString());
    bench("Buffer.from('aGVsbG8=', 'base64').toString()", () => Buffer.from("aGVsbG8=", "base64").toString());
    bench("Buffer.from('aGVsbG8', 'base64url').toString()", () => Buffer.from("aGVsbG8", "base64url").toString());
    bench("Buffer.from('hello', 'latin1').toString()", () => Buffer.from("hello", "latin1").toString());
    bench("Buffer.from('hello', 'binary').toString()", () => Buffer.from("hello", "binary").toString());
    bench("Buffer.from('68656c6c6f', 'hex').toString()", () => Buffer.from("68656c6c6f", "hex").toString());
});

group("decode - long data", () => {
    bench("Buffer.from(longText, 'ascii').toString()", () => Buffer.from(longText, "ascii").toString());
    bench("Buffer.from(longText, 'utf8').toString()", () => Buffer.from(longText, "utf-8").toString());
    bench("Buffer.from(longTextBuffer4, 'utf16le').toString()", () => Buffer.from(longTextBuffer[4], "utf16le").toString());
    bench("Buffer.from(longTextBuffer3, 'ucs2').toString()", () => Buffer.from(longTextBuffer[3], "ucs2").toString());
    bench("Buffer.from(longTextBuffer0, 'base64').toString()", () => Buffer.from(longTextBuffer[0], "base64").toString());
    bench("Buffer.from(longTextBuffer1, 'base64url').toString()", () => Buffer.from(longTextBuffer[1], "base64url").toString());
    bench("Buffer.from(longText, 'latin1').toString()", () => Buffer.from(longText, "latin1").toString());
    bench("Buffer.from(longText, 'binary').toString()", () => Buffer.from(longText, "binary").toString());
    bench("Buffer.from(longTextBuffer2, 'hex').toString()", () => Buffer.from(longTextBuffer[2], "hex").toString());
});

await save(await run(), "bun", __dirname, 'javascript', {
    encode: (name) => name.match(/\.toString\('[aA-zZ0-9]+'\)/)?.[0] || name,
    decode: (name) => name.match(/\.from\('(.*?)+'\, '[aA-zZ0-9]+'\)/)?.[0] || name,
});
