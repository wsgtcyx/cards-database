import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aD1sAAAAASUVORK5CYII=', 'base64')
function run(records) {
 const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'pocket-ocr-test-'))
 const input = path.join(directory, 'downloads.json')
 fs.writeFileSync(input, JSON.stringify({ records }))
 const result = spawnSync(process.execPath, ['scripts/ocr-localized-card-images.mjs', '--downloads', input, '--output-dir', path.join(directory, 'output'), '--work-dir', path.join(directory, 'work'), '--locales', 'ja', '--skip-tesseract'], { cwd: root, encoding: 'utf8', timeout: 30000 })
 return { directory, result }
}
const record = id => ({ id, locale: 'ja', sourceUrl: `data:image/png;base64,${png.toString('base64')}`, sha256: createHash('sha256').update(png).digest('hex') })

test('rejects duplicate and unsafe image identities before downloading', () => {
 for (const records of [[record('A1-001'), record('A1-001')], [record('../001')]]) {
  const { directory, result } = run(records)
  try {
   assert.notEqual(result.status, 0)
   assert.match(result.stderr, /duplicate card|invalid card ID/)
   assert.equal(fs.existsSync(path.join(directory, 'work')), false)
  } finally { fs.rmSync(directory, { recursive: true, force: true }) }
 }
})

test('OCR input files keep equal collector numbers from different sets separate', { skip: process.platform !== 'darwin' }, () => {
 const { directory, result } = run([record('A1-001'), record('C1-001'), record('P-B-001')])
 try {
  assert.ok([0, 2].includes(result.status), result.stderr)
  const summary = JSON.parse(result.stdout)
  assert.equal(summary.records, 3)
  assert.equal(summary.passed, false)
  assert.equal(summary.engineFailures.length, 3)
  assert.equal(summary.passed, summary.engineFailures.length === 0)
  assert.equal(result.status, summary.passed ? 0 : 2)
  for (const id of ['A1-001', 'C1-001', 'P-B-001']) {
   assert.deepEqual(fs.readFileSync(path.join(directory, 'work/ja', `${id}.png`)), png)
  }
  const results = JSON.parse(fs.readFileSync(path.join(directory, 'output/apple-vision-ja.json')))
  assert.deepEqual(results.map(row => row.id), ['A1-001', 'C1-001', 'P-B-001'])
 } finally { fs.rmSync(directory, { recursive: true, force: true }) }
})
