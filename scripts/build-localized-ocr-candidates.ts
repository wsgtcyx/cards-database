import fs from 'node:fs'
import path from 'node:path'
import { globSync } from 'glob'
import { extractFile } from './utils/ts-extract-utils'

type Locale = string
type VisionLine = {
	text: string
	confidence: number
	box: { x: number, y: number, width: number, height: number }
}

type MissingEntry = {
	file: string
	path: string
	en?: string
	missing: string[]
}

function getArg(name: string): string {
	const prefix = `--${name}=`
	const value = process.argv.find(arg => arg.startsWith(prefix))?.slice(prefix.length)
	if (!value) throw new Error(`missing ${prefix}<value>`)
	return value
}

function getOptionalArg(name: string): string | undefined {
	const prefix = `--${name}=`
	return process.argv.find(arg => arg.startsWith(prefix))?.slice(prefix.length)
}

function normalize(value: string): string[] {
	return value
		.normalize('NFKD')
		.replace(/\p{M}/gu, '')
		.toLocaleLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, ' ')
		.trim()
		.split(/\s+/)
		.filter(token => token.length > 1)
}

function agreement(candidate: string, tesseract: string): number {
	const wanted = normalize(candidate)
	if (wanted.length === 0) return 0
	const seen = new Set(normalize(tesseract))
	return wanted.filter(token => seen.has(token)).length / wanted.length
}

function isNoise(line: VisionLine): boolean {
	const text = line.text.trim()
	if (!/\p{L}/u.test(text)) return true
	if (text.length <= 3 && !text.includes(' ')) return true
	return /^(basis|base|phase|fase|trainer|allenatore|item|strumento|unterstützer|aiuto)$/iu.test(text)
}

function join(lines: VisionLine[]): string {
	return lines.map(line => line.text.trim()).filter(Boolean).join(' ')
}

function damageDigits(value: unknown): string | null {
	const match = String(value ?? '').match(/\d+/)
	return match?.[0] ?? null
}

function findAttackRow(lines: VisionLine[], card: any): { name?: VisionLine, damage?: VisionLine } {
	const digits = damageDigits(card?.attacks?.[0]?.damage)
	const region = lines.filter(line => line.box.y > 0.14 && line.box.y < 0.48)
	let damage = digits
		? region.find(line => line.text.replace(/\D/g, '').startsWith(digits))
		: undefined
	if (!damage) {
		damage = region.find(line => /^\s*\d{1,3}[+×x%]?\s*$/u.test(line.text))
	}
	const targetY = damage?.box.y
	const names = region.filter(line =>
		!isNoise(line) &&
		line !== damage &&
		line.box.x > 0.12 &&
		line.box.x < 0.78 &&
		line.text.length <= 55 &&
		!/[.!?]$/.test(line.text)
	)
	const name = targetY === undefined
		? names.sort((a, b) => b.box.height - a.box.height)[0]
		: names.sort((a, b) => Math.abs(a.box.y - targetY) - Math.abs(b.box.y - targetY))[0]
	return { name, damage }
}

function extractCandidate(fieldPath: string, lines: VisionLine[], card: any, locale: Locale): string {
	const ordered = [...lines].sort((a, b) => b.box.y - a.box.y || a.box.x - b.box.x)

	if (fieldPath === 'description') {
		const excluded = /(regel|punkte|beliebig viele|unterstützerkarte spielen|kampfunfähig|regola|punti|puoi giocare|carta aiuto|va ko|megaevoluzione|règle|points|carte objet|regla|puntos|carta de objeto|regra|pontos|carta de item|規則|點|物品卡)/iu
		return join(ordered.filter(line =>
			line.box.y < 0.105 && line.box.x > 0.28 && !isNoise(line) && !excluded.test(line.text)
		))
	}

	if (fieldPath === 'effect' && card.category === 'Trainer') {
		return join(ordered.filter(line =>
			line.box.y > 0.14 && line.box.y < 0.50 &&
			line.text.trim().length >= 8 && !isNoise(line)
		))
	}

	const attack = findAttackRow(ordered, card)
	if (fieldPath === 'attacks[0].name') return attack.name?.text.trim() ?? ''
	if (fieldPath === 'attacks[0].effect') {
		if (!attack.name) return ''
		return join(ordered.filter(line =>
			line.box.y > 0.14 &&
			line.box.y < attack.name!.box.y - 0.008 &&
			line !== attack.damage &&
			!isNoise(line)
		))
	}

	const abilityPattern = locale === 'de' ? /^(?:fähigkeit)\s*(.*)$/iu : /^(?:abilità)\s*(.*)$/iu
	const labelIndex = ordered.findIndex(line => abilityPattern.test(line.text.trim()))
	if (labelIndex !== -1) {
		const label = ordered[labelIndex]
		const inlineName = label.text.trim().match(abilityPattern)?.[1]?.trim()
		const next = ordered.slice(labelIndex + 1).find(line =>
			line.box.y < label.box.y && line.box.y > label.box.y - 0.08 && !isNoise(line)
		)
		const abilityName = inlineName || next?.text.trim() || ''
		if (fieldPath === 'abilities[0].name') return abilityName
		if (fieldPath === 'abilities[0].effect') {
			const nameLine = inlineName ? label : next
			if (!nameLine) return ''
			const lowerBound = attack.name ? attack.name.box.y + 0.025 : 0.14
			return join(ordered.filter(line =>
				line.box.y > lowerBound &&
				line.box.y < nameLine.box.y - 0.006 &&
				!isNoise(line)
			))
		}
	}

	return ''
}

function extractPaddleCandidate(fieldPath: string, paddle: any, card: any, locale: Locale): string {
	if (!paddle?.ok) return ''
	const pages = paddle.pages ?? []
	const blocks = pages.flatMap((page: any) => {
		const width = Number(page.width)
		const height = Number(page.height)
		return (page.blocks ?? []).map((block: any) => ({ ...block, width, height, text: String(block.text ?? '').replace(/\s+/g, ' ').trim() }))
	})
	const hasLetters = (block: any) => /\p{L}/u.test(block.text)
	if (fieldPath === 'description') {
		return blocks.filter((block: any) => {
			const box = block.bbox ?? []
			return box.length === 4 && box[0] > block.width * 0.25 && box[1] > block.height * 0.875 && hasLetters(block)
		}).map((block: any) => block.text).join(' ')
	}
	if (fieldPath === 'effect' && card.category === 'Trainer') {
		return blocks.filter((block: any) => {
			const box = block.bbox ?? []
			return box.length === 4 && box[1] > block.height * 0.50 && box[1] < block.height * 0.82 && hasLetters(block) && block.label === 'text'
		}).map((block: any) => block.text).join(' ')
	}
	const digits = damageDigits(card?.attacks?.[0]?.damage)
	const damage = blocks.find((block: any) => digits && String(block.text).replace(/\D/g, '').startsWith(digits))
	const titles = blocks.filter((block: any) => block.label === 'paragraph_title' && block.bbox?.[1] > block.height * 0.15 && block.bbox?.[1] < block.height * 0.82)
	const attack = damage
		? [...titles].sort((a: any, b: any) => Math.abs(a.bbox[1] - damage.bbox[1]) - Math.abs(b.bbox[1] - damage.bbox[1]))[0]
		: titles.at(-1)
	if (fieldPath === 'attacks[0].name') return attack?.text ?? ''
	if (fieldPath === 'attacks[0].effect' && attack) {
		return blocks.filter((block: any) => block.label === 'text' && block !== damage && block.bbox?.[1] >= attack.bbox[1] && block.bbox?.[1] < block.height * 0.82 && hasLetters(block)).map((block: any) => block.text).join(' ')
	}
	const abilityPattern = locale === 'de' ? /^(?:fähigkeit)\s*(.*)$/iu : /^(?:abilità)\s*(.*)$/iu
	const ability = titles.find((block: any) => abilityPattern.test(block.text))
	if (ability) {
		if (fieldPath === 'abilities[0].name') return ability.text.match(abilityPattern)?.[1]?.trim() ?? ''
		if (fieldPath === 'abilities[0].effect') {
			const upper = attack?.bbox?.[1] ?? ability.height * 0.82
			return blocks.filter((block: any) => block.label === 'text' && block.bbox?.[1] >= ability.bbox[1] && block.bbox?.[1] < upper && hasLetters(block)).map((block: any) => block.text).join(' ')
		}
	}
	return ''
}

const missingFile = getArg('missing')
const evidenceDir = getArg('evidence-dir')
const paddleEvidenceDir = getOptionalArg('paddle-evidence-dir')
const locales = getOptionalArg('locales')?.split(',').filter(Boolean) ?? ['de', 'it']
const output = getArg('output')
const missing: MissingEntry[] = JSON.parse(fs.readFileSync(missingFile, 'utf8'))

const visionByLocale = new Map<Locale, Map<string, any>>()
const tesseractByLocale = new Map<Locale, Map<string, any>>()
const paddleByLocale = new Map<Locale, Map<string, any>>()
for (const locale of locales) {
	const vision = JSON.parse(fs.readFileSync(path.join(evidenceDir, `apple-vision-${locale}.json`), 'utf8'))
	visionByLocale.set(locale, new Map(vision.map((entry: any) => [entry.id, entry])))
	const tesseractFile = path.join(evidenceDir, `tesseract-${locale}.json`)
	if (fs.existsSync(tesseractFile)) {
		const tesseract = JSON.parse(fs.readFileSync(tesseractFile, 'utf8'))
		tesseractByLocale.set(locale, new Map(tesseract.map((entry: any) => [entry.id, entry])))
	}
	if (paddleEvidenceDir) {
		const paddle = JSON.parse(fs.readFileSync(path.join(paddleEvidenceDir, `paddleocr-${locale}.json`), 'utf8'))
		paddleByLocale.set(locale, new Map(paddle.map((entry: any) => [entry.id, entry])))
	}
}

const cards = new Map<string, any>()
const corpus = new Map<string, Array<{ locale: Locale, value: string, file: string }>>()
function collectCorpus(value: unknown, file: string) {
	if (Array.isArray(value)) {
		value.forEach(item => collectCorpus(item, file))
		return
	}
	if (!value || typeof value !== 'object') return
	const object = value as Record<string, unknown>
	if (typeof object.en === 'string') {
		for (const locale of locales) {
			if (typeof object[locale] !== 'string') continue
			const entries = corpus.get(object.en) ?? []
			entries.push({ locale, value: object[locale], file })
			corpus.set(object.en, entries)
		}
	}
	Object.values(object).forEach(item => collectCorpus(item, file))
}

for (const file of globSync('data/Pokémon TCG Pocket/**/*.ts')) {
	const value = extractFile(path.resolve(file))
	if (value) collectCorpus(value, file)
}

const candidates = []
for (const entry of missing) {
	const number = path.basename(entry.file, '.ts')
	const id = `B4-${number}`
	let card = cards.get(id)
	if (!card) {
		card = extractFile(path.resolve(entry.file))
		cards.set(id, card)
	}
	for (const locale of entry.missing.filter(value => locales.includes(value))) {
		const vision = visionByLocale.get(locale)!.get(id)
		const tesseract = tesseractByLocale.get(locale)?.get(id)
		const paddle = paddleByLocale.get(locale)?.get(id)
		const candidate = extractCandidate(entry.path, vision?.lines ?? [], card, locale)
		const score = agreement(candidate, tesseract?.text ?? '')
		const paddleScore = paddle?.ok ? agreement(candidate, paddle.text ?? '') : 0
		const paddleCandidate = paddle ? extractPaddleCandidate(entry.path, paddle, card, locale) : undefined
		const candidateAgreement = paddleCandidate ? Math.min(agreement(candidate, paddleCandidate), agreement(paddleCandidate, candidate)) : 0
		const corpusEntries = (corpus.get(entry.en ?? '') ?? []).filter(value => value.locale === locale)
		const corpusValues = Array.from(new Set(corpusEntries.map(value => value.value)))
		const corpusCandidate = corpusValues.length === 1 ? corpusValues[0] : undefined
		const corpusScore = corpusCandidate ? agreement(corpusCandidate, candidate) : 0
		const paddleEvidenceFile = paddleEvidenceDir
			? path.join(path.relative(evidenceDir, paddleEvidenceDir), `paddleocr-${locale}.json`)
			: undefined
		const status = corpusCandidate && corpusScore >= 0.65
			? 'corpus-supported-candidate'
			: candidate && score >= 0.75 && paddleCandidate && candidateAgreement >= 0.75 ? 'three-engine-candidate'
			: candidate && paddleCandidate && candidateAgreement >= 0.75 ? 'dual-engine-candidate'
			: candidate && score >= 0.75 ? 'cross-engine-candidate' : 'needs-review'
		candidates.push({
			id,
			locale,
			field: entry.path,
			english: entry.en,
			candidate,
			ocrAgreement: Number(score.toFixed(3)),
			paddleAgreement: paddle ? Number(paddleScore.toFixed(3)) : undefined,
			paddleCandidate,
			candidateAgreement: paddleCandidate ? Number(candidateAgreement.toFixed(3)) : undefined,
			corpusCandidate,
			corpusAgreement: Number(corpusScore.toFixed(3)),
			corpusSources: corpusCandidate
				? corpusEntries.filter(value => value.value === corpusCandidate).map(value => value.file)
				: [],
			status,
			evidence: {
				appleVision: `apple-vision-${locale}.json#${id}`,
				...(tesseract ? { tesseract: `tesseract-${locale}.json#${id}` } : {}),
				...(paddle && paddleEvidenceFile ? { paddleocr: `${paddleEvidenceFile}#${id}` } : {}),
				sourceSha256: vision?.sourceSha256
			}
		})
	}
}

const summary = {
	total: candidates.length,
	withCandidate: candidates.filter(candidate => candidate.candidate).length,
	threeEngineCandidates: candidates.filter(candidate => candidate.status === 'three-engine-candidate').length,
	dualEngineCandidates: candidates.filter(candidate => candidate.status === 'dual-engine-candidate').length,
	crossEngineCandidates: candidates.filter(candidate => candidate.status === 'cross-engine-candidate').length,
	corpusSupportedCandidates: candidates.filter(candidate => candidate.status === 'corpus-supported-candidate').length,
	needsReview: candidates.filter(candidate => candidate.status === 'needs-review').length,
	approved: 0,
	publicationReady: false,
	byField: Object.fromEntries(
		Array.from(new Set(candidates.map(candidate => candidate.field))).sort().map(field => {
			const values = candidates.filter(candidate => candidate.field === field)
			return [field, {
				total: values.length,
				withCandidate: values.filter(value => value.candidate).length,
				threeEngineCandidates: values.filter(value => value.status === 'three-engine-candidate').length,
				dualEngineCandidates: values.filter(value => value.status === 'dual-engine-candidate').length,
				crossEngineCandidates: values.filter(value => value.status === 'cross-engine-candidate').length,
				corpusSupportedCandidates: values.filter(value => value.status === 'corpus-supported-candidate').length
			}]
		})
	)
}

fs.writeFileSync(output, `${JSON.stringify({
	schemaVersion: 1,
	setId: 'B4',
	generatedAt: new Date().toISOString(),
	summary,
	candidates
}, null, 2)}\n`)

console.log(JSON.stringify(summary, null, 2))
process.exitCode = 2
