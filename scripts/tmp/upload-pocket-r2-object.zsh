#!/bin/zsh
set -euo pipefail

file=$1
output_root=${POCKET_R2_OUTPUT_ROOT:-/tmp/tcgp-r2-2026}
results_root=${POCKET_R2_RESULTS_ROOT:-/tmp/tcgp-r2-2026-upload-results}
key=${file#"$output_root/"}
result_file="$results_root/$key"

mkdir -p "${result_file:h}"

if [[ -f "$result_file.ok" ]]; then
	exit 0
fi

/usr/local/bin/wrangler r2 object put "game/$key" \
	--file="$file" \
	--content-type=image/webp \
	--cache-control='public, max-age=31536000, immutable' \
	--remote >"$result_file.log" 2>&1

touch "$result_file.ok"
