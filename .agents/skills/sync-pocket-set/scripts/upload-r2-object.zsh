#!/bin/zsh
set -euo pipefail

file=${1:?image file is required}
output_root=${POCKET_R2_OUTPUT_ROOT:?POCKET_R2_OUTPUT_ROOT is required}
file=${file:A}
output_root=${output_root:A}
if [[ "$file" != "$output_root/"*.webp ]]; then
	print -u2 "Refusing file outside POCKET_R2_OUTPUT_ROOT or without .webp suffix: $file"
	exit 2
fi
results_root=${POCKET_R2_RESULTS_ROOT:-${output_root}-upload-results}
bucket=${POCKET_R2_BUCKET:-game}
key=${file#"$output_root/"}
result_file="$results_root/$key"

mkdir -p "${result_file:h}"

if [[ -f "$result_file.ok" ]]; then
	exit 0
fi

wrangler_bin=${WRANGLER_BIN:-}
if [[ -z "$wrangler_bin" ]]; then
	wrangler_bin=$(command -v wrangler || true)
fi
if [[ -z "$wrangler_bin" || ! -x "$wrangler_bin" ]]; then
	print -u2 "Wrangler executable not found; set WRANGLER_BIN"
	exit 2
fi

"$wrangler_bin" r2 object put "$bucket/$key" \
	--file="$file" \
	--content-type=image/webp \
	--cache-control='public, max-age=31536000, immutable' \
	--remote >"$result_file.log" 2>&1

touch "$result_file.ok"
