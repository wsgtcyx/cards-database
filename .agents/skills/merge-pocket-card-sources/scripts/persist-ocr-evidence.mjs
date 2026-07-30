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

function rewrite(value) {
	if (Array.isArray(value)) return value.map(rewrite)
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, rewrite(item)]))
	}
	return stableEvidence(value)
}

const stableReview = rewrite(review)
fs.mkdirSync(outputOcrDir, { recursive: true })
for (const [basename, sourceFile] of [...copied.entries()].sort(([left], [right]) => left.localeCompare(right))) {
	fs.copyFileSync(sourceFile, path.join(outputOcrDir, basename))
}
fs.writeFileSync(outputReview, `${JSON.stringify(stableReview, null, 2)}\n`)

console.log(JSON.stringify({
	setId: review.setId,
	review: outputReview,
	evidenceFiles: copied.size,
	outputOcrDir,
}, null, 2))
