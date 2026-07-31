#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	const value = exact >= 0
		? process.argv[exact + 1]
		: process.argv.find(item => item.startsWith(`--${name}=`))?.slice(name.length + 3)
	if (!value) throw new Error(`--${name} is required`)
	return value
}

const reviewFile = path.resolve(getArg('review'))
const ocrDir = path.resolve(getArg('ocr-dir'))
const outputReview = path.resolve(getArg('output-review'))
const evidencePrefix = getArg('evidence-prefix').replace(/\/+$/u, '')
const outputOcrDir = path.join(path.dirname(outputReview), 'ocr')

const review = JSON.parse(fs.readFileSync(reviewFile, 'utf8'))
if (review.schemaVersion !== 1 || !review.setId || !review.cards) {
	throw new Error('Review must use schemaVersion 1 and contain setId/cards')
}

const copied = new Map()
const ocrCache = new Map()
let sanitizedUrls = 0

const SENSITIVE_QUERY_KEYS = new Set([
	'authorization',
	'signature',
	'token',
	'x-amz-credential',
	'x-amz-signature',
])

function sanitizeTransientUrl(value) {
	if (typeof value !== 'string' || !/^https?:\/\//iu.test(value)) return value
	let url
	try {
		url = new URL(value)
	} catch {
		return value
	}
	if (![...url.searchParams.keys()].some(key => SENSITIVE_QUERY_KEYS.has(key.toLowerCase()))) {
		return value
	}
	url.search = ''
	url.hash = ''
	sanitizedUrls++
	return url.toString()
}

function sanitizeOcrJson(value) {
	if (Array.isArray(value)) return value.map(sanitizeOcrJson)
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, sanitizeOcrJson(item)]))
	}
	return sanitizeTransientUrl(value)
}

function stableEvidence(value) {
	if (typeof value !== 'string' || !value.startsWith('paddleocr:')) return value
	const match = value.match(/^paddleocr:(.+?)(#.*)?$/u)
	if (!match) throw new Error(`Invalid PaddleOCR evidence: ${value}`)
	const sourceFile = path.resolve(match[1])
	const relative = path.relative(ocrDir, sourceFile)
	if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
		throw new Error(`OCR evidence is outside --ocr-dir: ${sourceFile}`)
	}
	if (!fs.existsSync(sourceFile) || !fs.statSync(sourceFile).isFile()) {
		throw new Error(`Missing OCR evidence file: ${sourceFile}`)
	}
	const basename = path.basename(sourceFile)
	const previous = copied.get(basename)
	if (previous && previous !== sourceFile) {
		throw new Error(`OCR evidence basename collision: ${basename}`)
	}
	copied.set(basename, sourceFile)
	return `paddleocr:${evidencePrefix}/${basename}${match[2] ?? ''}`
}

function normalizedEvidenceText(value) {
	return String(value ?? '').normalize('NFKC').replace(/\s+/gu, ' ').trim().toLowerCase()
}

function stringsIn(value, output = []) {
	if (typeof value === 'string') output.push(value)
	else if (Array.isArray(value)) value.forEach(item => stringsIn(item, output))
	else if (value && typeof value === 'object') Object.values(value).forEach(item => stringsIn(item, output))
	return output
}

function sourceForEvidence(value) {
	const match = value.match(/^paddleocr:(.+?)(?:#page=(\d+))?$/u)
	if (!match) throw new Error(`PaddleOCR evidence must end in an optional #page=N fragment: ${value}`)
	const sourceFile = path.resolve(match[1])
	let document = ocrCache.get(sourceFile)
	if (!document) {
		document = JSON.parse(fs.readFileSync(sourceFile, 'utf8'))
		ocrCache.set(sourceFile, document)
	}
	const pages = document?.result?.result?.layoutParsingResults
	if (!match[2]) return { sourceFile, page: document }
	const pageNumber = Number(match[2])
	if (Array.isArray(pages)) {
		if (pageNumber < 1 || pageNumber > pages.length) {
			throw new Error(`${value}: page ${pageNumber} is outside OCR result range 1..${pages.length}`)
		}
		return { sourceFile, page: pages[pageNumber - 1] }
	}
	if (pageNumber !== 1) throw new Error(`${value}: OCR result has no page ${pageNumber}`)
	return { sourceFile, page: document }
}

function validateReviewEvidence() {
	for (const [cardId, card] of Object.entries(review.cards)) {
		for (const [fieldName, field] of Object.entries(card?.fields ?? {})) {
			const paddleEvidence = (field?.evidence ?? [])
				.filter(value => typeof value === 'string' && value.startsWith('paddleocr:'))
			if (!paddleEvidence.length) continue
			const pages = paddleEvidence.map(sourceForEvidence)
			if (typeof field.raw === 'string' && field.raw.trim()) {
				const raw = normalizedEvidenceText(field.raw)
				const found = pages.some(({ page }) => normalizedEvidenceText(stringsIn(page).join(' ')).includes(raw))
				if (!found) {
					throw new Error(`${cardId}.${fieldName}: raw OCR value is absent from referenced page evidence`)
				}
			}
		}
	}
}

function rewrite(value) {
	if (Array.isArray(value)) return value.map(rewrite)
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, rewrite(item)]))
	}
	return stableEvidence(value)
}

validateReviewEvidence()
const stableReview = rewrite(review)
fs.mkdirSync(outputOcrDir, { recursive: true })
for (const [basename, sourceFile] of [...copied.entries()].sort(([left], [right]) => left.localeCompare(right))) {
	const sanitized = sanitizeOcrJson(JSON.parse(fs.readFileSync(sourceFile, 'utf8')))
	const serialized = `${JSON.stringify(sanitized, null, 2)}\n`
	if (/[?&](?:authorization|signature|token|x-amz-credential|x-amz-signature)=/iu.test(serialized)) {
		throw new Error(`OCR evidence still contains a signed or credential-bearing URL: ${sourceFile}`)
	}
	fs.writeFileSync(path.join(outputOcrDir, basename), serialized)
}
fs.writeFileSync(outputReview, `${JSON.stringify(stableReview, null, 2)}\n`)

console.log(JSON.stringify({
	setId: review.setId,
	review: outputReview,
	evidenceFiles: copied.size,
	sanitizedUrls,
	outputOcrDir,
}, null, 2))
