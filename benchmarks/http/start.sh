start_commands=(bun node deno)

for i in "${start_commands[@]}"
do
    if [[ "$i" == *"bun"* ]] || [[ "$i" == *"node"* ]]; then COMMAND="$i servers/$i.mjs"; fi
    if [[ "$i" == *"deno"* ]]; then COMMAND="deno run --allow-net servers/$i.mjs"; fi

    pushd .
    nohup $COMMAND > /dev/null 2>&1 &
    sleep 5s

    OUTPUT="$(../../scripts/oha -j -z 10s -m GET http://localhost:3000)"
    if [[ "$i" == *"bun"* ]] || [[ "$i" == *"node"* ]]; then $i custom.mjs "$OUTPUT" "$i"; fi
    if [[ "$i" == *"deno"* ]]; then deno run -A --unstable --allow-write --allow-net custom.mjs "$OUTPUT" "$i"; fi

    kill $!
done