#!/usr/bin/env node

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

async function runPool(items, worker, concurrency = 16) {
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
const objectsPath = getArg('objects')
if (!manifestPath || !objectsPath) {
	throw new Error('--manifest and --objects are required')
}

const manifest = loadJson(manifestPath)
const objects = loadJson(objectsPath)
const origin = manifest.r2.origin.replace(/\/$/, '')
const receiptsRoot = getArg('receipts')
const derivedKeys = expectedKeys(manifest)
const preparedKeys = objects.map(object => object.key).sort()
if (manifest.images.expectedObjects?.total !== derivedKeys.length) {
	throw new Error('manifest.images.expectedObjects.total does not match the derived object count')
}
if (JSON.stringify(preparedKeys) !== JSON.stringify(derivedKeys)) {
	throw new Error('Prepared object manifest does not exactly match the keys derived from the set manifest')
}
const pending = objects.filter(object =>
	!receiptsRoot || !fs.existsSync(path.join(path.resolve(receiptsRoot), `${object.key}.ok`)),
)
const collisions = []

await runPool(pending, async object => {
	const url = `${origin}/${object.key}`
	const response = await fetch(url, {
		method: 'HEAD',
		signal: AbortSignal.timeout(30_000),
	})
	if (response.status === 404) return
	if (response.ok) {
		collisions.push(object.key)
		return
	}
	throw new Error(`${url}: unexpected preflight status ${response.status}`)
})

if (collisions.length) {
	throw new Error(
		`Refusing to overwrite ${collisions.length} existing R2 objects without local receipts:\n`
		+ collisions.slice(0, 20).join('\n'),
	)
}

console.log(JSON.stringify({
	set: manifest.set.id,
	objects: objects.length,
	knownUploaded: objects.length - pending.length,
	checkedForCollisions: pending.length,
	collisions: 0,
	status: 'ok',
}, null, 2))
