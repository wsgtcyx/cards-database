#!/usr/bin/env python3
"""Verify a PokeOS set candidate against multiple known B4 images.

This second-stage probe is intentionally independent from the Cloudflare-protected
PokeOS API. It confirms the candidate with six English card-image comparisons,
then discovers language suffixes and checks all 233 objects for each suffix that
passes the sample gate. The output is evidence only; publishing remains a
separate, receipt-backed operation.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import io
import json
import statistics
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from PIL import Image

SET_ID = "B4"
TOTAL = 233
SAMPLES = [1, 82, 122, 154, 176, 233]
GAME_TEMPLATE = "https://game.pokemontcgpocket.app/en/tcgp/B4/{number:03d}/high.webp"
POKEOS_TEMPLATE = (
    "https://s3.pokeos.com/pokeos-uploads/tcg/pocket/{set_id}/src/"
    "{number}_{language}.png"
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
USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
)


@dataclass(frozen=True)
class FetchResult:
    url: str
    status: int | None
    content_type: str | None
    data: bytes | None
    error: str | None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--candidate-set-id", type=int, default=583)
    parser.add_argument("--workers", type=int, default=32)
    parser.add_argument("--timeout", type=float, default=15.0)
    parser.add_argument("--max-distance", type=int, default=80)
    parser.add_argument(
        "--output",
        default="meta/pocket-source-reviews/B4.pokeos-verification.json",
    )
    return parser.parse_args()


def fetch(url: str, timeout: float, method: str = "GET") -> FetchResult:
    request = urllib.request.Request(
        url,
        method=method,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Referer": "https://www.pokeos.com/",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            data = response.read(4 * 1024 * 1024) if method != "HEAD" else b""
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
    except Exception as error:  # noqa: BLE001
        return FetchResult(
            url=url,
            status=None,
            content_type=None,
            data=None,
            error=f"{type(error).__name__}: {error}",
        )


def image_hash(data: bytes, size: int = 32) -> int:
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


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def describe_image(result: FetchResult) -> dict[str, Any]:
    entry: dict[str, Any] = {
        "url": result.url,
        "status": result.status,
        "contentType": result.content_type,
        "ok": result.status == 200 and result.data is not None,
    }
    if result.error:
        entry["error"] = result.error
    if result.data:
        entry["bytes"] = len(result.data)
        entry["sha256"] = sha256(result.data)
        try:
            with Image.open(io.BytesIO(result.data)) as image:
                entry["format"] = image.format
                entry["size"] = list(image.size)
        except Exception as error:  # noqa: BLE001
            entry["decodeError"] = f"{type(error).__name__}: {error}"
            entry["ok"] = False
    return entry


def compare_sample(candidate_set_id: int, number: int, timeout: float) -> dict[str, Any]:
    known = fetch(GAME_TEMPLATE.format(number=number), timeout)
    candidate = fetch(
        POKEOS_TEMPLATE.format(set_id=candidate_set_id, number=number, language="en"),
        timeout,
    )
    result: dict[str, Any] = {
        "number": number,
        "known": describe_image(known),
        "candidate": describe_image(candidate),
        "distance": None,
    }
    if known.data and candidate.data:
        try:
            result["distance"] = (image_hash(known.data) ^ image_hash(candidate.data)).bit_count()
        except Exception as error:  # noqa: BLE001
            result["comparisonError"] = f"{type(error).__name__}: {error}"
    return result


def probe_sample_language(
    candidate_set_id: int,
    locale: str,
    language_code: str,
    number: int,
    timeout: float,
) -> tuple[str, str, int, dict[str, Any]]:
    url = POKEOS_TEMPLATE.format(
        set_id=candidate_set_id,
        number=number,
        language=language_code,
    )
    return locale, language_code, number, describe_image(fetch(url, timeout))


def probe_full_coverage(
    candidate_set_id: int,
    locale: str,
    language_code: str,
    timeout: float,
    workers: int,
) -> dict[str, Any]:
    def check(number: int) -> tuple[int, FetchResult]:
        url = POKEOS_TEMPLATE.format(
            set_id=candidate_set_id,
            number=number,
            language=language_code,
        )
        return number, fetch(url, timeout, method="HEAD")

    missing: list[int] = []
    errors: list[dict[str, Any]] = []
    ok = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        for number, result in executor.map(check, range(1, TOTAL + 1)):
            if result.status == 200:
                ok += 1
            else:
                missing.append(number)
                if len(errors) < 20:
                    errors.append(
                        {
                            "number": number,
                            "status": result.status,
                            "error": result.error,
                            "url": result.url,
                        }
                    )
    return {
        "locale": locale,
        "languageCode": language_code,
        "expected": TOTAL,
        "ok": ok,
        "missingCount": len(missing),
        "missing": missing,
        "sampleErrors": errors,
        "complete": ok == TOTAL,
    }


def main() -> int:
    args = parse_args()
    started = time.monotonic()

    with concurrent.futures.ThreadPoolExecutor(max_workers=min(args.workers, len(SAMPLES))) as executor:
        comparisons = list(
            executor.map(
                lambda number: compare_sample(args.candidate_set_id, number, args.timeout),
                SAMPLES,
            )
        )

    distances = [item["distance"] for item in comparisons if isinstance(item["distance"], int)]
    matched = [distance for distance in distances if distance <= args.max_distance]
    candidate_verified = len(matched) == len(SAMPLES)

    sample_assets: dict[str, dict[str, dict[str, Any]]] = {
        locale: {code: {} for code in codes}
        for locale, codes in LANGUAGE_CANDIDATES.items()
    }
    jobs = [
        (locale, code, number)
        for locale, codes in LANGUAGE_CANDIDATES.items()
        for code in codes
        for number in SAMPLES
    ]
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = [
            executor.submit(
                probe_sample_language,
                args.candidate_set_id,
                locale,
                code,
                number,
                args.timeout,
            )
            for locale, code, number in jobs
        ]
        for future in concurrent.futures.as_completed(futures):
            locale, code, number, entry = future.result()
            sample_assets[locale][code][str(number)] = entry

    selected_codes: dict[str, str] = {}
    for locale, codes in LANGUAGE_CANDIDATES.items():
        for code in codes:
            entries = sample_assets[locale][code]
            if len(entries) == len(SAMPLES) and all(entry.get("ok") for entry in entries.values()):
                selected_codes[locale] = code
                break

    full_coverage: dict[str, Any] = {}
    if candidate_verified:
        for locale, language_code in selected_codes.items():
            full_coverage[locale] = probe_full_coverage(
                args.candidate_set_id,
                locale,
                language_code,
                args.timeout,
                args.workers,
            )

    report = {
        "schemaVersion": 1,
        "setId": SET_ID,
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "candidateSetId": args.candidate_set_id,
        "candidateVerified": candidate_verified,
        "verificationPolicy": {
            "samples": SAMPLES,
            "hashBits": 1024,
            "maxDistance": args.max_distance,
            "allSamplesRequired": True,
        },
        "comparisons": comparisons,
        "distanceSummary": {
            "count": len(distances),
            "minimum": min(distances) if distances else None,
            "maximum": max(distances) if distances else None,
            "mean": round(statistics.fmean(distances), 3) if distances else None,
            "median": statistics.median(distances) if distances else None,
        },
        "sampleAssets": sample_assets,
        "selectedLanguageCodes": selected_codes,
        "fullCoverage": full_coverage,
        "elapsedSeconds": round(time.monotonic() - started, 3),
    }

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(
        f"candidate={args.candidate_set_id} verified={candidate_verified} "
        f"selected={selected_codes} output={output}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
