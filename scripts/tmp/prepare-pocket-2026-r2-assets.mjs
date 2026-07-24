import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const INPUT_ROOT = process.env.POCKET_ASSET_INPUT ?? '/tmp/tcgp-import-assets'
const OUTPUT_ROOT = process.env.POCKET_ASSET_OUTPUT ?? '/tmp/tcgp-r2-2026'
const SHARP_ENTRY = process.env.SHARP_ENTRY
	?? '/Users/andy/sohu/独立开发/tcgp/node_modules/sharp/lib/index.js'
const sharp = (await import(pathToFileURL(SHARP_ENTRY).href)).default

const CARD_LANGUAGES = {
	'en-US': 'en',
	'zh-TW': 'zh-tw',
}
const PACK_LANGUAGES = {
	'en-US': 'en',
	'fr-FR': 'fr',
	'es-ES': 'es',
	'it-IT': 'it',
	'de-DE': 'de',
	'pt-BR': 'pt-br',
	'zh-TW': 'zh-tw',
	'ko-KR': 'ko',
	'ja-JP': 'ja',
}
const SETS = [
	{ source: 'B2b', id: 'B2b', count: 117, boosters: [{ source: 'B2b_1', id: 'mega-shine' }] },
	{ source: 'B3', id: 'B3', count: 234, boosters: [{ source: 'B3_1', id: 'pulsing-aura' }] },
	{ source: 'B3a', id: 'B3a', count: 109, boosters: [{ source: 'B3a_1', id: 'paradox-drive' }] },
	{ source: 'B3b', id: 'B3b', count: 106, boosters: [{ source: 'B3b_1', id: 'everyday-wonders' }] },
	{
		source: 'PROMO-B',
		id: 'P-B',
		count: 78,
		boosters: Array.from({ length: 10 }, (_, index) => ({
			source: `PROMO-B_${index + 1}`,
			id: `vol${index + 1}`,
		})),
	},
]

async function runPool(tasks, concurrency = 8) {
	let cursor = 0
	const workers = Array.from({ length: concurrency }, async () => {
		while (cursor < tasks.length) {
			const index = cursor++
			await tasks[index]()
		}
	})
	await Promise.all(workers)
}

async function ensureImage(input, expectedFormat) {
	if (!fs.existsSync(input)) throw new Error(`Missing source image: ${input}`)
	const metadata = await sharp(input).metadata()
	if (metadata.format !== expectedFormat) {
		throw new Error(`Unexpected ${metadata.format} source image at ${input}; expected ${expectedFormat}`)
	}
	if (!metadata.width || !metadata.height) throw new Error(`Invalid image dimensions: ${input}`)
	return metadata
}

function outputPath(key) {
	const file = path.join(OUTPUT_ROOT, key)
	fs.mkdirSync(path.dirname(file), { recursive: true })
	return file
}

const tasks = []
const manifest = []

for (const set of SETS) {
	for (const [sourceLanguage, outputLanguage] of Object.entries(CARD_LANGUAGES)) {
		for (let number = 1; number <= set.count; number++) {
			const localId = String(number).padStart(3, '0')
			const input = path.join(INPUT_ROOT, 'cards', sourceLanguage, set.source, `${number}.png`)
			const highKey = `${outputLanguage}/tcgp/${set.id}/${localId}/high.webp`
			const lowKey = `${outputLanguage}/tcgp/${set.id}/${localId}/low.webp`
			tasks.push(async () => {
				const source = await ensureImage(input, 'png')
				await Promise.all([
					sharp(input)
						.webp({ quality: 90, effort: 4 })
						.toFile(outputPath(highKey)),
					sharp(input)
						.resize({ width: 245, withoutEnlargement: true })
						.webp({ quality: 82, effort: 4 })
						.toFile(outputPath(lowKey)),
				])
				const [high, low] = await Promise.all([
					sharp(path.join(OUTPUT_ROOT, highKey)).metadata(),
					sharp(path.join(OUTPUT_ROOT, lowKey)).metadata(),
				])
				if (high.format !== 'webp' || high.width !== source.width || high.height !== source.height) {
					throw new Error(`Invalid high image: ${highKey}`)
				}
				if (low.format !== 'webp' || low.width !== Math.min(245, source.width)) {
					throw new Error(`Invalid low image: ${lowKey}`)
				}
				manifest.push(
					{ key: highKey, source: input, width: high.width, height: high.height },
					{ key: lowKey, source: input, width: low.width, height: low.height },
				)
			})
		}
	}

	for (const booster of set.boosters) {
		for (const [sourceLanguage, outputLanguage] of Object.entries(PACK_LANGUAGES)) {
			for (const [sourceFolder, outputName] of [
				['packs', 'artwork_front'],
				['packs-logos', 'logo'],
			]) {
				const input = path.join(INPUT_ROOT, 'packs', sourceLanguage, sourceFolder, `${booster.source}.webp`)
				const key = `${outputLanguage}/tcgp/${set.id}/boosters/${booster.id}/${outputName}.webp`
				tasks.push(async () => {
					await ensureImage(input, 'webp')
					await sharp(input)
						.webp({ quality: 90, effort: 4 })
						.toFile(outputPath(key))
					const output = await sharp(path.join(OUTPUT_ROOT, key)).metadata()
					if (output.format !== 'webp' || !output.width || !output.height) {
						throw new Error(`Invalid booster image: ${key}`)
					}
					manifest.push({ key, source: input, width: output.width, height: output.height })
				})
			}
		}
	}
}

console.log(`Preparing ${tasks.length} R2 objects...`)
await runPool(tasks)

manifest.sort((left, right) => left.key.localeCompare(right.key))
const expectedCards = SETS.reduce((total, set) => total + set.count, 0) * 2 * 2
const expectedBoosters = SETS.reduce((total, set) => total + set.boosters.length, 0) * 9 * 2
const expectedTotal = expectedCards + expectedBoosters
if (manifest.length !== expectedTotal) {
	throw new Error(`Expected ${expectedTotal} objects, prepared ${manifest.length}`)
}

fs.writeFileSync(path.join(OUTPUT_ROOT, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify({
	cards: expectedCards,
	boosters: expectedBoosters,
	total: expectedTotal,
	outputRoot: OUTPUT_ROOT,
}, null, 2))
