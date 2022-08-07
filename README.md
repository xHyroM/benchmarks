*Ran on Intel(R) Core(TM) i5-9300HF CPU @ 2.40GHz*

## Table Of Contents

- Benchmarks
   - [sqlite](#sqlite)
   - [json](#json)
   - [buffer](#buffer)
     - [encode - short data](#encode---short-data)
     - [encode - long data](#encode---long-data)
     - [decode - short data](#decode---short-data)
     - [decode - long data](#decode---long-data)
   - [nanoid](#nanoid) (3rd-packages)
   - [http](#http)
   - [console](#console)

## Sqlite

### SELECT * FROM "Orders"
| Language   | Runtime                                | Benchmark              | Average        | p75      | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------- | -------------- | -------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders" | 28 ms/iter     | 28.34 ms | 29.55 ms  | 26.41 ms  | 29.55 ms  |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Orders" | 91.91 ms/iter  | 90.83 ms | 111.18 ms | 89.5 ms   | 111.18 ms |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders" | 178.46 ms/iter | 181.5 ms | 187.37 ms | 173.67 ms | 187.37 ms |


### SELECT * FROM "Products"
| Language   | Runtime                                | Benchmark                | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------ | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products" | 76.39 µs/iter  | 75.67 µs  | 98.96 µs  | 71.45 µs  | 766.75 µs |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Products" | 279.62 µs/iter | 275.79 µs | 499.82 µs | 271.38 µs | 595.15 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products" | 334.24 µs/iter | 308.86 µs | 589.29 µs | 294.21 µs | 3.79 ms   |


### SELECT * FROM "Suppliers"
| Language   | Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 49.56 µs/iter  | 55.63 µs  | 90.28 µs  | 42.4 µs   | 496.45 µs |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 151.57 µs/iter | 141.38 µs | 253.82 µs | 131.74 µs | 746.89 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 321.49 µs/iter | 283.91 µs | 555.1 µs  | 261.64 µs | 6.8 ms    |


### SELECT * FROM "Employees"
| Language   | Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 48.62 µs/iter  | 55.43 µs  | 97.18 µs  | 35.33 µs  | 1.11 ms   |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 99.47 µs/iter  | 94.18 µs  | 192.11 µs | 84.59 µs  | 639.81 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 284.74 µs/iter | 249.91 µs | 1.32 ms   | 212.26 µs | 25.88 ms  |


### SELECT * FROM "Customers"
| Language   | Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 149 µs/iter    | 144.04 µs | 259.32 µs | 128.78 µs | 730.91 µs |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 437.21 µs/iter | 408.4 µs  | 741.83 µs | 390.23 µs | 1.56 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 787.6 µs/iter  | 695.96 µs | 3.85 ms   | 662.24 µs | 6.92 ms   |


### everything
| Language   | Runtime                                | Benchmark                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Employees" | 48.62 µs/iter  | 55.43 µs  | 97.18 µs  | 35.33 µs  | 1.11 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Suppliers" | 49.56 µs/iter  | 55.63 µs  | 90.28 µs  | 42.4 µs   | 496.45 µs |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Products"  | 76.39 µs/iter  | 75.67 µs  | 98.96 µs  | 71.45 µs  | 766.75 µs |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Employees" | 99.47 µs/iter  | 94.18 µs  | 192.11 µs | 84.59 µs  | 639.81 µs |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Customers" | 149 µs/iter    | 144.04 µs | 259.32 µs | 128.78 µs | 730.91 µs |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Suppliers" | 151.57 µs/iter | 141.38 µs | 253.82 µs | 131.74 µs | 746.89 µs |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Products"  | 279.62 µs/iter | 275.79 µs | 499.82 µs | 271.38 µs | 595.15 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Employees" | 284.74 µs/iter | 249.91 µs | 1.32 ms   | 212.26 µs | 25.88 ms  |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Suppliers" | 321.49 µs/iter | 283.91 µs | 555.1 µs  | 261.64 µs | 6.8 ms    |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Products"  | 334.24 µs/iter | 308.86 µs | 589.29 µs | 294.21 µs | 3.79 ms   |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Customers" | 437.21 µs/iter | 408.4 µs  | 741.83 µs | 390.23 µs | 1.56 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Customers" | 787.6 µs/iter  | 695.96 µs | 3.85 ms   | 662.24 µs | 6.92 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | SELECT * FROM "Orders"    | 28 ms/iter     | 28.34 ms  | 29.55 ms  | 26.41 ms  | 29.55 ms  |
| javascript | node v18.7.0 (x64-linux)               | SELECT * FROM "Orders"    | 91.91 ms/iter  | 90.83 ms  | 111.18 ms | 89.5 ms   | 111.18 ms |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | SELECT * FROM "Orders"    | 178.46 ms/iter | 181.5 ms  | 187.37 ms | 173.67 ms | 187.37 ms |

## Json

### JSON.parse('{"hello": "world"}')
| Language   | Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 118.78 ns/iter | 113.76 ns | 230.16 ns | 110.31 ns | 258.77 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 239.51 ns/iter | 238.18 ns | 281.62 ns | 235.31 ns | 347.39 ns |
| javascript | node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 325.07 ns/iter | 288.19 ns | 925.46 ns | 274.22 ns | 1.26 µs   |


### JSON.stringify({hello: "world"})
| Language   | Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 63.85 ns/iter  | 63.92 ns  | 91.67 ns  | 51.54 ns  | 118.31 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 183.62 ns/iter | 180.38 ns | 340.96 ns | 174.36 ns | 350.88 ns |
| javascript | node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 223.7 ns/iter  | 221.58 ns | 414.4 ns  | 210.84 ns | 442.17 ns |


### everything
| Language   | Runtime                                | Benchmark                        | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | JSON.stringify({hello: "world"}) | 63.85 ns/iter  | 63.92 ns  | 91.67 ns  | 51.54 ns  | 118.31 ns |
| javascript | bun 0.1.7 (x64-linux)                  | JSON.parse('{"hello": "world"}') | 118.78 ns/iter | 113.76 ns | 230.16 ns | 110.31 ns | 258.77 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.stringify({hello: "world"}) | 183.62 ns/iter | 180.38 ns | 340.96 ns | 174.36 ns | 350.88 ns |
| javascript | node v18.7.0 (x64-linux)               | JSON.stringify({hello: "world"}) | 223.7 ns/iter  | 221.58 ns | 414.4 ns  | 210.84 ns | 442.17 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | JSON.parse('{"hello": "world"}') | 239.51 ns/iter | 238.18 ns | 281.62 ns | 235.31 ns | 347.39 ns |
| javascript | node v18.7.0 (x64-linux)               | JSON.parse('{"hello": "world"}') | 325.07 ns/iter | 288.19 ns | 925.46 ns | 274.22 ns | 1.26 µs   |

## Buffer

### encode - short data

#### Buffer.from('hello').toString('ascii')
| Language   | Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii') | 350.9 ns/iter  | 354.53 ns | 452.81 ns | 336.51 ns | 501.82 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii') | 714.74 ns/iter | 635.8 ns  | 1.29 µs   | 607.24 ns | 1.29 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii') | 958.01 ns/iter | 953.44 ns | 1.86 µs   | 895.64 ns | 1.86 µs   |


#### Buffer.from('hello').toString('utf8')
| Language   | Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8') | 388.89 ns/iter | 384.7 ns  | 629.89 ns | 356 ns    | 631.39 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8') | 710.47 ns/iter | 618.21 ns | 3.13 µs   | 587.82 ns | 3.13 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8') | 975.29 ns/iter | 979.67 ns | 1.28 µs   | 935.08 ns | 1.28 µs   |


#### Buffer.from('hello').toString('utf16le')
| Language   | Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le') | 365.12 ns/iter | 367.68 ns | 430.11 ns | 351.11 ns | 434.69 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le') | 744.72 ns/iter | 695.87 ns | 1.3 µs    | 646.02 ns | 1.3 µs    |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le') | 916.06 ns/iter | 921.72 ns | 1.11 µs   | 885.91 ns | 1.11 µs   |


#### Buffer.from('hello').toString('ucs2')
| Language   | Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2') | 363.73 ns/iter | 365.67 ns | 562.29 ns | 348.1 ns  | 585.54 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2') | 818.73 ns/iter | 1.11 µs   | 1.92 µs   | 621.91 ns | 1.92 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2') | 917.41 ns/iter | 918.54 ns | 1.4 µs    | 886.43 ns | 1.4 µs    |


#### Buffer.from('hello').toString('base64')
| Language   | Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64') | 412.63 ns/iter | 394.8 ns  | 728.21 ns | 371.27 ns | 736.58 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64') | 716.4 ns/iter  | 665.7 ns  | 1.34 µs   | 627.99 ns | 1.34 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64') | 992.23 ns/iter | 969.55 ns | 1.64 µs   | 937.45 ns | 1.64 µs   |


#### Buffer.from('hello').toString('base64url')
| Language   | Runtime                                | Benchmark                                  | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url') | 409.96 ns/iter | 389.37 ns | 669.83 ns | 360.25 ns | 685.59 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url') | 787.9 ns/iter  | 701.19 ns | 1.63 µs   | 644.29 ns | 1.63 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url') | 1.17 µs/iter   | 1.17 µs   | 1.64 µs   | 1.14 µs   | 1.64 µs   |


#### Buffer.from('hello').toString('latin1')
| Language   | Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1') | 355.62 ns/iter | 360.27 ns | 420.62 ns | 335.98 ns | 535.72 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1') | 702.42 ns/iter | 645.64 ns | 1.24 µs   | 607.11 ns | 1.24 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1') | 997.18 ns/iter | 957.85 ns | 2.27 µs   | 914.73 ns | 2.27 µs   |


#### Buffer.from('hello').toString('binary')
| Language   | Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary') | 365.54 ns/iter | 369.54 ns | 540.84 ns | 336.6 ns  | 542.33 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary') | 714.19 ns/iter | 647.12 ns | 1.86 µs   | 609.26 ns | 1.86 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary') | 949.12 ns/iter | 956.85 ns | 1.24 µs   | 911.2 ns  | 1.24 µs   |


#### Buffer.from('hello').toString('hex')
| Language   | Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex') | 405.23 ns/iter | 391.32 ns | 597.99 ns | 355.65 ns | 718.15 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex') | 773.31 ns/iter | 737.37 ns | 1.82 µs   | 626.49 ns | 1.82 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex') | 945.31 ns/iter | 952.17 ns | 1.03 µs   | 912.15 ns | 1.03 µs   |


### encode - long data

#### Buffer.from(longText).toString('ascii')
| Language   | Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max      |
| ---------- | -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | -------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii') | 10.77 µs/iter  | 10.17 µs  | 24.54 µs  | 4.75 µs   | 1.22 ms  |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii') | 57.78 µs/iter  | 55.94 µs  | 132.01 µs | 54.45 µs  | 229.8 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii') | 544.27 µs/iter | 600.91 µs | 709.65 µs | 488.66 µs | 1.01 ms  |


#### Buffer.from(longText).toString('utf8')
| Language   | Runtime                                | Benchmark                              | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8') | 13.58 µs/iter  | 13.35 µs  | 31.89 µs  | 6.95 µs   | 3.34 ms   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8') | 56.97 µs/iter  | 55.05 µs  | 124.06 µs | 53.5 µs   | 271.74 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8') | 832.51 µs/iter | 778.29 µs | 1.56 ms   | 732.78 µs | 1.71 ms   |


#### Buffer.from(longText).toString('utf16le')
| Language   | Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le') | 11.59 µs/iter  | 11.83 µs  | 20.94 µs  | 6.69 µs   | 1.09 ms   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le') | 62.59 µs/iter  | 66.07 µs  | 179.22 µs | 52.45 µs  | 438.89 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le') | 517.16 µs/iter | 477.54 µs | 1.14 ms   | 453.45 µs | 1.34 ms   |


#### Buffer.from(longText).toString('ucs2')
| Language   | Runtime                                | Benchmark                              | Average       | p75       | p99       | Min       | Max     |
| ---------- | -------------------------------------- | -------------------------------------- | ------------- | --------- | --------- | --------- | ------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2') | 11 µs/iter    | 10.34 µs  | 21.74 µs  | 6.36 µs   | 2.95 ms |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2') | 61.55 µs/iter | 60.11 µs  | 170.16 µs | 52.49 µs  | 1.55 ms |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2') | 515.6 µs/iter | 479.81 µs | 1.22 ms   | 450.83 µs | 1.48 ms |


#### Buffer.from(longText).toString('base64')
| Language   | Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64') | 13.17 µs/iter  | 13.01 µs  | 26.12 µs  | 6.42 µs   | 879.91 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64') | 61.3 µs/iter   | 58.54 µs  | 155.88 µs | 55.13 µs  | 282.56 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64') | 652.94 µs/iter | 612.31 µs | 1.26 ms   | 583.91 µs | 1.51 ms   |


#### Buffer.from(longText).toString('base64url')
| Language   | Runtime                                | Benchmark                                   | Average       | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url') | 38.34 µs/iter | 32.23 µs  | 208.95 µs | 28.72 µs  | 1.04 ms   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url') | 84.32 µs/iter | 81.25 µs  | 179.2 µs  | 79.55 µs  | 373.72 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url') | 1.05 ms/iter  | 867.29 µs | 2.78 ms   | 836.67 µs | 8.76 ms   |


#### Buffer.from(longText).toString('latin1')
| Language   | Runtime                                | Benchmark                                | Average       | p75      | p99      | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------- | ------------- | -------- | -------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1') | 19.36 µs/iter | 19.43 µs | 46.09 µs | 6.23 µs   | 1.1 ms    |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1') | 56.31 µs/iter | 54.09 µs | 93.88 µs | 52.53 µs  | 307.99 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1') | 549.5 µs/iter | 515.7 µs | 1.2 ms   | 494.42 µs | 1.35 ms   |


#### Buffer.from(longText).toString('binary')
| Language   | Runtime                                | Benchmark                                | Average       | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------- | ------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary') | 16.64 µs/iter | 15.43 µs  | 39.23 µs  | 6.15 µs   | 925.32 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary') | 60.03 µs/iter | 55.55 µs  | 102.98 µs | 52.69 µs  | 391.39 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary') | 553.6 µs/iter | 517.01 µs | 1.26 ms   | 493.18 µs | 1.87 ms   |


#### Buffer.from(longText).toString('hex')
| Language   | Runtime                                | Benchmark                             | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex') | 103.59 µs/iter | 98.6 µs   | 232.4 µs  | 90.53 µs  | 501.39 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex') | 205.35 µs/iter | 194.69 µs | 366.32 µs | 188.22 µs | 933.86 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex') | 592.52 µs/iter | 544.44 µs | 1.28 ms   | 518.32 µs | 1.51 ms   |


### decode - short data

#### Buffer.from('hello', 'ascii').toString()
| Language   | Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString() | 368.22 ns/iter | 396.58 ns | 531.53 ns | 304.62 ns | 541.58 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString() | 487.28 ns/iter | 472 ns    | 896.85 ns | 458.37 ns | 995.13 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString() | 714.8 ns/iter  | 672.48 ns | 1.54 µs   | 607.38 ns | 1.54 µs   |


#### Buffer.from('hello', 'utf8').toString()
| Language   | Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString() | 421.06 ns/iter | 411.83 ns | 673.83 ns | 371.82 ns | 674.71 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString() | 681.61 ns/iter | 614.57 ns | 1.16 µs   | 591.64 ns | 1.16 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString() | 1.02 µs/iter   | 1.08 µs   | 1.15 µs   | 905.65 ns | 1.15 µs   |


#### Buffer.from('敨汬', 'utf16le').toString()
| Language   | Runtime                                | Benchmark                               | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | --------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString() | 339.33 ns/iter | 325.59 ns | 678.49 ns | 305.05 ns | 932.15 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString() | 471.82 ns/iter | 472.18 ns | 605.59 ns | 459.54 ns | 642.01 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString() | 673.25 ns/iter | 621.3 ns  | 1.12 µs   | 604.9 ns  | 1.12 µs   |


#### Buffer.from('敨汬', 'ucs2').toString()
| Language   | Runtime                                | Benchmark                            | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------ | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString() | 331.63 ns/iter | 326.04 ns | 514.5 ns  | 305.19 ns | 521.4 ns  |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString() | 461.32 ns/iter | 465.25 ns | 506.59 ns | 452.19 ns | 536.45 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString() | 648.36 ns/iter | 600.63 ns | 1.08 µs   | 577.38 ns | 1.08 µs   |


#### Buffer.from('aGVsbG8=', 'base64').toString()
| Language   | Runtime                                | Benchmark                                    | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString() | 455.02 ns/iter | 464.34 ns | 702.54 ns | 369.87 ns | 733.07 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString() | 718.42 ns/iter | 685.36 ns | 1.35 µs   | 613.89 ns | 1.35 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString() | 1.21 µs/iter   | 1.17 µs   | 2.12 µs   | 1.12 µs   | 2.12 µs   |


#### Buffer.from('aGVsbG8', 'base64url').toString()
| Language   | Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString() | 403.36 ns/iter | 428.91 ns | 481.95 ns | 364.89 ns | 611.75 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString() | 799.52 ns/iter | 762.79 ns | 1.43 µs   | 670.41 ns | 1.43 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString() | 1.37 µs/iter   | 1.37 µs   | 1.49 µs   | 1.35 µs   | 1.49 µs   |


#### Buffer.from('hello', 'latin1').toString()
| Language   | Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString() | 357.37 ns/iter | 363.38 ns | 554.46 ns | 305.15 ns | 579.59 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString() | 486.88 ns/iter | 490.58 ns | 524.87 ns | 476.9 ns  | 594.46 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString() | 702.67 ns/iter | 650.39 ns | 1.67 µs   | 605.3 ns  | 1.67 µs   |


#### Buffer.from('hello', 'binary').toString()
| Language   | Runtime                                | Benchmark                                 | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ----------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString() | 325.81 ns/iter | 331.52 ns | 447.33 ns | 305.08 ns | 454.11 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString() | 487.86 ns/iter | 492.12 ns | 514.69 ns | 478.92 ns | 552.2 ns  |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString() | 674.52 ns/iter | 623.91 ns | 1.07 µs   | 609.54 ns | 1.07 µs   |


#### Buffer.from('68656c6c6f', 'hex').toString()
| Language   | Runtime                                | Benchmark                                   | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString() | 390.37 ns/iter | 398.74 ns | 577.69 ns | 351.74 ns | 641.72 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString() | 691.25 ns/iter | 640.77 ns | 2.2 µs    | 584.77 ns | 2.2 µs    |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString() | 840.02 ns/iter | 841.94 ns | 967.34 ns | 821.03 ns | 967.34 ns |


### decode - long data

#### Buffer.from(longText, 'ascii').toString()
| Language   | Runtime                                | Benchmark                                 | Average        | p75       | p99      | Min       | Max      |
| ---------- | -------------------------------------- | ----------------------------------------- | -------------- | --------- | -------- | --------- | -------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString() | 8.92 µs/iter   | 9.54 µs   | 10.56 µs | 7.95 µs   | 10.56 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString() | 9.54 µs/iter   | 8.22 µs   | 23.43 µs | 5.8 µs    | 1.16 ms  |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString() | 945.08 µs/iter | 864.12 µs | 2.54 ms  | 831.66 µs | 4.64 ms  |


#### Buffer.from(longText, 'utf8').toString()
| Language   | Runtime                                | Benchmark                                | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString() | 11.94 µs/iter  | 10.49 µs  | 26.63 µs  | 7.32 µs   | 2.86 ms   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString() | 60.53 µs/iter  | 56.22 µs  | 106.78 µs | 54.13 µs  | 457.48 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString() | 820.28 µs/iter | 765.55 µs | 2.2 ms    | 734.94 µs | 2.45 ms   |


#### Buffer.from(longTextBuffer4, 'utf16le').toString()
| Language   | Runtime                                | Benchmark                                          | Average       | p75      | p99      | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------------------------- | ------------- | -------- | -------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString() | 1.08 µs/iter  | 1.11 µs  | 1.45 µs  | 971.88 ns | 1.45 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString() | 9.89 µs/iter  | 8.65 µs  | 22.55 µs | 5.97 µs   | 976.53 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString() | 33.13 µs/iter | 32.63 µs | 52.6 µs  | 30.57 µs  | 236.33 µs |


#### Buffer.from(longTextBuffer3, 'ucs2').toString()
| Language   | Runtime                                | Benchmark                                       | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ----------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString() | 114.42 ns/iter | 112.47 ns | 212.44 ns | 104.52 ns | 235.96 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString() | 297.4 ns/iter  | 291.68 ns | 513.32 ns | 280.97 ns | 514.05 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString() | 10.32 µs/iter  | 9.57 µs   | 24.68 µs  | 5.95 µs   | 1.44 ms   |


#### Buffer.from(longTextBuffer0, 'base64').toString()
| Language   | Runtime                                | Benchmark                                         | Average       | p75      | p99      | Min      | Max       |
| ---------- | -------------------------------------- | ------------------------------------------------- | ------------- | -------- | -------- | -------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString() | 3.12 µs/iter  | 3.11 µs  | 4.23 µs  | 2.83 µs  | 4.23 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString() | 13.32 µs/iter | 13.08 µs | 24.65 µs | 12.28 µs | 541.13 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString() | 20.19 µs/iter | 18.41 µs | 34.37 µs | 16.25 µs | 828.8 µs  |


#### Buffer.from(longTextBuffer1, 'base64url').toString()
| Language   | Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min      | Max       |
| ---------- | -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | -------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 101.22 ns/iter | 103.57 ns | 124.76 ns | 94.93 ns | 179.17 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.13 µs/iter   | 1.14 µs   | 1.26 µs   | 1.1 µs   | 1.26 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 94.56 µs/iter  | 93.44 µs  | 142.91 µs | 89.11 µs | 804.48 µs |


#### Buffer.from(longText, 'latin1').toString()
| Language   | Runtime                                | Benchmark                                  | Average        | p75       | p99      | Min       | Max     |
| ---------- | -------------------------------------- | ------------------------------------------ | -------------- | --------- | -------- | --------- | ------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString() | 8.3 µs/iter    | 8.57 µs   | 9.15 µs  | 7.87 µs   | 9.15 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString() | 10.72 µs/iter  | 9.78 µs   | 32.02 µs | 5.89 µs   | 1.24 ms |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString() | 969.85 µs/iter | 894.09 µs | 2.57 ms  | 861.05 µs | 2.82 ms |


#### Buffer.from(longText, 'binary').toString()
| Language   | Runtime                                | Benchmark                                  | Average      | p75      | p99      | Min       | Max     |
| ---------- | -------------------------------------- | ------------------------------------------ | ------------ | -------- | -------- | --------- | ------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString() | 8.4 µs/iter  | 8.64 µs  | 9.28 µs  | 7.89 µs   | 9.28 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString() | 11.3 µs/iter | 10.24 µs | 32.91 µs | 5.95 µs   | 7.85 ms |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString() | 1.03 ms/iter | 905.1 µs | 3.41 ms  | 860.72 µs | 6.15 ms |


#### Buffer.from(longTextBuffer2, 'hex').toString()
| Language   | Runtime                                | Benchmark                                      | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString() | 672.81 ns/iter | 679.96 ns | 891.76 ns | 652.56 ns | 891.76 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString() | 2.78 µs/iter   | 3 µs      | 3.48 µs   | 2.06 µs   | 3.48 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString() | 39.73 µs/iter  | 36.54 µs  | 69.11 µs  | 34.96 µs  | 1.01 ms   |


#### everything
| Language   | Runtime                                | Benchmark                                            | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------------------------------------------------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer1, 'base64url').toString() | 101.22 ns/iter | 103.57 ns | 124.76 ns | 94.93 ns  | 179.17 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 114.42 ns/iter | 112.47 ns | 212.44 ns | 104.52 ns | 235.96 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 297.4 ns/iter  | 291.68 ns | 513.32 ns | 280.97 ns | 514.05 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'binary').toString()            | 325.81 ns/iter | 331.52 ns | 447.33 ns | 305.08 ns | 454.11 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'ucs2').toString()                 | 331.63 ns/iter | 326.04 ns | 514.5 ns  | 305.19 ns | 521.4 ns  |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('敨汬', 'utf16le').toString()              | 339.33 ns/iter | 325.59 ns | 678.49 ns | 305.05 ns | 932.15 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ascii')               | 350.9 ns/iter  | 354.53 ns | 452.81 ns | 336.51 ns | 501.82 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('latin1')              | 355.62 ns/iter | 360.27 ns | 420.62 ns | 335.98 ns | 535.72 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'latin1').toString()            | 357.37 ns/iter | 363.38 ns | 554.46 ns | 305.15 ns | 579.59 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('ucs2')                | 363.73 ns/iter | 365.67 ns | 562.29 ns | 348.1 ns  | 585.54 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf16le')             | 365.12 ns/iter | 367.68 ns | 430.11 ns | 351.11 ns | 434.69 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('binary')              | 365.54 ns/iter | 369.54 ns | 540.84 ns | 336.6 ns  | 542.33 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'ascii').toString()             | 368.22 ns/iter | 396.58 ns | 531.53 ns | 304.62 ns | 541.58 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('utf8')                | 388.89 ns/iter | 384.7 ns  | 629.89 ns | 356 ns    | 631.39 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('68656c6c6f', 'hex').toString()          | 390.37 ns/iter | 398.74 ns | 577.69 ns | 351.74 ns | 641.72 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8', 'base64url').toString()       | 403.36 ns/iter | 428.91 ns | 481.95 ns | 364.89 ns | 611.75 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('hex')                 | 405.23 ns/iter | 391.32 ns | 597.99 ns | 355.65 ns | 718.15 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64url')           | 409.96 ns/iter | 389.37 ns | 669.83 ns | 360.25 ns | 685.59 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello').toString('base64')              | 412.63 ns/iter | 394.8 ns  | 728.21 ns | 371.27 ns | 736.58 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('hello', 'utf8').toString()              | 421.06 ns/iter | 411.83 ns | 673.83 ns | 371.82 ns | 674.71 ns |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from('aGVsbG8=', 'base64').toString()         | 455.02 ns/iter | 464.34 ns | 702.54 ns | 369.87 ns | 733.07 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'ucs2').toString()                 | 461.32 ns/iter | 465.25 ns | 506.59 ns | 452.19 ns | 536.45 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('敨汬', 'utf16le').toString()              | 471.82 ns/iter | 472.18 ns | 605.59 ns | 459.54 ns | 642.01 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'latin1').toString()            | 486.88 ns/iter | 490.58 ns | 524.87 ns | 476.9 ns  | 594.46 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'ascii').toString()             | 487.28 ns/iter | 472 ns    | 896.85 ns | 458.37 ns | 995.13 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'binary').toString()            | 487.86 ns/iter | 492.12 ns | 514.69 ns | 478.92 ns | 552.2 ns  |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'ucs2').toString()                 | 648.36 ns/iter | 600.63 ns | 1.08 µs   | 577.38 ns | 1.08 µs   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer2, 'hex').toString()       | 672.81 ns/iter | 679.96 ns | 891.76 ns | 652.56 ns | 891.76 ns |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('敨汬', 'utf16le').toString()              | 673.25 ns/iter | 621.3 ns  | 1.12 µs   | 604.9 ns  | 1.12 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'binary').toString()            | 674.52 ns/iter | 623.91 ns | 1.07 µs   | 609.54 ns | 1.07 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'utf8').toString()              | 681.61 ns/iter | 614.57 ns | 1.16 µs   | 591.64 ns | 1.16 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('68656c6c6f', 'hex').toString()          | 691.25 ns/iter | 640.77 ns | 2.2 µs    | 584.77 ns | 2.2 µs    |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('latin1')              | 702.42 ns/iter | 645.64 ns | 1.24 µs   | 607.11 ns | 1.24 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'latin1').toString()            | 702.67 ns/iter | 650.39 ns | 1.67 µs   | 605.3 ns  | 1.67 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf8')                | 710.47 ns/iter | 618.21 ns | 3.13 µs   | 587.82 ns | 3.13 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('binary')              | 714.19 ns/iter | 647.12 ns | 1.86 µs   | 609.26 ns | 1.86 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ascii')               | 714.74 ns/iter | 635.8 ns  | 1.29 µs   | 607.24 ns | 1.29 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello', 'ascii').toString()             | 714.8 ns/iter  | 672.48 ns | 1.54 µs   | 607.38 ns | 1.54 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64')              | 716.4 ns/iter  | 665.7 ns  | 1.34 µs   | 627.99 ns | 1.34 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8=', 'base64').toString()         | 718.42 ns/iter | 685.36 ns | 1.35 µs   | 613.89 ns | 1.35 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('utf16le')             | 744.72 ns/iter | 695.87 ns | 1.3 µs    | 646.02 ns | 1.3 µs    |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('hex')                 | 773.31 ns/iter | 737.37 ns | 1.82 µs   | 626.49 ns | 1.82 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('base64url')           | 787.9 ns/iter  | 701.19 ns | 1.63 µs   | 644.29 ns | 1.63 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('aGVsbG8', 'base64url').toString()       | 799.52 ns/iter | 762.79 ns | 1.43 µs   | 670.41 ns | 1.43 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from('hello').toString('ucs2')                | 818.73 ns/iter | 1.11 µs   | 1.92 µs   | 621.91 ns | 1.92 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('68656c6c6f', 'hex').toString()          | 840.02 ns/iter | 841.94 ns | 967.34 ns | 821.03 ns | 967.34 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf16le')             | 916.06 ns/iter | 921.72 ns | 1.11 µs   | 885.91 ns | 1.11 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ucs2')                | 917.41 ns/iter | 918.54 ns | 1.4 µs    | 886.43 ns | 1.4 µs    |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('hex')                 | 945.31 ns/iter | 952.17 ns | 1.03 µs   | 912.15 ns | 1.03 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('binary')              | 949.12 ns/iter | 956.85 ns | 1.24 µs   | 911.2 ns  | 1.24 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('ascii')               | 958.01 ns/iter | 953.44 ns | 1.86 µs   | 895.64 ns | 1.86 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('utf8')                | 975.29 ns/iter | 979.67 ns | 1.28 µs   | 935.08 ns | 1.28 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64')              | 992.23 ns/iter | 969.55 ns | 1.64 µs   | 937.45 ns | 1.64 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('latin1')              | 997.18 ns/iter | 957.85 ns | 2.27 µs   | 914.73 ns | 2.27 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello', 'utf8').toString()              | 1.02 µs/iter   | 1.08 µs   | 1.15 µs   | 905.65 ns | 1.15 µs   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 1.08 µs/iter   | 1.11 µs   | 1.45 µs   | 971.88 ns | 1.45 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer1, 'base64url').toString() | 1.13 µs/iter   | 1.14 µs   | 1.26 µs   | 1.1 µs    | 1.26 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('hello').toString('base64url')           | 1.17 µs/iter   | 1.17 µs   | 1.64 µs   | 1.14 µs   | 1.64 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8=', 'base64').toString()         | 1.21 µs/iter   | 1.17 µs   | 2.12 µs   | 1.12 µs   | 2.12 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from('aGVsbG8', 'base64url').toString()       | 1.37 µs/iter   | 1.37 µs   | 1.49 µs   | 1.35 µs   | 1.49 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer2, 'hex').toString()       | 2.78 µs/iter   | 3 µs      | 3.48 µs   | 2.06 µs   | 3.48 µs   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longTextBuffer0, 'base64').toString()    | 3.12 µs/iter   | 3.11 µs   | 4.23 µs   | 2.83 µs   | 4.23 µs   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'latin1').toString()           | 8.3 µs/iter    | 8.57 µs   | 9.15 µs   | 7.87 µs   | 9.15 µs   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'binary').toString()           | 8.4 µs/iter    | 8.64 µs   | 9.28 µs   | 7.89 µs   | 9.28 µs   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'ascii').toString()            | 8.92 µs/iter   | 9.54 µs   | 10.56 µs  | 7.95 µs   | 10.56 µs  |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'ascii').toString()            | 9.54 µs/iter   | 8.22 µs   | 23.43 µs  | 5.8 µs    | 1.16 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 9.89 µs/iter   | 8.65 µs   | 22.55 µs  | 5.97 µs   | 976.53 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer3, 'ucs2').toString()      | 10.32 µs/iter  | 9.57 µs   | 24.68 µs  | 5.95 µs   | 1.44 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'latin1').toString()           | 10.72 µs/iter  | 9.78 µs   | 32.02 µs  | 5.89 µs   | 1.24 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ascii')              | 10.77 µs/iter  | 10.17 µs  | 24.54 µs  | 4.75 µs   | 1.22 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('ucs2')               | 11 µs/iter     | 10.34 µs  | 21.74 µs  | 6.36 µs   | 2.95 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'binary').toString()           | 11.3 µs/iter   | 10.24 µs  | 32.91 µs  | 5.95 µs   | 7.85 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf16le')            | 11.59 µs/iter  | 11.83 µs  | 20.94 µs  | 6.69 µs   | 1.09 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText, 'utf8').toString()             | 11.94 µs/iter  | 10.49 µs  | 26.63 µs  | 7.32 µs   | 2.86 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64')             | 13.17 µs/iter  | 13.01 µs  | 26.12 µs  | 6.42 µs   | 879.91 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer0, 'base64').toString()    | 13.32 µs/iter  | 13.08 µs  | 24.65 µs  | 12.28 µs  | 541.13 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('utf8')               | 13.58 µs/iter  | 13.35 µs  | 31.89 µs  | 6.95 µs   | 3.34 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('binary')             | 16.64 µs/iter  | 15.43 µs  | 39.23 µs  | 6.15 µs   | 925.32 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('latin1')             | 19.36 µs/iter  | 19.43 µs  | 46.09 µs  | 6.23 µs   | 1.1 ms    |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer0, 'base64').toString()    | 20.19 µs/iter  | 18.41 µs  | 34.37 µs  | 16.25 µs  | 828.8 µs  |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longTextBuffer4, 'utf16le').toString()   | 33.13 µs/iter  | 32.63 µs  | 52.6 µs   | 30.57 µs  | 236.33 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('base64url')          | 38.34 µs/iter  | 32.23 µs  | 208.95 µs | 28.72 µs  | 1.04 ms   |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer2, 'hex').toString()       | 39.73 µs/iter  | 36.54 µs  | 69.11 µs  | 34.96 µs  | 1.01 ms   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('latin1')             | 56.31 µs/iter  | 54.09 µs  | 93.88 µs  | 52.53 µs  | 307.99 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf8')               | 56.97 µs/iter  | 55.05 µs  | 124.06 µs | 53.5 µs   | 271.74 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ascii')              | 57.78 µs/iter  | 55.94 µs  | 132.01 µs | 54.45 µs  | 229.8 µs  |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('binary')             | 60.03 µs/iter  | 55.55 µs  | 102.98 µs | 52.69 µs  | 391.39 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText, 'utf8').toString()             | 60.53 µs/iter  | 56.22 µs  | 106.78 µs | 54.13 µs  | 457.48 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64')             | 61.3 µs/iter   | 58.54 µs  | 155.88 µs | 55.13 µs  | 282.56 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('ucs2')               | 61.55 µs/iter  | 60.11 µs  | 170.16 µs | 52.49 µs  | 1.55 ms   |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('utf16le')            | 62.59 µs/iter  | 66.07 µs  | 179.22 µs | 52.45 µs  | 438.89 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('base64url')          | 84.32 µs/iter  | 81.25 µs  | 179.2 µs  | 79.55 µs  | 373.72 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longTextBuffer1, 'base64url').toString() | 94.56 µs/iter  | 93.44 µs  | 142.91 µs | 89.11 µs  | 804.48 µs |
| javascript | node v18.7.0 (x64-linux)               | Buffer.from(longText).toString('hex')                | 103.59 µs/iter | 98.6 µs   | 232.4 µs  | 90.53 µs  | 501.39 µs |
| javascript | bun 0.1.7 (x64-linux)                  | Buffer.from(longText).toString('hex')                | 205.35 µs/iter | 194.69 µs | 366.32 µs | 188.22 µs | 933.86 µs |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ucs2')               | 515.6 µs/iter  | 479.81 µs | 1.22 ms   | 450.83 µs | 1.48 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf16le')            | 517.16 µs/iter | 477.54 µs | 1.14 ms   | 453.45 µs | 1.34 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('ascii')              | 544.27 µs/iter | 600.91 µs | 709.65 µs | 488.66 µs | 1.01 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('latin1')             | 549.5 µs/iter  | 515.7 µs  | 1.2 ms    | 494.42 µs | 1.35 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('binary')             | 553.6 µs/iter  | 517.01 µs | 1.26 ms   | 493.18 µs | 1.87 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('hex')                | 592.52 µs/iter | 544.44 µs | 1.28 ms   | 518.32 µs | 1.51 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64')             | 652.94 µs/iter | 612.31 µs | 1.26 ms   | 583.91 µs | 1.51 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'utf8').toString()             | 820.28 µs/iter | 765.55 µs | 2.2 ms    | 734.94 µs | 2.45 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('utf8')               | 832.51 µs/iter | 778.29 µs | 1.56 ms   | 732.78 µs | 1.71 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'ascii').toString()            | 945.08 µs/iter | 864.12 µs | 2.54 ms   | 831.66 µs | 4.64 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'latin1').toString()           | 969.85 µs/iter | 894.09 µs | 2.57 ms   | 861.05 µs | 2.82 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText, 'binary').toString()           | 1.03 ms/iter   | 905.1 µs  | 3.41 ms   | 860.72 µs | 6.15 ms   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | Buffer.from(longText).toString('base64url')          | 1.05 ms/iter   | 867.29 µs | 2.78 ms   | 836.67 µs | 8.76 ms   |

## Nanoid

### nanoid(36)
| Language   | Runtime                                | Benchmark  | Average        | p75       | p99       | Min       | Max       |
| ---------- | -------------------------------------- | ---------- | -------------- | --------- | --------- | --------- | --------- |
| javascript | node v18.7.0 (x64-linux)               | nanoid(36) | 479.48 ns/iter | 507.59 ns | 578.58 ns | 368.75 ns | 591.46 ns |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | nanoid(36) | 932.53 ns/iter | 934.04 ns | 1.17 µs   | 902.13 ns | 1.17 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | nanoid(36) | 1.4 µs/iter    | 1.37 µs   | 2.31 µs   | 1.32 µs   | 2.31 µs   |

## Http

### http
| Language   | Runtime                                | Benchmark | Average         | p75         | p99         | Min        | Max         |
| ---------- | -------------------------------------- | --------- | --------------- | ----------- | ----------- | ---------- | ----------- |
| javascript | bun 0.1.7 (x64-linux)                  | http      | 124,748.983/rps | 128,938.078 | 149,415.319 | 10,336.044 | 171,416.715 |
| crystal    | Crystal x64-linux                      | http      | 105,951.457/rps | 113,512.753 | 144,403.949 | 15,429.204 | 149,410.264 |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | http      | 70,432.035/rps  | 76,560.313  | 79,637.897  | 9,743.12   | 80,304.861  |
| javascript | node v18.7.0 (x64-linux)               | http      | 44,212.83/rps   | 48,518.165  | 49,850.461  | 6,615.731  | 50,105.612  |

## Console

### console.log('hello')
| Language   | Runtime                                | Benchmark            | Average        | p75       | p99      | Min       | Max     |
| ---------- | -------------------------------------- | -------------------- | -------------- | --------- | -------- | --------- | ------- |
| javascript | bun 0.1.7 (x64-linux)                  | console.log('hello') | 845.35 ns/iter | 869.55 ns | 1.11 µs  | 781.65 ns | 1.11 µs |
| javascript | node v18.7.0 (x64-linux)               | console.log('hello') | 2.61 µs/iter   | 2.52 µs   | 10.92 µs | 1.42 µs   | 5.73 ms |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello') | 6.7 µs/iter    | 6.75 µs   | 6.78 µs  | 6.24 µs   | 6.78 µs |


### console.log({ hello: 'object' })
| Language   | Runtime                                | Benchmark                        | Average      | p75      | p99      | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------- | ------------ | -------- | -------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 1.13 µs/iter | 1.14 µs  | 1.21 µs  | 987.84 ns | 1.21 µs   |
| javascript | node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 4.15 µs/iter | 4.01 µs  | 7.06 µs  | 3.94 µs   | 7.06 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 13.4 µs/iter | 13.21 µs | 22.53 µs | 10.63 µs  | 331.73 µs |


### everything
| Language   | Runtime                                | Benchmark                        | Average        | p75       | p99      | Min       | Max       |
| ---------- | -------------------------------------- | -------------------------------- | -------------- | --------- | -------- | --------- | --------- |
| javascript | bun 0.1.7 (x64-linux)                  | console.log('hello')             | 845.35 ns/iter | 869.55 ns | 1.11 µs  | 781.65 ns | 1.11 µs   |
| javascript | bun 0.1.7 (x64-linux)                  | console.log({ hello: 'object' }) | 1.13 µs/iter   | 1.14 µs   | 1.21 µs  | 987.84 ns | 1.21 µs   |
| javascript | node v18.7.0 (x64-linux)               | console.log('hello')             | 2.61 µs/iter   | 2.52 µs   | 10.92 µs | 1.42 µs   | 5.73 ms   |
| javascript | node v18.7.0 (x64-linux)               | console.log({ hello: 'object' }) | 4.15 µs/iter   | 4.01 µs   | 7.06 µs  | 3.94 µs   | 7.06 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log('hello')             | 6.7 µs/iter    | 6.75 µs   | 6.78 µs  | 6.24 µs   | 6.78 µs   |
| javascript | deno 1.24.2 (x86_64-unknown-linux-gnu) | console.log({ hello: 'object' }) | 13.4 µs/iter   | 13.21 µs  | 22.53 µs | 10.63 µs  | 331.73 µs |

