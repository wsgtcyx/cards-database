import { createHash } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { extractFile } from './utils/ts-extract-utils'

type MissingEntry = { file: string, path: string, missing: string[] }

function getArg(name: string): string {
	const prefix = `--${name}=`
	const value = process.argv.find(arg => arg.startsWith(prefix))?.slice(prefix.length)
	if (!value) throw new Error(`missing ${prefix}<value>`)
	return value
}

async function mapLimit<T, R>(values: T[], limit: number, worker: (value: T) => Promise<R>): Promise<R[]> {
	const output = new Array<R>(values.length)
	let cursor = 0
	await Promise.all(Array.from({ length: Math.min(limit, values.length) }, async () => {
		while (cursor < values.length) {
			const index = cursor++
			output[index] = await worker(values[index])
		}
	}))
	return output
}

async function main() {
	const missing: MissingEntry[] = JSON.parse(fs.readFileSync(getArg('missing'), 'utf8'))
	const output = getArg('output')
	const locales = new Set(getArg('locales').split(',').filter(Boolean))
	const localePath: Record<string, string> = { fr: 'fr', es: 'es', 'pt-br': 'pt', 'zh-tw': 'zh-tw' }
	const inputs: Array<{ id: string, locale: string, sourceUrl: string }> = []

	for (const entry of missing) {
	if (entry.path !== 'description') continue
	const card = extractFile(path.resolve(entry.file))
	const id = `B4-${path.basename(entry.file, '.ts')}`
	for (const locale of entry.missing.filter(value => locales.has(value))) {
		const base = card?.image?.[locale]
		if (typeof base !== 'string') throw new Error(`${id}/${locale}: missing image URL`)
		const expectedBase = `https://game.pokemontcgpocket.app/${localePath[locale]}/tcgp/B4/${id.slice(3)}`
		if (base !== expectedBase) throw new Error(`${id}/${locale}: unexpected image URL ${base}`)
		inputs.push({ id, locale, sourceUrl: `${base}/high.webp` })
	}
  }

	const records = await mapLimit(inputs, 16, async input => {
	const response = await fetch(input.sourceUrl)
	if (!response.ok) throw new Error(`${input.id}/${input.locale}: HTTP ${response.status}`)
	const bytes = Buffer.from(await response.arrayBuffer())
	const contentType = response.headers.get('content-type') ?? ''
	if (contentType !== 'image/webp') throw new Error(`${input.id}/${input.locale}: ${contentType}`)
	return {
		...input,
		sourceKind: 'owned-r2-localized',
		path: `source/${localePath[input.locale]}/tcgp/B4/${input.id.slice(3)}.webp`,
		bytes: bytes.length,
		sha256: createHash('sha256').update(bytes).digest('hex'),
		contentType,
		lastModified: response.headers.get('last-modified'),
		etag: response.headers.get('etag')
	}
  })

	records.sort((a, b) => a.locale.localeCompare(b.locale) || a.id.localeCompare(b.id))
	fs.writeFileSync(output, `${JSON.stringify({
	schemaVersion: 1,
	setId: 'B4',
	generatedAt: new Date().toISOString(),
	count: records.length,
	records
  }, null, 2)}\n`)

	console.log(JSON.stringify({ count: records.length, byLocale: Object.fromEntries(
	Array.from(locales).map(locale => [locale, records.filter(record => record.locale === locale).length])
  ) }, null, 2))
}

void main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
