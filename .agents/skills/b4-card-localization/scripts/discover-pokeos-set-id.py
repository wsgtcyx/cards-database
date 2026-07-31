#!/usr/bin/env python3
"""Discover the PokeOS internal set ID for B4 by image similarity.

The public PokeOS set API can be blocked by Cloudflare on CI egress. PokeOS card
objects are static S3 assets keyed by an internal numeric set ID, so this probe
compares candidate #1 English images with this repository's already verified
B4-001 English image. It never treats the result as canonical metadata; it only
establishes whether PokeOS exposes real localized image objects.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import io
import json
import sys
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from PIL import Image

DEFAULT_KNOWN_URL = (
    "https://game.pokemontcgpocket.app/en/tcgp/B4/001/high.webp"
)
S3_TEMPLATE = (
    "https://s3.pokeos.com/pokeos-uploads/tcg/pocket/{set_id}/src/"
    "{number}_{language}.png"
)
USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
)
LANGUAGE_CANDIDATES = {
    "en": ["en"],
    "fr": ["fr"],
    "es": ["es"],
    "it": ["it"],
    "de": ["de"],
    "pt-br": ["pt", "pt-br", "br"],
    "zh-tw": ["zh", "zh-tw", "tw"],
}
SAMPLE_NUMBERS = [1, 82, 122, 154, 176, 233]


@dataclass(frozen=True)
class FetchResult:
    url: str
    status: int | None
    content_type: str | None
    data: bytes | None
    error: str | None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--known-url", default=DEFAULT_KNOWN_URL)
    parser.add_argument("--min-id", type=int, default=450)
    parser.add_argument("--max-id", type=int, default=850)
    parser.add_argument("--workers", type=int, default=24)
    parser.add_argument("--timeout", type=float, default=12.0)
    parser.add_argument(
        "--output",
        default="meta/pocket-source-reviews/B4.pokeos-discovery.json",
    )
    return parser.parse_args()


def fetch(url: str, timeout: float) -> FetchResult:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "https://www.pokeos.com/",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            data = response.read(4 * 1024 * 1024)
            return FetchResult(
                url=url,
                status=response.status,
                content_type=response.headers.get("content-type"),
                data=data,
                error=None,
            )
    except urllib.error.HTTPError as error:
        return FetchResult(
            url=url,
            status=error.code,
            content_type=error.headers.get("content-type") if error.headers else None,
            data=None,
            error=f"HTTPError: {error.code}",
        )
    except Exception as error:  # noqa: BLE001 - report exact network failure
        return FetchResult(
            url=url,
            status=None,
            content_type=None,
            data=None,
            error=f"{type(error).__name__}: {error}",
        )


def image_hash(data: bytes, size: int = 32) -> int:
    """Return a difference hash with size*size bits."""
    with Image.open(io.BytesIO(data)) as image:
        grayscale = image.convert("L").resize((size + 1, size), Image.Resampling.LANCZOS)
        pixels = list(grayscale.getdata())
    value = 0
    width = size + 1
    for row in range(size):
        offset = row * width
        for column in range(size):
            value = (value << 1) | int(pixels[offset + column] > pixels[offset + column + 1])
    return value


def hamming(left: int, right: int) -> int:
    return (left ^ right).bit_count()


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def candidate_url(set_id: int, number: int, language: str) -> str:
    return S3_TEMPLATE.format(set_id=set_id, number=number, language=language)


def discover_candidate(
    set_id: int,
    known_hash: int,
    timeout: float,
) -> dict[str, Any] | None:
    url = candidate_url(set_id, 1, "en")
    result = fetch(url, timeout)
    if result.status != 200 or result.data is None:
        return None
    try:
        digest = image_hash(result.data)
    except Exception as error:  # noqa: BLE001
        return {
            "setId": set_id,
            "url": url,
            "status": result.status,
            "contentType": result.content_type,
            "bytes": len(result.data),
            "sha256": sha256(result.data),
            "decodeError": f"{type(error).__name__}: {error}",
        }
    return {
        "setId": set_id,
        "url": url,
        "status": result.status,
        "contentType": result.content_type,
        "bytes": len(result.data),
        "sha256": sha256(result.data),
        "hashDistance": hamming(known_hash, digest),
    }


def probe_locales(set_id: int, timeout: float) -> dict[str, Any]:
    output: dict[str, Any] = {}
    jobs: list[tuple[str, int, str, str]] = []
    for locale, language_codes in LANGUAGE_CANDIDATES.items():
        output[locale] = {}
        for number in SAMPLE_NUMBERS:
            output[locale][str(number)] = {}
            for language_code in language_codes:
                jobs.append(
                    (
                        locale,
                        number,
                        language_code,
                        candidate_url(set_id, number, language_code),
                    )
                )

    def run(job: tuple[str, int, str, str]) -> tuple[tuple[str, int, str], FetchResult]:
        locale, number, language_code, url = job
        return (locale, number, language_code), fetch(url, timeout)

    with concurrent.futures.ThreadPoolExecutor(max_workers=24) as executor:
        for key, result in executor.map(run, jobs):
            locale, number, language_code = key
            entry: dict[str, Any] = {
                "url": result.url,
                "status": result.status,
                "contentType": result.content_type,
                "ok": result.status == 200 and result.data is not None,
            }
            if result.data is not None:
                entry["bytes"] = len(result.data)
                entry["sha256"] = sha256(result.data)
                try:
                    with Image.open(io.BytesIO(result.data)) as image:
                        entry["format"] = image.format
                        entry["size"] = list(image.size)
                except Exception as error:  # noqa: BLE001
                    entry["decodeError"] = f"{type(error).__name__}: {error}"
            if result.error:
                entry["error"] = result.error
            output[locale][str(number)][language_code] = entry
    return output


def main() -> int:
    args = parse_args()
    if args.min_id > args.max_id:
        raise ValueError("--min-id must be <= --max-id")
    if args.workers < 1:
        raise ValueError("--workers must be positive")

    started = time.monotonic()
    known = fetch(args.known_url, args.timeout)
    if known.status != 200 or known.data is None:
        raise RuntimeError(
            f"Unable to fetch known B4-001 image: status={known.status} error={known.error}"
        )
    known_hash = image_hash(known.data)

    ids = list(range(args.min_id, args.max_id + 1))
    candidates: list[dict[str, Any]] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {
            executor.submit(discover_candidate, set_id, known_hash, args.timeout): set_id
            for set_id in ids
        }
        for future in concurrent.futures.as_completed(futures):
            candidate = future.result()
            if candidate is not None:
                candidates.append(candidate)

    scored = [candidate for candidate in candidates if "hashDistance" in candidate]
    scored.sort(key=lambda item: (item["hashDistance"], item["setId"]))
    top_candidates = scored[:20]

    discovered_set_id: int | None = None
    confidence = "none"
    if top_candidates:
        best = top_candidates[0]
        runner_up_distance = top_candidates[1]["hashDistance"] if len(top_candidates) > 1 else None
        if best["hashDistance"] <= 8 and (
            runner_up_distance is None or runner_up_distance - best["hashDistance"] >= 8
        ):
            discovered_set_id = int(best["setId"])
            confidence = "high"
        elif best["hashDistance"] <= 24:
            discovered_set_id = int(best["setId"])
            confidence = "review"

    report: dict[str, Any] = {
        "schemaVersion": 1,
        "setId": "B4",
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "method": "dhash-match-known-B4-001",
        "knownImage": {
            "url": args.known_url,
            "status": known.status,
            "contentType": known.content_type,
            "bytes": len(known.data),
            "sha256": sha256(known.data),
        },
        "search": {
            "minId": args.min_id,
            "maxId": args.max_id,
            "checkedIds": len(ids),
            "imageResponses": len(candidates),
            "decodableImages": len(scored),
            "elapsedSeconds": round(time.monotonic() - started, 3),
        },
        "discoveredSetId": discovered_set_id,
        "confidence": confidence,
        "topCandidates": top_candidates,
        "localizedAssets": (
            probe_locales(discovered_set_id, args.timeout)
            if discovered_set_id is not None
            else {}
        ),
    }

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(
        f"checked={len(ids)} images={len(candidates)} "
        f"discovered={discovered_set_id} confidence={confidence} output={output_path}"
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:  # noqa: BLE001
        print(f"{type(error).__name__}: {error}", file=sys.stderr)
        raise
