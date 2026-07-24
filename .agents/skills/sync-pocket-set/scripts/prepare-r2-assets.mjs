import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

const manifestPath = getArg('manifest')
if (!manifestPath) throw new Error('--manifest is required')
const config = loadJson(manifestPath)
if (!config.set?.id
	|| !config.set?.sourceId
	|| !Number.isInteger(config.set?.total)
	|| !Array.isArray(config.set?.boosters)
	|| !config.images?.cardLanguages
	|| !config.images?.cardSourceFormats
	|| !config.images?.packLanguages) {
	throw new Error('Manifest is missing source set or image discovery fields')
}
const INPUT_ROOT = getArg('input')
	?? process.env.POCKET_ASSET_INPUT
	?? `/tmp/tcgp-import-${config.set.id}`
const OUTPUT_ROOT = getArg('output')
	?? process.env.POCKET_ASSET_OUTPUT
	?? `/tmp/tcgp-r2-${config.set.id}`
const sharpCandidates = [
	process.env.SHARP_ENTRY,
	path.resolve(process.cwd(), 'node_modules/sharp/lib/index.js'),
	path.resolve(process.cwd(), '../tcgp/node_modules/sharp/lib/index.js'),
].filter(Boolean)
const SHARP_ENTRY = sharpCandidates.find(candidate => fs.existsSync(candidate))
if (!SHARP_ENTRY) {
	throw new Error(`Sharp not found. Set SHARP_ENTRY. Checked: ${sharpCandidates.join(', ')}`)
}
const sharp = (await import(pathToFileURL(SHARP_ENTRY).href)).default

const CARD_LANGUAGES = config.images.cardLanguages
const CARD_SOURCE_FORMATS = config.images.cardSourceFormats
const PACK_LANGUAGES = config.images.packLanguages
const SETS = [{
	source: config.set.sourceId,
	id: config.set.id,
	count: config.set.total,
	boosters: config.set.boosters.map(booster => ({ source: booster.sku, id: booster.id })),
}]

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

function listWebpKeys(root, directory = root) {
	if (!fs.existsSync(directory)) return []
	return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
		const absolute = path.join(directory, entry.name)
		if (entry.isDirectory()) return listWebpKeys(root, absolute)
		if (entry.isFile() && entry.name.endsWith('.webp')) {
			return [path.relative(root, absolute).split(path.sep).join('/')]
		}
		return []
	})
}

const tasks = []
const manifest = []

for (const set of SETS) {
	for (const [sourceLanguage, outputLanguage] of Object.entries(CARD_LANGUAGES)) {
		const sourceFormat = CARD_SOURCE_FORMATS[sourceLanguage] ?? 'png'
		for (let number = 1; number <= set.count; number++) {
			const localId = String(number).padStart(3, '0')
			const input = path.join(INPUT_ROOT, 'cards', sourceLanguage, set.source, `${number}.${sourceFormat}`)
			const highKey = `${outputLanguage}/tcgp/${set.id}/${localId}/high.webp`
			const lowKey = `${outputLanguage}/tcgp/${set.id}/${localId}/low.webp`
			tasks.push(async () => {
				const source = await ensureImage(input, sourceFormat)
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

console.log(`Running ${tasks.length} image conversion tasks...`)
await runPool(tasks)

manifest.sort((left, right) => left.key.localeCompare(right.key))
const expectedCards = SETS.reduce((total, set) => total + set.count, 0)
	* Object.keys(CARD_LANGUAGES).length
	* 2
const expectedBoosters = SETS.reduce((total, set) => total + set.boosters.length, 0)
	* Object.keys(PACK_LANGUAGES).length
	* 2
const expectedTotal = expectedCards + expectedBoosters
if (config.images.expectedObjects?.cards !== expectedCards
	|| config.images.expectedObjects?.boosters !== expectedBoosters
	|| config.images.expectedObjects?.total !== expectedTotal) {
	throw new Error('Manifest expected object counts do not match its set and image fields')
}
if (manifest.length !== expectedTotal) {
	throw new Error(`Expected ${expectedTotal} objects, prepared ${manifest.length}`)
}
const preparedKeys = manifest.map(object => object.key).sort()
const actualKeys = listWebpKeys(OUTPUT_ROOT).sort()
if (JSON.stringify(actualKeys) !== JSON.stringify(preparedKeys)) {
	throw new Error('Output directory contains missing or stale WebP objects; use a fresh output directory')
}

fs.writeFileSync(path.join(OUTPUT_ROOT, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify({
	cards: expectedCards,
	boosters: expectedBoosters,
	total: expectedTotal,
	outputRoot: OUTPUT_ROOT,
}, null, 2))
