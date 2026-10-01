#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

function arg(name) {
	const index = process.argv.indexOf(`--${name}`)
	const value = index >= 0 ? process.argv[index + 1] : undefined
	if (!value) throw new Error(`--${name} is required`)
	return value
}

function requireObject(value, label) {
	if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`)
	return value
}

function render(template, values) {
	return template.replace(/\{([^}]+)\}/gu, (_, key) => {
		if (values[key] === undefined) throw new Error(`Unknown template token: ${key}`)
		return String(values[key])
	})
}

const setId = arg('set-id')
const total = Number(arg('total'))
if (!Number.isInteger(total) || total < 1) throw new Error('--total must be a positive integer')
const sourceRoot = path.resolve(arg('source-root'))
const ocrRoot = path.resolve(arg('ocr-root'))
const manifest = JSON.parse(fs.readFileSync(path.resolve(arg('r2-manifest')), 'utf8'))
const output = path.resolve(arg('output'))
const configFile = path.resolve(arg('config'))
const configRoot = path.dirname(configFile)
const config = JSON.parse(fs.readFileSync(configFile, 'utf8'))
if (config.setId !== setId || config.total !== total) throw new Error('Config setId/total do not match CLI arguments')
const evidenceConfig = requireObject(config.imageEvidence, 'config.imageEvidence')
const localeConfig = requireObject(evidenceConfig.locales, 'config.imageEvidence.locales')
const localeEntries = Object.entries(localeConfig)
if (!localeEntries.length) throw new Error('config.imageEvidence.locales cannot be empty')
const ocrLocales = new Set(evidenceConfig.ocrLocales ?? [])
for (const locale of ocrLocales) if (!localeConfig[locale]) throw new Error(`OCR locale ${locale} is not an image locale`)
const sourceUrlTemplate = evidenceConfig.sourceCardUrlTemplate
if (typeof sourceUrlTemplate !== 'string' || !sourceUrlTemplate) throw new Error('config.imageEvidence.sourceCardUrlTemplate is required')
const sourceSetId = evidenceConfig.sourceSetId
const boosterConfigs = evidenceConfig.boosters
if (!Array.isArray(boosterConfigs) || !boosterConfigs.length) throw new Error('config.imageEvidence.boosters must be a non-empty array')
const objects = new Map(manifest.objects.map(object => [object.key, object]))
const hdManifest = evidenceConfig.hdManifest
	? JSON.parse(fs.readFileSync(fromConfigPath(evidenceConfig.hdManifest, 'hdManifest'), 'utf8'))
	: undefined
if (hdManifest && hdManifest.setId !== setId) throw new Error('HD manifest set mismatch')
const hdObjects = new Map((hdManifest?.objects ?? []).map(object => [object.key, object]))

function hdSource(key) {
	const selected = hdObjects.get(key)
	if (!selected) return undefined
	if (path.basename(selected.source.file) !== selected.source.file) throw new Error(`${key}: invalid HD source filename`)
	const file = path.join(path.resolve(arg('hd-source-root')), selected.source.file)
	const source = digest(file)
	if (source.sha256 !== selected.source.sha256 || source.bytes !== selected.source.bytes) throw new Error(`${key}: HD source changed`)
	return { url: selected.source.sourcePage, ...source, width: selected.source.width, height: selected.source.height, sourceLocale: selected.sourceLocale }
}

function fromConfigPath(value, label) {
	if (typeof value !== 'string' || !value) throw new Error(`${label} is required`)
	return path.resolve(configRoot, value)
}

function digest(file) {
	const bytes = fs.readFileSync(file)
	return { bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') }
}

function numberedFile(directory, number) {
	const padded = String(number).padStart(3, '0')
	const candidates = [padded, String(number)].flatMap(stem => ['png', 'jpg', 'jpeg', 'webp'].map(extension => path.join(directory, `${stem}.${extension}`)))
	const file = candidates.find(candidate => fs.existsSync(candidate))
	if (!file) throw new Error(`${directory}: source image ${padded} not found`)
	return file
}

const cards = []
let mappedOutputs = 0
let ocrArtifacts = 0
for (let number = 1; number <= total; number++) {
	const localId = String(number).padStart(3, '0')
	for (const [locale, localeData] of localeEntries) {
		if (typeof localeData.dir !== 'string' || typeof localeData.sourceLocale !== 'string') throw new Error(`${locale}: dir and sourceLocale are required`)
		const sourceFile = numberedFile(path.join(sourceRoot, localeData.dir), number)
		const base = config.imageBaseOverrides?.[`${setId}-${localId}`]?.[locale]
		const highKey = base ? `${new URL(base).pathname.slice(1)}/high.webp` : `${locale}/tcgp/${setId}/${localId}/high.webp`
		const hd = hdSource(highKey)
		if (base && !hd) throw new Error(`${highKey}: selected HD source evidence missing`)
		const source = hd ?? digest(sourceFile)
		const outputs = ['high', 'low'].map(variant => {
			const key = base ? `${new URL(base).pathname.slice(1)}/${variant}.webp` : `${locale}/tcgp/${setId}/${localId}/${variant}.webp`
			const object = objects.get(key)
			if (!object) throw new Error(`${key}: R2 manifest object missing`)
			mappedOutputs++
			return { key, bytes: object.bytes, sha256: object.sha256 }
		})
		let ocr
		if (ocrLocales.has(locale)) {
			const ocrFile = path.join(ocrRoot, locale, `${localId}.json`)
			const artifact = JSON.parse(fs.readFileSync(ocrFile, 'utf8'))
			if (artifact.sourceImageSha256 !== source.sha256 || artifact.cardId !== `${setId}-${localId}` || artifact.locale !== locale) throw new Error(`${ocrFile}: OCR evidence is not bound to its source image/card/locale`)
			ocr = { artifact: `ocr/${locale}/${localId}.json`, ...digest(ocrFile) }
			ocrArtifacts++
		}
		cards.push({
			cardId: `${setId}-${localId}`,
			locale,
			source: {
				url: render(sourceUrlTemplate, { sourceSetId, number, localId, locale, sourceLocale: localeData.sourceLocale }),
				...source,
			},
			outputs,
			...(ocr ? { ocr } : {}),
		})
	}
}

const boosters = []
for (const booster of boosterConfigs) {
	if (typeof booster.slug !== 'string' || !booster.slug) throw new Error('Every imageEvidence booster requires a slug')
	const logoRoot = fromConfigPath(booster.logoRoot, `${booster.slug}.logoRoot`)
	const artworkFile = fromConfigPath(booster.artworkFile, `${booster.slug}.artworkFile`)
	const artworkSource = digest(artworkFile)
	for (const [locale, localeData] of localeEntries) {
		const logoFile = path.join(logoRoot, render(booster.logoFilePattern ?? '{sourceLocale}.webp', { locale, sourceLocale: localeData.sourceLocale }))
		if (!fs.existsSync(logoFile)) throw new Error(`${logoFile}: localized logo missing`)
		const assets = [
			['logo', { evidenceUrl: booster.logoEvidenceUrl, ...digest(logoFile) }],
			['artwork_front', { evidenceUrl: booster.artworkEvidenceUrl, languageNeutral: booster.artworkLanguageNeutral === true, ...artworkSource }],
		]
		for (const [kind, source] of assets) {
			if (typeof source.evidenceUrl !== 'string' || !source.evidenceUrl) throw new Error(`${booster.slug}.${kind}: evidence URL is required`)
			const chosenUrl = booster.assetUrls?.[kind]?.[locale]
			const key = chosenUrl ? new URL(chosenUrl).pathname.slice(1) : `${locale}/tcgp/${setId}/boosters/${booster.slug}/${kind}.webp`
			const object = objects.get(key)
			if (!object) throw new Error(`${key}: booster R2 manifest object missing`)
			const hd = hdSource(key)
			boosters.push({ locale, slug: booster.slug, kind, source: hd ? { evidenceUrl: hd.url, ...hd, languageNeutral: false, languageFallback: hd.sourceLocale !== locale } : source, output: { key, bytes: object.bytes, sha256: object.sha256 } })
		}
	}
}

const expected = {
	sourceCardImages: total * localeEntries.length,
	mappedCardObjects: total * localeEntries.length * 2,
	ocrArtifacts: total * ocrLocales.size,
	boosterObjects: boosterConfigs.length * localeEntries.length * 2,
}
if (cards.length !== expected.sourceCardImages || mappedOutputs !== expected.mappedCardObjects || ocrArtifacts !== expected.ocrArtifacts || boosters.length !== expected.boosterObjects) throw new Error('Evidence count contract failed')
const evidence = {
	schemaVersion: 2,
	setId,
	sources: requireObject(evidenceConfig.sources, 'config.imageEvidence.sources'),
	counts: expected,
	cards,
	boosters,
}
fs.mkdirSync(path.dirname(output), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify(evidence, null, 2)}\n`)
console.log(JSON.stringify({ output, ...evidence.counts }, null, 2))
