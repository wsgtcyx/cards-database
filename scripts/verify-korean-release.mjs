import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { isDeepStrictEqual } from 'node:util'

const base = (process.argv[2] || 'https://api.pokemontcgpocket.app').replace(/\/$/u, '')
const output = process.argv[3]
const root = new URL('../server/generated/', import.meta.url)
const read = async file => JSON.parse(await readFile(new URL(file, root), 'utf8'))
const cards = await read('ko/cards.json')
const english = await read('en/cards.json')
const sets = await read('ko/sets.json')
const ids = values => values.map(card => card.id).sort()
assert.equal(new Set(ids(cards)).size, cards.length)
assert.deepEqual(ids(cards), ids(english))
let requests = 0
async function get(path) {
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await fetch(`${base}/v2/ko/${path}`, { signal: AbortSignal.timeout(30000) })
      assert.equal(response.status, 200, path)
      requests++
      return await response.json()
    } catch (error) {
      if (attempt >= 2) throw error
      await new Promise(resolve => setTimeout(resolve, 300 * (attempt + 1)))
    }
  }
}
function content(card) {
  const value = structuredClone(card)
  delete value.updated
  delete value.thirdParty
  return value
}
assert.deepEqual(ids(await get('cards')), ids(cards))
const failures = []
let cursor = 0
await Promise.all(Array.from({ length: 8 }, async () => {
  while (cursor < cards.length) {
    const expected = cards[cursor++]
    try {
      assert.match(expected.name, /[가-힣]/u, expected.id)
      assert.ok(expected.image.includes(`/ko/tcgp/${expected.id.replace(/-(?=\d{3}$)/u, '/')}`), expected.id)
      const actual = await get(`cards/${expected.id}`)
      if (!isDeepStrictEqual(content(actual), content(expected))) {
        const fields = [...new Set([...Object.keys(actual), ...Object.keys(expected)])]
          .filter(key => !['updated', 'thirdParty'].includes(key) && !isDeepStrictEqual(actual[key], expected[key]))
        failures.push({ id: expected.id, fields })
      }
    } catch (error) {
      failures.push({ id: expected.id, error: String(error) })
    }
  }
}))
for (const set of sets) {
  const actual = await get(`sets/${set.id}`)
  assert.deepEqual(ids(actual.cards), ids(set.cards), set.id)
  assert.equal(actual.name, set.name, set.id)
}
const options = await get('cards/search/options')
assert.equal(options.total, cards.length)
assert.ok((await get(`cards/search?q=${encodeURIComponent('피카츄')}`)).pagination.total > 0)
const digest = createHash('sha256').update(JSON.stringify(cards.map(content))).digest('hex')
const report = { passed: failures.length === 0, at: new Date().toISOString(), api: base, cards: cards.length, sets: sets.length, requests, compiledContentSha256: digest, failures }
if (output) await writeFile(output, JSON.stringify(report, null, 2) + '\n')
console.log(JSON.stringify(report))
if (failures.length) process.exitCode = 1
