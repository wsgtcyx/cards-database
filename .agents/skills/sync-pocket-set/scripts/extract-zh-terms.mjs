import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

const REPO = process.cwd()
const manifestPath = getArg('manifest')
if (!manifestPath) throw new Error('--manifest is required')
const manifest = loadJson(manifestPath)
const OCR_PATH = getArg('ocr') ?? process.env.POCKET_ZH_OCR ?? '/tmp/pocket-zh-ocr.jsonl'
const POKEAPI_MOVE_NAMES = process.env.POKEAPI_MOVE_NAMES ?? '/tmp/pokeapi-move-names.csv'
const POKEAPI_ABILITY_NAMES = process.env.POKEAPI_ABILITY_NAMES ?? '/tmp/pokeapi-ability-names.csv'
const OUTPUT_PATH = getArg('output')
	?? manifest?.metadata?.zhTermsFile
	?? path.join(REPO, 'scripts/tmp/pocket-zh-source-terms.json')
const REPORT_PATH = getArg('report') ?? process.env.POCKET_ZH_REPORT ?? '/tmp/pocket-zh-term-report.json'
const WRITE = process.argv.includes('--write')

const SETS = { [manifest.set.sourceId]: manifest.set.id }

// Add only values visually checked against the source image when OCR cannot
// reliably read decorative text.
const MANUAL = {
	abilities: {
		'Ancient Roar': '古代戰吼',
		'Bad Dreams': '夢魘',
		'Strange Singing': '神奇歌聲',
	},
	attacks: {
		'Adamantine Rolling': '堅身回轉',
		'Air Crash': '空氣粉碎',
		'Armor Cannon': '鎧農炮',
		'Baneful Boom': '轟雷必殺',
		'Dress Up': '盛裝打扮',
		'Diving Icicles': '冰柱俯衝',
		'Fighting Fangs': '鬥志之牙',
		'Fighting Fist': '鬥志之拳',
		'Flower Trick': '千變萬花',
		'Gigaton Hammer': '巨力錘',
		'Hammer Arm': '臂錘',
		'Healing Light': '治癒之光',
		Hook: '鉤住',
		Icicle: '冰柱',
		Impound: '圍困',
		'Jeweled Gift': '寶石好禮',
		'Mega Burning': '超級燃燒',
		'Mega Blaster': '超級爆破',
		'Metal Blast': '金屬爆破',
		'Metal Defender': '金屬防禦',
		'Miraculous Memory': '奇跡記憶',
		'Muddy Hammer': '泥水之錘',
		'Pester the Dizzy': '暈眩追擊',
		'Poison Point': '毒刺',
		'Power Blast': '力量爆破',
		'Prism Impact': '稜鏡衝擊',
		'Rally Back': '捲土重來',
		'Random Spark': '電磁電光',
		'Reckless Charge': '突擊',
		'Rumble Stomp': '轟鳴重跺',
		'Sand Slammer': '沙牢',
		'Shifting Stream': '水流變幻',
		'Sludge Bomb': '污泥炸彈',
		'Splashing Dodge': '躍起閃避',
		'Storm Blade': '雷霆利刃',
		'Suffocating Gas': '瓦斯包圍',
		Training: '鍛鍊',
		'V-Flame': 'V型火焰',
		'Venomous Hit': '毒液一擊',
		'Windup Cannon': '機關加農炮',
	},
}

function parseNameCsv(file) {
	if (!fs.existsSync(file)) return new Map()
	const byId = new Map()
	for (const row of fs.readFileSync(file, 'utf8').trim().split('\n').slice(1)) {
		const first = row.indexOf(',')
		const second = row.indexOf(',', first + 1)
		const id = row.slice(0, first)
		const language = row.slice(first + 1, second)
		let name = row.slice(second + 1).replace(/\r$/u, '')
		if (name.startsWith('"') && name.endsWith('"')) {
			name = name.slice(1, -1).replace(/""/gu, '"')
		}
		const entry = byId.get(id) ?? {}
		entry[language] = name
		byId.set(id, entry)
	}
	return byId
}

function officialTerms() {
	const result = { abilities: new Map(), attacks: new Map() }
	for (const [type, file] of [
		['abilities', POKEAPI_ABILITY_NAMES],
		['attacks', POKEAPI_MOVE_NAMES],
	]) {
		for (const entry of parseNameCsv(file).values()) {
			if (entry['9'] && entry['4']) result[type].set(entry['9'], entry['4'])
		}
	}
	return result
}

function cleanTerm(value) {
	let result = value.trim()
	const firstHan = result.search(/\p{Script=Han}/u)
	if (firstHan >= 0) result = result.slice(firstHan)
	result = result
		.replace(/^特性\s*/u, '')
		.replace(/[。．•·]+$/u, '')
		.replace(/\s+/gu, '')
	return result
}

function hasHan(value) {
	return /\p{Script=Han}/u.test(value)
}

function isPlausibleTerm(value) {
	return hasHan(value)
		&& value.length <= 14
		&& !/[。，；：！？]/u.test(value)
}

function cardKey(file) {
	const match = file.match(/zh-TW\/([^/]+)\/(\d+)\.(?:png|webp)$/)
	if (!match || !SETS[match[1]]) throw new Error(`Unknown OCR source path: ${file}`)
	return { sourceSet: match[1], number: Number(match[2]) }
}

function pocketCardsBySet() {
	return Object.fromEntries(
		Object.keys(SETS).map(sourceSet => [
			sourceSet,
			new Map(loadJson(manifest.metadata.detailsFile)
				.map(card => [Number(card.ID.split('-').at(-1)), card])),
		]),
	)
}

function nameCandidates(lines) {
	return lines
		.filter(line =>
			line.y > 0.15
			&& line.y < 0.48
			&& line.height >= 0.025
			&& line.x > 0.19
			&& line.x < 0.46,
		)
		.map(line => ({ ...line, term: cleanTerm(line.text) }))
		.filter(line => isPlausibleTerm(line.term))
}

function damageRows(lines) {
	return lines
		.filter(line =>
			line.y > 0.15
			&& line.y < 0.48
			&& line.x > 0.75
			&& /^\d+(?:[+×xX])?$/u.test(line.text.replace(/\s+/gu, '')),
		)
		.sort((left, right) => right.y - left.y)
}

function extractAbility(lines, candidates) {
	const labelled = lines
		.filter(line => line.y > 0.35 && line.y < 0.48 && line.text.includes('特性'))
		.map(line => ({ ...line, term: cleanTerm(line.text) }))
		.find(line => isPlausibleTerm(line.term))
	if (labelled) return labelled

	return candidates
		.filter(line => line.y > 0.36)
		.sort((left, right) => right.y - left.y)[0]
}

function normalizeDamage(value) {
	if (value === undefined || value === null) return null
	return String(value).replace(/\s+/gu, '').replace(/[×X]/gu, 'x')
}

function extractAttacks(lines, candidates, expectedDamage, ability) {
	const selected = Array(expectedDamage.length)
	const used = new Set()
	const usedDamage = new Set()
	const rows = damageRows(lines)
	const available = () => candidates
		.filter(line =>
			!used.has(line)
			&& (!ability || line !== ability)
			&& (!ability || line.y < ability.y - 0.04),
		)

	for (const [index, expected] of expectedDamage.entries()) {
		if (expected === undefined || expected === null || expected === '') continue
		const normalized = normalizeDamage(expected)
		let damage = rows.find(line => !usedDamage.has(line) && normalizeDamage(line.text) === normalized)
		if (!damage && expectedDamage.length === 1 && rows.length === 1) damage = rows[0]
		if (!damage) continue

		const match = candidates
			.filter(line =>
				!used.has(line)
				&& (!ability || line !== ability)
				&& Math.abs(line.y - damage.y) <= 0.026,
			)
			.sort((left, right) => {
				const distance = Math.abs(left.y - damage.y) - Math.abs(right.y - damage.y)
				return distance || right.height - left.height
			})[0]
		if (match) {
			selected[index] = match
			used.add(match)
			usedDamage.add(damage)
		}
	}

	const unfilled = selected
		.map((value, index) => value ? undefined : index)
		.filter(index => index !== undefined)
	const remaining = available().sort((left, right) => right.y - left.y)
	if (unfilled.length && remaining.length === unfilled.length) {
		unfilled.forEach((index, position) => {
			selected[index] = remaining[position]
		})
	} else if (expectedDamage.length === 1 && remaining.length) {
		selected[0] = remaining[0]
	}

	return selected
}

function addSuggestion(groups, type, english, chinese, cardId) {
	if (!english || !chinese) return
	const terms = groups[type].get(english) ?? new Map()
	const evidence = terms.get(chinese) ?? []
	evidence.push(cardId)
	terms.set(chinese, evidence)
	groups[type].set(english, terms)
}

function chooseTerms(groups, allTerms, official, type) {
	const result = {}
	const evidence = {}
	const ambiguous = []
	const unresolved = []

	for (const english of [...allTerms[type]].sort()) {
		const manual = MANUAL[type][english]
		const canonical = official[type].get(english)
		const choices = [...(groups[type].get(english) ?? new Map()).entries()]
			.sort((left, right) => right[1].length - left[1].length || left[0].localeCompare(right[0], 'zh-Hant'))
		const selected = manual ?? canonical ?? choices[0]?.[0]
		if (!selected) {
			unresolved.push(english)
			continue
		}
		result[english] = selected
		evidence[english] = {
			selected,
			manual: Boolean(manual),
			official: Boolean(!manual && canonical),
			choices: Object.fromEntries(choices),
		}
		if (!manual && !canonical && choices.length > 1 && choices[0][1].length === choices[1][1].length) {
			ambiguous.push({ english, choices: Object.fromEntries(choices) })
		}
	}

	return { result, evidence, ambiguous, unresolved }
}

const cardsBySet = pocketCardsBySet()
const official = officialTerms()
const rows = fs.readFileSync(OCR_PATH, 'utf8').trim().split('\n').map(JSON.parse)
const groups = { abilities: new Map(), attacks: new Map() }
const allTerms = { abilities: new Set(), attacks: new Set() }
const cardDiagnostics = []

for (const row of rows) {
	const { sourceSet, number } = cardKey(row.file)
	const card = cardsBySet[sourceSet].get(number)
	if (!card) throw new Error(`No PocketDex card for ${sourceSet}-${number}`)
	if (card['Card-Type'] !== 'Pokemon') continue

	const abilities = Array.isArray(card.Ability) ? card.Ability : card.Ability ? [card.Ability] : []
	const attacks = card.Moves ?? []
	abilities.forEach(term => allTerms.abilities.add(term))
	attacks.forEach(term => allTerms.attacks.add(term))

	const candidates = nameCandidates(row.lines)
	const ability = abilities.length ? extractAbility(row.lines, candidates) : undefined
	const attackRows = extractAttacks(row.lines, candidates, card['Move-Damage'] ?? [], ability)
	if (ability) addSuggestion(groups, 'abilities', abilities[0], ability.term, card.ID)
	attacks.forEach((attack, index) => {
		if (attackRows[index]) addSuggestion(groups, 'attacks', attack, attackRows[index].term, card.ID)
	})

	if ((abilities.length && !ability) || attackRows.filter(Boolean).length !== attacks.length) {
		cardDiagnostics.push({
			id: card.ID,
			expected: { abilities, attacks },
			extracted: {
				abilities: ability ? [ability.term] : [],
				attacks: attackRows.map(line => line?.term ?? null),
			},
			candidates: candidates.map(line => ({
				text: line.term,
				x: Number(line.x.toFixed(3)),
				y: Number(line.y.toFixed(3)),
				height: Number(line.height.toFixed(3)),
			})),
		})
	}
}

const abilities = chooseTerms(groups, allTerms, official, 'abilities')
const attacks = chooseTerms(groups, allTerms, official, 'attacks')
const output = { abilities: abilities.result, attacks: attacks.result }
const report = {
	source: OCR_PATH,
	cards: rows.length,
	coverage: {
		abilities: `${Object.keys(output.abilities).length}/${allTerms.abilities.size}`,
		attacks: `${Object.keys(output.attacks).length}/${allTerms.attacks.size}`,
	},
	unresolved: {
		abilities: abilities.unresolved,
		attacks: attacks.unresolved,
	},
	ambiguous: {
		abilities: abilities.ambiguous,
		attacks: attacks.ambiguous,
	},
	cardDiagnostics,
	evidence: {
		abilities: abilities.evidence,
		attacks: attacks.evidence,
	},
}

if (WRITE) {
	const existing = fs.existsSync(OUTPUT_PATH)
		? loadJson(OUTPUT_PATH)
		: { abilities: {}, attacks: {} }
	const merged = {
		abilities: { ...existing.abilities, ...output.abilities },
		attacks: { ...existing.attacks, ...output.attacks },
	}
	fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(merged, null, 2)}\n`)
}
fs.writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({
	mode: WRITE ? 'write' : 'dry-run',
	output: OUTPUT_PATH,
	report: REPORT_PATH,
	...report.coverage,
	unresolvedAbilities: abilities.unresolved.length,
	unresolvedAttacks: attacks.unresolved.length,
	ambiguousAbilities: abilities.ambiguous.length,
	ambiguousAttacks: attacks.ambiguous.length,
	cardDiagnostics: cardDiagnostics.length,
}, null, 2))
