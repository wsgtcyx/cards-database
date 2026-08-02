#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const BASE_URL = 'https://ptcgp.raenonx.cc'
const MASTER_URL = `${BASE_URL}/api/data/global-master`
const SET_ID = 'B4'
const EXPECTED_COUNT = 233
const SAMPLE_NUMBERS = [1, 3, 5, 82, 145, 154, 233]
const LOCALES = {
  en: 'en',
  fr: 'fr',
  es: 'es',
  it: 'it',
  de: 'de',
  'pt-br': 'pt',
  'zh-tw': 'zh',
  ko: 'ko',
  ja: 'ja',
}

function parseArgs(argv) {
  const result = {
    output: 'meta/pocket-source-reviews/B4.raenonx-schema.json',
    timeoutMs: 30_000,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index]
    if (value === '--output') result.output = argv[++index]
    else if (value === '--timeout-ms') result.timeoutMs = Number(argv[++index])
    else if (value === '--help' || value === '-h') result.help = true
    else throw new Error(`Unknown argument: ${value}`)
  }
  if (!Number.isFinite(result.timeoutMs) || result.timeoutMs < 1_000) {
    throw new Error('--timeout-ms must be at least 1000')
  }
  return result
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex')
}

async function request(url, { timeoutMs, accept = '*/*', headers = {} } = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        accept,
        'user-agent': 'wsgtcyx/cards-database-b4-schema-inspector/1.0',
        ...headers,
      },
      signal: controller.signal,
    })
    const bytes = Buffer.from(await response.arrayBuffer())
    return {
      meta: {
        url,
        finalUrl: response.url,
        status: response.status,
        ok: response.ok,
        contentType: response.headers.get('content-type'),
        lastModified: response.headers.get('last-modified'),
        bytes: bytes.length,
        sha256: sha256(bytes),
      },
      text: bytes.toString('utf8'),
    }
  } catch (error) {
    return {
      meta: { url, ok: false, error: `${error.name}: ${error.message}` },
      text: '',
    }
  } finally {
    clearTimeout(timer)
  }
}

function extractDpl(text) {
  return text.match(/[?&]dpl=([^"'&<>\\]+)/)?.[1] ?? null
}

function extractBalancedJson(text, marker) {
  const markerIndex = text.indexOf(marker)
  if (markerIndex < 0) return null
  let start = markerIndex + marker.length
  while (/\s/.test(text[start] ?? '')) start += 1
  const opener = text[start]
  if (opener !== '{' && opener !== '[') return null
  const closer = opener === '{' ? '}' : ']'
  let depth = 0
  let quoted = false
  let escaped = false
  for (let index = start; index < text.length; index += 1) {
    const character = text[index]
    if (quoted) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') quoted = false
      continue
    }
    if (character === '"') {
      quoted = true
      continue
    }
    if (character === opener) depth += 1
    else if (character === closer) {
      depth -= 1
      if (depth === 0) return JSON.parse(text.slice(start, index + 1))
    }
  }
  return null
}

function decodeFlightStrings(text) {
  const output = []
  const marker = 'self.__next_f.push([1,'
  let cursor = 0
  while (output.length < 300) {
    const markerIndex = text.indexOf(marker, cursor)
    if (markerIndex < 0) break
    let start = markerIndex + marker.length
    while (/\s/.test(text[start] ?? '')) start += 1
    if (text[start] !== '"') {
      cursor = start + 1
      continue
    }
    let escaped = false
    let end = start + 1
    for (; end < text.length; end += 1) {
      const character = text[end]
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') break
    }
    if (end >= text.length) break
    try {
      output.push(JSON.parse(text.slice(start, end + 1)))
    } catch {
      // Ignore malformed flight chunks.
    }
    cursor = end + 1
  }
  return output
}

function extractMessages(...texts) {
  for (const text of texts) {
    if (!text) continue
    const candidates = [text, ...decodeFlightStrings(text)]
    for (const candidate of candidates) {
      try {
        const messages = extractBalancedJson(candidate, '"messages":')
        if (messages && typeof messages === 'object') return messages
      } catch {
        // Continue to the next candidate.
      }
    }
  }
  return null
}

function flatten(value, prefix = '', output = {}) {
  if (typeof value === 'string') {
    output[prefix] = value
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    flatten(nested, prefix ? `${prefix}.${key}` : key, output)
  }
  return output
}

function collectI18nRefs(value, prefix = '', output = []) {
  if (Array.isArray(value)) {
    value.forEach((nested, index) => collectI18nRefs(nested, `${prefix}[${index}]`, output))
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    const nextPath = prefix ? `${prefix}.${key}` : key
    if (/I18nId$/i.test(key)) {
      for (const id of Array.isArray(nested) ? nested : [nested]) {
        if (id != null && ['string', 'number'].includes(typeof id)) {
          output.push({ path: nextPath, id: String(id) })
        }
      }
    }
    collectI18nRefs(nested, nextPath, output)
  }
  return output
}

function uniqueBy(items, selector) {
  const seen = new Set()
  return items.filter(item => {
    const key = selector(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function collectionNumber(entry) {
  return (entry.collectionNums ?? []).find(item => item?.expansion?.id === SET_ID)?.num ?? null
}

function expectedMessageKeys(reference, cardType) {
  const id = reference.id
  const fieldPath = reference.path
  if (fieldPath === 'play.characterI18nId') return [`Game.Master.Card.Name.${id}`]
  if (/\.attacks\[\d+\]\.nameI18nId$/.test(fieldPath)) return [`Game.Master.Attack.Name.${id}`]
  if (/\.attacks\[\d+\]\.descriptionI18nId$/.test(fieldPath)) return [`Game.Master.Attack.Description.${id}`]
  if (/\.abilities\[\d+\]\.nameI18nId$/.test(fieldPath)) return [`Game.Master.Ability.Name.${id}`]
  if (/\.abilities\[\d+\]\.descriptionI18nId$/.test(fieldPath)) return [`Game.Master.Ability.Description.${id}`]
  if (fieldPath === 'play.descriptionI18nId') {
    return cardType === 'trainer'
      ? [`Game.Master.Trainer.Description.${id}`, `Game.Master.Card.Description.${id}`]
      : [`Game.Master.Card.Description.${id}`, `Game.Master.Pokemon.Description.${id}`]
  }
  if (/\.expansion\.nameI18nId$/.test(fieldPath)) return [`Game.Master.Expansion.${id}`]
  if (fieldPath === 'illustratorI18nId') {
    return [
      `Game.Master.Card.Illustrator.${id}`,
      `Game.Master.Illustrator.${id}`,
      `Game.Master.Card.Artist.${id}`,
    ]
  }
  const leaf = fieldPath.split('.').at(-1).replace(/I18nId$/i, '')
  return [
    `Game.Master.Card.${leaf}.${id}`,
    `Game.Master.${leaf}.${id}`,
  ]
}

function resolveReference(reference, cardType, localeMaps) {
  const expectedKeys = expectedMessageKeys(reference, cardType)
  const locales = {}
  for (const [locale, map] of Object.entries(localeMaps)) {
    const candidates = expectedKeys
      .filter(key => typeof map[key] === 'string')
      .map(key => ({ key, value: map[key] }))
    locales[locale] = candidates
  }
  const enMap = localeMaps.en ?? {}
  const suffix = `.${reference.id}`
  const allEnglishCandidates = Object.entries(enMap)
    .filter(([key]) => key.endsWith(suffix))
    .map(([key, value]) => ({ key, value }))
    .sort((left, right) => left.key.localeCompare(right.key))
  return {
    ...reference,
    expectedKeys,
    locales,
    allEnglishCandidates,
  }
}

async function loadLocaleMessages(locale, routeLocale, options) {
  const pageUrl = `${BASE_URL}/${routeLocale}/card`
  const html = await request(pageUrl, { timeoutMs: options.timeoutMs, accept: 'text/html,*/*' })
  const dpl = extractDpl(html.text)
  const rsc = dpl
    ? await request(`${pageUrl}?_rsc=1&dpl=${encodeURIComponent(dpl)}`, {
        timeoutMs: options.timeoutMs,
        accept: 'text/x-component,*/*',
        headers: { RSC: '1' },
      })
    : { meta: { url: pageUrl, ok: false, error: 'missing dpl' }, text: '' }
  const messages = extractMessages(rsc.text, html.text)
  const map = messages ? flatten(messages) : {}
  return {
    locale,
    routeLocale,
    html: html.meta,
    rsc: rsc.meta,
    dpl,
    messageLeafCount: Object.keys(map).length,
    map,
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log('Usage: node inspect-raenonx-b4-schema.mjs [--output file] [--timeout-ms 30000]')
    return
  }

  const masterResponse = await request(MASTER_URL, {
    timeoutMs: options.timeoutMs,
    accept: 'application/json',
  })
  if (!masterResponse.meta.ok) throw new Error(`global-master failed: ${JSON.stringify(masterResponse.meta)}`)
  const master = JSON.parse(masterResponse.text)
  const b4Entries = Object.values(master.cardEntryMap ?? {})
    .map(entry => ({ number: collectionNumber(entry), entry }))
    .filter(item => Number.isInteger(item.number))
    .sort((left, right) => left.number - right.number)

  const localeResults = {}
  const localeMaps = {}
  for (const [locale, routeLocale] of Object.entries(LOCALES)) {
    const result = await loadLocaleMessages(locale, routeLocale, options)
    localeMaps[locale] = result.map
    localeResults[locale] = {
      routeLocale,
      dpl: result.dpl,
      html: result.html,
      rsc: result.rsc,
      messageLeafCount: result.messageLeafCount,
    }
  }

  const samples = {}
  for (const number of SAMPLE_NUMBERS) {
    const item = b4Entries.find(candidate => candidate.number === number)
    if (!item) throw new Error(`Missing sample B4-${number}`)
    const references = uniqueBy(collectI18nRefs(item.entry), reference => `${reference.path}\u0000${reference.id}`)
    samples[String(number)] = {
      number,
      cardId: item.entry.cardId,
      cardType: item.entry.cardType,
      rarity: item.entry.rarity,
      illustratorI18nId: item.entry.illustratorI18nId,
      collectionNums: item.entry.collectionNums,
      play: item.entry.play,
      references: references.map(reference => resolveReference(reference, item.entry.cardType, localeMaps)),
    }
  }

  const namespacePresence = {}
  for (const [locale, map] of Object.entries(localeMaps)) {
    namespacePresence[locale] = {
      cardNames: Object.keys(map).filter(key => key.startsWith('Game.Master.Card.Name.')).length,
      cardDescriptions: Object.keys(map).filter(key => key.startsWith('Game.Master.Card.Description.')).length,
      trainerDescriptions: Object.keys(map).filter(key => key.startsWith('Game.Master.Trainer.Description.')).length,
      attackNames: Object.keys(map).filter(key => key.startsWith('Game.Master.Attack.Name.')).length,
      attackDescriptions: Object.keys(map).filter(key => key.startsWith('Game.Master.Attack.Description.')).length,
      abilityNames: Object.keys(map).filter(key => key.startsWith('Game.Master.Ability.Name.')).length,
      abilityDescriptions: Object.keys(map).filter(key => key.startsWith('Game.Master.Ability.Description.')).length,
      illustratorKeys: Object.keys(map).filter(key => /Illustrator|Artist/i.test(key)).slice(0, 50),
    }
  }

  const report = {
    schemaVersion: 1,
    setId: SET_ID,
    generatedAt: new Date().toISOString(),
    source: {
      globalMaster: masterResponse.meta,
      localePages: BASE_URL,
      licenseStatus: 'unverified-community-endpoint; data identifies live game master records',
    },
    coverage: {
      expected: EXPECTED_COUNT,
      actual: b4Entries.length,
      contiguous: b4Entries.every((item, index) => item.number === index + 1),
      uniqueCardIds: new Set(b4Entries.map(item => item.entry.cardId)).size,
    },
    localeResults,
    namespacePresence,
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
