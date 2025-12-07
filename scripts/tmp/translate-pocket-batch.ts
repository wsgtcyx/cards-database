import fs from 'fs'
import path from 'path'

type LangKey = 'fr' | 'es' | 'it' | 'de' | 'pt-br' | 'zh-tw'

interface TodoEntry {
	en: string
	missing: LangKey[]
	files: string[]
	paths: string[]
}

type Mapping = Record<string, Partial<Record<LangKey | 'en', string>>>

const TARGETS: LangKey[] = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']
const TODO_FILE_DEFAULT = 'scripts/tmp/pocket-translations.todo.json'
const OUT_FILE_DEFAULT = 'scripts/tmp/pocket-translations.json'

function getArg(name: string, fallback: string): string {
	const arg = process.argv.find(a => a.startsWith(`--${name}=`))
	return arg ? arg.split('=')[1] : fallback
}

function ensureDir(file: string) {
	fs.mkdirSync(path.dirname(file), { recursive: true })
}

function langToGoogle(lang: LangKey): string {
	if (lang === 'pt-br') return 'pt'
	if (lang === 'zh-tw') return 'zh-TW'
	return lang
}

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function translate(text: string, target: LangKey, attempt = 1): Promise<string> {
	const url = new URL('https://translate.googleapis.com/translate_a/single')
	url.searchParams.set('client', 'gtx')
	url.searchParams.set('sl', 'en')
	url.searchParams.set('tl', langToGoogle(target))
	url.searchParams.set('dt', 't')
	url.searchParams.set('q', text)
	if (target === 'pt-br') {
		url.searchParams.set('hl', 'pt-BR')
	}

	try {
		const res = await fetch(url.toString())
		if (!res.ok) throw new Error(`HTTP ${res.status}`)
		const data = await res.json() as any
		const translated = Array.isArray(data?.[0]) ? (data[0].map((chunk: any[]) => chunk?.[0] ?? '').join('')) : ''
		return translated || text
	} catch (err) {
		if (attempt >= 4) throw err
		const wait = 500 * attempt
		console.warn(`Retry ${attempt} for ${target}: ${text} (${(err as Error).message})`)
		await sleep(wait)
		return translate(text, target, attempt + 1)
	}
}

async function main() {
	const todoFile = getArg('todo', TODO_FILE_DEFAULT)
	const outFile = getArg('out', OUT_FILE_DEFAULT)

	const todo: TodoEntry[] = JSON.parse(fs.readFileSync(todoFile, 'utf-8'))
	const existing: Mapping = fs.existsSync(outFile)
		? JSON.parse(fs.readFileSync(outFile, 'utf-8'))
		: {}

	const tasks: Array<() => Promise<void>> = []
	const cache = new Map<string, string>() // key: `${target}||${en}`

	let saveCounter = 0
	const flush = () => {
		ensureDir(outFile)
		fs.writeFileSync(outFile, JSON.stringify(existing, null, 2), 'utf-8')
	}

	for (const entry of todo) {
		const bucket = existing[entry.en] ?? { en: entry.en }
		for (const target of TARGETS) {
			if (bucket[target]) continue
			if (!entry.missing.includes(target)) continue
			const cacheKey = `${target}||${entry.en}`
			tasks.push(async () => {
				if (cache.has(cacheKey)) {
					bucket[target] = cache.get(cacheKey)!
					return
				}
				const translated = await translate(entry.en, target)
				cache.set(cacheKey, translated)
				bucket[target] = translated
				console.log(`[${target}] ${entry.en} -> ${translated}`)
				saveCounter++
				if (saveCounter % 50 === 0) {
					flush()
				}
			})
		}
		existing[entry.en] = bucket
	}

	let running = 0
	let idx = 0
	const concurrency = 5

	await new Promise<void>((resolve, reject) => {
		const launch = () => {
			while (running < concurrency && idx < tasks.length) {
				const t = tasks[idx++]
				running++
				t().then(() => {
					running--
					if (idx === tasks.length && running === 0) {
						resolve()
					} else {
						launch()
					}
				}).catch(err => {
					reject(err)
				})
			}
			if (tasks.length === 0) resolve()
		}
		launch()
	})

	flush()
	console.log(`Translations updated: ${outFile}`)
}

void main()

