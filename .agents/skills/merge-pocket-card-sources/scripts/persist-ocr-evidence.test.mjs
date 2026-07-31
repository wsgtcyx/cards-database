import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const script = fileURLToPath(new URL('./persist-ocr-evidence.mjs', import.meta.url))

test('persisted OCR evidence strips signed URL capabilities', () => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-ocr-evidence-'))
	try {
		const ocrDir = path.join(root, 'input')
		const outputReview = path.join(root, 'output', 'review.json')
		const sourceFile = path.join(ocrDir, 'page.json')
		fs.mkdirSync(ocrDir, { recursive: true })
		fs.writeFileSync(sourceFile, `${JSON.stringify({
			markdown: {
				text: 'OCR text remains durable evidence',
				images: {
					'crop.jpg': 'https://example.test/crop.jpg?authorization=temporary-secret&expires=never',
				},
			},
		}, null, 2)}\n`)
		const reviewFile = path.join(root, 'review.json')
		fs.writeFileSync(reviewFile, `${JSON.stringify({
			schemaVersion: 1,
			setId: 'TEST',
			cards: {
				'TEST-001': {
					fields: {
						illustrator: {
							value: 'Artist',
							evidence: [`paddleocr:${sourceFile}#page=1`],
						},
					},
				},
			},
		}, null, 2)}\n`)

		const result = spawnSync(process.execPath, [
			script,
			'--review', reviewFile,
			'--ocr-dir', ocrDir,
			'--output-review', outputReview,
			'--evidence-prefix', 'meta/reviews/TEST/ocr',
		], { encoding: 'utf8' })
		assert.equal(result.status, 0, result.stderr)

		const summary = JSON.parse(result.stdout)
		assert.equal(summary.sanitizedUrls, 1)
		const persisted = fs.readFileSync(path.join(root, 'output', 'ocr', 'page.json'), 'utf8')
		assert.doesNotMatch(persisted, /authorization|temporary-secret/u)
		assert.match(persisted, /https:\/\/example\.test\/crop\.jpg/u)
		assert.match(persisted, /OCR text remains durable evidence/u)
		const review = fs.readFileSync(outputReview, 'utf8')
		assert.match(review, /paddleocr:meta\/reviews\/TEST\/ocr\/page\.json#page=1/u)
	} finally {
		fs.rmSync(root, { recursive: true, force: true })
	}
})

test('rejects a raw OCR value that is absent from the referenced page', () => {
	const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-ocr-evidence-invalid-'))
	try {
		const ocrDir = path.join(root, 'input')
		const sourceFile = path.join(ocrDir, 'page.json')
		fs.mkdirSync(ocrDir, { recursive: true })
		fs.writeFileSync(sourceFile, JSON.stringify({ text: 'Actual OCR text' }))
		const reviewFile = path.join(root, 'review.json')
		fs.writeFileSync(reviewFile, JSON.stringify({
			schemaVersion: 1,
			setId: 'TEST',
			cards: {
				'TEST-001': { fields: { illustrator: {
					value: 'Artist', raw: 'Different OCR text', evidence: [`paddleocr:${sourceFile}#page=1`],
				} } },
			},
		}))
		const result = spawnSync(process.execPath, [
			script,
			'--review', reviewFile,
			'--ocr-dir', ocrDir,
			'--output-review', path.join(root, 'output', 'review.json'),
			'--evidence-prefix', 'meta/reviews/TEST/ocr',
		], { encoding: 'utf8' })
		assert.notEqual(result.status, 0)
		assert.match(result.stderr, /raw OCR value is absent/u)
	} finally {
		fs.rmSync(root, { recursive: true, force: true })
	}
})
