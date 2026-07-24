#!/usr/bin/env node

import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function expectedKeys(manifest) {
	const keys = []
	const cardLanguages = [...new Set(Object.values(manifest.images.cardLanguages))]
	const packLanguages = [...new Set(Object.values(manifest.images.packLanguages))]

	for (const language of cardLanguages) {
		for (let number = 1; number <= manifest.set.total; number++) {
			const localId = String(number).padStart(3, '0')
			for (const size of ['high', 'low']) {
				keys.push(`${language}/tcgp/${manifest.set.id}/${localId}/${size}.webp`)
			}
		}
	}

	for (const booster of manifest.set.boosters) {
		for (const language of packLanguages) {
			for (const file of ['logo.webp', 'artwork_front.webp']) {
				keys.push(`${language}/tcgp/${manifest.set.id}/boosters/${booster.id}/${file}`)
			}
		}
	}
	return keys.sort()
}

function publicSampleKeys(manifest) {
	const cardLanguages = [...new Set(Object.values(manifest.images.cardLanguages))]
	const numbers = [...new Set([
		1,
		Math.ceil(manifest.set.total / 2),
		manifest.set.total,
	])]
	const keys = []

	for (const language of cardLanguages) {
		for (const number of numbers) {
			for (const size of ['high', 'low']) {
				keys.push(`${language}/tcgp/${manifest.set.id}/${String(number).padStart(3, '0')}/${size}.webp`)
			}
		}
	}

	const packLanguages = [...new Set(Object.values(manifest.images.packLanguages))]
	for (const booster of manifest.set.boosters) {
		for (const language of packLanguages) {
			for (const file of ['logo.webp', 'artwork_front.webp']) {
				keys.push(`${language}/tcgp/${manifest.set.id}/boosters/${booster.id}/${file}`)
			}
		}
	}
	return keys
}

async function verifyPublicObject(origin, key) {
	const url = `${origin}/${key}`
	const response = await fetch(url, {
		headers: { Range: 'bytes=0-11' },
		signal: AbortSignal.timeout(30_000),
	})
	assert.ok(
		response.status === 200 || response.status === 206,
		`${url}: expected 200/206, got ${response.status}`,
	)
	assert.match(
		response.headers.get('content-type') ?? '',
		/^image\/webp(?:;|$)/i,
		`${url}: incorrect Content-Type`,
	)
	const cacheControl = response.headers.get('cache-control') ?? ''
	assert.match(cacheControl, /\bmax-age=31536000\b/i, `${url}: incorrect Cache-Control`)
	assert.match(cacheControl, /\bimmutable\b/i, `${url}: Cache-Control is not immutable`)
	const bytes = Buffer.from(await response.arrayBuffer())
	assert.ok(bytes.length >= 12, `${url}: response is too short`)
	assert.equal(bytes.subarray(0, 4).toString('ascii'), 'RIFF', `${url}: missing RIFF signature`)
	assert.equal(bytes.subarray(8, 12).toString('ascii'), 'WEBP', `${url}: missing WEBP signature`)
}

async function runPool(items, worker, concurrency = 8) {
	let cursor = 0
	const workers = Array.from({ length: concurrency }, async () => {
		while (cursor < items.length) {
			const item = items[cursor++]
			await worker(item)
		}
	})
	await Promise.all(workers)
}

const manifestPath = getArg('manifest')
if (!manifestPath) throw new Error('--manifest is required')
const manifest = loadJson(manifestPath)
const keys = expectedKeys(manifest)
const configuredExpected = manifest.images.expectedObjects?.total
assert.equal(
	configuredExpected,
	keys.length,
	'manifest.images.expectedObjects.total does not match the derived object count',
)

const objectsPath = getArg('objects')
if (objectsPath) {
	const objects = loadJson(objectsPath)
	const preparedKeys = objects.map(object => object.key).sort()
	assert.deepEqual(preparedKeys, keys, 'Prepared object manifest does not exactly match expected R2 keys')
}

const receiptsRoot = getArg('receipts')
if (receiptsRoot) {
	for (const key of keys) {
		assert.ok(
			fs.existsSync(path.join(path.resolve(receiptsRoot), `${key}.ok`)),
			`Missing upload receipt: ${key}.ok`,
		)
	}
}

const origin = manifest.r2.origin.replace(/\/$/, '')
const samples = publicSampleKeys(manifest)
await runPool(samples, key => verifyPublicObject(origin, key))

console.log(JSON.stringify({
	set: manifest.set.id,
	expectedObjects: keys.length,
	preparedManifest: Boolean(objectsPath),
	uploadReceipts: Boolean(receiptsRoot),
	publicObjectsChecked: samples.length,
	status: 'ok',
}, null, 2))
