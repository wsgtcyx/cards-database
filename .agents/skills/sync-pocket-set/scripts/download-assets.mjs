import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function normalizeRepo(value) {
	return value
		.replace(/^https:\/\/github\.com\//, '')
		.replace(/^git@github\.com:/, '')
		.replace(/\.git$/, '')
}

const manifestPath = getArg('manifest')
if (!manifestPath) throw new Error('--manifest is required')
const manifest = loadJson(manifestPath)
if (!manifest.source?.repo
	|| !manifest.set?.id
	|| !manifest.set?.sourceId
	|| !Number.isInteger(manifest.set?.total)
	|| !Array.isArray(manifest.set?.boosters)
	|| !manifest.images?.cardLanguages
	|| !manifest.images?.cardSourceFormats
	|| !manifest.images?.packLanguages) {
	throw new Error('Manifest is missing source, set, or image discovery fields')
}
const SOURCE_COMMIT = manifest.source?.commit
const SOURCE_REPO = normalizeRepo(manifest.source?.repo)
const SOURCE_ROOT = manifest.source?.rawImagesBase
	?? `https://raw.githubusercontent.com/${SOURCE_REPO}/${SOURCE_COMMIT}/images`
const OUTPUT_ROOT = getArg('output')
	?? process.env.POCKET_ASSET_INPUT
	?? `/tmp/tcgp-import-${manifest.set.id}`
const CARD_LANGUAGES = Object.keys(manifest.images.cardLanguages)
const PACK_LANGUAGES = Object.keys(manifest.images.packLanguages)
const CARD_SOURCE_FORMATS = manifest.images.cardSourceFormats
const SETS = [{
	source: manifest.set.sourceId,
	count: manifest.set.total,
	boosters: manifest.set.boosters.map(booster => booster.sku),
}]

if (!SOURCE_COMMIT || !/^[0-9a-f]{40}$/i.test(SOURCE_COMMIT)) {
	throw new Error('Manifest source.commit must be a full 40-character Git commit')
}
function isValidImage(file, format) {
	if (!fs.existsSync(file)) return false
	const bytes = fs.readFileSync(file)
	if (format === 'png') {
		return bytes.length >= 8 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
	}
	return bytes.length >= 12
		&& bytes.subarray(0, 4).toString('ascii') === 'RIFF'
		&& bytes.subarray(8, 12).toString('ascii') === 'WEBP'
}

function download({ source, output, format }) {
	return async () => {
		if (isValidImage(output, format)) return false
		fs.mkdirSync(path.dirname(output), { recursive: true })
		const temporary = `${output}.download`
		fs.rmSync(temporary, { force: true })

		await new Promise((resolve, reject) => {
			const child = spawn('curl', [
				'--http1.1',
				'--fail',
				'--location',
				'--retry', '4',
				'--retry-delay', '1',
				'--connect-timeout', '20',
				'--max-time', '180',
				'--silent',
				'--show-error',
				'--output', temporary,
				source,
			], { stdio: ['ignore', 'ignore', 'inherit'] })
			child.once('error', reject)
			child.once('exit', code => code === 0 ? resolve() : reject(new Error(`curl exited ${code}: ${source}`)))
		})

		if (!isValidImage(temporary, format)) {
			fs.rmSync(temporary, { force: true })
			throw new Error(`Invalid ${format} response: ${source}`)
		}
		fs.renameSync(temporary, output)
		return true
	}
}

async function runPool(tasks, concurrency = 4) {
	let cursor = 0
	let downloaded = 0
	const workers = Array.from({ length: concurrency }, async () => {
		while (cursor < tasks.length) {
			const index = cursor++
			if (await tasks[index]()) downloaded++
			if ((index + 1) % 100 === 0 || index + 1 === tasks.length) {
				console.log(`${index + 1}/${tasks.length}`)
			}
		}
	})
	await Promise.all(workers)
	return downloaded
}

const tasks = []
for (const set of SETS) {
	for (const language of CARD_LANGUAGES) {
		const format = CARD_SOURCE_FORMATS[language] ?? 'png'
		for (let number = 1; number <= set.count; number++) {
			tasks.push(download({
				source: `${SOURCE_ROOT}/${language}/cards-by-set/${set.source}/${number}.${format}`,
				output: path.join(OUTPUT_ROOT, 'cards', language, set.source, `${number}.${format}`),
				format,
			}))
		}
	}

	for (const language of PACK_LANGUAGES) {
		for (const booster of set.boosters) {
			for (const folder of ['packs', 'packs-logos']) {
				tasks.push(download({
					source: `${SOURCE_ROOT}/${language}/${folder}/${booster}.webp`,
					output: path.join(OUTPUT_ROOT, 'packs', language, folder, `${booster}.webp`),
					format: 'webp',
				}))
			}
		}
	}
}

const downloaded = await runPool(tasks)
console.log(JSON.stringify({
	sourceCommit: SOURCE_COMMIT,
	checked: tasks.length,
	downloaded,
	outputRoot: OUTPUT_ROOT,
}, null, 2))
