#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const LOCALES = {
	'en-US': 'en',
	'fr-FR': 'fr',
	'es-ES': 'es',
	'it-IT': 'it',
	'de-DE': 'de',
	'pt-BR': 'pt-br',
	'zh-TW': 'zh-tw',
	'ko-KR': 'ko',
	'ja-JP': 'ja',
}

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function allSetEntries(source) {
	return Object.values(source).filter(Array.isArray).flat()
}

function normalizeRequestedId(value) {
	const clean = value.trim()
	const promo = clean.match(/^(?:P|PROMO|PROMOS?)[-_ ]?([A-Za-z0-9]+)$/i)
	if (promo) {
		const suffix = promo[1].toUpperCase()
		return { requested: clean, sourceCandidate: `PROMO-${suffix}`, targetCandidate: `P-${suffix}` }
	}
	return { requested: clean, sourceCandidate: clean, targetCandidate: clean }
}

function slugify(value) {
	return value
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')
}

function git(root, ...args) {
	return execFileSync('git', ['-C', root, ...args], { encoding: 'utf8' }).trim()
}

function sourceFiles(root, commit, prefix) {
	try {
		return git(root, 'ls-tree', '-r', '--name-only', commit, '--', prefix)
			.split('\n')
			.filter(Boolean)
	} catch {
		const local = path.join(root, prefix)
		if (!fs.existsSync(local)) return []
		return fs.readdirSync(local).map(file => `${prefix}/${file}`)
	}
}

function sourceRepo(root) {
	try {
		return git(root, 'config', '--get', 'remote.origin.url')
	} catch {
		return 'https://github.com/shelken/ptcgp-assets'
	}
}

function normalizeRepo(value) {
	return value
		.replace(/^git@github\.com:/, 'https://github.com/')
		.replace(/\.git$/, '')
}

function localizedSet(root, locale, sourceId) {
	const file = path.join(root, 'metadata/sets', locale, 'sets.json')
	if (!fs.existsSync(file)) throw new Error(`Missing source set metadata: ${file}`)
	const entry = allSetEntries(loadJson(file))
		.find(candidate => candidate.code.toLowerCase() === sourceId.toLowerCase())
	if (!entry) throw new Error(`${sourceId} is missing from ${file}`)
	return entry
}

function localizedCards(root, locale, sourceId) {
	const file = path.join(root, 'metadata/cards', locale, 'cards.extra.json')
	if (!fs.existsSync(file)) throw new Error(`Missing source card metadata: ${file}`)
	return loadJson(file)
		.filter(card => card.set.toLowerCase() === sourceId.toLowerCase())
		.sort((left, right) => left.number - right.number)
}

const requestedId = getArg('set-id')
if (!requestedId) throw new Error('--set-id is required')

const sourceRoot = path.resolve(
	getArg('source-root')
		?? process.env.PTCGP_ASSET_SOURCE
		?? '/tmp/ptcgp-assets',
)
const normalized = normalizeRequestedId(requestedId)
const englishSets = allSetEntries(loadJson(path.join(sourceRoot, 'metadata/sets/en-US/sets.json')))
const sourceEntry = englishSets.find(
	entry => entry.code.toLowerCase() === normalized.sourceCandidate.toLowerCase(),
)
if (!sourceEntry) {
	throw new Error(
		`Unknown set ${requestedId}. Source contains: ${englishSets.map(entry => entry.code).join(', ')}`,
	)
}

const sourceId = sourceEntry.code
const targetId = sourceId.startsWith('PROMO-')
	? `P-${sourceId.slice('PROMO-'.length)}`
	: sourceId
const commit = git(sourceRoot, 'rev-parse', 'HEAD')
if (!/^[0-9a-f]{40}$/i.test(commit)) throw new Error(`Expected a full source commit, got ${commit}`)

const names = {}
const setByLocale = {}
const cardsByLocale = {}
for (const [locale, language] of Object.entries(LOCALES)) {
	const set = localizedSet(sourceRoot, locale, sourceId)
	const cards = localizedCards(sourceRoot, locale, sourceId)
	setByLocale[locale] = set
	cardsByLocale[locale] = cards
	names[language] = set.name?.en ?? set.packs[0]?.name
}

const total = cardsByLocale['en-US'].length
if (sourceEntry.count !== total) {
	throw new Error(`${sourceId}: set count ${sourceEntry.count} does not match ${total} cards`)
}
for (const [locale, cards] of Object.entries(cardsByLocale)) {
	if (cards.length !== total) throw new Error(`${sourceId}: ${locale} has ${cards.length}/${total} cards`)
	for (let index = 0; index < cards.length; index++) {
		if (cards[index].number !== index + 1) {
			throw new Error(`${sourceId}: ${locale} cards are not contiguous at ${cards[index].number}`)
		}
	}
}

const usedBoosterIds = new Set()
const boosters = sourceEntry.packs.map((pack, index) => {
	let id = sourceId.startsWith('PROMO-')
		? `vol${pack.skuId.split('_').at(-1)}`
		: slugify(pack.name)
	if (!id) id = `pack-${index + 1}`
	if (usedBoosterIds.has(id)) id = `${id}-${index + 1}`
	usedBoosterIds.add(id)
	const localizedNames = {}
	for (const [locale, language] of Object.entries(LOCALES)) {
		const localized = setByLocale[locale].packs.find(candidate => candidate.skuId === pack.skuId)
		if (!localized) throw new Error(`${sourceId}: ${locale} is missing booster ${pack.skuId}`)
		localizedNames[language] = localized.name
	}
	return { id, sku: pack.skuId, names: localizedNames }
})

const cardLanguages = {}
const cardSourceFormats = {}
for (const [locale, language] of Object.entries(LOCALES)) {
	const prefix = `images/${locale}/cards-by-set/${sourceId}`
	const files = sourceFiles(sourceRoot, commit, prefix)
	const numbered = files
		.map(file => {
			const match = file.match(/\/(\d+)\.(png|webp)$/i)
			return match ? { number: Number(match[1]), format: match[2].toLowerCase() } : null
		})
		.filter(Boolean)
		.sort((left, right) => left.number - right.number)
	const sourceFormat = ['png', 'webp'].find(format => {
		const numbers = new Set(
			numbered
				.filter(file => file.format === format && file.number >= 1 && file.number <= total)
				.map(file => file.number),
		)
		return numbers.size === total
			&& Array.from({ length: total }, (_, index) => index + 1).every(number => numbers.has(number))
	})
	if (sourceFormat) {
		cardLanguages[locale] = language
		cardSourceFormats[locale] = sourceFormat
	}
}
if (!cardLanguages['en-US']) throw new Error(`${sourceId}: complete en-US card images are required`)

const packLanguages = {}
for (const [locale, language] of Object.entries(LOCALES)) {
	const packs = new Set(sourceFiles(sourceRoot, commit, `images/${locale}/packs`))
	const logos = new Set(sourceFiles(sourceRoot, commit, `images/${locale}/packs-logos`))
	const complete = boosters.every(booster =>
		packs.has(`images/${locale}/packs/${booster.sku}.webp`)
		&& logos.has(`images/${locale}/packs-logos/${booster.sku}.webp`),
	)
	if (complete) packLanguages[locale] = language
}
if (boosters.length && !packLanguages['en-US']) {
	throw new Error(`${sourceId}: complete en-US booster images are required`)
}

const repo = normalizeRepo(sourceRepo(sourceRoot))
const file = sourceId.startsWith('PROMO-')
	? `Promos-${sourceId.slice('PROMO-'.length)}`
	: names.en.replaceAll('/', ' - ').trim()
const requiredResearch = [
	'set.releaseDate',
	'set.official',
	'metadata.detailsFile',
	'metadata.detailsSource.commit',
	'metadata.detailsSource.license',
]
const official = sourceId.startsWith('PROMO-') ? 0 : null
const expectedCardObjects = total * Object.keys(cardLanguages).length * 2
const expectedPackObjects = boosters.length * Object.keys(packLanguages).length * 2

const manifest = {
	schemaVersion: 1,
	status: 'needs-research',
	source: {
		repo,
		commit,
		checkout: sourceRoot,
		rawImagesBase: `${repo.replace('https://github.com/', 'https://raw.githubusercontent.com/')}/${commit}/images`,
	},
	set: {
		id: targetId,
		sourceId,
		file,
		total,
		official,
		releaseDate: null,
		names,
		boosters,
	},
	metadata: {
		detailsFile: null,
		detailsSetId: targetId,
		detailsSource: {
			repo: null,
			commit: null,
			license: null,
			url: null,
		},
		zhTermsFile: path.join(process.cwd(), 'scripts/tmp/pocket-zh-source-terms.json'),
	},
	images: {
		cardLanguages,
		cardSourceFormats,
		packLanguages,
		expectedObjects: {
			cards: expectedCardObjects,
			boosters: expectedPackObjects,
			total: expectedCardObjects + expectedPackObjects,
		},
	},
	r2: {
		bucket: 'game',
		origin: 'https://game.pokemontcgpocket.app',
	},
	research: {
		required: requiredResearch,
		evidence: [],
		verifiedAt: null,
	},
}

const output = path.resolve(
	getArg('output') ?? `/tmp/pocket-set-${targetId.replace(/[^A-Za-z0-9-]/g, '_')}.manifest.json`,
)
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(JSON.stringify({
	output,
	set: targetId,
	sourceSet: sourceId,
	sourceCommit: commit,
	total,
	boosters: boosters.length,
	cardLanguages,
	packLanguages,
	expectedObjects: manifest.images.expectedObjects,
	requiredResearch,
}, null, 2))
