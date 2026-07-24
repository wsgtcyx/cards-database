import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const SOURCE_COMMIT = 'e76e7962090dcbebbd33978a231a6227c16e7367'
const SOURCE_ROOT = `https://raw.githubusercontent.com/shelken/ptcgp-assets/${SOURCE_COMMIT}/images`
const OUTPUT_ROOT = process.env.POCKET_ASSET_INPUT ?? '/tmp/tcgp-import-assets'

const CARD_LANGUAGES = ['en-US', 'zh-TW']
const PACK_LANGUAGES = ['en-US', 'fr-FR', 'es-ES', 'it-IT', 'de-DE', 'pt-BR', 'zh-TW', 'ko-KR', 'ja-JP']
const SETS = [
	{ source: 'B2b', count: 117, boosters: ['B2b_1'] },
	{ source: 'B3', count: 234, boosters: ['B3_1'] },
	{ source: 'B3a', count: 109, boosters: ['B3a_1'] },
	{ source: 'B3b', count: 106, boosters: ['B3b_1'] },
	{
		source: 'PROMO-B',
		count: 78,
		boosters: Array.from({ length: 10 }, (_, index) => `PROMO-B_${index + 1}`),
	},
]

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
		for (let number = 1; number <= set.count; number++) {
			tasks.push(download({
				source: `${SOURCE_ROOT}/${language}/cards-by-set/${set.source}/${number}.png`,
				output: path.join(OUTPUT_ROOT, 'cards', language, set.source, `${number}.png`),
				format: 'png',
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
