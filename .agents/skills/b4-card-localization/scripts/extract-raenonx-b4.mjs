#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const BASE_URL = 'https://ptcgp.raenonx.cc'
const GLOBAL_MASTER_URL = `${BASE_URL}/api/data/global-master`
const SET_ID = 'B4'
const EXPECTED_COUNT = 233
const PROJECT_LOCALES = {
  en: 'en',
  fr: 'fr',
  es: 'es',
  it: 'it',
  de: 'de',
  'pt-br': 'pt',
  'zh-tw': 'zh',
}
const SAMPLE_NUMBERS = [1, 82, 122, 154, 176, 233]

function parseArgs(argv) {
  const options = {
    output: 'meta/pocket-source-reviews/B4.raenonx-extraction.json',
    timeoutMs: 30_000,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--output') options.output = argv[++index]
    else if (arg === '--timeout-ms') options.timeoutMs = Number(argv[++index])
    else if (arg === '--help' || arg === '-h') options.help = true
    else throw new Error(`Unknown argument: ${arg}`)
  }
  if (!Number.isFinite(options.timeoutMs) || options.timeoutMs < 1_000) {
    throw new Error('--timeout-ms must be at least 1000')
  }
  return options
}

function printHelp() {
  console.log(`Usage: node extract-raenonx-b4.mjs [options]\n\nOptions:\n  --output <file>       Extraction report path\n  --timeout-ms <number> Per-request timeout\n`)
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
        'user-agent': 'wsgtcyx/cards-database-b4-raenonx-extractor/1.0',
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
        cacheControl: response.headers.get('cache-control'),
        etag: response.headers.get('etag'),
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
  let quote = null
  let escaped = false
  for (let index = start; index < text.length; index += 1) {
    const character = text[index]
    if (quote) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === quote) quote = null
      continue
    }
    if (character === '"') {
      quote = character
      continue
    }
    if (character === opener) depth += 1
    else if (character === closer) {
      depth -= 1
      if (depth === 0) {
        const raw = text.slice(start, index + 1)
        return { raw, value: JSON.parse(raw) }
      }
    }
  }
  return null
}

function flattenMessages(value, prefix = '', output = {}) {
  if (typeof value === 'string') {
    output[prefix] = value
    const leaf = prefix.split('.').at(-1)
    if (leaf && output[leaf] == null) output[leaf] = value
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    const nextPrefix = prefix ? `${prefix}.${key}` : key
    flattenMessages(nested, nextPrefix, output)
  }
  return output
}

function collectMessageEntries(value, prefix = '', output = []) {
  if (typeof value === 'string') {
    output.push({ key: prefix, value })
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    const nextPrefix = prefix ? `${prefix}.${key}` : key
    collectMessageEntries(nested, nextPrefix, output)
  }
  return output
}

function collectI18nReferences(value, prefix = '', output = []) {
  if (Array.isArray(value)) {
    value.forEach((nested, index) => collectI18nReferences(nested, `${prefix}[${index}]`, output))
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    const nextPath = prefix ? `${prefix}.${key}` : key
    if (/I18nId$/i.test(key)) {
      const ids = Array.isArray(nested) ? nested : [nested]
      for (const id of ids) {
        if (id != null && (typeof id === 'string' || typeof id === 'number')) {
          output.push({ path: nextPath, id: String(id) })
        }
      }
    }
    collectI18nReferences(nested, nextPath, output)
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

function findMessageCandidates(entries, reference, limit = 24) {
  const id = reference.id
  const pathWords = reference.path
    .split(/[.\[\]]+/)
    .filter(Boolean)
    .map(word => word.toLowerCase())
  return entries
    .filter(entry => entry.key === id || entry.key.endsWith(`.${id}`))
    .map(entry => {
      const keyLower = entry.key.toLowerCase()
      const pathScore = pathWords.reduce((score, word) => score + (keyLower.includes(word) ? 1 : 0), 0)
      return { ...entry, pathScore }
    })
    .sort((left, right) => right.pathScore - left.pathScore || left.key.localeCompare(right.key))
    .slice(0, limit)
}

function collectionNumberForSet(entry, setId) {
  const match = (entry.collectionNums ?? []).find(item => item?.expansion?.id === setId)
  return match?.num ?? null
}

function summarizeCardEntry(entry) {
  return {
    cardId: entry.cardId,
    collectionNum: collectionNumberForSet(entry, SET_ID),
    rarity: entry.rarity,
    seriesId: entry.seriesId,
    cardType: entry.cardType,
    source: entry.source,
    promotion: entry.promotion,
    mirrorType: entry.mirrorType,
    illustratorI18nId: entry.illustratorI18nId,
    play: entry.play,
  }
}

function contextSnippets(text, needle, radius = 500, limit = 8) {
  const snippets = []
  let cursor = 0
  while (snippets.length < limit) {
    const index = text.indexOf(needle, cursor)
    if (index < 0) break
    const start = Math.max(0, index - radius)
    const end = Math.min(text.length, index + needle.length + radius)
    snippets.push(text.slice(start, end).replaceAll(/\s+/g, ' '))
    cursor = index + needle.length
  }
  return snippets
}

function extractAssetUrls(text, cardId) {
  const normalized = text.replaceAll('\\/', '/')
  const output = new Set()
  const patterns = [
    /https?:\/\/[^"'<>\s]+/g,
    /\/[^"'<>\s]+\.(?:png|webp|avif|jpg|jpeg)(?:\?[^"'<>\s]*)?/gi,
  ]
  for (const pattern of patterns) {
    for (const match of normalized.matchAll(pattern)) {
      const value = match[0].replace(/[),;\]}]+$/g, '')
      if (value.includes(cardId) || /card|preview|image/i.test(value)) output.add(value)
    }
  }
  return [...output].slice(0, 100)
}

async function loadLocale(locale, routeLocale, options, sampleCards) {
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

  let extracted = null
  let extractionError = null
  for (const source of [rsc.text, html.text]) {
    try {
      extracted = extractBalancedJson(source, '"messages":')
      if (extracted) break
    } catch (error) {
      extractionError = `${error.name}: ${error.message}`
    }
  }
  const messages = extracted?.value ?? null
  const entries = messages ? collectMessageEntries(messages) : []
  const flattened = messages ? flattenMessages(messages) : {}

  const samples = {}
  for (const card of sampleCards) {
    const detailUrl = `${BASE_URL}/${routeLocale}/card/${card.cardId}`
    const detailHtml = await request(detailUrl, { timeoutMs: options.timeoutMs, accept: 'text/html,*/*' })
    const detailDpl = extractDpl(detailHtml.text) ?? dpl
    const detailRsc = detailDpl
      ? await request(`${detailUrl}?_rsc=1&dpl=${encodeURIComponent(detailDpl)}`, {
          timeoutMs: options.timeoutMs,
          accept: 'text/x-component,*/*',
          headers: { RSC: '1' },
        })
      : { meta: { url: detailUrl, ok: false, error: 'missing dpl' }, text: '' }
    const references = uniqueBy(collectI18nReferences(card.raw), item => `${item.path}\u0000${item.id}`)
    samples[String(card.number)] = {
      cardId: card.cardId,
      html: detailHtml.meta,
      rsc: detailRsc.meta,
      messageCandidates: Object.fromEntries(
        references.map(reference => [
          `${reference.path}=${reference.id}`,
          findMessageCandidates(entries, reference),
        ]),
      ),
      directLeafValues: Object.fromEntries(
        references
          .map(reference => [reference.id, flattened[reference.id]])
          .filter(([, value]) => typeof value === 'string'),
      ),
      assetUrls: uniqueBy(
        [...extractAssetUrls(detailHtml.text, card.cardId), ...extractAssetUrls(detailRsc.text, card.cardId)],
        value => value,
      ),
      htmlContexts: contextSnippets(detailHtml.text, card.cardId),
      rscContexts: contextSnippets(detailRsc.text, card.cardId),
    }
  }

  return {
    locale,
    routeLocale,
    listHtml: html.meta,
    listRsc: rsc.meta,
    dpl,
    messages: {
      extracted: Boolean(messages),
      extractionError,
      rawBytes: extracted?.raw ? Buffer.byteLength(extracted.raw) : 0,
      leafCount: entries.length,
      topLevelKeys: messages && typeof messages === 'object' ? Object.keys(messages).sort() : [],
      sampleEntries: entries.slice(0, 30),
    },
    samples,
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printHelp()
    return
  }

  const globalMasterResponse = await request(GLOBAL_MASTER_URL, {
    timeoutMs: options.timeoutMs,
    accept: 'application/json',
  })
  if (!globalMasterResponse.meta.ok) {
    throw new Error(`global-master request failed: ${JSON.stringify(globalMasterResponse.meta)}`)
  }
  const globalMaster = JSON.parse(globalMasterResponse.text)
  const allEntries = Object.values(globalMaster.cardEntryMap ?? {})
  const b4Entries = allEntries
    .map(entry => ({ entry, number: collectionNumberForSet(entry, SET_ID) }))
    .filter(item => Number.isInteger(item.number))
    .sort((left, right) => left.number - right.number)

  const numberMap = Object.fromEntries(b4Entries.map(item => [String(item.number), item.entry.cardId]))
  const sampleCards = SAMPLE_NUMBERS.map(number => {
    const found = b4Entries.find(item => item.number === number)
    if (!found) throw new Error(`Missing B4 sample card ${number}`)
    return { number, cardId: found.entry.cardId, raw: found.entry }
  })

  const localeResults = {}
  for (const [locale, routeLocale] of Object.entries(PROJECT_LOCALES)) {
    localeResults[locale] = await loadLocale(locale, routeLocale, options, sampleCards)
  }

  const report = {
    schemaVersion: 1,
    setId: SET_ID,
    generatedAt: new Date().toISOString(),
    source: {
      globalMaster: globalMasterResponse.meta,
      localePages: BASE_URL,
      licenseStatus: 'unverified-community-endpoint; underlying values identify game master data',
    },
    coverage: {
      expected: EXPECTED_COUNT,
      actual: b4Entries.length,
      contiguous: b4Entries.every((item, index) => item.number === index + 1),
      uniqueCardIds: new Set(b4Entries.map(item => item.entry.cardId)).size,
    },
    numberMap,
    samples: Object.fromEntries(
      sampleCards.map(card => [String(card.number), summarizeCardEntry(card.raw)]),
    ),
    locales: localeResults,
  }

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${options.output}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
