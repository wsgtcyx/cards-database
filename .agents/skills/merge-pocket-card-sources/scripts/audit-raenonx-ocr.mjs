#!/usr/bin/env node

/**
 * Audit PaddleOCR envelopes against the RaenonX B4 localization overlay.
 *
 * This script intentionally consumes only PaddleOCR JSON. It never opens an
 * image and it never performs OCR itself. Fuzzy matching is used because the
 * card frame, foil, symbols, and multilingual glyphs routinely produce OCR
 * substitutions; the raw envelope remains the source evidence.
 */

import crypto from 'node:crypto'
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

function writeJson(file, value) {
	fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true })
	fs.writeFileSync(path.resolve(file), `${JSON.stringify(value, null, 2)}\n`)
}

function normalize(value) {
	return String(value ?? '').normalize('NFKC').replace(/\s+/gu, ' ').trim()
}

function compact(value) {
	return normalize(value)
		.replace(/\{[A-Z]\}/gu, '')
		.toLocaleLowerCase()
		.replace(/[\p{P}\p{S}\s]/gu, '')
}

function levenshtein(left, right) {
	const a = [...left]
	const b = [...right]
	const previous = Array.from({ length: b.length + 1 }, (_, index) => index)
	for (let i = 1; i <= a.length; i++) {
		let diagonal = previous[0]
		previous[0] = i
		for (let j = 1; j <= b.length; j++) {
			const above = previous[j]
			previous[j] = a[i - 1] === b[j - 1]
				? diagonal
				: Math.min(diagonal + 1, previous[j] + 1, previous[j - 1] + 1)
			diagonal = above
		}
	}
	return previous[b.length]
}

function similarity(left, right) {
	if (!left || !right) return 0
	return 1 - levenshtein(left, right) / Math.max(left.length, right.length)
}

function bestTextScore(expected, recognized) {
	const target = compact(expected)
	const source = compact(recognized)
	if (!target) return { score: 1, matched: true }
	if (source.includes(target)) return { score: 1, matched: true }
	const windows = []
	for (let length = Math.max(1, target.length - 3); length <= target.length + 3; length++) {
		for (let index = 0; index + length <= source.length; index++) {
			windows.push(source.slice(index, index + length))
		}
	}
	const score = windows.reduce((best, value) => Math.max(best, similarity(target, value)), 0)
	return { score, matched: score >= (target.length <= 4 ? 0.5 : 0.58) }
}

function recognizedText(envelope) {
	if (!envelope?.ok) return ''
	if (typeof envelope.text === 'string') return envelope.text
	return ''
}

function significantTokens(value) {
	const withoutMarkers = normalize(value).replace(/\{[A-Z]\}/gu, ' ')
	const latin = withoutMarkers.match(/[\p{Script=Latin}\p{N}]{3,}/gu) ?? []
	const han = [...withoutMarkers.matchAll(/[\p{Script=Han}]/gu)].map(match => match[0])
	return [...new Set([...latin, ...han])]
}

function textCoverage(expected, recognized) {
	const tokens = significantTokens(expected)
	if (!tokens.length) return 1
	const source = compact(recognized)
	const matched = tokens.filter(token => source.includes(compact(token))).length
	return matched / tokens.length
}

function cardNumberEvidence(number, text) {
	const expected = String(number).padStart(3, '0')
	const candidates = []
	const add = (value, total) => {
		if (!value) return
		candidates.push({ number: value.padStart(3, '0'), total: total?.padStart(3, '0') ?? null })
	}
	for (const match of text.matchAll(/\b(\d{1,3})\s*\/\s*(\d{1,3})\b/gu)) add(match[1], match[2])
	for (const match of text.matchAll(/\bB4[-\s]?(\d{1,3})\b/giu)) add(match[1], null)
	const unique = [...new Map(candidates.map(value => [`${value.number}/${value.total ?? ''}`, value])).values()]
	const signal = unique.length > 0
	const match = unique.some(value => value.number === expected && (value.total === null || value.total === '233'))
	return { signal, match: !signal || match, candidates: unique }
}

function cardTexts(card) {
	const fields = [card.name]
	for (const attack of card.attacks ?? []) fields.push(attack.name, attack.effect)
	for (const ability of card.abilities ?? []) fields.push(ability.name, ability.effect)
	if (card.effect) fields.push(card.effect)
	return fields.filter(Boolean)
}

function portableReference(file) {
	const absolute = path.resolve(file)
	const relative = path.relative(process.cwd(), absolute)
	if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new Error(`Persisted evidence input must be inside the repository: ${file}`)
	}
	return relative.split(path.sep).join('/')
}

const overlayPath = arg('overlay', 'meta/pocket-source-reviews/B4/raenonx.overlay.json')
const ocrRoot = path.resolve(arg('ocr-root', '/private/tmp'))
const outputPath = arg('output', 'meta/pocket-source-reviews/B4/raenonx.ocr.audit.json')
const reviewInputPath = arg('review-input', 'meta/pocket-source-reviews/B4/raenonx.ocr.review.input.json')
const snapshotPath = arg('snapshot', 'meta/pocket-source-reviews/B4/raenonx.snapshot.json')
const evidencePrefix = arg('evidence-prefix', 'meta/pocket-source-reviews/B4/ocr').replace(/\/+$/u, '')
const overlay = loadJson(overlayPath)
const snapshot = loadJson(snapshotPath)
const selected = arg('numbers')
	?.split(',')
	.map(value => Number(value.trim()))
	.filter(Number.isInteger)
const locales = ['en', 'fr', 'es', 'pt', 'zh']
const requestedCases = (arg('cases') ?? '1:en,5:fr,145:zh,150:zh,224:pt,233:zh')
	.split(',')
	.map(value => {
		const [number, locale, ...extra] = value.split(':')
		if (!Number.isInteger(Number(number)) || !locales.includes(locale) || extra.length) {
			throw new Error(`Invalid OCR case ${value}; expected NNN:en|fr|es|pt|zh`)
		}
		return { number: Number(number), locale }
	})
const allCards = Object.values(overlay.cards).filter(card => !selected?.length || selected.includes(card.number))
const casesByNumber = new Map()
for (const item of requestedCases) {
	if (selected?.length && !selected.includes(item.number)) continue
	const card = allCards.find(value => value.number === item.number)
	if (!card) throw new Error(`OCR case B4-${String(item.number).padStart(3, '0')} is absent from overlay`)
	const cardCases = casesByNumber.get(item.number) ?? []
	if (!cardCases.includes(item.locale)) cardCases.push(item.locale)
	casesByNumber.set(item.number, cardCases)
}
const cards = allCards.filter(card => casesByNumber.has(card.number))
const auditCards = {}
const reviewCards = {}
const failures = []

for (const card of cards) {
	const id = `B4-${String(card.number).padStart(3, '0')}`
	auditCards[id] = {}
	reviewCards[id] = { fields: {} }
	for (const locale of casesByNumber.get(card.number) ?? []) {
		const basename = `raenonx-b4-ocr-pilot-${String(card.number).padStart(3, '0')}-${locale}.json`
		const sourceFile = path.join(ocrRoot, basename)
		if (!fs.existsSync(sourceFile)) {
			failures.push(`${id}.${locale}: missing OCR envelope ${sourceFile}`)
			auditCards[id][locale] = { status: 'fail', sourceFile, error: 'missing envelope' }
			continue
		}
		const envelope = loadJson(sourceFile)
		const text = recognizedText(envelope)
		const localized = card.locales[locale]
		const sourceImage = snapshot.imageManifest?.find(value => value.number === card.number && value.locale === locale)?.url ?? null
		const labels = [localized.name]
		for (const attack of localized.attacks ?? []) labels.push(attack.name)
		for (const ability of localized.abilities ?? []) labels.push(ability.name)
		const labelScores = labels.map(value => ({ value, ...bestTextScore(value, text) }))
		const effects = [
			...(localized.attacks ?? []).map(attack => attack.effect),
			...(localized.abilities ?? []).map(ability => ability.effect),
			localized.effect,
		].filter(Boolean)
		const effectCoverage = effects.length
			? Math.min(...effects.map(value => textCoverage(value, text)))
			: 1
		const numberEvidence = cardNumberEvidence(card.number, text)
		const nameScore = labelScores[0]?.score ?? 0
		const nameSignal = nameScore >= 0.8
		const semanticSignal = effects.length
			? effectCoverage >= 0.2
			: labelScores.some(value => value.score >= 0.8)
		const status = envelope.ok
			&& text.trim().length > 0
			&& nameSignal
			&& numberEvidence.match
			&& semanticSignal
			? 'pass'
			: 'review'
		if (status !== 'pass') failures.push(`${id}.${locale}: OCR review required`)
		auditCards[id][locale] = {
			status,
			evidence: `${evidencePrefix}/${basename}`,
			image: sourceImage,
			sha256: crypto.createHash('sha256').update(fs.readFileSync(sourceFile)).digest('hex'),
			ok: envelope.ok === true,
			textLength: text.length,
			numberSignal: numberEvidence.signal,
			numberMatch: numberEvidence.match,
			numberCandidates: numberEvidence.candidates,
			nameSignal,
			nameScore,
			labels: labelScores,
			effectCoverage,
		}
		reviewCards[id].fields[`image.${locale}`] = {
			raw: '',
			evidence: [`paddleocr:${evidencePrefix}/${basename}`],
			status,
		}
	}
}

const summary = {
	pass: Object.values(auditCards).flatMap(value => Object.values(value)).filter(value => value.status === 'pass').length,
	review: Object.values(auditCards).flatMap(value => Object.values(value)).filter(value => value.status === 'review').length,
	fail: Object.values(auditCards).flatMap(value => Object.values(value)).filter(value => value.status === 'fail').length,
}
const report = {
	schemaVersion: 1,
	setId: 'B4',
	source: 'PaddleOCR Text Recognition API',
		overlay: portableReference(overlayPath),
	locales,
	cards: auditCards,
	summary,
	status: summary.fail ? 'fail' : 'sampled',
}
const reviewInput = {
	schemaVersion: 1,
	setId: 'B4',
	cards: reviewCards,
}
writeJson(outputPath, report)
writeJson(reviewInputPath, reviewInput)
console.log(JSON.stringify({
	setId: 'B4',
	cards: cards.length,
	locales,
	summary,
	status: report.status,
	output: path.resolve(outputPath),
	reviewInput: path.basename(reviewInputPath),
	failedChecks: failures.slice(0, 20),
}, null, 2))
