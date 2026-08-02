#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const BASE_URL = 'https://ptcgp.raenonx.cc'
const GLOBAL_MASTER_URL = `${BASE_URL}/api/data/global-master`
const SET_ID = 'B4'
const EXPECTED_COUNT = 233
const SAMPLE_NUMBERS = [1, 82, 122, 154, 176, 233]
const PROJECT_LOCALES = {
  en: 'en',
  fr: 'fr',
  es: 'es',
  it: 'it',
  de: 'de',
  'pt-br': 'pt',
  'zh-tw': 'zh',
}

function parseArgs(argv) {
  const options = {
    output: 'meta/pocket-source-reviews/B4.raenonx-summary.json',
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
  console.log(`Usage: node summarize-raenonx-b4.mjs [options]\n\nOptions:\n  --output <file>       Compact JSON report path\n  --timeout-ms <number> Per-request timeout\n`)
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex')
}

function truncate(value, limit = 500) {
  if (typeof value !== 'string') return value
  return value.length <= limit ? value : `${value.slice(0, limit)}…`
}

async function request(url, { timeoutMs, accept = '*/*', headers = {} } = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        accept,
        'user-agent': 'wsgtcyx/cards-database-b4-raenonx-summary/1.0',
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

function extractTitle(text) {
  return truncate(text.match(/<title>([^<]*)<\/title>/i)?.[1] ?? null, 300)
}

function markerDiagnostics(text) {
  const markers = ['"messages":', '\\"messages\\":', 'messages', '/api/data/']
  const counts = {}
  const snippets = {}
  for (const marker of markers) {
    const positions = []
    let cursor = 0
    while (positions.length < 5) {
      const index = text.indexOf(marker, cursor)
      if (index < 0) break
      positions.push(index)
      cursor = index + marker.length
    }
    counts[marker] = positions.length
    snippets[marker] = positions.map(index =>
      truncate(text.slice(Math.max(0, index - 140), Math.min(text.length, index + marker.length + 260)).replaceAll(/\s+/g, ' '), 500),
    )
  }
  return { counts, snippets }
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
  let quote = false
  let escaped = false
  for (let index = start; index < text.length; index += 1) {
    const character = text[index]
    if (quote) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === '"') quote = false
      continue
    }
    if (character === '"') {
      quote = true
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

function decodeNextFlightStrings(text) {
  const decoded = []
  const marker = 'self.__next_f.push([1,'
  let cursor = 0
  while (decoded.length < 300) {
    const index = text.indexOf(marker, cursor)
    if (index < 0) break
    let start = index + marker.length
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
      decoded.push(JSON.parse(text.slice(start, end + 1)))
    } catch {
      // Ignore a malformed flight chunk and continue scanning.
    }
    cursor = end + 1
  }
  return decoded
}

function extractMessages(...sources) {
  const attempts = []
  for (const source of sources) {
    if (!source?.text) continue
    for (const [kind, candidateText] of [
      ['direct', source.text],
      ...decodeNextFlightStrings(source.text).map((value, index) => [`next-flight-${index}`, value]),
    ]) {
      try {
        const extracted = extractBalancedJson(candidateText, '"messages":')
        attempts.push({ source: source.name, kind, found: Boolean(extracted) })
        if (extracted) {
          return {
            messages: extracted.value,
            rawBytes: Buffer.byteLength(extracted.raw),
            source: source.name,
            kind,
            attempts,
          }
        }
      } catch (error) {
        attempts.push({ source: source.name, kind, found: false, error: `${error.name}: ${error.message}` })
      }
    }
  }
  return { messages: null, rawBytes: 0, source: null, kind: null, attempts: attempts.slice(0, 30) }
}

function collectMessageEntries(value, prefix = '', output = []) {
  if (typeof value === 'string') {
    output.push({ key: prefix, value })
    return output
  }
  if (!value || typeof value !== 'object') return output
  for (const [key, nested] of Object.entries(value)) {
    collectMessageEntries(nested, prefix ? `${prefix}.${key}` : key, output)
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
      for (const id of Array.isArray(nested) ? nested : [nested]) {
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

function leafKey(key) {
  return key.split('.').at(-1)
}

function buildMessageIndex(entries) {
  const index = new Map()
  for (const entry of entries) {
    const leaf = leafKey(entry.key)
    if (!index.has(leaf)) index.set(leaf, [])
    index.get(leaf).push(entry)
  }
  return index
}

function pathWords(pathValue) {
  return pathValue
    .split(/[.\[\]]+/)
    .filter(Boolean)
    .map(value => value.toLowerCase())
    .filter(value => !/^\d+$/.test(value) && !['play', 'i18nid'].includes(value))
}

function scoreCandidate(reference, candidate) {
  const key = candidate.key.toLowerCase()
  return pathWords(reference.path).reduce((score, word) => score + (key.includes(word) ? 1 : 0), 0)
}

function resolveReference(reference, index, limit = 5) {
  const candidates = (index.get(reference.id) ?? [])
    .map(candidate => ({
      key: candidate.key,
      value: truncate(candidate.value, 500),
      score: scoreCandidate(reference, candidate),
    }))
    .sort((left, right) => right.score - left.score || left.key.localeCompare(right.key))
  const top = candidates[0]
  const second = candidates[1]
  const decisive = candidates.length === 1 || (top && (!second || top.score > second.score))
  return {
    path: reference.path,
    id: reference.id,
    candidateCount: candidates.length,
    decisive: Boolean(decisive),
    candidates: candidates.slice(0, limit),
  }
}

function collectionNumberForSet(entry) {
  return (entry.collectionNums ?? []).find(item => item?.expansion?.id === SET_ID)?.num ?? null
}

function summarizeCard(entry) {
  const references = uniqueBy(collectI18nReferences(entry), item => `${item.path}\u0000${item.id}`)
  return {
    cardId: entry.cardId,
    number: collectionNumberForSet(entry),
    rarity: entry.rarity,
    seriesId: entry.seriesId,
    cardType: entry.cardType,
    source: entry.source,
    mirrorType: entry.mirrorType,
    promotion: entry.promotion,
    topLevelKeys: Object.keys(entry).sort(),
    references,
  }
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
      if (value.includes(cardId) || /card|preview|image/i.test(value)) output.add(truncate(value, 700))
    }
  }
  return [...output].slice(0, 40)
}

function resolutionSummary(references, messageIndex) {
  const resolved = references.map(reference => resolveReference(reference, messageIndex, 3))
  const unmatched = resolved.filter(item => item.candidateCount === 0)
  const ambiguous = resolved.filter(item => item.candidateCount > 0 && !item.decisive)
  const decisive = resolved.filter(item => item.decisive)
  return {
    referenceCount: resolved.length,
    matchedCount: resolved.length - unmatched.length,
    decisiveCount: decisive.length,
    ambiguousCount: ambiguous.length,
    unmatchedCount: unmatched.length,
    unmatchedSamples: unmatched.slice(0, 30),
    ambiguousSamples: ambiguous.slice(0, 20),
  }
}

async function loadLocale(locale, routeLocale, options, sampleCards, allReferences) {
  const listUrl = `${BASE_URL}/${routeLocale}/card`
  const listHtml = await request(listUrl, { timeoutMs: options.timeoutMs, accept: 'text/html,*/*' })
  const dpl = extractDpl(listHtml.text)
  const listRsc = dpl
    ? await request(`${listUrl}?_rsc=1&dpl=${encodeURIComponent(dpl)}`, {
        timeoutMs: options.timeoutMs,
        accept: 'text/x-component,*/*',
        headers: { RSC: '1' },
      })
    : { meta: { url: listUrl, ok: false, error: 'missing dpl' }, text: '' }

  const extraction = extractMessages(
    { name: 'list-rsc', text: listRsc.text },
    { name: 'list-html', text: listHtml.text },
  )
  const entries = extraction.messages ? collectMessageEntries(extraction.messages) : []
  const messageIndex = buildMessageIndex(entries)
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
    const references = card.references.map(reference => resolveReference(reference, messageIndex))
    samples[String(card.number)] = {
      cardId: card.cardId,
      title: extractTitle(detailHtml.text),
      html: detailHtml.meta,
      rsc: detailRsc.meta,
      references,
      assetUrls: uniqueBy(
        [...extractAssetUrls(detailHtml.text, card.cardId), ...extractAssetUrls(detailRsc.text, card.cardId)],
        value => value,
      ),
      detailDiagnostics: {
        html: markerDiagnostics(detailHtml.text),
        rsc: markerDiagnostics(detailRsc.text),
      },
    }
  }

  return {
    locale,
    routeLocale,
    dpl,
    listHtml: { ...listHtml.meta, title: extractTitle(listHtml.text) },
    listRsc: listRsc.meta,
    messageExtraction: {
      extracted: Boolean(extraction.messages),
      source: extraction.source,
      kind: extraction.kind,
      rawBytes: extraction.rawBytes,
      attempts: extraction.attempts,
      leafCount: entries.length,
      topLevelKeys: extraction.messages && typeof extraction.messages === 'object'
        ? Object.keys(extraction.messages).sort()
        : [],
      namespacePrefixes: [...new Set(entries.map(entry => entry.key.split('.').slice(0, 3).join('.')))].sort().slice(0, 100),
      entrySamples: entries.slice(0, 20).map(entry => ({ key: entry.key, value: truncate(entry.value, 300) })),
      diagnostics: {
        html: markerDiagnostics(listHtml.text),
        rsc: markerDiagnostics(listRsc.text),
      },
    },
    resolution: extraction.messages
      ? resolutionSummary(allReferences, messageIndex)
      : {
          referenceCount: allReferences.length,
          matchedCount: 0,
          decisiveCount: 0,
          ambiguousCount: 0,
          unmatchedCount: allReferences.length,
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

  const masterResponse = await request(GLOBAL_MASTER_URL, {
    timeoutMs: options.timeoutMs,
    accept: 'application/json',
  })
  if (!masterResponse.meta.ok) {
    throw new Error(`global-master request failed: ${JSON.stringify(masterResponse.meta)}`)
  }
  const master = JSON.parse(masterResponse.text)
  const b4Entries = Object.values(master.cardEntryMap ?? {})
    .map(entry => ({ entry, number: collectionNumberForSet(entry) }))
    .filter(item => Number.isInteger(item.number))
    .sort((left, right) => left.number - right.number)

  const sampleCards = SAMPLE_NUMBERS.map(number => {
    const found = b4Entries.find(item => item.number === number)
    if (!found) throw new Error(`Missing B4 card ${number}`)
    return summarizeCard(found.entry)
  })
  const allReferences = uniqueBy(
    b4Entries.flatMap(item => collectI18nReferences(item.entry)),
    item => `${item.path}\u0000${item.id}`,
  )

  const locales = {}
  for (const [locale, routeLocale] of Object.entries(PROJECT_LOCALES)) {
    locales[locale] = await loadLocale(locale, routeLocale, options, sampleCards, allReferences)
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
    masterKeys: Object.keys(master).sort(),
    coverage: {
      expected: EXPECTED_COUNT,
      actual: b4Entries.length,
      contiguous: b4Entries.every((item, index) => item.number === index + 1),
      uniqueCardIds: new Set(b4Entries.map(item => item.entry.cardId)).size,
      uniqueI18nReferences: allReferences.length,
    },
    cardNumberMap: Object.fromEntries(b4Entries.map(item => [String(item.number), item.entry.cardId])),
    samples: Object.fromEntries(sampleCards.map(card => [String(card.number), card])),
    locales,
  }

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${options.output}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
