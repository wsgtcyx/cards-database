#!/usr/bin/env node

import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

function parseArguments(argv) {
  const result = {}
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index]
    const value = argv[index + 1]
    assert.ok(key?.startsWith('--'), `Unexpected argument: ${key}`)
    assert.ok(value, `Missing value for ${key}`)
    result[key.slice(2)] = value
  }
  return result
}

function splitList(value) {
  return value ? value.split(',').map((item) => item.trim()).filter(Boolean) : []
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function hasObjectKey(block, key) {
  const escaped = escapeRegExp(key)
  return new RegExp(`(?:["']${escaped}["']|\\b${escaped})\\s*:`).test(block)
}

function extractObject(source, property) {
  const matcher = new RegExp(`\\b${escapeRegExp(property)}\\s*:\\s*\\{`, 'g')
  const match = matcher.exec(source)
  assert.ok(match, `Missing ${property} object`)

  const openBrace = source.indexOf('{', match.index)
  let depth = 0
  let quote = null
  let escaped = false

  for (let index = openBrace; index < source.length; index += 1) {
    const character = source[index]

    if (quote) {
      if (escaped) {
        escaped = false
      } else if (character === '\\') {
        escaped = true
      } else if (character === quote) {
        quote = null
      }
      continue
    }

    if (character === '"' || character === "'" || character === '`') {
      quote = character
    } else if (character === '{') {
      depth += 1
    } else if (character === '}') {
      depth -= 1
      if (depth === 0) {
        return source.slice(openBrace + 1, index)
      }
    }
  }

  throw new Error(`Unclosed ${property} object`)
}

const options = parseArguments(process.argv.slice(2))
const manifest = options.manifest
  ? JSON.parse(fs.readFileSync(path.resolve(options.manifest), 'utf8'))
  : undefined
const setDirectoryValue = options['set-dir']
  ?? (manifest && `data/Pokémon TCG Pocket/${manifest.set.file}`)
const setDirectory = setDirectoryValue ? path.resolve(setDirectoryValue) : undefined
const setId = options['set-id'] ?? manifest?.set?.id
const expectedCount = Number.parseInt(
  options['expected-count'] ?? String(manifest?.set?.total),
  10,
)
const nameLanguages = splitList(
  options['name-languages']
    ?? (manifest ? 'en,fr,es,it,de,pt-br,zh-tw' : ''),
)
const imageLanguages = splitList(
  options['image-languages']
    ?? (manifest ? [...new Set(Object.values(manifest.images.cardLanguages))].join(',') : ''),
)
const packImageLanguages = splitList(
  options['pack-image-languages']
    ?? (manifest ? [...new Set(Object.values(manifest.images.packLanguages))].join(',') : ''),
)
const boosterIds = splitList(
  options['booster-ids']
    ?? (manifest ? manifest.set.boosters.map((booster) => booster.id).join(',') : ''),
)
const imageOrigin = (options['image-origin'] ?? manifest?.r2?.origin)?.replace(/\/$/, '')

assert.ok(setDirectory, '--set-dir is required')
const setFile = path.join(path.dirname(setDirectory), `${path.basename(setDirectory)}.ts`)
assert.ok(setId, '--set-id is required')
assert.ok(Number.isInteger(expectedCount), '--expected-count must be an integer')
assert.ok(fs.statSync(setDirectory).isDirectory(), `${setDirectory} is not a directory`)
assert.ok(fs.statSync(setFile).isFile(), `${setFile} is not a file`)

const setSource = fs.readFileSync(setFile, 'utf8')
assert.match(
  setSource,
  new RegExp(`\\bid\\s*:\\s*["']${escapeRegExp(setId)}["']`),
  `${setFile}: incorrect set ID`,
)

if (manifest) {
  assert.match(
    setSource,
    new RegExp(`\\bofficial\\s*:\\s*${manifest.set.official}\\b`),
    `${setFile}: incorrect official count`,
  )
  assert.match(
    setSource,
    new RegExp(`\\breleaseDate\\s*:\\s*["']${escapeRegExp(manifest.set.releaseDate)}["']`),
    `${setFile}: incorrect release date`,
  )
  const setName = extractObject(setSource, 'name')
  for (const language of Object.keys(manifest.set.names)) {
    assert.ok(hasObjectKey(setName, language), `${setFile}: missing name.${language}`)
  }
}

const setBoosters = extractObject(setSource, 'boosters')
for (const boosterId of boosterIds) {
  assert.ok(hasObjectKey(setBoosters, boosterId), `${setFile}: missing booster ${boosterId}`)
  for (const language of packImageLanguages) {
    assert.ok(imageOrigin, 'manifest.r2.origin is required for booster image checks')
    for (const file of ['logo.webp', 'artwork_front.webp']) {
      const expectedUrl = `${imageOrigin}/${language}/tcgp/${setId}/boosters/${boosterId}/${file}`
      assert.ok(setBoosters.includes(expectedUrl), `${setFile}: missing ${expectedUrl}`)
    }
  }
}

const files = fs
  .readdirSync(setDirectory)
  .filter((filename) => /^\d{3}\.ts$/.test(filename))
  .sort((left, right) => Number.parseInt(left) - Number.parseInt(right))

assert.equal(files.length, expectedCount, 'Card file count does not match expected count')

for (let index = 0; index < files.length; index += 1) {
  const expectedId = String(index + 1).padStart(3, '0')
  const filename = files[index]
  const cardId = path.basename(filename, '.ts')
  const source = fs.readFileSync(path.join(setDirectory, filename), 'utf8')

  assert.equal(cardId, expectedId, `Expected ${expectedId}.ts, found ${filename}`)
  assert.match(source, /^\s*set:\s*Set,/m, `${filename}: missing set: Set`)

  if (nameLanguages.length > 0) {
    const name = extractObject(source, 'name')
    for (const language of nameLanguages) {
      assert.ok(hasObjectKey(name, language), `${filename}: missing name.${language}`)
    }
    // Regional forms must keep a space before de/di/d' (e.g. "Exeggutor de Alola", not "Exeggutorde Alola").
    const brokenRegionalSpacing = [
      ...name.matchAll(/([A-Za-zÀ-ÿœŒ])(de|di) (Alola|Hisui|Paldea)/g),
      ...name.matchAll(/([A-Za-zÀ-ÿœŒ])d'(Alola|Hisui|Paldea)/g),
    ]
    assert.equal(
      brokenRegionalSpacing.length,
      0,
      `${filename}: regional form name missing space before de/di/d' (${brokenRegionalSpacing
        .map((match) => match[0])
        .join(', ')})`,
    )
  }

  if (imageLanguages.length > 0) {
    assert.ok(imageOrigin, '--image-origin is required with --image-languages')
    const image = extractObject(source, 'image')
    for (const language of imageLanguages) {
      const expectedUrl = `${imageOrigin}/${language}/tcgp/${setId}/${cardId}`
      assert.ok(hasObjectKey(image, language), `${filename}: missing image.${language}`)
      assert.ok(image.includes(expectedUrl), `${filename}: missing ${expectedUrl}`)
    }
  }

  const cardHasBoosters = /^\s+boosters\s*:/m.test(source)
  if (boosterIds.length === 1) {
    assert.equal(cardHasBoosters, false, `${filename}: single-pack card must omit boosters`)
  } else if (boosterIds.length > 1) {
    assert.equal(cardHasBoosters, true, `${filename}: multi-pack card must declare boosters`)
    const boostersMatch = source.match(/\bboosters\s*:\s*\[([^\]]*)\]/s)
    assert.ok(boostersMatch, `${filename}: invalid boosters array`)
    const declared = [...boostersMatch[1].matchAll(/["']([^"']+)["']/g)].map(
      (match) => match[1],
    )
    for (const booster of declared) {
      assert.ok(boosterIds.includes(booster), `${filename}: unknown booster ${booster}`)
    }
  }
}

console.log(
  [
    `set=${setId}`,
    `cards=${files.length}`,
    `nameLanguages=${nameLanguages.length}`,
    `imageLanguages=${imageLanguages.length}`,
    `packImageLanguages=${packImageLanguages.length}`,
    `boosterMode=${boosterIds.length <= 1 ? 'single' : 'multi'}`,
    'status=ok',
  ].join(' '),
)
