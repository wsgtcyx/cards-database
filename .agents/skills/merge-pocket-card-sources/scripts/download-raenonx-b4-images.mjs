#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function arg(name, fallback) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function sha256(buffer) {
	return crypto.createHash('sha256').update(buffer).digest('hex')
}

import crypto from 'node:crypto'

async function runPool(items, worker, concurrency = 8) {
	let cursor = 0
	const workers = Array.from({ length: concurrency }, async () => {
		while (cursor < items.length) await worker(items[cursor++])
	})
	await Promise.all(workers)
}

const snapshotPath = arg('snapshot', 'meta/pocket-source-reviews/B4/raenonx.snapshot.json')
const outputArg = arg('output')
if (!outputArg) throw new Error('--output is required')
const outputRoot = path.resolve(outputArg)
const snapshot = loadJson(snapshotPath)
const entries = snapshot.imageManifest.filter(value => ['fr', 'es', 'pt', 'zh'].includes(value.locale))
if (entries.length !== 932) throw new Error(`Expected 932 RaenonX target image entries, got ${entries.length}`)
const downloaded = []
const timeoutMs = Number(arg('timeout-ms', '30000'))
const concurrency = Number(arg('concurrency', '4'))
await runPool(entries, async entry => {
	const target = path.join(outputRoot, 'cards', entry.locale, 'B4', `${entry.number}.png`)
	fs.mkdirSync(path.dirname(target), { recursive: true })
	let buffer
	if (fs.existsSync(target)) {
		const existing = fs.readFileSync(target)
		if (existing.length >= 32 && existing.subarray(0, 8).toString('hex') === '89504e470d0a1a0a') buffer = existing
	}
	for (let attempt = 1; !buffer && attempt <= 3; attempt++) {
		try {
			const response = await fetch(entry.url, { signal: AbortSignal.timeout(timeoutMs) })
			if (!response.ok) throw new Error(`${entry.url}: ${response.status} ${response.statusText}`)
			const contentType = response.headers.get('content-type') ?? ''
			if (!/^image\/png(?:;|$)/iu.test(contentType)) throw new Error(`${entry.url}: expected image/png, got ${contentType}`)
			const candidate = Buffer.from(await response.arrayBuffer())
			if (candidate.length < 32 || candidate.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
				throw new Error(`${entry.url}: invalid PNG signature`)
			}
			buffer = candidate
		} catch (error) {
			if (attempt === 3) throw error
		}
	}
	fs.writeFileSync(target, buffer)
	downloaded.push({
		id: entry.id,
		number: entry.number,
		locale: entry.locale,
		url: entry.url,
		file: path.relative(outputRoot, target).split(path.sep).join('/'),
		bytes: buffer.length,
		sha256: sha256(buffer),
	})
}, concurrency)
downloaded.sort((left, right) => left.file.localeCompare(right.file))
fs.writeFileSync(path.join(outputRoot, 'source-manifest.json'), `${JSON.stringify(downloaded, null, 2)}\n`)
console.log(JSON.stringify({
	setId: 'B4',
	images: downloaded.length,
	locales: ['fr', 'es', 'pt', 'zh'],
	outputRoot,
	status: 'ok',
}, null, 2))
