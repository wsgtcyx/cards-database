#!/usr/bin/env node

/**
 * Curl-backed full public R2 verification for environments where Node fetch
 * cannot resolve the configured public origin. This is read-only.
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function readJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function parseHeaders(raw) {
	const blocks = raw.split(/\r?\n\r?\n/u).filter(block => /^HTTP\/\S+\s+\d{3}/mu.test(block))
	const block = blocks.at(-1) ?? ''
	const status = block.match(/^HTTP\/\S+\s+(\d{3})/mu)?.[1]
	const headers = {}
	for (const line of block.split(/\r?\n/u).slice(1)) {
		const separator = line.indexOf(':')
		if (separator < 0) continue
		headers[line.slice(0, separator).trim().toLowerCase()] = line.slice(separator + 1).trim()
	}
	return { status, contentType: headers['content-type'], cacheControl: headers['cache-control'] }
}

function expectedKeys(manifest) {
	const languages = [...new Set(Object.values(manifest.images.cardLanguages))]
	return languages.flatMap(language => Array.from({ length: manifest.set.total }, (_, index) => {
		const number = String(index + 1).padStart(3, '0')
		return [`${language}/tcgp/${manifest.set.id}/${number}/high.webp`, `${language}/tcgp/${manifest.set.id}/${number}/low.webp`]
	})).flat().sort()
}

async function runPool(items, worker, concurrency) {
	let cursor = 0
	const workers = Array.from({ length: concurrency }, async () => {
		while (cursor < items.length) await worker(items[cursor++])
	})
	await Promise.all(workers)
}

const manifestPath = arg('manifest')
const objectsPath = arg('objects')
const outputPath = arg('output', 'meta/pocket-source-reviews/B4/raenonx.r2.full-verify.json')
const concurrency = Number(arg('concurrency', '8'))
if (!manifestPath || !objectsPath) throw new Error('--manifest and --objects are required')
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 32) throw new Error('--concurrency must be an integer from 1 to 32')

const manifest = readJson(manifestPath)
const objects = readJson(objectsPath)
const keys = expectedKeys(manifest)
const prepared = objects.map(value => value.key).sort()
if (manifest.images.expectedObjects?.total !== keys.length) throw new Error('Manifest expected object count does not match derived R2 keys')
if (JSON.stringify(keys) !== JSON.stringify(prepared)) throw new Error('Prepared objects do not match expected R2 keys')

const origin = manifest.r2.origin.replace(/\/+$/u, '')
const failures = []
await runPool(keys, async key => {
	const url = `${origin}/${key}`
	let lastFailure
	for (let attempt = 1; attempt <= 3; attempt++) {
		try {
			const head = await execFileAsync('curl', [
				'--silent', '--show-error', '--location', '--head', '--max-time', '20', url,
			], { encoding: 'utf8', maxBuffer: 1024 * 1024 })
			const headers = parseHeaders(head.stdout)
			const body = await execFileAsync('curl', [
				'--silent', '--show-error', '--location', '--range', '0-11', '--max-time', '20',
				'--output', '-', url,
			], { encoding: 'buffer', maxBuffer: 1024 * 1024 })
			const bodyBytes = body.stdout
			const valid = /^2\d\d$/u.test(headers.status ?? '')
				&& /^image\/webp(?:;|$)/iu.test(headers.contentType ?? '')
				&& /\bmax-age=31536000\b/iu.test(headers.cacheControl ?? '')
				&& /\bimmutable\b/iu.test(headers.cacheControl ?? '')
				&& bodyBytes.length >= 12
				&& bodyBytes.subarray(0, 4).toString('ascii') === 'RIFF'
				&& bodyBytes.subarray(8, 12).toString('ascii') === 'WEBP'
			if (valid) return
			lastFailure = {
				key,
				status: headers.status,
				contentType: headers.contentType,
				cacheControl: headers.cacheControl,
				magic: bodyBytes.subarray(0, 12).toString('ascii'),
				attempts: attempt,
			}
		} catch (error) {
			lastFailure = { key, error: String(error.message ?? error), attempts: attempt }
		}
		if (attempt < 3) await new Promise(resolve => setTimeout(resolve, 500))
	}
	failures.push(lastFailure)
}, concurrency)

const report = {
	schemaVersion: 1,
	setId: manifest.set.id,
	expectedObjects: keys.length,
	checkedObjects: keys.length,
	concurrency,
	origin,
	failureCount: failures.length,
	status: failures.length ? 'fail' : 'ok',
	failures: failures.slice(0, 20),
}
fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true })
fs.writeFileSync(path.resolve(outputPath), `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({ setId: report.setId, expectedObjects: report.expectedObjects, checkedObjects: report.checkedObjects, failureCount: report.failureCount, status: report.status, output: outputPath }, null, 2))
if (failures.length) process.exitCode = 1
