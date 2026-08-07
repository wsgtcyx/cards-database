#!/usr/bin/env node

/**
 * Sparse localized-card-image sync for existing Pocket sets.
 *
 * This deliberately does not use English bytes as a localized source.  It
 * builds an auditable target list, downloads only source-backed pairs, prepares
 * the existing R2 high/low contract, performs collision-safe uploads, and then
 * patches only image fields in the API/downstream repositories.
 */

import crypto from 'node:crypto'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const DOWNSTREAM = path.resolve(ROOT, '../tcgp')
const DATA_ROOT = path.join(ROOT, 'data', 'Pokémon TCG Pocket')
const ARTIFACT_DIR = path.join(ROOT, 'meta', 'pocket-source-reviews', 'localized-images')
const RUN_ID = process.env.POCKET_IMAGE_SYNC_RUN_ID || '2026-08-03'
const RUN_DIR = path.join(ARTIFACT_DIR, RUN_ID)
const WORK_ROOT = path.resolve(
	process.env.POCKET_IMAGE_SYNC_WORK_ROOT || path.join(os.tmpdir(), `pocket-localized-images-${RUN_ID}`),
)
const R2_ORIGIN = 'https://game.pokemontcgpocket.app'
const R2_BUCKET = 'game'
const RAENONX_IMAGE_BASE = 'https://cdn.raenonx.cc/api/image/ptcgp?format=png&url=/images/game/card/full'
const RAENONX_MASTER_URL = 'https://ptcgp.raenonx.cc/api/data/global-master'
const RAENONX_MASTER_FALLBACK = process.env.POCKET_IMAGE_SYNC_MASTER_FALLBACK || '/tmp/pocket-localization-raenonx-master.json'
const FLIBUSTIER_RELEASE_URL = 'https://github.com/flibustier/pokemon-tcg-pocket-database/releases/download/2.9.2/release.zip'
const FLIBUSTIER_COMMIT = 'd317957f5c18c4b05d11c24a9ef796edd598f87a'
const FLIBUSTIER_ARCHIVE = process.env.POCKET_IMAGE_SYNC_ARCHIVE || '/tmp/flibustier-pocket-release-2.9.2.zip'
const FLIBUSTIER_ARCHIVE_BYTES = 379897345
const FLIBUSTIER_ARCHIVE_SHA256 = 'ecacdb189b6ffb95df61fd71867742f997d9466266b3108918b51e87efa8d0ec'
const FLIBUSTIER_CARD_COUNT = 3761
const MAX_SOURCE_BYTES = 8 * 1024 * 1024

if (!/^[A-Za-z0-9._-]+$/.test(RUN_ID)) {
	throw new Error(`POCKET_IMAGE_SYNC_RUN_ID must contain only letters, numbers, dot, underscore, or hyphen: ${RUN_ID}`)
}

const workRootReal = path.resolve(WORK_ROOT)
const tmpRootReal = path.resolve(os.tmpdir())
if (
	process.env.POCKET_IMAGE_SYNC_WORK_ROOT &&
	process.env.POCKET_IMAGE_SYNC_ALLOW_EXTERNAL_WORK_ROOT !== '1' &&
	workRootReal !== tmpRootReal &&
	!workRootReal.startsWith(`${tmpRootReal}${path.sep}`)
) {
	throw new Error('POCKET_IMAGE_SYNC_WORK_ROOT must be inside os.tmpdir() unless POCKET_IMAGE_SYNC_ALLOW_EXTERNAL_WORK_ROOT=1')
}

const LOCALE_CONFIG = Object.freeze({
	en: { apiLocale: 'en', sourceLocale: 'en', r2Locale: 'en', file: 'en.json' },
	fr: { apiLocale: 'fr', sourceLocale: 'fr', r2Locale: 'fr', file: 'fr.json' },
	es: { apiLocale: 'es', sourceLocale: 'es', r2Locale: 'es', file: 'es.json' },
	pt: { apiLocale: 'pt-br', sourceLocale: 'pt', r2Locale: 'pt', file: 'pt.json' },
	'zh-TW': { apiLocale: 'zh-tw', sourceLocale: 'zh', r2Locale: 'zh-tw', file: 'zh-TW.json' },
	de: { apiLocale: 'de', sourceLocale: null, r2Locale: 'de', file: 'de.json' },
	it: { apiLocale: 'it', sourceLocale: null, r2Locale: 'it', file: 'it.json' },
})

const SOURCE_LOCALES = Object.freeze(['fr', 'es', 'pt', 'zh'])
const NON_EN_LOCALES = Object.freeze(['fr', 'es', 'pt', 'zh-TW', 'de', 'it'])
let cachedSetFolders = null

function usage() {
	console.log(`Usage: node scripts/sync-localized-card-images.mjs <phase> [options]

Phases:
  audit       Build target inventory and unresolved manifest.
  download    Download source-backed RaenonX PNGs (use --cards for pilot).
  prepare     Convert downloaded PNGs to sparse R2 high/low WebP.
  preflight   Check R2 collisions; only known English fallback keys may exist.
  upload      Upload prepared WebP objects to the existing game bucket.
  verify      Verify every uploaded object via public R2 URLs and hashes.
  apply       Patch API metadata, downstream image fields, and fallback manifest.

Options:
  --master <file>       Frozen RaenonX master JSON (default: run snapshot, then ${RAENONX_MASTER_FALLBACK})
  --source <name>       raenonx-localized (default) or flibustier-en
  --archive <file>      Fixed flibustier release.zip (default: ${FLIBUSTIER_ARCHIVE})
  --cards <id,...>      Limit download/prepare/verify to card IDs (pilot)
  --write               Required for upload/apply
  --help                Show this help
`)
}

function parseArgs(argv) {
	const phase = argv.find((arg) => !arg.startsWith('--'))
	const options = { phase, master: null, source: 'raenonx-localized', archive: FLIBUSTIER_ARCHIVE, cards: [], write: false, shard: null, shards: 1 }
	for (let index = 0; index < argv.length; index += 1) {
		const arg = argv[index]
		if (arg === '--help') options.help = true
		if (arg === '--write') options.write = true
		if (arg === '--master' || arg.startsWith('--master=')) {
			options.master = arg.startsWith('--master=') ? arg.slice('--master='.length) : argv[++index]
		}
		if (arg === '--source' || arg.startsWith('--source=')) {
			options.source = arg.startsWith('--source=') ? arg.slice('--source='.length) : argv[++index]
		}
		if (arg === '--archive' || arg.startsWith('--archive=')) {
			options.archive = arg.startsWith('--archive=') ? arg.slice('--archive='.length) : argv[++index]
		}
		if (arg === '--cards' || arg.startsWith('--cards=')) {
			const value = arg.startsWith('--cards=') ? arg.slice('--cards='.length) : argv[++index]
			options.cards = value.split(',').map((item) => item.trim()).filter(Boolean)
		}
		if (arg === '--shard' || arg.startsWith('--shard=')) {
			const value = arg.startsWith('--shard=') ? arg.slice('--shard='.length) : argv[++index]
			options.shard = Number(value)
		}
		if (arg === '--shards' || arg.startsWith('--shards=')) {
			const value = arg.startsWith('--shards=') ? arg.slice('--shards='.length) : argv[++index]
			options.shards = Number(value)
		}
	}
	return options
}

function sha256(buffer) {
	return crypto.createHash('sha256').update(buffer).digest('hex')
}

async function sha256File(file) {
	const hash = crypto.createHash('sha256')
	for await (const chunk of fs.createReadStream(file)) hash.update(chunk)
	return hash.digest('hex')
}

function canonicalJson(value) {
	return JSON.stringify(value)
}

function artifactDigest(value) {
	const copy = { ...value }
	delete copy.artifactSha256
	return sha256(Buffer.from(canonicalJson(copy), 'utf8'))
}

function withArtifactDigest(value) {
	const copy = { ...value }
	copy.artifactSha256 = artifactDigest(copy)
	return copy
}

function assertArtifactDigest(value, file) {
	if (!value || typeof value !== 'object' || typeof value.artifactSha256 !== 'string') {
		throw new Error(`Artifact is not bound to a digest: ${file}`)
	}
	const expected = artifactDigest(value)
	if (value.artifactSha256 !== expected) throw new Error(`Artifact digest mismatch: ${file}`)
	return value
}

function readArtifact(file) {
	return assertArtifactDigest(readJson(file), file)
}

async function writeArtifact(file, value) {
	await writeJson(file, withArtifactDigest(value))
}

function resolveInside(root, relativePath, label = 'path') {
	if (typeof relativePath !== 'string' || !relativePath || relativePath.includes('\0')) {
		throw new Error(`Invalid ${label}: ${String(relativePath)}`)
	}
	if (path.isAbsolute(relativePath)) throw new Error(`Absolute ${label} is not allowed: ${relativePath}`)
	const rootPath = path.resolve(root)
	const resolved = path.resolve(rootPath, relativePath)
	const relative = path.relative(rootPath, resolved)
	if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new Error(`${label} escapes its root: ${relativePath}`)
	}
	return resolved
}

function selectionIds(options) {
	const ids = [...new Set(options.cards || [])].sort()
	for (const id of ids) cardIdParts(id)
	return ids.length ? ids : null
}

function assertSelection(expected, options, label) {
	const actual = expected == null ? null : [...new Set(expected)].sort()
	const requested = selectionIds(options)
	if (JSON.stringify(actual) !== JSON.stringify(requested)) {
		throw new Error(`${label} card selection mismatch: artifact=${JSON.stringify(actual)} requested=${JSON.stringify(requested)}`)
	}
}

function assertSourceCardId(sourceCardId) {
	if (typeof sourceCardId !== 'string' || !/^[A-Za-z0-9_-]+$/.test(sourceCardId)) {
		throw new Error(`Invalid RaenonX source card ID: ${String(sourceCardId)}`)
	}
}

function assertExactR2Url(value, r2Locale, setId, localId, label = 'R2 URL') {
	const expectedPath = `/${r2Locale}/tcgp/${setId}/${localId}`
	let parsed
	try { parsed = new URL(value) } catch { throw new Error(`Invalid ${label}: ${String(value)}`) }
	if (parsed.origin !== R2_ORIGIN || parsed.username || parsed.password || parsed.pathname !== expectedPath || parsed.search || parsed.hash) {
		throw new Error(`Unexpected ${label}: ${String(value)}`)
	}
	return value
}

function assertR2Key(key, r2Locale, setId, localId, size) {
	const expected = r2Key(r2Locale, setId, localId, size)
	if (key !== expected) throw new Error(`Unexpected R2 key: ${String(key)} (expected ${expected})`)
	return key
}

function assertSourceUrl(value, sourceLocale, sourceCardId) {
	assertSourceCardId(sourceCardId)
	let parsed
	try { parsed = new URL(value) } catch { throw new Error(`Invalid source URL: ${String(value)}`) }
	if (parsed.origin !== 'https://cdn.raenonx.cc' || parsed.username || parsed.password || parsed.pathname !== '/api/image/ptcgp') {
		throw new Error(`Unexpected source URL origin/path: ${String(value)}`)
	}
	const searchEntries = [...parsed.searchParams.entries()]
	if (searchEntries.length !== 2 || parsed.searchParams.get('format') !== 'png' || parsed.searchParams.get('url') !== `/images/game/card/full/${sourceLocale}/${sourceCardId}.png`) {
		throw new Error(`Unexpected source URL query: ${String(value)}`)
	}
	return value
}

function flibustierSetId(setId) {
	return setId === 'P-A' ? 'PROMO-A' : setId === 'P-B' ? 'PROMO-B' : setId
}

function projectSetId(setId) {
	return setId === 'PROMO-A' ? 'P-A' : setId === 'PROMO-B' ? 'P-B' : setId
}

function flibustierArchiveMember(setId, localId) {
	const member = `dist/images/cards-by-set/${flibustierSetId(setId)}/${Number(localId)}.webp`
	if (!/^dist\/images\/cards-by-set\/[A-Za-z0-9-]+\/[1-9][0-9]*\.webp$/.test(member)) {
		throw new Error(`Invalid flibustier archive member: ${member}`)
	}
	return member
}

async function readZipMember(archive, member, maxBytes = MAX_SOURCE_BYTES) {
	if (typeof member !== 'string' || (!/^dist\/images\/cards-by-set\/[A-Za-z0-9-]+\/[1-9][0-9]*\.webp$/.test(member) && member !== 'dist/cards.json')) {
		throw new Error(`Archive member is outside the allowlist: ${String(member)}`)
	}
	return new Promise((resolve, reject) => {
		const child = spawn('unzip', ['-p', archive, member], { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] })
		const chunks = []
		let bytes = 0
		let stderr = ''
		child.stdout.on('data', (chunk) => {
			bytes += chunk.length
			if (bytes > maxBytes) child.kill('SIGKILL')
			else chunks.push(chunk)
		})
		child.stderr.on('data', (chunk) => { stderr += chunk })
		child.on('error', reject)
		child.on('close', (code) => {
			if (bytes > maxBytes) return reject(new Error(`Archive member exceeds ${maxBytes} bytes: ${member}`))
			if (code !== 0) return reject(new Error(`unzip failed for ${member}: ${stderr.trim() || `exit ${code}`}`))
			resolve(Buffer.concat(chunks, bytes))
		})
	})
}

async function validateFlibustierArchive(archive) {
	const stat = await fsp.stat(archive)
	if (stat.size !== FLIBUSTIER_ARCHIVE_BYTES) throw new Error(`flibustier archive size mismatch: ${stat.size}`)
	const digest = await sha256File(archive)
	if (digest !== FLIBUSTIER_ARCHIVE_SHA256) throw new Error(`flibustier archive SHA-256 mismatch: ${digest}`)
	const { stdout } = await runCommand('unzip', ['-Z1', archive])
	const members = stdout.split(/\r?\n/).filter((member) => member.endsWith('.webp') && member.startsWith('dist/images/cards-by-set/'))
	const invalid = members.filter((member) => !/^dist\/images\/cards-by-set\/[A-Za-z0-9-]+\/[1-9][0-9]*\.webp$/.test(member))
	if (invalid.length || members.length !== FLIBUSTIER_CARD_COUNT || new Set(members).size !== members.length) {
		throw new Error(`flibustier image inventory mismatch: count=${members.length} invalid=${invalid.length}`)
	}
	return { bytes: stat.size, sha256: digest, members: new Set(members) }
}

async function readLimitedBody(response, maxBytes = MAX_SOURCE_BYTES) {
	const declared = Number(response.headers.get('content-length'))
	if (Number.isFinite(declared) && declared > maxBytes) throw new Error(`Response exceeds ${maxBytes} bytes`)
	if (!response.body) {
		const buffer = Buffer.from(await response.arrayBuffer())
		if (buffer.length > maxBytes) throw new Error(`Response exceeds ${maxBytes} bytes`)
		return buffer
	}
	const chunks = []
	let total = 0
	for await (const chunk of response.body) {
		const buffer = Buffer.from(chunk)
		total += buffer.length
		if (total > maxBytes) throw new Error(`Response exceeds ${maxBytes} bytes`)
		chunks.push(buffer)
	}
	return Buffer.concat(chunks, total)
}

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

async function writeJson(file, value) {
	await fsp.mkdir(path.dirname(file), { recursive: true })
	await fsp.writeFile(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

function cardIdParts(id) {
	const match = id.match(/^(.*)-(\d{3})$/)
	if (!match) throw new Error(`Invalid card ID: ${id}`)
	return { setId: match[1], localId: match[2], number: Number(match[2]) }
}

function r2BaseUrl(r2Locale, setId, localId) {
	return `${R2_ORIGIN}/${r2Locale}/tcgp/${setId}/${localId}`
}

function r2Key(r2Locale, setId, localId, size) {
	return `${r2Locale}/tcgp/${setId}/${localId}/${size}.webp`
}

function keyLiteral(locale) {
	return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(locale) ? locale : JSON.stringify(locale)
}

function sourceUrl(sourceLocale, sourceCardId) {
	assertSourceCardId(sourceCardId)
	if (!SOURCE_LOCALES.includes(sourceLocale)) throw new Error(`Unsupported RaenonX source locale: ${sourceLocale}`)
	return `${RAENONX_IMAGE_BASE}/${sourceLocale}/${encodeURIComponent(sourceCardId)}.png`
}

async function fetchWithRetry(url, options = {}, retries = 3, acceptedStatuses = []) {
	let lastError
	for (let attempt = 0; attempt <= retries; attempt += 1) {
		try {
			const response = await fetch(url, {
				...options,
				redirect: options.redirect || 'error',
				headers: {
					Accept: '*/*',
					'User-Agent': 'cards-database localized-image-sync/1.0',
					...(options.headers || {}),
				},
				signal: AbortSignal.timeout(30_000),
			})
			if (response.ok || acceptedStatuses.includes(response.status)) return response
			const error = new Error(`HTTP ${response.status}: ${url}`)
			error.status = response.status
			throw error
		} catch (error) {
			lastError = error
			const retryable = error?.name === 'AbortError' || error?.status == null || error?.status >= 500 || error?.status === 429
			if (!retryable || attempt === retries) throw error
			await new Promise((resolve) => setTimeout(resolve, Math.min(1000 * 2 ** attempt, 8000)))
		}
	}
	throw lastError
}

async function mapWithConcurrency(items, concurrency, worker) {
	let cursor = 0
	let failure = null
	const results = new Array(items.length)
	const workers = Array.from({ length: Math.min(concurrency, Math.max(items.length, 1)) }, async () => {
		while (!failure && cursor < items.length) {
			const index = cursor++
			try {
				results[index] = await worker(items[index], index)
			} catch (error) {
				failure ||= error
			}
		}
	})
	await Promise.all(workers)
	if (failure) throw failure
	return results
}

function loadSetFolders() {
	if (cachedSetFolders) return cachedSetFolders
	const result = new Map()
	for (const name of fs.readdirSync(DATA_ROOT).filter((file) => file.endsWith('.ts'))) {
		const folder = name.slice(0, -3)
		const file = path.join(DATA_ROOT, name)
		const source = fs.readFileSync(file, 'utf8')
		const found = source.match(/\bid:\s*["']([^"']+)["']/)?.[1]
		if (!found) continue
		if (result.has(found)) throw new Error(`Duplicate set ID ${found}: ${file}`)
		result.set(found, folder)
	}
	cachedSetFolders = result
	return result
}

function loadDownstream() {
	const locales = {}
	for (const [locale, config] of Object.entries(LOCALE_CONFIG)) {
		const file = path.join(DOWNSTREAM, 'locales', 'card', config.file)
		locales[locale] = { file, cards: readJson(file) }
	}
	return locales
}

function parseImageBlock(source) {
	const match = source.match(/(\bimage\s*:\s*\{)([\s\S]*?)(\n\s*\})/)
	if (!match) throw new Error('image block not found')
	const values = {}
	for (const line of match[2].split(/\r?\n/)) {
		const item = line.match(/^\s*("(?:\\.|[^"\\])*"|[A-Za-z_$][A-Za-z0-9_$-]*)\s*:\s*(["'])(.*?)\2\s*,?\s*$/)
		if (!item) continue
		const rawKey = item[1]
		const key = rawKey.startsWith('"') ? JSON.parse(rawKey) : rawKey
		values[key] = item[3]
	}
	return values
}

function patchImageBlock(source, locale, url) {
	const block = source.match(/(\bimage\s*:\s*\{)([\s\S]*?)(\n\s*\})/)
	if (!block) throw new Error('image block not found')
	const oldValues = parseImageBlock(source)
	if (oldValues[locale] === url) return source
	const body = block[2]
	const lines = body.split(/\r?\n/)
	const keyPattern = new RegExp(`^\\s*(?:${locale === 'pt-br' ? '"pt-br"' : locale === 'zh-tw' ? '"zh-tw"' : locale})\\s*:`)
	let existingIndex = -1
	let lastProperty = -1
	let indent = '        '
	for (let index = 0; index < lines.length; index += 1) {
		const line = lines[index]
		if (/^\s*(?:"(?:\\.|[^"\\])*")|^\s*[A-Za-z_$]/.test(line) && line.includes(':')) {
			lastProperty = index
			indent = line.match(/^\s*/)?.[0] || indent
		}
		if (keyPattern.test(line)) existingIndex = index
	}
	const hadComma = existingIndex >= 0 && /,\s*$/.test(lines[existingIndex])
	const rendered = `${indent}${keyLiteral(locale)}: ${JSON.stringify(url)}${hadComma ? ',' : ''}`
	if (existingIndex >= 0) {
		lines[existingIndex] = rendered
	} else {
		if (lastProperty < 0) throw new Error('image block has no properties')
		if (!lines[lastProperty].trimEnd().endsWith(',')) lines[lastProperty] = `${lines[lastProperty]},`
		lines.splice(lastProperty + 1, 0, rendered)
	}
	const replacement = `${block[1]}${lines.join('\n')}${block[3]}`
	return source.slice(0, block.index) + replacement + source.slice(block.index + block[0].length)
}

function patchJsonImages(source, updatesByKey) {
	const endOfLine = source.includes('\r\n') ? '\r\n' : '\n'
	const lines = source.split(/\r?\n/)
	let currentKey = null
	const seen = new Set()
	for (let index = 0; index < lines.length; index += 1) {
		const entry = lines[index].match(/^  "((?:\\.|[^"\\])+)": \{$/)
		if (entry) {
			currentKey = JSON.parse(`"${entry[1]}"`)
			continue
		}
		if (!currentKey || !updatesByKey.has(currentKey)) continue
		const field = lines[index].match(/^(\s{4}"image"\s*:\s*)"(?:\\.|[^"\\])*"(\s*,?\s*)$/)
		if (!field) continue
		lines[index] = `${field[1]}${JSON.stringify(updatesByKey.get(currentKey))}${field[2]}`
		seen.add(currentKey)
	}
	const missing = [...updatesByKey.keys()].filter((key) => !seen.has(key))
	if (missing.length) throw new Error(`Downstream image field not found: ${missing.slice(0, 10).join(', ')}`)
	return lines.join(endOfLine)
}

function comparableWithoutImage(card) {
	return JSON.stringify(Object.fromEntries(Object.entries(card).filter(([key]) => key !== 'image')))
}

function metadataCardFile(setFolders, setId, localId) {
	const folder = setFolders.get(setId)
	if (!folder) throw new Error(`No data folder for ${setId}`)
	return path.join(DATA_ROOT, folder, `${localId}.ts`)
}

function loadMetadataImage(setFolders, setId, localId) {
	const file = metadataCardFile(setFolders, setId, localId)
	return { file, source: fs.readFileSync(file, 'utf8'), images: parseImageBlock(fs.readFileSync(file, 'utf8')) }
}

function targetCards(downstream) {
	const english = downstream.en.cards
	const setFolders = loadSetFolders()
	const cards = []
	const unsupportedSetIds = new Set()
	for (const [key, card] of Object.entries(english)) {
		if (!card?.id) continue
		const { setId, localId } = cardIdParts(card.id)
		if (!setFolders.has(setId)) {
			unsupportedSetIds.add(setId)
			continue
		}
		if (key !== localId && key !== card.id) throw new Error(`English index key/localId mismatch: ${key} vs ${card.id}`)
		cards.push({ key, id: card.id, setId, localId, number: Number(localId), set: card.set })
	}
	return {
		cards: cards.sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true })),
		unsupportedSetIds: [...unsupportedSetIds].sort(),
	}
}

function buildRaenonxMap(master, cards) {
	const expansionMap = { ...master.cardExpansionMap, 'P-A': master.cardExpansionMap['PROMO-A'], 'P-B': master.cardExpansionMap['PROMO-B'] }
	const byTarget = new Map()
	for (const card of cards) {
		const expansion = expansionMap[card.setId]
		if (!expansion) throw new Error(`RaenonX expansion missing: ${card.setId}`)
		const candidates = []
		for (const sourceCardId of expansion.cardsInExpansion || []) {
			const entry = master.cardEntryMap[sourceCardId]
			if (!entry) continue
			for (const collection of entry.collectionNums || []) {
				if (collection.expansion?.id === expansion.id && collection.num === card.number) {
					candidates.push(sourceCardId)
				}
			}
		}
		if (candidates.length !== 1) throw new Error(`${card.id}: expected one RaenonX card ID, got ${candidates.length}`)
		byTarget.set(card.id, { sourceCardId: candidates[0], expansionId: expansion.id })
	}
	return byTarget
}

function knownFallbackKeys() {
	const file = path.join(ROOT, 'meta', 'pocket-image-fallbacks.json')
	const manifest = readJson(file)
	const keys = new Set()
	for (const entry of manifest.entries || []) {
		for (const size of ['high', 'low']) keys.add(`${entry.r2Locale}/tcgp/${entry.setId}/${entry.localId}/${size}.webp`)
	}
	return { file, manifest, keys }
}

async function loadMaster(options) {
	const snapshot = path.join(RUN_DIR, 'source-snapshot', 'raenonx-global-master.json')
	const masterFile = options.master || (fs.existsSync(snapshot) ? snapshot : RAENONX_MASTER_FALLBACK)
	if (!fs.existsSync(masterFile)) throw new Error(`RaenonX master not found: ${masterFile}`)
	const buffer = await fsp.readFile(masterFile)
	return { master: JSON.parse(buffer), sha256: sha256(buffer), file: masterFile }
}

async function auditFlibustierEnglish(options) {
	const archive = await validateFlibustierArchive(options.archive)
	const upstreamBytes = await readZipMember(options.archive, 'dist/cards.json')
	const upstream = JSON.parse(upstreamBytes)
	if (!Array.isArray(upstream) || upstream.length !== FLIBUSTIER_CARD_COUNT) {
		throw new Error(`flibustier cards.json count mismatch: ${upstream?.length}`)
	}
	const setFolders = loadSetFolders()
	const downstream = loadDownstream()
	const targetInventory = targetCards(downstream)
	const currentIds = new Set(targetInventory.cards.map((card) => card.id))
	const upstreamCards = upstream.map((card) => {
		const setId = projectSetId(card.set)
		const localId = String(card.number).padStart(3, '0')
		const id = `${setId}-${localId}`
		if (!setFolders.has(setId) || !Number.isInteger(card.number) || card.number < 1) throw new Error(`Invalid flibustier card identity: ${JSON.stringify(card)}`)
		const archiveMember = flibustierArchiveMember(setId, localId)
		if (!archive.members.has(archiveMember)) throw new Error(`flibustier image missing: ${id}`)
		return { id, setId, localId, number: card.number, archiveMember, sourceName: card.name ?? null, sourceRarity: card.rarity ?? null }
	})
	if (new Set(upstreamCards.map((card) => card.id)).size !== upstreamCards.length) throw new Error('Duplicate flibustier card identity')

	const targets = []
	for (const card of targetInventory.cards) {
		const upstreamCard = upstreamCards.find((item) => item.id === card.id)
		if (!upstreamCard) throw new Error(`Local card missing from flibustier release: ${card.id}`)
		const metadata = loadMetadataImage(setFolders, card.setId, card.localId)
		if (metadata.images.en) {
			assertExactR2Url(metadata.images.en, 'en', card.setId, card.localId, 'existing English image')
			continue
		}
		let current
		try { current = new URL(downstream.en.cards[card.key]?.image) } catch { throw new Error(`Invalid English downstream image: ${card.id}`) }
		if (current.origin !== 'https://assets.tcgdex.net' || current.pathname !== `/en/tcgp/${card.setId}/${card.localId}`) {
			throw new Error(`Missing image.en is not backed by the expected TCGdex fallback: ${card.id}`)
		}
		targets.push({
			...card,
			locale: 'en',
			status: 'source-available',
			sourceKind: 'flibustier-release',
			currentImage: downstream.en.cards[card.key].image,
			desiredImage: r2BaseUrl('en', card.setId, card.localId),
			metadataFile: path.relative(ROOT, metadata.file).split(path.sep).join('/'),
			metadataSha256: sha256(Buffer.from(metadata.source, 'utf8')),
			archiveMember: upstreamCard.archiveMember,
			sourceName: upstreamCard.sourceName,
			sourceRarity: upstreamCard.sourceRarity,
			r2HighKey: r2Key('en', card.setId, card.localId, 'high'),
			r2LowKey: r2Key('en', card.setId, card.localId, 'low'),
		})
	}
	const missingCards = upstreamCards.filter((card) => !currentIds.has(card.id))
	for (const card of missingCards) {
		const metadataFile = metadataCardFile(setFolders, card.setId, card.localId)
		if (fs.existsSync(metadataFile)) throw new Error(`Missing downstream card already has metadata: ${card.id}`)
		targets.push({
			...card,
			key: card.id,
			set: null,
			locale: 'en',
			status: 'source-available',
			sourceKind: 'flibustier-release',
			currentImage: null,
			desiredImage: r2BaseUrl('en', card.setId, card.localId),
			metadataFile: path.relative(ROOT, metadataFile).split(path.sep).join('/'),
			metadataSha256: null,
			pendingMetadata: true,
			r2HighKey: r2Key('en', card.setId, card.localId, 'high'),
			r2LowKey: r2Key('en', card.setId, card.localId, 'low'),
		})
	}
	const existingTargets = targets.filter((target) => !target.pendingMetadata)
	const migrationState = existingTargets.length === 2609 && missingCards.length === 7 && targets.length === 2616
	const completedState = existingTargets.length === 0 && missingCards.length === 0 && targets.length === 0 && targetInventory.cards.length === FLIBUSTIER_CARD_COUNT
	if (!migrationState && !completedState) {
		throw new Error(`Fixed migration scope mismatch: existing=${existingTargets.length} missing=${missingCards.length} total=${targets.length}`)
	}
	const audit = {
		schemaVersion: 2,
		generatedAt: new Date().toISOString(),
		runId: RUN_ID,
		policy: { localizedSourceOnly: false, language: 'en', unknownR2Collision: 'block' },
		source: {
			kind: 'flibustier-release',
			name: 'pokemon-tcg-pocket-database',
			release: '2.9.2',
			commit: FLIBUSTIER_COMMIT,
			releaseUrl: FLIBUSTIER_RELEASE_URL,
			archiveBytes: archive.bytes,
			archiveSha256: archive.sha256,
			cardsJsonSha256: sha256(upstreamBytes),
			license: 'MIT',
			licenseUrl: `https://github.com/flibustier/pokemon-tcg-pocket-database/blob/${FLIBUSTIER_COMMIT}/LICENSE`,
			attribution: 'https://github.com/flibustier/pokemon-tcg-pocket-database',
		},
		scope: { resolver: 'set ID plus collection number', unsupportedSetIds: targetInventory.unsupportedSetIds },
		counts: { targetCards: targetInventory.cards.length, sourceCards: upstreamCards.length, existingFallbacks: existingTargets.length, missingCards: missingCards.length, sourceAvailable: targets.length },
		targets: targets.sort((left, right) => left.id.localeCompare(right.id, 'en', { numeric: true })),
	}
	await writeArtifact(path.join(RUN_DIR, 'localized-image-audit.json'), audit)
	await writeArtifact(path.join(RUN_DIR, 'unresolved.json'), { schemaVersion: 2, generatedAt: audit.generatedAt, auditSha256: artifactDigest(audit), entries: [] })
	console.log(JSON.stringify(audit.counts, null, 2))
}

async function audit(options) {
	if (options.source === 'flibustier-en') return auditFlibustierEnglish(options)
	if (options.source !== 'raenonx-localized') throw new Error(`Unknown source mode: ${options.source}`)
	const setFolders = loadSetFolders()
	const downstream = loadDownstream()
	const targetInventory = targetCards(downstream)
	const cards = targetInventory.cards
	const { master, sha256: masterSha, file: masterFile } = await loadMaster(options)
	const raenonx = buildRaenonxMap(master, cards)
	const fallback = knownFallbackKeys()
	const targets = []
	for (const card of cards) {
		const metadata = loadMetadataImage(setFolders, card.setId, card.localId)
		for (const locale of NON_EN_LOCALES) {
			const config = LOCALE_CONFIG[locale]
			const localCard = downstream[locale].cards[card.key]
			if (!localCard) throw new Error(`${locale}: missing ${card.id}`)
			const existingMetadata = metadata.images[config.apiLocale]
			const currentImage = localCard.image
			const currentIsR2Locale = typeof currentImage === 'string' && (() => {
				try { assertExactR2Url(currentImage, config.r2Locale, card.setId, card.localId, `${locale} downstream image`); return true } catch { return false }
			})()
			const metadataIsR2Locale = typeof existingMetadata === 'string' && (() => {
				try { assertExactR2Url(existingMetadata, config.r2Locale, card.setId, card.localId, `${locale} metadata image`); return true } catch { return false }
			})()
			if (currentIsR2Locale && metadataIsR2Locale) {
				targets.push({ ...card, locale, status: 'already-localized', currentImage, desiredImage: existingMetadata, metadataFile: path.relative(ROOT, metadata.file) })
				continue
			}
			if (currentImage === existingMetadata && metadataIsR2Locale) {
				targets.push({ ...card, locale, status: 'already-localized', currentImage, desiredImage: existingMetadata, metadataFile: path.relative(ROOT, metadata.file) })
				continue
			}
			if (metadataIsR2Locale) {
				targets.push({ ...card, locale, status: 'downstream-only', currentImage, desiredImage: existingMetadata, metadataFile: path.relative(ROOT, metadata.file) })
				continue
			}
			if (config.sourceLocale) {
				const source = raenonx.get(card.id)
				const desiredImage = r2BaseUrl(config.r2Locale, card.setId, card.localId)
				targets.push({
					...card,
					locale,
					status: 'source-available',
					currentImage,
					desiredImage,
					metadataFile: path.relative(ROOT, metadata.file),
					existingMetadata: existingMetadata || null,
					sourceLocale: config.sourceLocale,
					sourceCardId: source.sourceCardId,
					expansionId: source.expansionId,
					sourceUrl: sourceUrl(config.sourceLocale, source.sourceCardId),
					r2HighKey: r2Key(config.r2Locale, card.setId, card.localId, 'high'),
					r2LowKey: r2Key(config.r2Locale, card.setId, card.localId, 'low'),
					collision: fallback.keys.has(r2Key(config.r2Locale, card.setId, card.localId, 'high')) ? 'known-english-fallback' : 'new',
				})
				continue
			}
			targets.push({
				...card,
				locale,
				status: 'unresolved-english-fallback',
				currentImage,
				desiredImage: currentImage,
				metadataFile: path.relative(ROOT, metadata.file),
				reason: 'no-supported-localized-image-source',
			})
		}
	}
	const candidateTargets = targets.filter((target) => target.status === 'source-available')
	const unresolved = targets.filter((target) => target.status === 'unresolved-english-fallback')
	const downstreamOnly = targets.filter((target) => target.status === 'downstream-only')
	const alreadyLocalized = targets.filter((target) => target.status === 'already-localized')
	const audit = {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		runId: RUN_ID,
		policy: {
			localizedSourceOnly: true,
			unresolvedFallback: 'retain-current-en-url',
		},
		source: {
			raenonxMasterUrl: RAENONX_MASTER_URL,
			raenonxMasterSha256: masterSha,
			masterFile: 'source-snapshot/raenonx-global-master.json',
			imageBase: RAENONX_IMAGE_BASE,
			attribution: 'https://ptcgp.raenonx.cc',
			licenseNote: 'No formal copy license was located; use is limited to the user-authorized, attributed mirror scope.',
			sourcesChecked: [
				{ name: 'RaenonX', role: 'localized image source and card-number resolver', status: 'used', url: RAENONX_MASTER_URL },
				{ name: 'PokeOS', role: 'independent set/card validation only', status: 'not-used-as-image-source', evidence: 'meta/pocket-source-reviews/B4.sources.json' },
			],
		},
		scope: {
			resolver: 'RaenonX only; PokeOS is validation-only in this run.',
			unsupportedSetIds: targetInventory.unsupportedSetIds,
		},
		counts: {
			targetCards: cards.length,
			sourceAvailable: candidateTargets.length,
			downstreamOnly: downstreamOnly.length,
			alreadyLocalized: alreadyLocalized.length,
			unresolved: unresolved.length,
		},
		targets,
	}
	await fsp.mkdir(path.join(RUN_DIR, 'source-snapshot'), { recursive: true })
	if (path.resolve(masterFile) !== path.resolve(path.join(RUN_DIR, 'source-snapshot', 'raenonx-global-master.json'))) {
		await fsp.copyFile(masterFile, path.join(RUN_DIR, 'source-snapshot', 'raenonx-global-master.json'))
	}
	await writeArtifact(path.join(RUN_DIR, 'localized-image-audit.json'), audit)
	await writeArtifact(path.join(RUN_DIR, 'unresolved.json'), {
		schemaVersion: 1,
		generatedAt: audit.generatedAt,
		auditSha256: artifactDigest(audit),
		policy: audit.policy,
		entries: unresolved,
	})
	console.log(JSON.stringify(audit.counts, null, 2))
}

function loadAudit() {
	return readArtifact(path.join(RUN_DIR, 'localized-image-audit.json'))
}

function selectedTargets(audit, options, statuses = ['source-available']) {
	const allowed = new Set(options.cards)
	const knownIds = new Set(audit.targets.map((target) => target.id))
	for (const id of allowed) if (!knownIds.has(id)) throw new Error(`Unknown card selection: ${id}`)
	return audit.targets.filter((target) => statuses.includes(target.status) && (allowed.size === 0 || allowed.has(target.id)))
}

function validateAuditTarget(target) {
	if (!target || !LOCALE_CONFIG[target.locale]) throw new Error(`Invalid audit target locale: ${String(target?.locale)}`)
	const { setId, localId } = cardIdParts(target.id)
	if (target.setId !== setId || target.localId !== localId) throw new Error(`Audit target card identity mismatch: ${target.id}`)
	if (target.key !== localId && target.key !== target.id) throw new Error(`Audit target index key mismatch: ${target.id}`)
	const config = LOCALE_CONFIG[target.locale]
	if (target.desiredImage) assertExactR2Url(target.desiredImage, config.r2Locale, setId, localId, 'audit desired image')
	const expectedMetadata = path.relative(ROOT, metadataCardFile(loadSetFolders(), setId, localId)).split(path.sep).join('/')
	if (target.metadataFile !== expectedMetadata) throw new Error(`Audit metadata path mismatch for ${target.id}/${target.locale}`)
	resolveInside(ROOT, target.metadataFile, 'audit metadata path')
	if (target.status === 'source-available') {
		if (target.sourceKind === 'flibustier-release') {
			if (target.locale !== 'en' || target.archiveMember !== flibustierArchiveMember(setId, localId)) throw new Error(`Invalid flibustier target: ${target.id}`)
			if (target.pendingMetadata !== true && !/^[a-f0-9]{64}$/.test(target.metadataSha256)) throw new Error(`Missing metadata baseline: ${target.id}`)
		} else {
			if (!target.sourceLocale || !SOURCE_LOCALES.includes(target.sourceLocale)) throw new Error(`Invalid source locale for ${target.id}/${target.locale}`)
			assertSourceCardId(target.sourceCardId)
			assertSourceUrl(target.sourceUrl, target.sourceLocale, target.sourceCardId)
		}
		assertR2Key(target.r2HighKey, config.r2Locale, setId, localId, 'high')
		assertR2Key(target.r2LowKey, config.r2Locale, setId, localId, 'low')
	}
	return target
}

function assertMetadataApplyBaseline(target, source) {
	const locale = LOCALE_CONFIG[target.locale].apiLocale
	if (parseImageBlock(source)[locale] === target.desiredImage) return
	if (target.pendingMetadata || sha256(Buffer.from(source, 'utf8')) !== target.metadataSha256) {
		throw new Error(`Metadata changed after audit: ${target.id}/${target.locale}`)
	}
}

function assertDownstreamApplyBaseline(target, card) {
	if (!card) throw new Error(`Downstream card missing: ${target.locale}/${target.key}`)
	if (card.image !== target.currentImage && card.image !== target.desiredImage) {
		throw new Error(`Downstream image changed after audit: ${target.locale}/${target.key}`)
	}
}

function expectedDownloadPath(target) {
	const extension = target.sourceKind === 'flibustier-release' ? 'webp' : 'png'
	return `source/${LOCALE_CONFIG[target.locale].r2Locale}/tcgp/${target.setId}/${target.localId}.${extension}`
}

function expectedPreparedPath(key) {
	if (typeof key !== 'string' || !/^(?:[a-z]{2}(?:-[a-z]{2})?)\/tcgp\/[A-Za-z0-9-]+\/\d{3}\/(?:high|low)\.webp$/.test(key)) {
		throw new Error(`Invalid prepared R2 key: ${String(key)}`)
	}
	return `r2/${key}`
}

async function download(options) {
	const audit = loadAudit()
	const targets = selectedTargets(audit, options)
	for (const target of targets) validateAuditTarget(target)
	if (audit.source.kind === 'flibustier-release') await validateFlibustierArchive(options.archive)
	const records = await mapWithConcurrency(targets, 8, async (target) => {
		const relativeOutput = expectedDownloadPath(target)
		const output = resolveInside(WORK_ROOT, relativeOutput, 'download output')
		await fsp.mkdir(path.dirname(output), { recursive: true })
		let buffer
		let contentType
		let lastModified = null
		let etag = null
		if (target.sourceKind === 'flibustier-release') {
			buffer = await readZipMember(options.archive, target.archiveMember)
			contentType = 'image/webp'
			if (buffer.length < 16 || buffer.subarray(0, 4).toString('ascii') !== 'RIFF' || buffer.subarray(8, 12).toString('ascii') !== 'WEBP') throw new Error(`Invalid WebP source: ${target.id}`)
		} else {
			assertSourceUrl(target.sourceUrl, target.sourceLocale, target.sourceCardId)
			const response = await fetchWithRetry(target.sourceUrl)
			if (response.url) assertSourceUrl(response.url, target.sourceLocale, target.sourceCardId)
			contentType = response.headers.get('content-type') || ''
			if (!/^image\/png(?:;|$)/i.test(contentType)) throw new Error(`Unexpected source content type for ${target.id}/${target.locale}: ${contentType}`)
			buffer = await readLimitedBody(response)
			if (buffer.length < 16 || buffer.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Invalid PNG source: ${target.id}/${target.locale}`)
			lastModified = response.headers.get('last-modified')
			etag = response.headers.get('etag')
		}
		await fsp.writeFile(output, buffer)
		return {
			id: target.id,
			locale: target.locale,
			sourceKind: target.sourceKind || 'raenonx',
			sourceUrl: target.sourceUrl || null,
			archiveMember: target.archiveMember || null,
			path: relativeOutput,
			bytes: buffer.length,
			sha256: sha256(buffer),
			contentType,
			lastModified,
			etag,
		}
	})
	await writeArtifact(path.join(RUN_DIR, 'downloads.json'), {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		workRoot: 'runtime-work-root',
		auditSha256: audit.artifactSha256,
		selection: selectionIds(options),
		records,
	})
	console.log(JSON.stringify({ downloaded: records.length, workRoot: WORK_ROOT }, null, 2))
}

async function prepare(options) {
	const audit = loadAudit()
	const downloadManifest = readArtifact(path.join(RUN_DIR, 'downloads.json'))
	if (downloadManifest.auditSha256 !== audit.artifactSha256) throw new Error('downloads.json is not bound to the current audit')
	assertSelection(downloadManifest.selection, options, 'downloads.json')
	const allowed = new Set(options.cards)
	const records = downloadManifest.records.filter((record) => allowed.size === 0 || allowed.has(record.id))
	const sharpCandidates = [
		process.env.SHARP_ENTRY,
		path.join(DOWNSTREAM, 'node_modules/sharp/lib/index.js'),
		path.join(ROOT, 'node_modules/sharp/lib/index.js'),
	].filter(Boolean)
	const sharpEntry = sharpCandidates.find((candidate) => fs.existsSync(candidate))
	if (!sharpEntry) throw new Error(`sharp not found; checked ${sharpCandidates.join(', ')}`)
	const sharp = (await import(pathToFileURL(sharpEntry).href)).default
	const outputRoot = path.join(WORK_ROOT, 'r2')
	const prepared = await mapWithConcurrency(records, 6, async (record) => {
		const target = audit.targets.find((item) => item.id === record.id && item.locale === record.locale && item.status === 'source-available')
		if (!target) throw new Error(`Download record has no source target: ${record.id}/${record.locale}`)
		validateAuditTarget(target)
		if (record.path !== expectedDownloadPath(target)) throw new Error(`Download path mismatch: ${record.path}`)
		resolveInside(WORK_ROOT, record.path, 'download input')
		if (target.sourceKind === 'flibustier-release') {
			if (record.sourceKind !== 'flibustier-release' || record.archiveMember !== target.archiveMember) throw new Error(`Archive source mismatch: ${record.id}`)
		} else assertSourceUrl(record.sourceUrl, target.sourceLocale, target.sourceCardId)
		const input = resolveInside(WORK_ROOT, record.path, 'download input')
		const inputBytes = await fsp.readFile(input)
		if (record.bytes !== inputBytes.length || record.sha256 !== sha256(inputBytes)) throw new Error(`Download checksum mismatch: ${record.id}/${record.locale}`)
		const highKey = assertR2Key(target.r2HighKey, LOCALE_CONFIG[target.locale].r2Locale, target.setId, target.localId, 'high')
		const lowKey = assertR2Key(target.r2LowKey, LOCALE_CONFIG[target.locale].r2Locale, target.setId, target.localId, 'low')
		const outputs = []
		for (const [size, key, pipeline] of [
			['high', highKey, sharp(input).webp({ quality: 90, effort: 4 })],
			['low', lowKey, sharp(input).resize({ width: 245, withoutEnlargement: true }).webp({ quality: 82, effort: 4 })],
		]) {
			const relativeOutput = expectedPreparedPath(key)
			const output = resolveInside(WORK_ROOT, relativeOutput, 'prepared output')
			await fsp.mkdir(path.dirname(output), { recursive: true })
			await pipeline.toFile(output)
			const bytes = await fsp.readFile(output)
			const metadata = await sharp(output).metadata()
			if (metadata.format !== 'webp' || !metadata.width || !metadata.height || bytes.subarray(0, 4).toString('ascii') !== 'RIFF' || bytes.subarray(8, 12).toString('ascii') !== 'WEBP') {
				throw new Error(`Invalid prepared WebP: ${key}`)
			}
			outputs.push({ key, cardId: target.id, locale: target.locale, size, path: relativeOutput, bytes: bytes.length, sha256: sha256(bytes), width: metadata.width, height: metadata.height })
		}
		return outputs
	})
	const objects = prepared.flatMap((item) => item)
	objects.sort((left, right) => left.key.localeCompare(right.key))
	await writeArtifact(path.join(RUN_DIR, 'r2-manifest.json'), {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		origin: R2_ORIGIN,
		bucket: R2_BUCKET,
		sourceKind: audit.source.kind || 'raenonx-localized',
		workRoot: 'runtime-work-root',
		auditSha256: audit.artifactSha256,
		downloadsSha256: downloadManifest.artifactSha256,
		selection: selectionIds(options),
		objects,
	})
	console.log(JSON.stringify({ objects: objects.length, cards: records.length, outputRoot }, null, 2))
}

function loadR2Manifest() {
	return readArtifact(path.join(RUN_DIR, 'r2-manifest.json'))
}

function validateManifestObject(object, audit) {
	if (!object || typeof object !== 'object') throw new Error('Invalid R2 manifest object')
	const target = audit.targets.find((item) => item.id === object.cardId && item.locale === object.locale && item.status === 'source-available')
	if (!target) throw new Error(`R2 object has no source target: ${object.cardId}/${object.locale}`)
	validateAuditTarget(target)
	const size = object.size
	if (size !== 'high' && size !== 'low') throw new Error(`Invalid R2 object size: ${String(size)}`)
	const expectedKey = size === 'high' ? target.r2HighKey : target.r2LowKey
	if (object.key !== expectedKey) throw new Error(`R2 manifest key mismatch: ${object.key}`)
	if (object.path !== expectedPreparedPath(object.key)) throw new Error(`R2 manifest path mismatch: ${object.path}`)
	resolveInside(WORK_ROOT, object.path, 'prepared input')
	if (!/^[a-f0-9]{64}$/.test(object.sha256) || !Number.isInteger(object.bytes) || object.bytes < 1) throw new Error(`Invalid R2 object checksum: ${object.key}`)
	return object
}

function assertManifestScope(manifest, audit, options) {
	if (manifest.auditSha256 !== audit.artifactSha256) throw new Error('r2-manifest.json is not bound to the current audit')
	assertSelection(manifest.selection, options, 'r2-manifest.json')
	const selected = new Set(selectedTargets(audit, options).map((target) => `${target.id}:${target.locale}`))
	const expected = new Set([...selected].flatMap((key) => [`${key}:high`, `${key}:low`]))
	const actualSizes = new Set(manifest.objects.map((object) => `${object.cardId}:${object.locale}:${object.size}`))
	if (manifest.objects.length !== expected.size || actualSizes.size !== expected.size || [...expected].some((key) => !actualSizes.has(key))) {
		throw new Error(`R2 manifest object scope mismatch: expected ${expected.size}, got ${actualSizes.size}`)
	}
	for (const object of manifest.objects) validateManifestObject(object, audit)
}

function loadUploadSummary(manifest) {
	const file = path.join(RUN_DIR, 'upload-summary.json')
	if (!fs.existsSync(file)) return null
	const summary = readArtifact(file)
	if (summary.manifestSha256 !== manifest.artifactSha256) return null
	return summary
}

function matchingUploadReceipt(object) {
	const receipt = resolveInside(WORK_ROOT, `upload-receipts/${object.key}.ok`, 'upload receipt')
	if (!fs.existsSync(receipt)) return false
	const value = readJson(receipt)
	return value.key === object.key && value.sha256 === object.sha256
}

async function inspectRemoteObject(object) {
	const response = await fetchWithRetry(`${R2_ORIGIN}/${object.key}?sha256=${object.sha256}`, {}, 3, [404])
	if (response.status === 404) return { status: 404, matches: false }
	const bytes = await readLimitedBody(response)
	const contentType = response.headers.get('content-type') || ''
	const cacheControl = response.headers.get('cache-control') || ''
	const immutableYear = /(?:^|,)\s*public\s*(?:,|$)/i.test(cacheControl) && /(?:^|,)\s*max-age=31536000\s*(?:,|$)/i.test(cacheControl) && /(?:^|,)\s*immutable\s*(?:,|$)/i.test(cacheControl)
	return {
		status: response.status,
		matches: response.ok && /^image\/webp(?:;|$)/i.test(contentType) && immutableYear && bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP' && sha256(bytes) === object.sha256,
	}
}

async function writeUploadReceipt(object, extra = {}) {
	const receipt = resolveInside(WORK_ROOT, `upload-receipts/${object.key}.ok`, 'upload receipt')
	await fsp.mkdir(path.dirname(receipt), { recursive: true })
	const temp = `${receipt}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`
	await fsp.writeFile(temp, `${JSON.stringify({ key: object.key, sha256: object.sha256, ...extra })}\n`, 'utf8')
	await fsp.rename(temp, receipt)
}

async function preflight(options) {
	const manifest = loadR2Manifest()
	const audit = loadAudit()
	assertManifestScope(manifest, audit, options)
	const fallback = knownFallbackKeys()
	const objects = manifest.objects
	const uploadSummary = loadUploadSummary(manifest)
	const uploadedKeys = new Set((uploadSummary?.objects || []).map((object) => object.key))
	const collisions = []
	const failures = []
	await mapWithConcurrency(objects, 16, async (object) => {
		const response = await fetchWithRetry(`${R2_ORIGIN}/${object.key}`, { method: 'HEAD' }, 3, [404])
		if (response.status === 404) return
		if (!response.ok) throw new Error(`R2 preflight ${object.key}: HTTP ${response.status}`)
		const contentType = response.headers.get('content-type') || ''
		if (!/^image\/webp(?:;|$)/i.test(contentType)) failures.push({ key: object.key, status: response.status, contentType, reason: 'unexpected-content-type' })
		const receiptMatches = matchingUploadReceipt(object)
		let reusable = uploadedKeys.has(object.key) || receiptMatches
		if (!reusable && manifest.sourceKind === 'flibustier-release') {
			const remote = await inspectRemoteObject(object)
			if (remote.matches) {
				await writeUploadReceipt(object, { recoveredAt: new Date().toISOString() })
				reusable = true
			}
		}
		if (manifest.sourceKind === 'flibustier-release' ? !reusable : (!fallback.keys.has(object.key) && !reusable)) collisions.push(object.key)
	})
	const result = {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		auditSha256: audit.artifactSha256,
		manifestSha256: manifest.artifactSha256,
		selection: manifest.selection,
		objects: objects.length,
		allowedFallbackCollisions: manifest.sourceKind === 'flibustier-release' ? 0 : objects.filter((object) => fallback.keys.has(object.key)).length,
		reusedUploadedObjects: objects.filter((object) => uploadedKeys.has(object.key) || matchingUploadReceipt(object)).length,
		collisions,
		failures,
		status: collisions.length || failures.length ? 'blocked' : 'ok',
	}
	const initialPreflight = path.join(RUN_DIR, 'r2-preflight.json')
	const output = fs.existsSync(initialPreflight) && result.reusedUploadedObjects > 0
		? path.join(RUN_DIR, 'r2-postflight.json')
		: initialPreflight
	await writeArtifact(output, result)
	if (collisions.length) throw new Error(`Unknown R2 collisions: ${collisions.slice(0, 20).join(', ')}`)
	if (failures.length) throw new Error(`R2 preflight content checks failed for ${failures.length} objects`)
	console.log(JSON.stringify(result, null, 2))
}

function runCommand(command, args, options = {}) {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'], ...options })
		let stdout = ''
		let stderr = ''
		child.stdout?.on('data', (chunk) => { stdout += chunk })
		child.stderr?.on('data', (chunk) => { stderr += chunk })
		child.on('error', reject)
		child.on('close', (code) => code === 0 ? resolve({ stdout, stderr }) : reject(new Error(`${command} ${args.join(' ')} exited ${code}: ${stderr || stdout}`)))
	})
}

async function runUploadCommand(command, args, retries = 8) {
	for (let attempt = 0; ; attempt++) {
		try {
			return await runCommand(command, args)
		} catch (error) {
			if (!String(error?.message).includes('429: Too Many Requests') || attempt === retries) throw error
			await new Promise((resolve) => setTimeout(resolve, Math.min(2000 * 2 ** attempt, 30000) + Math.floor(Math.random() * 1000)))
		}
	}
}

async function upload(options) {
	if (!options.write) throw new Error('upload requires --write')
	if (!Number.isInteger(options.shards) || options.shards < 1 || options.shard === null || !Number.isInteger(options.shard) || options.shard < 0 || options.shard >= options.shards) {
		if (options.shards !== 1 || options.shard !== null) throw new Error('--shard/--shards must describe one valid shard')
	}
	const manifest = loadR2Manifest()
	const audit = loadAudit()
	assertManifestScope(manifest, audit, options)
	const preflight = readArtifact(path.join(RUN_DIR, 'r2-preflight.json'))
	if (preflight.status !== 'ok' || preflight.manifestSha256 !== manifest.artifactSha256 || preflight.auditSha256 !== audit.artifactSha256) {
		throw new Error('upload requires a green preflight bound to the current audit and manifest')
	}
	assertSelection(preflight.selection, options, 'r2-preflight.json')
	const objects = manifest.objects.filter((object, index) =>
		(options.shard === null || index % options.shards === options.shard),
	)
	const receiptsRoot = resolveInside(WORK_ROOT, 'upload-receipts', 'upload receipts root')
	const wrangler = process.env.WRANGLER_BIN || '/usr/local/bin/wrangler'
	await mapWithConcurrency(objects, 12, async (object) => {
		validateManifestObject(object, audit)
		const receipt = resolveInside(WORK_ROOT, `upload-receipts/${object.key}.ok`, 'upload receipt')
		if (fs.existsSync(receipt)) {
			const previous = readJson(receipt)
			if (previous.key !== object.key || previous.sha256 !== object.sha256) throw new Error(`Upload receipt does not match manifest: ${object.key}`)
		}
		const file = resolveInside(WORK_ROOT, object.path, 'upload input')
		const localBytes = await fsp.readFile(file)
		if (localBytes.length !== object.bytes || sha256(localBytes) !== object.sha256) throw new Error(`Upload input checksum mismatch: ${object.key}`)
		const remote = await inspectRemoteObject(object)
		if (remote.status !== 404) {
			if (!remote.matches) throw new Error(`Existing R2 object differs from manifest: ${object.key}`)
			if (!matchingUploadReceipt(object)) await writeUploadReceipt(object, { recoveredAt: new Date().toISOString() })
			return
		}
		await fsp.mkdir(path.dirname(receipt), { recursive: true })
		const log = resolveInside(WORK_ROOT, `upload-receipts/${object.key}.log`, 'upload log')
		// ponytail: Wrangler has no conditional create; this immediate GET narrows but cannot eliminate a cross-machine create race.
		const immediatelyBeforePut = await inspectRemoteObject(object)
		if (immediatelyBeforePut.status !== 404) throw new Error(`R2 object appeared before upload: ${object.key}`)
		const result = await runUploadCommand(wrangler, ['r2', 'object', 'put', `${R2_BUCKET}/${object.key}`, `--file=${file}`, '--content-type=image/webp', '--cache-control=public, max-age=31536000, immutable', '--remote'])
		await fsp.writeFile(log, `${result.stdout}${result.stderr}`, 'utf8')
		await writeUploadReceipt(object, { uploadedAt: new Date().toISOString() })
	})
	if (options.shards === 1 && options.shard === null) {
		await writeArtifact(path.join(RUN_DIR, 'upload-summary.json'), {
			schemaVersion: 1,
			generatedAt: new Date().toISOString(),
			auditSha256: audit.artifactSha256,
			manifestSha256: manifest.artifactSha256,
			preflightSha256: preflight.artifactSha256,
			selection: manifest.selection,
			objects: manifest.objects.map(({ key, sha256: digest }) => ({ key, sha256: digest })),
		})
	}
	console.log(JSON.stringify({ uploaded: objects.length, receiptsRoot }, null, 2))
}

async function verify(options) {
	const manifest = loadR2Manifest()
	const audit = loadAudit()
	assertManifestScope(manifest, audit, options)
	const preflight = readArtifact(path.join(RUN_DIR, 'r2-preflight.json'))
	if (preflight.status !== 'ok' || preflight.manifestSha256 !== manifest.artifactSha256 || preflight.auditSha256 !== audit.artifactSha256) {
		throw new Error('verify requires a green preflight bound to the current audit and manifest')
	}
	assertSelection(preflight.selection, options, 'r2-preflight.json')
	const objects = manifest.objects
	const failures = []
	const downstreamOnlyChecks = []
	const checkWebp = async (url, expectedSha256 = null) => {
		const parsed = new URL(url)
		if (parsed.origin !== R2_ORIGIN || !parsed.pathname.startsWith('/')) throw new Error(`Unexpected R2 verification URL: ${url}`)
		if (parsed.hash) throw new Error(`R2 verification URL contains a fragment: ${url}`)
		const response = await fetchWithRetry(url)
		const bytes = await readLimitedBody(response)
		const contentType = response.headers.get('content-type') || ''
		const cacheControl = response.headers.get('cache-control') || ''
		const actualSha256 = sha256(bytes)
		const immutableYear = /(?:^|,)\s*public\s*(?:,|$)/i.test(cacheControl) && /(?:^|,)\s*max-age=31536000\s*(?:,|$)/i.test(cacheControl) && /(?:^|,)\s*immutable\s*(?:,|$)/i.test(cacheControl)
		return {
			ok: response.ok && /^image\/webp(?:;|$)/i.test(contentType) && immutableYear && bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP' && (!expectedSha256 || actualSha256 === expectedSha256),
			status: response.status,
			contentType,
			cacheControl,
			actualSha256,
			bytes: bytes.length,
		}
	}
	await mapWithConcurrency(objects, 16, async (object) => {
		validateManifestObject(object, audit)
		if (manifest.sourceKind === 'flibustier-release' && !matchingUploadReceipt(object)) throw new Error(`Missing matching upload receipt: ${object.key}`)
		const expected = await fsp.readFile(resolveInside(WORK_ROOT, object.path, 'verify input'))
		if (expected.length !== object.bytes || sha256(expected) !== object.sha256) throw new Error(`Prepared input checksum mismatch: ${object.key}`)
		for (const url of [`${R2_ORIGIN}/${object.key}?v=${object.sha256.slice(0, 16)}`, `${R2_ORIGIN}/${object.key}`]) {
			const check = await checkWebp(url, object.sha256)
			if (!check.ok) failures.push({ key: object.key, url, status: check.status, contentType: check.contentType, cacheControl: check.cacheControl, expectedSha256: object.sha256, actualSha256: check.actualSha256, expectedBytes: expected.length, actualBytes: check.bytes })
		}
	})
	const selectedDownstreamOnly = selectedTargets(audit, options, ['downstream-only'])
	await mapWithConcurrency(selectedDownstreamOnly, 12, async (target) => {
		validateAuditTarget(target)
		for (const size of ['high', 'low']) {
			const key = assertR2Key(r2Key(LOCALE_CONFIG[target.locale].r2Locale, target.setId, target.localId, size), LOCALE_CONFIG[target.locale].r2Locale, target.setId, target.localId, size)
			const url = `${R2_ORIGIN}/${key}`
			const check = await checkWebp(url)
			const item = { cardId: target.id, locale: target.locale, size, key, url, status: check.status, contentType: check.contentType, sha256: check.actualSha256, bytes: check.bytes, ok: check.ok }
			downstreamOnlyChecks.push(item)
			if (!check.ok) failures.push({ ...item, reason: 'downstream-only-r2-check-failed' })
		}
	})
	const result = {
		schemaVersion: 1,
		generatedAt: new Date().toISOString(),
		auditSha256: audit.artifactSha256,
		manifestSha256: manifest.artifactSha256,
		preflightSha256: preflight.artifactSha256,
		selection: manifest.selection,
		objects: objects.length,
		downstreamOnlyObjects: downstreamOnlyChecks.length,
		downstreamOnlyChecks,
		failures,
		status: failures.length ? 'blocked' : 'ok',
	}
	await writeArtifact(path.join(RUN_DIR, 'r2-verify.json'), result)
	if (failures.length) throw new Error(`R2 verification failed for ${failures.length} objects`)
	console.log(JSON.stringify(result, null, 2))
}

async function writeFilesAtomically(entries) {
	const unique = new Map()
	for (const entry of entries) {
		if (unique.has(entry.file)) throw new Error(`Duplicate atomic-write target: ${entry.file}`)
		unique.set(entry.file, entry)
	}
	const staged = []
	const committed = []
	try {
		for (const [file, entry] of unique) {
			await fsp.mkdir(path.dirname(file), { recursive: true })
			const temp = path.join(path.dirname(file), `.${path.basename(file)}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`)
			const item = { file, temp, existed: fs.existsSync(file), previous: null, expectedSha256: entry.expectedSha256 ?? null }
			staged.push(item)
			await fsp.writeFile(temp, entry.content, 'utf8')
			if (item.existed) item.previous = await fsp.readFile(file, 'utf8')
			if (item.expectedSha256 && sha256(Buffer.from(item.previous ?? '', 'utf8')) !== item.expectedSha256) throw new Error(`Atomic-write baseline changed: ${file}`)
		}
		for (const item of staged) {
			if (item.expectedSha256 && sha256(await fsp.readFile(item.file)) !== item.expectedSha256) throw new Error(`Atomic-write target changed before commit: ${item.file}`)
			await fsp.rename(item.temp, item.file)
			committed.push(item)
		}
	} catch (error) {
		for (const item of committed.reverse()) {
			try {
				if (item.existed) await fsp.writeFile(item.file, item.previous, 'utf8')
				else await fsp.unlink(item.file)
			} catch { /* preserve the original failure; callers still see a failed transaction */ }
		}
		throw error
	} finally {
		for (const item of staged) {
			try { await fsp.unlink(item.temp) } catch { /* already renamed or absent */ }
		}
	}
}

async function apply(options) {
	if (!options.write) throw new Error('apply requires --write')
	const audit = loadAudit()
	const manifest = loadR2Manifest()
	assertManifestScope(manifest, audit, options)
	const preflight = readArtifact(path.join(RUN_DIR, 'r2-preflight.json'))
	const verification = readArtifact(path.join(RUN_DIR, 'r2-verify.json'))
	const uploadSummary = loadUploadSummary(manifest)
	if (
		preflight.status !== 'ok' || verification.status !== 'ok' ||
		preflight.auditSha256 !== audit.artifactSha256 || preflight.manifestSha256 !== manifest.artifactSha256 ||
		verification.auditSha256 !== audit.artifactSha256 || verification.manifestSha256 !== manifest.artifactSha256 ||
		verification.preflightSha256 !== preflight.artifactSha256 || verification.failures?.length ||
		verification.downstreamOnlyChecks?.some((check) => !check.ok)
	) throw new Error('apply requires green, digest-bound preflight and verification artifacts')
	assertSelection(preflight.selection, options, 'r2-preflight.json')
	assertSelection(verification.selection, options, 'r2-verify.json')
	const setFolders = loadSetFolders()
	const downstream = loadDownstream()
	const sourceTargets = audit.targets.filter((target) => target.status === 'source-available')
	const downstreamOnly = audit.targets.filter((target) => target.status === 'downstream-only')
	const selected = new Set(options.cards)
	const applyTargets = [...sourceTargets, ...downstreamOnly].filter((target) => selected.size === 0 || selected.has(target.id))
	for (const target of applyTargets) validateAuditTarget(target)
	const changedMetadata = []
	const metadataFiles = new Map()
	const metadataBaselines = new Map()
	for (const target of applyTargets) {
		const config = LOCALE_CONFIG[target.locale]
		const file = metadataCardFile(setFolders, target.setId, target.localId)
		const initial = fs.readFileSync(file, 'utf8')
		assertMetadataApplyBaseline(target, initial)
		metadataBaselines.set(file, sha256(Buffer.from(initial, 'utf8')))
		const original = metadataFiles.get(file) ?? initial
		const updated = patchImageBlock(original, config.apiLocale, target.desiredImage)
		metadataFiles.set(file, updated)
		if (updated !== original) changedMetadata.push({ cardId: target.id, locale: target.locale, file: path.relative(ROOT, file), image: target.desiredImage })
	}

	const downstreamChanges = []
	const downstreamFiles = new Map()
	const downstreamBaselines = new Map()
	for (const [locale, config] of Object.entries(LOCALE_CONFIG)) {
		const updates = new Map()
		const file = path.join(DOWNSTREAM, 'locales', 'card', config.file)
		const beforeText = fs.readFileSync(file, 'utf8')
		const before = JSON.parse(beforeText)
		for (const target of applyTargets.filter((item) => item.locale === locale)) {
			assertDownstreamApplyBaseline(target, before[target.key])
			updates.set(target.key, target.desiredImage)
		}
		if (!updates.size) continue
		const afterText = patchJsonImages(beforeText, updates)
		const after = JSON.parse(afterText)
		for (const key of Object.keys(before)) {
			if (comparableWithoutImage(before[key]) !== comparableWithoutImage(after[key])) throw new Error(`Downstream non-image field changed: ${locale}/${key}`)
		}
		downstreamFiles.set(file, afterText)
		downstreamBaselines.set(file, sha256(Buffer.from(beforeText, 'utf8')))
		for (const [key, image] of updates) downstreamChanges.push({ locale, key, id: after[key].id, image })
	}

	const fallback = knownFallbackKeys()
	const fallbackBaseline = sha256(fs.readFileSync(fallback.file))
	const resolvedIds = new Set(applyTargets.map((target) => `${target.id}:${LOCALE_CONFIG[target.locale].apiLocale}`))
	const remainingFallback = fallback.manifest.entries.filter((entry) => !resolvedIds.has(`${entry.cardId}:${entry.locale}`))
	const nextFallback = { ...fallback.manifest, generatedAt: new Date().toISOString(), entries: remainingFallback }
	const nextFallbackText = `${JSON.stringify(nextFallback, null, 2)}\n`
	const unresolved = audit.targets.filter((target) => target.status === 'unresolved-english-fallback')
	const downstreamCatalog = Object.values(LOCALE_CONFIG).map((config) => {
		const file = path.join(DOWNSTREAM, 'locales', 'card', config.file)
		const content = downstreamFiles.get(file) ?? fs.readFileSync(file, 'utf8')
		return { file: path.relative(DOWNSTREAM, file).split(path.sep).join('/'), sha256: sha256(Buffer.from(content, 'utf8')) }
	})
	const rarityFile = path.join(DOWNSTREAM, 'lib', 'config', 'cardRarity.additions.json')
	const receipt = {
		schemaVersion: 1,
		appliedAt: new Date().toISOString(),
		auditSha256: audit.artifactSha256,
		manifestSha256: manifest.artifactSha256,
		preflightSha256: preflight.artifactSha256,
		verificationSha256: verification.artifactSha256,
		preUploadCollisionEvidence: uploadSummary?.preflightSha256 === preflight.artifactSha256
			? { status: 'bound', preflightSha256: preflight.artifactSha256 }
			: { status: 'unavailable', reason: 'The retained preflight was generated after upload and the original pre-upload artifact was overwritten.' },
		selection: manifest.selection,
		processedTargets: applyTargets.map(({ id, locale, key, desiredImage }) => ({ id, locale, key, desiredImage })),
		metadataChanges: changedMetadata,
		downstreamChanges,
		downstreamCatalog,
		downstreamRarity: { file: path.relative(DOWNSTREAM, rarityFile).split(path.sep).join('/'), sha256: sha256(fs.readFileSync(rarityFile)) },
		unresolvedCount: unresolved.length,
		remainingFallbackObjectEntries: remainingFallback.length,
		finalFallbackManifestSha256: sha256(Buffer.from(nextFallbackText, 'utf8')),
	}

	await writeFilesAtomically([
		...([...metadataFiles].map(([file, content]) => ({ file, content, expectedSha256: metadataBaselines.get(file) }))),
		...([...downstreamFiles].map(([file, content]) => ({ file, content, expectedSha256: downstreamBaselines.get(file) }))),
		{ file: fallback.file, content: nextFallbackText, expectedSha256: fallbackBaseline },
		{ file: path.join(RUN_DIR, 'apply-receipt.json'), content: `${JSON.stringify(withArtifactDigest(receipt), null, 2)}\n` },
	])

	console.log(JSON.stringify({ metadataChanges: changedMetadata.length, downstreamChanges: downstreamChanges.length, unresolved: unresolved.length, remainingFallbackObjectEntries: remainingFallback.length }, null, 2))
}

async function main() {
	const options = parseArgs(process.argv.slice(2))
	if (options.help || !options.phase) { usage(); return }
	if (options.phase === 'audit') return audit(options)
	if (options.phase === 'download') return download(options)
	if (options.phase === 'prepare') return prepare(options)
	if (options.phase === 'preflight') return preflight(options)
	if (options.phase === 'upload') return upload(options)
	if (options.phase === 'verify') return verify(options)
	if (options.phase === 'apply') return apply(options)
	throw new Error(`Unknown phase: ${options.phase}`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
	main().catch((error) => {
		console.error(error.stack || error)
		process.exitCode = 1
	})
}

export {
	assertExactR2Url,
	assertDownstreamApplyBaseline,
	assertMetadataApplyBaseline,
	assertR2Key,
	assertSourceUrl,
	assertSelection,
	artifactDigest,
	flibustierArchiveMember,
	inspectRemoteObject,
	patchImageBlock,
	resolveInside,
	selectionIds,
	withArtifactDigest,
}
