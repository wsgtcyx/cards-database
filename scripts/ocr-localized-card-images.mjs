import { createHash } from "node:crypto";
import { execFile, execFileSync, spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

function arg(name, fallback) {
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

function hasFlag(name) {
    return process.argv.includes(name);
}

const downloadsFile = arg("--downloads");
const outputDir = arg("--output-dir");
const workDir = arg("--work-dir");
const locales = arg("--locales", "de,it").split(",").filter(Boolean);
const cards = new Set(
    arg("--cards", "").split(",").map((value) => value.trim()).filter(Boolean)
);
const concurrency = Number(arg("--concurrency", "12"));
const paddleCaller = arg("--paddle-caller");
const paddleConcurrency = Number(arg("--paddle-concurrency", "4"));
const skipTesseract = hasFlag("--skip-tesseract");

if (!downloadsFile || !outputDir || !workDir) {
    throw new Error(
        "usage: node scripts/ocr-localized-card-images.mjs --downloads <json> " +
        "--output-dir <dir> --work-dir <dir> [--locales de,it]"
    );
}

if (paddleCaller && !path.isAbsolute(paddleCaller)) {
    throw new Error("--paddle-caller must be an absolute path to ocr_caller.py");
}

const languageIds = {
    de: "de-DE",
    it: "it-IT",
    fr: "fr-FR",
    es: "es-ES",
    "pt-br": "pt-BR",
    "zh-tw": "zh-Hant"
};
const tesseractIds = {
    de: "deu+eng",
    it: "ita+eng",
    fr: "fra+eng",
    es: "spa+eng",
    "pt-br": "por+eng",
    "zh-tw": "chi_tra+eng"
};
const input = JSON.parse(await readFile(downloadsFile, "utf8"));
const records = input.records.filter((record) =>
    locales.includes(record.locale) &&
    (cards.size === 0 || cards.has(record.id) || cards.has(record.id.split("-")[1]))
);

for (const locale of locales) {
    if (!languageIds[locale] || (!skipTesseract && !tesseractIds[locale])) {
        throw new Error(`unsupported locale: ${locale}`);
    }
}

await mkdir(outputDir, { recursive: true });
await mkdir(workDir, { recursive: true });

async function mapLimit(items, limit, worker) {
    let cursor = 0;
    const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
        while (cursor < items.length) {
            const index = cursor++;
            await worker(items[index], index);
        }
    });
    await Promise.all(workers);
}

function normalizePaddleResult(payload, record) {
    const providerResult = payload?.result?.result ?? {};
    const layoutPages = Array.isArray(providerResult.layoutParsingResults)
        ? providerResult.layoutParsingResults.map((page) => ({
            width: page?.prunedResult?.width,
            height: page?.prunedResult?.height,
            blocks: (page?.prunedResult?.parsing_res_list ?? []).map((block) => ({
                label: block.block_label,
                text: block.block_content,
                bbox: block.block_bbox,
                polygon: block.block_polygon_points
            }))
        }))
        : [];
    const ocrPages = Array.isArray(providerResult.ocrResults)
        ? providerResult.ocrResults.map((page) => ({
            texts: page?.prunedResult?.rec_texts ?? [],
            scores: page?.prunedResult?.rec_scores ?? [],
            boxes: page?.prunedResult?.rec_boxes ?? []
        }))
        : [];
    return {
        id: record.id,
        locale: record.locale,
        sourceSha256: record.sourceSha256,
        ok: payload?.ok === true,
        text: payload?.text ?? "",
        error: payload?.error ?? null,
        pages: layoutPages.length > 0 ? layoutPages : ocrPages
    };
}

const manifest = [];
await mapLimit(records, concurrency, async (record) => {
    const number = record.id.split("-")[1];
    const localeDir = path.join(workDir, record.locale);
    await mkdir(localeDir, { recursive: true });
    const imagePath = path.join(localeDir, `${number}.png`);
    const response = await fetch(record.sourceUrl);
    if (!response.ok) {
        throw new Error(`${record.id}/${record.locale}: HTTP ${response.status}`);
    }
    const bytes = Buffer.from(await response.arrayBuffer());
    const sha256 = createHash("sha256").update(bytes).digest("hex");
    if (sha256 !== record.sha256) {
        throw new Error(`${record.id}/${record.locale}: source SHA-256 changed`);
    }
    await writeFile(imagePath, bytes);
    manifest.push({
        id: record.id,
        locale: record.locale,
        sourceUrl: record.sourceUrl,
        sourceSha256: sha256,
        bytes: bytes.length,
        imagePath
    });
});

manifest.sort((a, b) => a.locale.localeCompare(b.locale) || a.id.localeCompare(b.id));

const visionSource = path.resolve("scripts/apple-vision-ocr.m");
const visionBinary = path.join(workDir, "apple-vision-ocr");
execFileSync("clang", [
    "-fobjc-arc",
    "-framework", "Foundation",
    "-framework", "Vision",
    "-framework", "ImageIO",
    "-framework", "CoreGraphics",
    visionSource,
    "-o", visionBinary
], { stdio: "inherit" });

const persistedManifest = manifest.map(({ imagePath: _imagePath, ...entry }) => entry);
await writeFile(
    path.join(outputDir, "input-manifest.json"),
    `${JSON.stringify({
        schemaVersion: 1,
        generatedAt: new Date().toISOString(),
        downloadsFile,
        count: persistedManifest.length,
        records: persistedManifest
    }, null, 2)}\n`
);

for (const locale of locales) {
    const localeRecords = manifest.filter((record) => record.locale === locale);
    const visionWorkOutput = path.join(workDir, `apple-vision-${locale}.json`);
    execFileSync(visionBinary, [
        languageIds[locale],
        visionWorkOutput,
        ...localeRecords.map((record) => record.imagePath)
    ], { stdio: "inherit" });

    const vision = JSON.parse(await readFile(visionWorkOutput, "utf8"));
    const visionByNumber = new Map(
        vision.map((result) => [path.basename(result.path, ".png"), result])
    );
    const normalizedVision = localeRecords.map((record) => {
        const number = record.id.split("-")[1];
        const result = visionByNumber.get(number);
        return {
            id: record.id,
            locale,
            sourceSha256: record.sourceSha256,
            ...(result?.error ? { error: result.error } : { lines: result?.lines ?? [] })
        };
    });
    await writeFile(
        path.join(outputDir, `apple-vision-${locale}.json`),
        `${JSON.stringify(normalizedVision, null, 2)}\n`
    );

    if (!skipTesseract) {
        const tesseract = [];
        for (const record of localeRecords) {
            const result = spawnSync("tesseract", [
                record.imagePath,
                "stdout",
                "-l", tesseractIds[locale],
                "--psm", "11"
            ], { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 });
            tesseract.push({
                id: record.id,
                locale,
                sourceSha256: record.sourceSha256,
                exitCode: result.status,
                text: result.stdout.trim(),
                stderr: result.status === 0 ? undefined : result.stderr.trim()
            });
        }
        await writeFile(
            path.join(outputDir, `tesseract-${locale}.json`),
            `${JSON.stringify(tesseract, null, 2)}\n`
        );
    }

    if (paddleCaller) {
        const paddle = new Array(localeRecords.length);
        await mapLimit(localeRecords.map((record, index) => ({ record, index })), paddleConcurrency, async ({ record, index }) => {
            const number = record.id.split("-")[1];
            const rawOutput = path.join(workDir, `paddleocr-${locale}-${number}.json`);
            try {
                await execFileAsync("python", [
                    paddleCaller,
                    "--file-path", record.imagePath,
                    "--output", rawOutput
                ], { maxBuffer: 4 * 1024 * 1024 });
            } catch (_error) {
                // The caller persists a structured error envelope before exiting non-zero.
            }
            let payload;
            try {
                payload = JSON.parse(await readFile(rawOutput, "utf8"));
            } catch (error) {
                payload = {
                    ok: false,
                    text: "",
                    error: { code: "CALLER_ERROR", message: String(error) }
                };
            }
            paddle[index] = normalizePaddleResult(payload, record);
        });
        await writeFile(
            path.join(outputDir, `paddleocr-${locale}.json`),
            `${JSON.stringify(paddle, null, 2)}\n`
        );
    }
}

const engineFailures = [];
for (const locale of locales) {
    const vision = JSON.parse(await readFile(path.join(outputDir, `apple-vision-${locale}.json`), "utf8"));
    for (const result of vision) {
        if (result.error) engineFailures.push({ engine: "apple-vision", locale, id: result.id, error: result.error });
    }
    if (!skipTesseract) {
        const tesseract = JSON.parse(await readFile(path.join(outputDir, `tesseract-${locale}.json`), "utf8"));
        for (const result of tesseract) {
            if (result.exitCode !== 0) engineFailures.push({ engine: "tesseract", locale, id: result.id, exitCode: result.exitCode });
        }
    }
    if (paddleCaller) {
        const paddle = JSON.parse(await readFile(path.join(outputDir, `paddleocr-${locale}.json`), "utf8"));
        for (const result of paddle) {
            if (!result.ok) engineFailures.push({ engine: "paddleocr", locale, id: result.id, error: result.error });
        }
    }
}

const summary = {
    passed: engineFailures.length === 0,
    records: manifest.length,
    perLocale: Object.fromEntries(
        locales.map((locale) => [locale, manifest.filter((record) => record.locale === locale).length])
    ),
    engines: ["apple-vision", ...(skipTesseract ? [] : ["tesseract"]), ...(paddleCaller ? ["paddleocr"] : [])],
    engineFailures,
    outputDir
};
console.log(JSON.stringify(summary, null, 2));
if (!summary.passed) process.exitCode = 2;
