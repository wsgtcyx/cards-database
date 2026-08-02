#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const MASTER_URL = 'https://ptcgp.raenonx.cc/api/data/global-master'
const SET_ID = 'B4'
const SAMPLE_NUMBERS = [1, 3, 5, 82, 122, 145, 154, 233]

function parseArgs(argv) {
  const options = {
    output: 'meta/pocket-source-reviews/B4.raenonx-relations.json',
    timeoutMs: 30_000,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--output') options.output = argv[++index]
    else if (value === '--timeout-ms') options.timeoutMs = Number(argv[++index])
    else throw new Error(`Unknown argument: ${value}`)
  }
  return options
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex')
}

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
        'user-agent': 'wsgtcyx/cards-database-b4-relations/1.0',
      },
      signal: controller.signal,
    })
    const bytes = Buffer.from(await response.arrayBuffer())
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return {
      meta: {
        url,
        status: response.status,
        contentType: response.headers.get('content-type'),
        lastModified: response.headers.get('last-modified'),
        bytes: bytes.length,
        sha256: sha256(bytes),
      },
      value: JSON.parse(bytes.toString('utf8')),
    }
  } finally {
    clearTimeout(timer)
  }
}

function collectionNumber(entry) {
  return (entry.collectionNums ?? []).find(item => item?.expansion?.id === SET_ID)?.num ?? null
}

function collectStrings(value, output = []) {
  if (typeof value === 'string') output.push(value)
  else if (Array.isArray(value)) value.forEach(item => collectStrings(item, output))
  else if (value && typeof value === 'object') Object.values(value).forEach(item => collectStrings(item, output))
  return output
}

function objectContainsAny(value, needles) {
  const haystack = JSON.stringify(value)
  return needles.some(needle => needle && haystack.includes(String(needle)))
}

function findMatches(map, needles, limit = 30) {
  if (!map || typeof map !== 'object') return []
  const output = []
  for (const [key, value] of Object.entries(map)) {
    if (needles.includes(key) || objectContainsAny(value, needles)) {
      output.push({ key, value })
      if (output.length >= limit) break
    }
  }
  return output
}

function relatedIdentifiers(entry) {
  const strings = collectStrings(entry)
  const relevant = strings.filter(value =>
    /^(?:PK|TR|CH|P|T|BN)_/.test(value)
    || /^[A-Z][A-Z0-9_]{3,}$/.test(value)
  )
  return [...new Set([
    entry.cardId,
    entry.play?.pokemonId,
    entry.play?.characterId,
    ...relevant,
  ].filter(Boolean))]
}

function summarizeMap(map) {
  const keys = map && typeof map === 'object' ? Object.keys(map) : []
  return {
    count: keys.length,
    keySamples: keys.slice(0, 20),
    valueSamples: keys.slice(0, 3).map(key => ({ key, value: map[key] })),
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  const { meta, value: master } = await fetchJson(MASTER_URL, options.timeoutMs)
  const cards = Object.values(master.cardEntryMap ?? {})
    .map(entry => ({ number: collectionNumber(entry), entry }))
    .filter(item => Number.isInteger(item.number))
    .sort((left, right) => left.number - right.number)

  const samples = {}
  for (const number of SAMPLE_NUMBERS) {
    const found = cards.find(item => item.number === number)
    if (!found) throw new Error(`Missing B4-${number}`)
    const entry = found.entry
    const needles = relatedIdentifiers(entry)
    samples[String(number)] = {
      number,
      cardId: entry.cardId,
      cardType: entry.cardType,
      needles,
      entry,
      exact: {
        pokemonByPlayId: master.pokemonMap?.[entry.play?.pokemonId] ?? null,
        pokemonByCardId: master.pokemonMap?.[entry.cardId] ?? null,
        trainerByCardId: master.trainerMap?.[entry.cardId] ?? null,
        characterById: master.characterMap?.[entry.play?.characterId] ?? null,
      },
      matches: {
        pokemonMap: findMatches(master.pokemonMap, needles),
        trainerMap: findMatches(master.trainerMap, needles),
        characterMap: findMatches(master.characterMap, needles),
      },
    }
  }

  const report = {
    schemaVersion: 1,
    setId: SET_ID,
    generatedAt: new Date().toISOString(),
    source: meta,
    mapSummaries: {
      pokemonMap: summarizeMap(master.pokemonMap),
      trainerMap: summarizeMap(master.trainerMap),
      characterMap: summarizeMap(master.characterMap),
    },
    samples,
  }

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${options.output}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
