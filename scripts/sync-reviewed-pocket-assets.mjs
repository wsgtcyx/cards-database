#!/usr/bin/env node

/**
 * Prepare, collision-check, upload, and publicly verify reviewed Pocket booster assets.
 *
 * The B4 source files are review artifacts, not discovery inputs. Their repository
 * bytes, every downloaded PNG, every derived WebP, the R2 preflight, and both the
 * cache-busting and bare public responses are SHA-256 bound before metadata may
 * reference the final URLs.
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const R2_ORIGIN = 'https://game.pokemontcgpocket.app'
const R2_BUCKET = 'game'
const SET_ID = 'B4'
const BOOSTER_ID = 'ruler-of-the-skies'
const LOCALES = Object.freeze(['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw'])
const MAX_SOURCE_BYTES = 2 * 1024 * 1024
const CACHE_CONTROL = 'public, max-age=31536000, immutable'
const SOURCE_FILES = Object.freeze({
	logo: {
		file: 'meta/pocket-source-reviews/B4/localized-booster-assets/2026-08-09-pokebase/b4-ruler-of-the-skies-logo.source.json',
		sha256: 'c4cf2b8936b4616d7e7b9479f73b78493c78271533cfee645f4f47125514956a',
	},
	artwork_front: {
		file: 'meta/pocket-source-reviews/B4/localized-booster-assets/2026-08-09-pokebase/b4-ruler-of-the-skies-artwork-front.source.json',
		sha256: '1c93521a362b8d98a77fd59e3ce8b7037aa8869fa8e0f6e3ab270b593de26b22',
	},
})

function sha256(value) {
	return crypto.createHash('sha256').update(value).digest('hex')
}

function artifactDigest(value) {
	const copy = { ...value }
	delete copy.artifactSha256
	return sha256(Buffer.from(JSON.stringify(copy), 'utf8'))
}

function assertArtifactDigest(value, file) {
	if (!value || typeof value !== 'object' || value.artifactSha256 !== artifactDigest(value)) {
		throw new Error(`Artifact digest mismatch: ${file}`)
	}
	return value
}

function resolveInside(root, relative, label) {
	if (typeof relative !== 'string' || !relative || path.isAbsolute(relative) || relative.includes('\0')) {
		throw new Error(`${label} must be a non-empty relative path`)
	}
	const resolvedRoot = path.resolve(root)
	const resolved = path.resolve(resolvedRoot, relative)
	const rel = path.relative(resolvedRoot, resolved)
	if (!rel || rel.startsWith(`..${path.sep}`) || path.isAbsolute(rel)) throw new Error(`${label} escapes its root`)
	return resolved
}

export function assertPokebaseAssetUrl(value) {
	let parsed
	try {
		parsed = new URL(value)
	} catch {
		throw new Error(`Invalid PokéBase asset URL: ${String(value)}`)
	}
	if (
		parsed.protocol !== 'https:' || parsed.hostname !== 'i.pokebase.app' || parsed.port ||
		parsed.username || parsed.password || parsed.search || parsed.hash ||
		!/^\/pokemon-tcg-pocket\/[A-Za-z0-9_%.-]+\.png$/u.test(parsed.pathname)
	) throw new Error(`Unexpected PokéBase asset URL: ${value}`)
	return parsed.href
}

export function boosterAssetKey(locale, field) {
	if (!LOCALES.includes(locale)) throw new Error(`Unsupported booster asset locale: ${String(locale)}`)
	if (field !== 'logo' && field !== 'artwork_front') throw new Error(`Unsupported booster asset field: ${String(field)}`)
	return `${locale}/tcgp/${SET_ID}/boosters/${BOOSTER_ID}/${field}.webp`
}

export function assertBoosterAssetKey(value, locale, field) {
	const expected = boosterAssetKey(locale, field)
	if (value !== expected) throw new Error(`Unexpected booster R2 key: ${String(value)} (expected ${expected})`)
	return value
}

function parseArgs(argv) {
	const phase = argv.find(value => !value.startsWith('--'))
	const options = {
		phase,
		write: argv.includes('--write'),
		runId: '2026-08-09-b4-reviewed-booster-assets',
	}
	for (let index = 0; index < argv.length; index += 1) {
		const arg = argv[index]
		if (arg === '--run-id' || arg.startsWith('--run-id=')) {
			options.runId = arg.startsWith('--run-id=') ? arg.slice('--run-id='.length) : argv[++index]
		}
		if (arg === '--help') options.help = true
	}
	if (!/^[A-Za-z0-9._-]+$/u.test(options.runId)) throw new Error('run id contains unsupported characters')
	return options
}

function pathsFor(options) {
	const runDir = path.join(ROOT, 'meta', 'pocket-source-reviews', 'B4', 'localized-booster-assets', options.runId)
	const workRoot = path.resolve(process.env.POCKET_ASSET_SYNC_WORK_ROOT || path.join(os.tmpdir(), `pocket-assets-${options.runId}`))
	const tmpRoot = path.resolve(os.tmpdir())
	if (workRoot !== tmpRoot && !workRoot.startsWith(`${tmpRoot}${path.sep}`)) {
		throw new Error('POCKET_ASSET_SYNC_WORK_ROOT must be inside os.tmpdir()')
	}
	return { runDir, workRoot }
}

async function writeArtifact(file, value) {
	const bound = { ...value, artifactSha256: artifactDigest(value) }
	await fsp.mkdir(path.dirname(file), { recursive: true })
	const temporary = `${file}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`
	await fsp.writeFile(temporary, `${JSON.stringify(bound, null, 2)}\n`, { flag: 'wx' })
	await fsp.rename(temporary, file)
	return bound
}

function readArtifact(file) {
	return assertArtifactDigest(JSON.parse(fs.readFileSync(file, 'utf8')), file)
}

function readPinnedSource(config) {
	const file = resolveInside(ROOT, config.file, 'source artifact')
	const bytes = fs.readFileSync(file)
	if (sha256(bytes) !== config.sha256) throw new Error(`Pinned source file changed: ${config.file}`)
	return { file, relativeFile: config.file, sha256: config.sha256, value: JSON.parse(bytes.toString('utf8')) }
}

async function readLimitedBody(response) {
	const reader = response.body?.getReader()
	if (!reader) return Buffer.alloc(0)
	const chunks = []
	let total = 0
	while (true) {
		const { done, value } = await reader.read()
		if (done) break
		total += value.length
		if (total > MAX_SOURCE_BYTES) throw new Error(`Response exceeds ${MAX_SOURCE_BYTES} bytes`)
		chunks.push(Buffer.from(value))
	}
	return Buffer.concat(chunks)
}

async function fetchWithRetry(url, init = {}, allowed = []) {
	for (let attempt = 0; ; attempt += 1) {
		try {
			const response = await fetch(url, { redirect: 'error', ...init })
			if (response.ok || allowed.includes(response.status)) return response
			throw new Error(`HTTP ${response.status}`)
		} catch (error) {
			if (attempt >= 3) throw new Error(`Fetch failed for ${url}: ${error instanceof Error ? error.message : String(error)}`)
			await new Promise(resolve => setTimeout(resolve, 400 * 2 ** attempt))
		}
	}
}

async function loadSharp() {
	const candidates = [
		process.env.SHARP_ENTRY,
		path.join(ROOT, '..', 'tcgp', 'node_modules', 'sharp', 'lib', 'index.js'),
		path.join(ROOT, 'node_modules', 'sharp', 'lib', 'index.js'),
	].filter(Boolean)
	const entry = candidates.find(candidate => fs.existsSync(candidate))
	if (!entry) throw new Error(`sharp not found; checked ${candidates.join(', ')}`)
	return (await import(pathToFileURL(entry).href)).default
}

function reviewedEntries() {
	const logo = readPinnedSource(SOURCE_FILES.logo)
	assertArtifactDigest(logo.value, logo.relativeFile)
	const artwork = readPinnedSource(SOURCE_FILES.artwork_front)
	if (logo.value.schemaVersion !== 1 || !Array.isArray(logo.value.entries) || logo.value.entries.length !== 6) {
		throw new Error('Logo source artifact must contain exactly six entries')
	}
	if (artwork.value.schemaVersion !== 1 || !Array.isArray(artwork.value.items) || artwork.value.items.length !== 6) {
		throw new Error('Artwork source artifact must contain exactly six entries')
	}
	const records = []
	for (const entry of logo.value.entries) {
		if (entry.setId !== SET_ID || entry.boosterId !== BOOSTER_ID || entry.field !== 'logo') throw new Error('Logo source scope mismatch')
		if (!LOCALES.includes(entry.locale) || entry.r2Key !== boosterAssetKey(entry.locale, 'logo')) throw new Error('Logo locale/key mismatch')
		if (entry.desiredUrl !== `${R2_ORIGIN}/${entry.r2Key}`) throw new Error('Logo desired URL mismatch')
		assertPokebaseAssetUrl(entry.sourceUrl)
		if (!/^[a-f0-9]{64}$/u.test(entry.sourceSha256) || !Number.isInteger(entry.sourceBytes) || entry.sourceBytes < 1) throw new Error('Invalid logo source fingerprint')
		if (entry.width !== 256 || entry.height !== 113 || entry.contentType !== 'image/png' || entry.visualLanguageCheck?.status !== 'pass') throw new Error('Logo source review mismatch')
		records.push({
			field: 'logo', locale: entry.locale, sourceUrl: entry.sourceUrl, sourcePageUrl: entry.sourcePageUrl,
			sourceSha256: entry.sourceSha256, sourceBytes: entry.sourceBytes, sourceWidth: entry.width,
			sourceHeight: entry.height, desiredUrl: entry.desiredUrl, key: entry.r2Key, processing: null,
		})
	}
	for (const entry of artwork.value.items) {
		if (entry.set !== SET_ID || entry.boosterId !== BOOSTER_ID || entry.kind !== 'booster-artwork-front-source') throw new Error('Artwork source scope mismatch')
		if (!LOCALES.includes(entry.locale) || entry.visualCheck?.status !== 'pass' || entry.visualCheck?.languageBearingTextVisible !== false) throw new Error('Artwork neutrality review mismatch')
		assertPokebaseAssetUrl(entry.sourceUrl)
		const crop = entry.processing?.crop
		if (entry.sha256 !== 'ba69025144421fb7597882af6c06131ae000c08707c1a0a352ed2b9fcd4868e2' || entry.bytes !== 67074 || entry.width !== 256 || entry.height !== 256 || entry.mime !== 'image/png') throw new Error('Artwork source fingerprint mismatch')
		if (JSON.stringify(crop) !== JSON.stringify({ left: 48, top: 0, width: 160, height: 256 }) || entry.processing?.derivedPngSha256 !== '8aafa2e6b3dde042710b7388e134a801c4cb50d813642f951a796f764699b03e') throw new Error('Artwork crop recipe mismatch')
		const key = boosterAssetKey(entry.locale, 'artwork_front')
		records.push({
			field: 'artwork_front', locale: entry.locale, sourceUrl: entry.sourceUrl, sourcePageUrl: entry.sourcePage,
			sourceSha256: entry.sha256, sourceBytes: entry.bytes, sourceWidth: entry.width,
			sourceHeight: entry.height, desiredUrl: `${R2_ORIGIN}/${key}`, key, processing: { operation: 'crop', ...crop },
		})
	}
	const unique = new Set(records.map(record => `${record.field}|${record.locale}`))
	if (unique.size !== 12) throw new Error('Reviewed booster asset records are incomplete or duplicated')
	return { sources: [logo, artwork], records }
}

async function mapWithConcurrency(values, concurrency, fn) {
	const output = new Array(values.length)
	let next = 0
	await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, async () => {
		while (true) {
			const index = next++
			if (index >= values.length) return
			output[index] = await fn(values[index], index)
		}
	}))
	return output
}

async function prepare(options) {
	const { runDir, workRoot } = pathsFor(options)
	const sharp = await loadSharp()
	const reviewed = reviewedEntries()
	const sourceCache = new Map()
	const objects = await mapWithConcurrency(reviewed.records, 6, async record => {
		let source = sourceCache.get(record.sourceUrl)
		if (!source) {
			source = (async () => {
			const response = await fetchWithRetry(record.sourceUrl)
			if (response.url !== record.sourceUrl || !/^image\/png(?:;|$)/iu.test(response.headers.get('content-type') || '')) throw new Error(`Unexpected source response for ${record.sourceUrl}`)
			const body = await readLimitedBody(response)
			if (body.length !== record.sourceBytes || sha256(body) !== record.sourceSha256 || body.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Source bytes changed: ${record.sourceUrl}`)
			const metadata = await sharp(body).metadata()
			if (metadata.format !== 'png' || metadata.width !== record.sourceWidth || metadata.height !== record.sourceHeight) throw new Error(`Source dimensions changed: ${record.sourceUrl}`)
			return body
		})()
			sourceCache.set(record.sourceUrl, source)
		}
		const input = await source
		let pipeline = sharp(input)
		if (record.processing) pipeline = pipeline.extract({ left: record.processing.left, top: record.processing.top, width: record.processing.width, height: record.processing.height })
		const output = await pipeline.webp({ quality: 90, effort: 4 }).toBuffer({ resolveWithObject: true })
		if (output.info.format !== 'webp') throw new Error(`Could not prepare WebP: ${record.key}`)
		const relativePath = `r2/${record.key}`
		const file = resolveInside(workRoot, relativePath, 'prepared asset')
		await fsp.mkdir(path.dirname(file), { recursive: true })
		await fsp.writeFile(file, output.data)
		return {
			field: record.field, locale: record.locale, key: assertBoosterAssetKey(record.key, record.locale, record.field),
			path: relativePath, desiredUrl: record.desiredUrl, bytes: output.data.length, sha256: sha256(output.data),
			width: output.info.width, height: output.info.height, sourceUrl: record.sourceUrl,
			sourceSha256: record.sourceSha256, processing: record.processing,
		}
	})
	objects.sort((left, right) => left.key.localeCompare(right.key))
	const manifest = await writeArtifact(path.join(runDir, 'r2-manifest.json'), {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		origin: R2_ORIGIN,
		bucket: R2_BUCKET,
		setId: SET_ID,
		boosterId: BOOSTER_ID,
		workRoot: 'runtime-work-root',
		sources: reviewed.sources.map(source => ({ file: source.relativeFile, sha256: source.sha256 })),
		objects,
	})
	console.log(JSON.stringify({ phase: 'prepare', objects: objects.length, artifactSha256: manifest.artifactSha256, workRoot }, null, 2))
}

function loadManifest(options) {
	const { runDir } = pathsFor(options)
	const manifest = readArtifact(path.join(runDir, 'r2-manifest.json'))
	if (manifest.origin !== R2_ORIGIN || manifest.bucket !== R2_BUCKET || manifest.setId !== SET_ID || manifest.boosterId !== BOOSTER_ID || manifest.objects?.length !== 12) throw new Error('R2 manifest scope mismatch')
	for (const source of manifest.sources || []) {
		const expected = Object.values(SOURCE_FILES).find(item => item.file === source.file)
		if (!expected || source.sha256 !== expected.sha256) throw new Error(`R2 manifest source mismatch: ${source.file}`)
		readPinnedSource(expected)
	}
	for (const object of manifest.objects) {
		assertBoosterAssetKey(object.key, object.locale, object.field)
		if (object.path !== `r2/${object.key}` || object.desiredUrl !== `${R2_ORIGIN}/${object.key}`) throw new Error(`R2 manifest path mismatch: ${object.key}`)
		if (!/^[a-f0-9]{64}$/u.test(object.sha256) || !Number.isInteger(object.bytes) || object.bytes < 1) throw new Error(`R2 manifest fingerprint invalid: ${object.key}`)
		if ((object.field === 'logo' && (object.width !== 256 || object.height !== 113)) || (object.field === 'artwork_front' && (object.width !== 160 || object.height !== 256))) throw new Error(`R2 manifest dimensions invalid: ${object.key}`)
	}
	return manifest
}

async function remoteFingerprint(url) {
	const response = await fetchWithRetry(url, {}, [404])
	if (response.status === 404) return { status: 404, sha256: null, bytes: 0, matchesHeaders: false }
	const body = await readLimitedBody(response)
	const cacheControl = response.headers.get('cache-control') || ''
	const contentType = response.headers.get('content-type') || ''
	return {
		status: response.status,
		sha256: sha256(body),
		bytes: body.length,
		matchesHeaders: response.ok && /^image\/webp(?:;|$)/iu.test(contentType) && cacheControl === CACHE_CONTROL && body.subarray(0, 4).toString('ascii') === 'RIFF' && body.subarray(8, 12).toString('ascii') === 'WEBP',
		contentType,
		cacheControl,
	}
}

async function remoteHeadFingerprint(url) {
	const response = await fetchWithRetry(url, { method: 'HEAD' }, [404])
	const cacheControl = response.headers.get('cache-control') || ''
	const contentType = response.headers.get('content-type') || ''
	return {
		status: response.status,
		sha256: null,
		bytes: null,
		matchesHeaders: response.ok && /^image\/webp(?:;|$)/iu.test(contentType) && cacheControl === CACHE_CONTROL,
		contentType,
		cacheControl,
		method: 'HEAD',
	}
}

function isExactRemote(remote, object) {
	return remote.status === 200 && remote.matchesHeaders && remote.sha256 === object.sha256 && remote.bytes === object.bytes
}

export async function probePreflightRemote(url, object, {
	headFingerprint = remoteHeadFingerprint,
	bodyFingerprint = remoteFingerprint,
} = {}) {
	const bareHead = await headFingerprint(url)
	const cacheBusting = await bodyFingerprint(`${url}?preflight=${object.sha256.slice(0, 16)}`)
	const bare = bareHead.status === 200 ? await bodyFingerprint(url) : bareHead
	const absent = bareHead.status === 404 && cacheBusting.status === 404
	const reusable = bareHead.status === 200 && isExactRemote(bare, object) && isExactRemote(cacheBusting, object)
	return { status: absent ? 'new' : reusable ? 'exact-reuse' : 'collision', bareHead, bare, cacheBusting }
}

async function preflight(options) {
	const { runDir } = pathsFor(options)
	const manifest = loadManifest(options)
	const checks = await mapWithConcurrency(manifest.objects, 12, async object => {
		return { key: object.key, ...await probePreflightRemote(`${R2_ORIGIN}/${object.key}`, object) }
	})
	const collisions = checks.filter(check => check.status === 'collision')
	const result = await writeArtifact(path.join(runDir, 'r2-preflight.json'), {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		manifestSha256: manifest.artifactSha256,
		objects: manifest.objects.length,
		newObjects: checks.filter(check => check.status === 'new').length,
		reusedObjects: checks.filter(check => check.status === 'exact-reuse').length,
		checks,
		collisions: collisions.map(check => check.key),
		status: collisions.length ? 'blocked' : 'ok',
	})
	console.log(JSON.stringify(result, null, 2))
	if (collisions.length) throw new Error(`R2 preflight blocked by ${collisions.length} collisions`)
}

function runCommand(command, args) {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] })
		let stdout = ''
		let stderr = ''
		child.stdout.on('data', chunk => { stdout += chunk })
		child.stderr.on('data', chunk => { stderr += chunk })
		child.on('error', reject)
		child.on('close', code => code === 0 ? resolve({ stdout, stderr }) : reject(new Error(`${command} exited ${code}: ${stderr || stdout}`)))
	})
}

async function upload(options) {
	if (!options.write) throw new Error('upload requires --write')
	if (!process.env.CLOUDFLARE_API_TOKEN) throw new Error('CLOUDFLARE_API_TOKEN is not loaded')
	const { runDir, workRoot } = pathsFor(options)
	const manifest = loadManifest(options)
	const preflight = readArtifact(path.join(runDir, 'r2-preflight.json'))
	if (preflight.status !== 'ok' || preflight.manifestSha256 !== manifest.artifactSha256) throw new Error('upload requires a green preflight bound to this manifest')
	const wrangler = process.env.WRANGLER_BIN || '/usr/local/bin/wrangler'
	const results = await mapWithConcurrency(manifest.objects, 6, async object => {
		const file = resolveInside(workRoot, object.path, 'upload input')
		const body = await fsp.readFile(file)
		if (body.length !== object.bytes || sha256(body) !== object.sha256) throw new Error(`Upload input changed: ${object.key}`)
		let remote = await remoteFingerprint(`${R2_ORIGIN}/${object.key}?upload=${object.sha256.slice(0, 16)}`)
		if (isExactRemote(remote, object)) return { key: object.key, status: 'exact-reuse' }
		if (remote.status !== 404) throw new Error(`R2 object appeared after preflight: ${object.key}`)
		remote = await remoteFingerprint(`${R2_ORIGIN}/${object.key}?upload-cas=${object.sha256.slice(16, 32)}`)
		if (remote.status !== 404) throw new Error(`R2 object appeared immediately before upload: ${object.key}`)
		await runCommand(wrangler, ['r2', 'object', 'put', `${R2_BUCKET}/${object.key}`, `--file=${file}`, '--content-type=image/webp', `--cache-control=${CACHE_CONTROL}`, '--remote'])
		return { key: object.key, status: 'uploaded' }
	})
	const summary = await writeArtifact(path.join(runDir, 'upload-summary.json'), {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		manifestSha256: manifest.artifactSha256,
		preflightSha256: preflight.artifactSha256,
		results,
	})
	console.log(JSON.stringify({ phase: 'upload', uploaded: results.filter(item => item.status === 'uploaded').length, reused: results.filter(item => item.status === 'exact-reuse').length, artifactSha256: summary.artifactSha256 }, null, 2))
}

async function verify(options) {
	const { runDir, workRoot } = pathsFor(options)
	const manifest = loadManifest(options)
	const preflight = readArtifact(path.join(runDir, 'r2-preflight.json'))
	if (preflight.status !== 'ok' || preflight.manifestSha256 !== manifest.artifactSha256) throw new Error('verify requires a green preflight bound to this manifest')
	const checks = []
	await mapWithConcurrency(manifest.objects, 12, async object => {
		const local = await fsp.readFile(resolveInside(workRoot, object.path, 'verify input'))
		if (local.length !== object.bytes || sha256(local) !== object.sha256) throw new Error(`Verify input changed: ${object.key}`)
		for (const mode of ['cache-busting', 'bare']) {
			const url = mode === 'bare' ? `${R2_ORIGIN}/${object.key}` : `${R2_ORIGIN}/${object.key}?v=${object.sha256.slice(0, 16)}`
			const remote = await remoteFingerprint(url)
			checks.push({ key: object.key, mode, url, expectedSha256: object.sha256, ...remote, ok: isExactRemote(remote, object) })
		}
	})
	checks.sort((left, right) => left.key.localeCompare(right.key) || left.mode.localeCompare(right.mode))
	const failures = checks.filter(check => !check.ok)
	const result = await writeArtifact(path.join(runDir, 'r2-verify.json'), {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		manifestSha256: manifest.artifactSha256,
		preflightSha256: preflight.artifactSha256,
		objects: manifest.objects.length,
		checks,
		failures: failures.map(check => ({ key: check.key, mode: check.mode, status: check.status, expectedSha256: check.expectedSha256, actualSha256: check.sha256 })),
		status: failures.length ? 'blocked' : 'ok',
	})
	console.log(JSON.stringify({ phase: 'verify', objects: manifest.objects.length, checks: checks.length, failures: failures.length, status: result.status, artifactSha256: result.artifactSha256 }, null, 2))
	if (failures.length) throw new Error(`R2 verification failed for ${failures.length} responses`)
}

async function main() {
	const options = parseArgs(process.argv.slice(2))
	if (options.help || !options.phase) {
		console.log('Usage: node scripts/sync-reviewed-pocket-assets.mjs <prepare|preflight|upload|verify> [--run-id id] [--write]')
		return
	}
	if (options.phase === 'prepare') return prepare(options)
	if (options.phase === 'preflight') return preflight(options)
	if (options.phase === 'upload') return upload(options)
	if (options.phase === 'verify') return verify(options)
	throw new Error(`Unknown phase: ${options.phase}`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	main().catch(error => {
		console.error(error instanceof Error ? error.message : String(error))
		process.exitCode = 1
	})
}
