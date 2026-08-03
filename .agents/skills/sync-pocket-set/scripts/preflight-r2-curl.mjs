#!/usr/bin/env node

/**
 * Curl-backed R2 collision preflight for environments where Node fetch cannot
 * resolve the public R2 origin but the configured curl proxy can. This is a
 * read-only fallback; every expected key must still return 404 before upload.
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

function arg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function expectedKeys(manifest) {
	const languages = [...new Set(Object.values(manifest.images.cardLanguages))]
	return languages.flatMap(language => Array.from({ length: manifest.set.total }, (_, index) => {
		const number = String(index + 1).padStart(3, '0')
		return [`${language}/tcgp/${manifest.set.id}/${number}/high.webp`, `${language}/tcgp/${manifest.set.id}/${number}/low.webp`]
	})).flat()
}

async function runPool(items, worker, concurrency = 16) {
	let cursor = 0
	const workers = Array.from({ length: concurrency }, async () => {
		while (cursor < items.length) await worker(items[cursor++])
	})
	await Promise.all(workers)
}

const manifestPath = arg('manifest')
const objectsPath = arg('objects')
const outputPath = arg('output')
if (!manifestPath || !objectsPath) throw new Error('--manifest and --objects are required')
const manifest = loadJson(manifestPath)
const objects = loadJson(objectsPath)
const keys = expectedKeys(manifest).sort()
const prepared = objects.map(value => value.key).sort()
if (JSON.stringify(keys) !== JSON.stringify(prepared)) throw new Error('Prepared objects do not match expected R2 keys')
const origin = manifest.r2.origin.replace(/\/+$/u, '')
const collisions = []
const failures = []
await runPool(keys, async key => {
	const url = `${origin}/${key}`
	try {
		const result = await execFileAsync('curl', [
			'--silent', '--show-error', '--location', '--head', '--max-time', '20',
			'--output', '/dev/null', '--write-out', '%{http_code}', url,
		], { maxBuffer: 1024 * 1024 })
		const status = result.stdout.trim()
		if (status === '404') return
		if (/^2\d\d$/u.test(status)) collisions.push({ key, status })
		else failures.push({ key, status })
	} catch (error) {
		failures.push({ key, error: String(error.message ?? error) })
	}
})
if (failures.length) throw new Error(`R2 HEAD failures (${failures.length}):\n${JSON.stringify(failures.slice(0, 20), null, 2)}`)
if (collisions.length) throw new Error(`R2 collisions (${collisions.length}):\n${collisions.slice(0, 20).map(value => `${value.key} ${value.status}`).join('\n')}`)
const summary = {
	set: manifest.set.id,
	objects: keys.length,
	checked: keys.length,
	collisions: 0,
	status: 'ok',
}
if (outputPath) {
	fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true })
	fs.writeFileSync(path.resolve(outputPath), `${JSON.stringify(summary, null, 2)}\n`)
}
console.log(JSON.stringify(summary, null, 2))
