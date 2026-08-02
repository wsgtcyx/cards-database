#!/usr/bin/env node

import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const BASE_URL = 'https://ptcgp.raenonx.cc'
const SET_ID = 'B4'
const EXPECTED_COUNT = 233
const PINNED_IMAGE_INDEX =
  'https://raw.githubusercontent.com/Lynnou10/TCGPocket/3a6d6a03f6cf5080cc5b33580700c2697a934056/img/cards/B4/images.json'
const TARGET_LOCALES = {
  en: 'en',
  fr: 'fr',
  es: 'es',
  it: 'it',
  de: 'de',
  'pt-br': 'pt',
  'zh-tw': 'zh',
}
const SAMPLE_NUMBERS = [1, 82, 122, 154, 176, 233]
const DIRECT_API_PATHS = [
  '/api/data/card-brief',
  '/api/data/card-detail',
  '/api/data/card-list',
  '/api/data/card-set',
  '/api/data/cards',
  '/api/data/card',
  '/api/data/sets',
  '/api/data/message',
  '/api/data/messages',
]

function parseArgs(argv) {
  const result = {
    output: 'meta/pocket-source-reviews/B4.raenonx-probe.json',
    timeoutMs: 20_000,
    maxChunks: 40,
  }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--output') result.output = argv[++index]
    else if (arg === '--timeout-ms') result.timeoutMs = Number(argv[++index])
    else if (arg === '--max-chunks') result.maxChunks = Number(argv[++index])
    else if (arg === '--help' || arg === '-h') result.help = true
    else throw new Error(`Unknown argument: ${arg}`)
  }
  if (!Number.isFinite(result.timeoutMs) || result.timeoutMs < 1_000) {
    throw new Error('--timeout-ms must be at least 1000')
  }
  if (!Number.isInteger(result.maxChunks) || result.maxChunks < 1 || result.maxChunks > 100) {
    throw new Error('--max-chunks must be an integer from 1 to 100')
  }
  return result
}

function printHelp() {
  console.log(`Usage: node probe-raenonx.mjs [options]\n\nOptions:\n  --output <file>       JSON report path\n  --timeout-ms <number> Per-request timeout (default: 20000)\n  --max-chunks <number> Maximum JS chunks to inspect (default: 40)\n`)
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex')
}

function bodyPreview(bytes, limit = 800) {
  return bytes.toString('utf8', 0, Math.min(bytes.length, limit)).replaceAll(/\s+/g, ' ').trim()
}

async function request(url, { timeoutMs, accept = '*/*', headers = {}, maxBytes = 12_000_000 } = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        accept,
        'user-agent': 'wsgtcyx/cards-database-b4-raenonx-probe/1.0',
        ...headers,
      },
      signal: controller.signal,
    })
    const arrayBuffer = await response.arrayBuffer()
    const bytes = Buffer.from(arrayBuffer)
    const truncated = bytes.length > maxBytes
    const retained = truncated ? bytes.subarray(0, maxBytes) : bytes
    return {
      meta: {
        url,
        finalUrl: response.url,
        status: response.status,
        ok: response.ok,
        contentType: response.headers.get('content-type'),
        contentLength: response.headers.get('content-length'),
        cacheControl: response.headers.get('cache-control'),
        etag: response.headers.get('etag'),
        lastModified: response.headers.get('last-modified'),
        bytes: bytes.length,
        retainedBytes: retained.length,
        truncated,
        sha256: sha256(bytes),
        preview: bodyPreview(retained),
      },
      bytes: retained,
      text: retained.toString('utf8'),
    }
  } catch (error) {
    return {
      meta: {
        url,
        ok: false,
        error: `${error.name}: ${error.message}`,
      },
      bytes: Buffer.alloc(0),
      text: '',
    }
  } finally {
    clearTimeout(timeout)
  }
}

function collectStrings(value, output = []) {
  if (typeof value === 'string') output.push(value)
  else if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, output)
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) collectStrings(item, output)
  }
  return output
}

function extractInternalCardIds(value) {
  const ordered = []
  const seen = new Set()
  for (const text of collectStrings(value)) {
    for (const match of text.matchAll(/(?:c)?(PK_\d+_\d+_\d+)/gi)) {
      const id = match[1].toUpperCase()
      if (!seen.has(id)) {
        seen.add(id)
        ordered.push(id)
      }
    }
  }
  return ordered
}

function pickSampleIds(ids) {
  return SAMPLE_NUMBERS.map(number => ({
    number,
    internalId: ids[number - 1] ?? null,
  }))
}

function extractDpl(text) {
  const match = text.match(/[?&]dpl=([^"'&<>\\]+)/)
  return match?.[1] ?? null
}

function extractScriptUrls(text, baseUrl) {
  const output = new Set()
  for (const match of text.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)) {
    try {
      const url = new URL(match[1], baseUrl)
      if (url.origin === new URL(BASE_URL).origin) output.add(url.toString())
    } catch {
      // Ignore malformed script src values.
    }
  }
  return [...output]
}

function normalizeCandidate(raw) {
  return raw
    .replaceAll('\\u0026', '&')
    .replaceAll('\\/', '/')
    .replace(/["'`),;\]}]+$/g, '')
}

function extractApiCandidates(text) {
  const candidates = new Set()
  const patterns = [
    /["'`](\/api\/data\/[A-Za-z0-9_?&=./%:+,{}$\[\]-]+)["'`]/g,
    /["'`](https:\/\/ptcgp\.raenonx\.cc\/api\/data\/[A-Za-z0-9_?&=./%:+,{}$\[\]-]+)["'`]/g,
  ]
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) candidates.add(normalizeCandidate(match[1]))
  }
  return [...candidates]
}

function isProbeableCandidate(candidate) {
  return !/[${}\[\]]/.test(candidate) && !candidate.includes('...') && candidate.length < 500
}

function toAbsoluteUrl(candidate) {
  try {
    return new URL(candidate, BASE_URL).toString()
  } catch {
    return null
  }
}

function countOccurrences(text, needles) {
  const counts = {}
  for (const needle of needles) {
    if (!needle) continue
    counts[needle] = text.split(needle).length - 1
  }
  return counts
}

function summarizeJsonText(text, identifiers = []) {
  try {
    const value = JSON.parse(text)
    const summary = {
      jsonType: Array.isArray(value) ? 'array' : typeof value,
      identifiers: countOccurrences(text, identifiers),
    }
    if (Array.isArray(value)) {
      summary.count = value.length
      summary.sample = value.slice(0, 3)
    } else if (value && typeof value === 'object') {
      summary.keys = Object.keys(value).sort()
      for (const key of ['cards', 'data', 'items', 'sets']) {
        if (Array.isArray(value[key])) summary[`${key}Count`] = value[key].length
      }
    }
    return summary
  } catch {
    return null
  }
}

async function mapLimit(items, limit, worker) {
  const output = new Array(items.length)
  let cursor = 0
  async function run() {
    while (true) {
      const index = cursor++
      if (index >= items.length) return
      output[index] = await worker(items[index], index)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()))
  return output
}

async function probeEndpoint(url, options, identifiers) {
  const response = await request(url, {
    timeoutMs: options.timeoutMs,
    accept: 'application/json,text/plain,*/*',
  })
  const json = summarizeJsonText(response.text, identifiers)
  return {
    ...response.meta,
    identifiers: countOccurrences(response.text, identifiers),
    ...(json ? { json } : {}),
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    printHelp()
    return
  }

  const generatedAt = new Date().toISOString()
  const indexResponse = await request(PINNED_IMAGE_INDEX, {
    timeoutMs: options.timeoutMs,
    accept: 'application/json',
  })
  let imageIndex = null
  let imageIndexParseError = null
  try {
    imageIndex = JSON.parse(indexResponse.text)
  } catch (error) {
    imageIndexParseError = `${error.name}: ${error.message}`
  }

  const internalIds = imageIndex ? extractInternalCardIds(imageIndex) : []
  const samples = pickSampleIds(internalIds)
  const identifiers = [SET_ID, ...samples.map(item => item.internalId).filter(Boolean)]
  const report = {
    schemaVersion: 1,
    setId: SET_ID,
    generatedAt,
    methodology: {
      imageIndex: 'Pinned B4 illustration index used only to derive internal game card IDs.',
      discovery: 'Inspect public RaenonX HTML, Next.js RSC responses, same-origin JavaScript chunks, and discovered /api/data endpoints.',
      persistence: 'Store hashes, endpoint shapes, counts, and short previews only; do not persist a full third-party card database.',
    },
    imageIndex: {
      ...indexResponse.meta,
      pinnedCommit: '3a6d6a03f6cf5080cc5b33580700c2697a934056',
      parsed: Boolean(imageIndex),
      parseError: imageIndexParseError,
      internalIdCount: internalIds.length,
      expectedCount: EXPECTED_COUNT,
      samples,
    },
    locales: {},
    scripts: {
      discovered: [],
      inspected: [],
      apiCandidates: [],
    },
    endpoints: {},
  }

  const scriptUrls = new Set()
  const candidateEndpoints = new Set(DIRECT_API_PATHS)

  for (const [projectLocale, routeLocale] of Object.entries(TARGET_LOCALES)) {
    const localeReport = {
      projectLocale,
      routeLocale,
      listPage: null,
      cards: {},
    }
    const listUrl = `${BASE_URL}/${routeLocale}/card`
    const listResponse = await request(listUrl, {
      timeoutMs: options.timeoutMs,
      accept: 'text/html,*/*',
    })
    localeReport.listPage = {
      ...listResponse.meta,
      identifiers: countOccurrences(listResponse.text, identifiers),
      dpl: extractDpl(listResponse.text),
    }
    for (const url of extractScriptUrls(listResponse.text, listUrl)) scriptUrls.add(url)
    for (const candidate of extractApiCandidates(listResponse.text)) candidateEndpoints.add(candidate)

    for (const sample of samples) {
      if (!sample.internalId) {
        localeReport.cards[String(sample.number)] = { internalId: null, skipped: 'missing internal ID' }
        continue
      }
      const cardUrl = `${BASE_URL}/${routeLocale}/card/${sample.internalId}`
      const html = await request(cardUrl, {
        timeoutMs: options.timeoutMs,
        accept: 'text/html,*/*',
      })
      const dpl = extractDpl(html.text)
      const cardReport = {
        internalId: sample.internalId,
        html: {
          ...html.meta,
          identifiers: countOccurrences(html.text, identifiers),
          dpl,
        },
      }
      for (const url of extractScriptUrls(html.text, cardUrl)) scriptUrls.add(url)
      for (const candidate of extractApiCandidates(html.text)) candidateEndpoints.add(candidate)

      if (dpl) {
        const rscUrl = `${cardUrl}?_rsc=1&dpl=${encodeURIComponent(dpl)}`
        const rsc = await request(rscUrl, {
          timeoutMs: options.timeoutMs,
          accept: 'text/x-component,*/*',
          headers: { RSC: '1' },
        })
        cardReport.rsc = {
          ...rsc.meta,
          identifiers: countOccurrences(rsc.text, identifiers),
        }
        for (const candidate of extractApiCandidates(rsc.text)) candidateEndpoints.add(candidate)
      }
      localeReport.cards[String(sample.number)] = cardReport
    }
    report.locales[projectLocale] = localeReport
  }

  report.scripts.discovered = [...scriptUrls].sort()
  const chunks = report.scripts.discovered.slice(0, options.maxChunks)
  const inspectedChunks = await mapLimit(chunks, 6, async url => {
    const response = await request(url, {
      timeoutMs: options.timeoutMs,
      accept: 'application/javascript,text/javascript,*/*',
      maxBytes: 8_000_000,
    })
    const apiCandidates = extractApiCandidates(response.text)
    for (const candidate of apiCandidates) candidateEndpoints.add(candidate)
    return {
      ...response.meta,
      apiCandidates,
      markers: countOccurrences(response.text, ['card-brief', 'card-detail', '/api/data/', 'Global Master Data']),
    }
  })
  report.scripts.inspected = inspectedChunks

  const normalizedCandidates = [...candidateEndpoints]
    .map(normalizeCandidate)
    .filter(isProbeableCandidate)
    .map(candidate => ({ candidate, url: toAbsoluteUrl(candidate) }))
    .filter(item => item.url && new URL(item.url).origin === new URL(BASE_URL).origin)
    .filter((item, index, values) => values.findIndex(other => other.url === item.url) === index)
    .sort((left, right) => left.url.localeCompare(right.url))
  report.scripts.apiCandidates = normalizedCandidates

  const endpointResults = await mapLimit(normalizedCandidates, 6, async item => ({
    candidate: item.candidate,
    result: await probeEndpoint(item.url, options, identifiers),
  }))
  for (const item of endpointResults) report.endpoints[item.candidate] = item.result

  report.conclusion = {
    internalIdCoverage: internalIds.length === EXPECTED_COUNT ? 'complete' : 'incomplete',
    successfulCardPages: Object.values(report.locales).reduce(
      (sum, locale) => sum + Object.values(locale.cards).filter(card => card?.html?.ok).length,
      0,
    ),
    successfulJsonEndpoints: Object.values(report.endpoints).filter(endpoint => endpoint.ok && endpoint.json).length,
    endpointCount: Object.keys(report.endpoints).length,
  }

  await fs.mkdir(path.dirname(options.output), { recursive: true })
  await fs.writeFile(options.output, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`Wrote ${options.output}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
