start_commands=(bun node deno crystal)

for i in "${start_commands[@]}"
do
    if [[ "$i" == *"bun"* ]] || [[ "$i" == *"node"* ]]; then COMMAND="$i servers/$i.mjs"; fi
    if [[ "$i" == *"deno"* ]]; then COMMAND="deno run --allow-net servers/$i.mjs"; fi
    if [[ "$i" == *"crystal"* ]]; then
        cd servers/
        crystal build crystal.cr --release --no-debug
        COMMAND="./servers/crystal"
        cd ../
    fi

    pushd .
    nohup $COMMAND > /dev/null 2>&1 &
    sleep 5s

    OUTPUT="$(../../scripts/bombardier -p r -o j -l -c 40 -d 10s -m GET http://localhost:3000)"
    if [[ "$i" == *"bun"* ]] || [[ "$i" == *"node"* ]]; then $i custom.mjs "$OUTPUT" "$i" "javascript"; fi
    if [[ "$i" == *"deno"* ]]; then deno run -A --unstable --allow-write --allow-net custom.mjs "$OUTPUT" "$i" "javascript"; fi
    if [[ "$i" == *"crystal"* ]]; then
        rm servers/crystal
        bun custom.mjs "$OUTPUT" "$i" "crystal"
    fi

    kill $!
done