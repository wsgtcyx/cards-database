import fs from 'node:fs'
import path from 'node:path'

const REPO = process.cwd()
const ASSET_SOURCE = process.env.PTCGP_ASSET_SOURCE ?? '/tmp/tcgp-b2a-r2.QMONV8/source'
const POKEDEX_SOURCE = process.env.POCKETDEX_SOURCE ?? '/tmp'
const POKEAPI_FLAVOR = process.env.POKEAPI_FLAVOR ?? '/tmp/pokeapi-flavor.csv'
const POKEAPI_SPECIES_NAMES = process.env.POKEAPI_SPECIES_NAMES ?? '/tmp/pokeapi-species-names.csv'
const POKEAPI_MOVE_NAMES = process.env.POKEAPI_MOVE_NAMES ?? '/tmp/pokeapi-move-names.csv'
const POKEAPI_ABILITY_NAMES = process.env.POKEAPI_ABILITY_NAMES ?? '/tmp/pokeapi-ability-names.csv'
// Public TCG Pocket move table:
// https://wiki.52poke.com/wiki/招式列表（TCGP）
const POCKET_WIKI_MOVES = process.env.POCKET_WIKI_MOVES ?? '/tmp/52poke-tcgp-moves.html'
const TRANSLATIONS = path.join(REPO, 'scripts/tmp/pocket-translations.json')
const ZH_SOURCE_TERMS = path.join(REPO, 'scripts/tmp/pocket-zh-source-terms.json')
const TODO_PATH = process.env.POCKET_TRANSLATION_TODO ?? '/tmp/pocket-2026-translations.todo.json'
const GLOSSARY_PATH = process.env.POCKET_TRANSLATION_GLOSSARY ?? '/tmp/pocket-2026-terms.json'
const WRITE = process.argv.includes('--write')

const TARGET_LANGS = ['fr', 'es', 'it', 'de', 'pt-br', 'zh-tw']
const LANGUAGES = [
	['en', 'en-US'],
	['fr', 'fr-FR'],
	['es', 'es-ES'],
	['it', 'it-IT'],
	['de', 'de-DE'],
	['pt-br', 'pt-BR'],
	['zh-tw', 'zh-TW'],
	['ko', 'ko-KR'],
	['ja', 'ja-JP'],
]
const R2_ORIGIN = 'https://game.pokemontcgpocket.app'

const SETS = [
	{
		code: 'B2b',
		sourceCode: 'B2b',
		file: 'Mega Shine',
		total: 117,
		official: 69,
		releaseDate: '2026-03-26',
		boosters: [{ id: 'mega-shine', sku: 'B2b_1' }],
	},
	{
		code: 'B3',
		sourceCode: 'B3',
		file: 'Pulsing Aura',
		total: 234,
		official: 155,
		releaseDate: '2026-04-28',
		boosters: [{ id: 'pulsing-aura', sku: 'B3_1' }],
	},
	{
		code: 'B3a',
		sourceCode: 'B3a',
		file: 'Paradox Drive',
		total: 109,
		official: 74,
		releaseDate: '2026-05-28',
		boosters: [{ id: 'paradox-drive', sku: 'B3a_1' }],
	},
	{
		code: 'B3b',
		sourceCode: 'B3b',
		file: 'Everyday Wonders',
		total: 106,
		official: 69,
		releaseDate: '2026-06-30',
		boosters: [{ id: 'everyday-wonders', sku: 'B3b_1' }],
	},
	{
		code: 'P-B',
		sourceCode: 'PROMO-B',
		file: 'Promos-B',
		total: 78,
		official: 0,
		releaseDate: '2025-10-30',
		boosters: Array.from({ length: 10 }, (_, index) => ({
			id: `vol${index + 1}`,
			sku: `PROMO-B_${index + 1}`,
		})),
	},
]

const RARITIES = {
	C: 'One Diamond',
	U: 'Two Diamond',
	R: 'Three Diamond',
	RR: 'Four Diamond',
	AR: 'One Star',
	SR: 'Two Star',
	SAR: 'Two Star',
	IM: 'Three Star',
	S: 'One Shiny',
	SSR: 'Two Shiny',
	UR: 'Crown',
}

const ENERGY = {
	G: 'Grass',
	R: 'Fire',
	W: 'Water',
	L: 'Lightning',
	P: 'Psychic',
	F: 'Fighting',
	D: 'Darkness',
	M: 'Metal',
	C: 'Colorless',
}

const ELEMENTS = {
	grass: 'Grass',
	fire: 'Fire',
	water: 'Water',
	lightning: 'Lightning',
	psychic: 'Psychic',
	fighting: 'Fighting',
	darkness: 'Darkness',
	metal: 'Metal',
	dragon: 'Dragon',
	colorless: 'Colorless',
}

const SET_NAME_OVERRIDES = {
	B2b: {
		fr: 'Méga-Rayonnement',
	},
	'P-B': {
		en: 'Promos-B',
		fr: 'Promo-B',
		es: 'Promo-B',
		it: 'Promo-B',
		de: 'PROMO-B',
		'pt-br': 'Promo-B',
		'zh-tw': 'Promo-B',
		ko: 'Promo-B',
		ja: 'PROMO-B',
	},
}

const FORM_RULES = {
	'Paldean Tauros': {
		base: 'Tauros',
		fr: base => `${base} de Paldea`,
		es: base => `${base} de Paldea`,
		it: base => `${base} di Paldea`,
		de: base => `Paldea-${base}`,
		'pt-br': base => `${base} de Paldea`,
		'zh-tw': base => `帕底亞的${base}`,
		ko: base => `팔데아 ${base}`,
		ja: base => `パルデア ${base}`,
	},
	'Hisuian Lilligant': {
		base: 'Lilligant',
		fr: base => `${base} de Hisui`,
		es: base => `${base} de Hisui`,
		it: base => `${base} di Hisui`,
		de: base => `Hisui-${base}`,
		'pt-br': base => `${base} de Hisui`,
		'zh-tw': base => `洗翠的${base}`,
		ko: base => `히스이 ${base}`,
		ja: base => `ヒスイ ${base}`,
	},
	'Hisuian Sliggoo': {
		base: 'Sliggoo',
		fr: base => `${base} de Hisui`,
		es: base => `${base} de Hisui`,
		it: base => `${base} di Hisui`,
		de: base => `Hisui-${base}`,
		'pt-br': base => `${base} de Hisui`,
		'zh-tw': base => `洗翠的${base}`,
		ko: base => `히스이 ${base}`,
		ja: base => `ヒスイ ${base}`,
	},
	'Hisuian Goodra': {
		base: 'Goodra',
		fr: base => `${base} de Hisui`,
		es: base => `${base} de Hisui`,
		it: base => `${base} di Hisui`,
		de: base => `Hisui-${base}`,
		'pt-br': base => `${base} de Hisui`,
		'zh-tw': base => `洗翠的${base}`,
		ko: base => `히스이 ${base}`,
		ja: base => `ヒスイ ${base}`,
	},
	'Hisuian Zorua': {
		base: 'Zorua',
		fr: base => `${base} de Hisui`,
		es: base => `${base} de Hisui`,
		it: base => `${base} di Hisui`,
		de: base => `Hisui-${base}`,
		'pt-br': base => `${base} de Hisui`,
		'zh-tw': base => `洗翠的${base}`,
		ko: base => `히스이 ${base}`,
		ja: base => `ヒスイ ${base}`,
	},
	'Hisuian Zoroark ex': {
		base: 'Zoroark ex',
		fr: base => `${base.replace(/ ex$/, '')} de Hisui-ex`,
		es: base => `${base.replace(/ ex$/, '')} de Hisui ex`,
		it: base => `${base.replace(/ ex$/, '')} di Hisui-ex`,
		de: base => `Hisui-${base}`,
		'pt-br': base => `${base.replace(/ ex$/, '')} de Hisui ex`,
		'zh-tw': base => `洗翠的${base}`,
		ko: base => `히스이 ${base}`,
		ja: base => `ヒスイ ${base}`,
	},
	'Alolan Vulpix': {
		base: 'Vulpix',
		fr: base => `${base} d'Alola`,
		es: base => `${base} de Alola`,
		it: base => `${base} di Alola`,
		de: base => `Alola-${base}`,
		'pt-br': base => `${base} de Alola`,
		'zh-tw': base => `阿羅拉的${base}`,
		ko: base => `알로라 ${base}`,
		ja: base => `アローラ ${base}`,
	},
	'Paldean Clodsire': {
		base: 'Clodsire',
		fr: base => `${base} de Paldea`,
		es: base => `${base} de Paldea`,
		it: base => `${base} di Paldea`,
		de: base => `Paldea-${base}`,
		'pt-br': base => `${base} de Paldea`,
		'zh-tw': base => `帕底亞的${base}`,
		ko: base => `팔데아 ${base}`,
		ja: base => `パルデア ${base}`,
	},
}

const FORM_NAME_OVERRIDES = {
	'Castform Sunny Form': {
		fr: 'Morphéo Forme Solaire',
		es: 'Castform Forma Sol',
		it: 'Castform Forma Sole',
		de: 'Formeo Sonnenform',
		'pt-br': 'Castform Forma Ensolarada',
		'zh-tw': '飄浮泡泡 太陽的樣子',
		ko: '캐스퐁 태양의 모습',
		ja: 'ポワルン たいようのすがた',
	},
	'Castform Rainy Form': {
		fr: 'Morphéo Forme Eau de Pluie',
		es: 'Castform Forma Lluvia',
		it: 'Castform Forma Pioggia',
		de: 'Formeo Regenform',
		'pt-br': 'Castform Forma Chuvosa',
		'zh-tw': '飄浮泡泡 雨水的樣子',
		ko: '캐스퐁 빗방울의 모습',
		ja: 'ポワルン あまみずのすがた',
	},
	'Castform Snowy Form': {
		fr: 'Morphéo Forme Blizzard',
		es: 'Castform Forma Nieve',
		it: 'Castform Forma Neve',
		de: 'Formeo Schneeform',
		'pt-br': 'Castform Forma Nevada',
		'zh-tw': '飄浮泡泡 雪雲的樣子',
		ko: '캐스퐁 설운의 모습',
		ja: 'ポワルン ゆきぐものすがた',
	},
	'Rapid Strike Urshifu': {
		fr: 'Shifours Mille Poings',
		es: 'Urshifu Estilo Fluido',
		it: 'Urshifu Stile Pluricolpo',
		de: 'Wulaosu Fließender Stil',
		'pt-br': 'Urshifu Estilo Golpe Fluido',
		'zh-tw': '武道熊師 連擊流',
		ko: '우라오스 연격의 태세',
		ja: 'ウーラオス れんげきのかた',
	},
	'Single Strike Urshifu': {
		fr: 'Shifours Poing Final',
		es: 'Urshifu Estilo Brusco',
		it: 'Urshifu Stile Singolcolpo',
		de: 'Wulaosu Fokussierter Stil',
		'pt-br': 'Urshifu Estilo Golpe Decisivo',
		'zh-tw': '武道熊師 一擊流',
		ko: '우라오스 일격의 태세',
		ja: 'ウーラオス いちげきのかた',
	},
}

class Raw {
	constructor(value) {
		this.value = value
	}
}

function parseCsv(text) {
	const rows = []
	let row = []
	let value = ''
	let quoted = false

	for (let index = 0; index < text.length; index++) {
		const char = text[index]
		if (quoted) {
			if (char === '"' && text[index + 1] === '"') {
				value += '"'
				index++
			} else if (char === '"') {
				quoted = false
			} else {
				value += char
			}
		} else if (char === '"') {
			quoted = true
		} else if (char === ',') {
			row.push(value)
			value = ''
		} else if (char === '\n') {
			row.push(value)
			rows.push(row)
			row = []
			value = ''
		} else if (char !== '\r') {
			value += char
		}
	}

	if (value || row.length) {
		row.push(value)
		rows.push(row)
	}
	return rows
}

function normalizeText(value) {
	return value
		.normalize('NFKC')
		.replace(/[’‘]/g, "'")
		.replace(/\s+/g, ' ')
		.trim()
}

function normalizeRulesText(value) {
	if (!value) return undefined
	return value
		.replace(/\[([GRWLPFDMC])\]/g, '{$1}')
		.replace(/\u2212/g, '-')
		.trim()
}

function normalizeLocalizedRulesText(value, lang) {
	const normalized = normalizeRulesText(value)
	if (!normalized) return normalized
	if (lang === 'zh-tw') {
		return normalized.replace(/神奇寶貝/g, '寶可夢')
	}
	return normalized
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(file, 'utf8'))
}

function loadCardMetadata() {
	const result = {}
	for (const [, locale] of LANGUAGES) {
		const file = path.join(ASSET_SOURCE, 'metadata/cards', locale, 'cards.extra.json')
		result[locale] = new Map(
			loadJson(file).map(card => [`${card.set}-${card.number}`, card]),
		)
	}
	return result
}

function loadSetMetadata() {
	const result = {}
	for (const [, locale] of LANGUAGES) {
		const file = path.join(ASSET_SOURCE, 'metadata/sets', locale, 'sets.json')
		result[locale] = loadJson(file)
	}
	return result
}

function setEntry(source, sourceCode) {
	const group = sourceCode === 'PROMO-B' ? 'P' : 'B'
	return source[group].find(entry => entry.code === sourceCode)
}

function getLocalizedSetName(config, setMetadata) {
	const result = {}
	for (const [lang, locale] of LANGUAGES) {
		const entry = setEntry(setMetadata[locale], config.sourceCode)
		const sourceName = config.sourceCode === 'PROMO-B'
			? entry.name.en
			: entry.packs[0].name
		result[lang] = SET_NAME_OVERRIDES[config.code]?.[lang] ?? sourceName
	}
	return result
}

function localizedCardName(config, number, pocketCard, cardMetadata) {
	const result = {}
	const englishSource = cardMetadata['en-US'].get(`${config.sourceCode}-${number}`).name
	const canonicalEnglish = normalizeText(englishSource) === normalizeText(pocketCard.Name)
		? englishSource
		: pocketCard.Name
	result.en = canonicalEnglish

	for (const [lang, locale] of LANGUAGES.slice(1)) {
		const sourceCard = cardMetadata[locale].get(`${config.sourceCode}-${number}`)
		const baseName = sourceCard.name
		if (['zh-tw', 'ko', 'ja'].includes(lang)) {
			result[lang] = baseName
			continue
		}
		const rule = FORM_RULES[canonicalEnglish]
		if (rule) {
			const localizedBase = baseName.replace(/\s*-?ex$/i, '').trim()
			const withSuffix = rule.base.endsWith(' ex') ? `${localizedBase} ex` : localizedBase
			result[lang] = rule[lang](withSuffix)
		} else {
			result[lang] = FORM_NAME_OVERRIDES[canonicalEnglish]?.[lang] ?? baseName
		}
	}
	return result
}

function localizedEvolvesFrom(config, number, cardMetadata) {
	const result = {}
	for (const [lang, locale] of LANGUAGES) {
		const value = cardMetadata[locale].get(`${config.sourceCode}-${number}`).evolvesFrom
		if (value) result[lang] = value
	}
	return Object.keys(result).length ? result : undefined
}

function buildOfficialFlavorMap() {
	if (!fs.existsSync(POKEAPI_FLAVOR)) return new Map()
	const rows = parseCsv(fs.readFileSync(POKEAPI_FLAVOR, 'utf8')).slice(1)
	const english = new Map()
	const byKey = new Map()
	for (const [species, version, language, text] of rows) {
		byKey.set(`${species}|${version}|${language}`, text)
		if (language === '9') english.set(normalizeText(text), [species, version])
	}
	const languageIds = { fr: '5', es: '7', it: '8', de: '6', 'pt-br': '13', 'zh-tw': '4' }
	const result = new Map()
	for (const [englishText, key] of english) {
		const translated = {}
		for (const [lang, languageId] of Object.entries(languageIds)) {
			const value = byKey.get(`${key[0]}|${key[1]}|${languageId}`)
			if (value) translated[lang] = value.replace(/\f/g, '\n')
		}
		if (Object.keys(translated).length) result.set(englishText, translated)
	}
	return result
}

function buildDexMap() {
	if (!fs.existsSync(POKEAPI_SPECIES_NAMES)) return new Map()
	const rows = parseCsv(fs.readFileSync(POKEAPI_SPECIES_NAMES, 'utf8')).slice(1)
	return new Map(
		rows
			.filter(([, language]) => language === '9')
			.map(([species, , name]) => [normalizeText(name).toLowerCase(), Number(species)]),
	)
}

function buildSpeciesGlossary() {
	if (!fs.existsSync(POKEAPI_SPECIES_NAMES)) return {}
	const rows = parseCsv(fs.readFileSync(POKEAPI_SPECIES_NAMES, 'utf8')).slice(1)
	const languageIds = { fr: '5', es: '7', it: '8', de: '6', 'pt-br': '13', 'zh-tw': '4' }
	const bySpecies = new Map()
	for (const [species, language, name] of rows) {
		const entry = bySpecies.get(species) ?? {}
		entry[language] = name
		bySpecies.set(species, entry)
	}
	const glossary = {}
	for (const entry of bySpecies.values()) {
		const english = entry['9']
		if (!english) continue
		glossary[english] = Object.fromEntries(
			Object.entries(languageIds)
				.filter(([, language]) => entry[language])
				.map(([lang, language]) => [lang, entry[language]]),
		)
	}
	return glossary
}

function buildOfficialRuleNameMap() {
	const languageIds = { fr: '5', es: '7', it: '8', de: '6', 'pt-br': '13', 'zh-tw': '4' }
	const result = new Map()
	for (const file of [POKEAPI_MOVE_NAMES, POKEAPI_ABILITY_NAMES]) {
		if (!fs.existsSync(file)) continue
		const byId = new Map()
		for (const [id, language, name] of parseCsv(fs.readFileSync(file, 'utf8')).slice(1)) {
			const entry = byId.get(id) ?? {}
			entry[language] = name
			byId.set(id, entry)
		}
		for (const entry of byId.values()) {
			const english = entry['9']
			if (!english) continue
			result.set(english, Object.fromEntries(
				Object.entries(languageIds)
					.filter(([, language]) => entry[language])
					.map(([lang, language]) => [lang, entry[language]]),
			))
		}
	}
	return result
}

function decodeHtml(value) {
	return value
		.replace(/<[^>]+>/gu, '')
		.replace(/&#(\d+);/gu, (_, number) => String.fromCodePoint(Number(number)))
		.replace(/&#x([0-9a-f]+);/giu, (_, number) => String.fromCodePoint(Number.parseInt(number, 16)))
		.replace(/&nbsp;/gu, ' ')
		.replace(/&amp;/gu, '&')
		.replace(/&quot;/gu, '"')
		.replace(/&#39;|&apos;/gu, "'")
		.replace(/&lt;/gu, '<')
		.replace(/&gt;/gu, '>')
		.trim()
}

function buildPocketMoveNameMap() {
	if (!fs.existsSync(POCKET_WIKI_MOVES)) return new Map()
	const html = fs.readFileSync(POCKET_WIKI_MOVES, 'utf8')
	const table = html.match(/<table class="eplist[\s\S]*?<\/table>/u)?.[0]
	if (!table) throw new Error(`Unable to find TCG Pocket move table in ${POCKET_WIKI_MOVES}`)
	const result = new Map()
	for (const row of table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gu)) {
		const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gu)]
			.map(match => decodeHtml(match[1]))
		if (cells.length < 10 || !cells[2]) continue
		const translations = {
			'zh-tw': cells[3],
			es: cells[4],
			fr: cells[5],
			de: cells[6],
			it: cells[7],
			'pt-br': cells[8],
		}
		result.set(cells[2], Object.fromEntries(
			Object.entries(translations).filter(([, value]) => value && value !== '—'),
		))
	}
	return result
}

function applyOfficialRuleTranslations(mapping, officialNames, usedRuleTerms) {
	let applied = 0
	for (const [english, translations] of officialNames) {
		if (usedRuleTerms && !usedRuleTerms.has(english)) continue
		const bucket = mapping[english]
		if (!bucket) continue
		for (const [language, value] of Object.entries(translations)) {
			if (bucket[language] !== value) {
				bucket[language] = value
				applied++
			}
		}
	}
	return applied
}

function baseSpeciesName(name) {
	return name
		.replace(/ ex$/i, '')
		.replace(/^Mega /i, '')
		.replace(/^(Paldean|Hisuian|Alolan) /i, '')
		.replace(/^Rapid Strike /i, '')
		.replace(/^Single Strike /i, '')
		.replace(/ (Sunny|Rainy|Snowy) Form$/i, '')
		.replace(/ [XY]$/i, '')
}

function addOfficialFlavorTranslations(mapping, officialFlavors, pocketCards) {
	let added = 0
	for (const card of pocketCards) {
		const english = card['Flavor-Text']
		if (!english) continue
		const official = officialFlavors.get(normalizeText(english))
		if (!official) continue
		const bucket = mapping[english] ?? { en: english }
		for (const [lang, value] of Object.entries(official)) {
			if (!bucket[lang]) {
				bucket[lang] = value
				added++
			}
		}
		mapping[english] = bucket
	}
	return added
}

function localizedText(english, mapping, todo, context) {
	const normalized = normalizeRulesText(english)
	if (!normalized) return undefined
	const bucket = mapping[normalized] ?? mapping[english] ?? { en: normalized }
	const result = { en: normalized }
	const missing = []
	for (const lang of TARGET_LANGS) {
		if (bucket[lang]) result[lang] = normalizeLocalizedRulesText(bucket[lang], lang)
		else missing.push(lang)
	}
	if (missing.length) {
		const existing = todo.get(normalized) ?? {
			en: normalized,
			missing: new Set(),
			files: new Set(),
			paths: new Set(),
		}
		missing.forEach(lang => existing.missing.add(lang))
		existing.files.add(context.file)
		existing.paths.add(context.path)
		todo.set(normalized, existing)
	}
	return result
}

function parseEnergyCost(value) {
	if (!value || value === '0') return []
	return [...value].map(symbol => {
		if (!ENERGY[symbol]) throw new Error(`Unknown energy symbol: ${symbol}`)
		return ENERGY[symbol]
	})
}

function parseDamage(value) {
	if (value === undefined || value === null || value === '') return undefined
	return /^\d+$/.test(String(value)) ? Number(value) : String(value)
}

function renderKey(key) {
	return /^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key)
}

function render(value, level = 0) {
	const indent = '    '.repeat(level)
	const childIndent = '    '.repeat(level + 1)
	if (value instanceof Raw) return value.value
	if (value === null) return 'null'
	if (typeof value === 'string') return JSON.stringify(value)
	if (typeof value === 'number' || typeof value === 'boolean') return String(value)
	if (Array.isArray(value)) {
		if (!value.length) return '[]'
		if (value.every(item => ['string', 'number', 'boolean'].includes(typeof item))) {
			return `[${value.map(item => render(item)).join(', ')}]`
		}
		return `[\n${value.map(item => `${childIndent}${render(item, level + 1)}`).join(',\n')}\n${indent}]`
	}
	const entries = Object.entries(value).filter(([, item]) => item !== undefined)
	if (!entries.length) return '{}'
	return `{\n${entries.map(([key, item]) => `${childIndent}${renderKey(key)}: ${render(item, level + 1)}`).join(',\n')}\n${indent}}`
}

function buildPackImages(config, booster) {
	const logo = {}
	const artworkFront = {}
	for (const [lang] of LANGUAGES) {
		logo[lang] = `${R2_ORIGIN}/${lang}/tcgp/${config.code}/boosters/${booster.id}/logo.webp`
		artworkFront[lang] = `${R2_ORIGIN}/${lang}/tcgp/${config.code}/boosters/${booster.id}/artwork_front.webp`
	}
	return { logo, artwork_front: artworkFront }
}

function buildBoosters(config, setMetadata) {
	const result = {}
	for (const booster of config.boosters) {
		const name = {}
		for (const [lang, locale] of LANGUAGES) {
			const entry = setEntry(setMetadata[locale], config.sourceCode)
			const sourcePack = entry.packs.find(pack => pack.skuId === booster.sku)
			name[lang] = config.sourceCode === 'PROMO-B'
				? sourcePack.name
				: SET_NAME_OVERRIDES[config.code]?.[lang] ?? sourcePack.name
		}
		result[booster.id] = {
			name,
			...buildPackImages(config, booster),
		}
	}
	return result
}

function promoBoosters(config, sourceCard) {
	if (config.code !== 'P-B') return undefined
	return sourceCard.packs.map(packName => {
		const match = packName.match(/Vol\. (\d+)$/)
		if (!match) throw new Error(`Unknown Promo-B pack: ${packName}`)
		return `vol${match[1]}`
	})
}

function buildCard(config, number, pocketCard, cardMetadata, mapping, todo, dexMap, zhSourceTerms) {
	const sourceCard = cardMetadata['en-US'].get(`${config.sourceCode}-${number}`)
	const file = `data/Pokémon TCG Pocket/${config.file}/${String(number).padStart(3, '0')}.ts`
	const context = field => ({ file, path: field })
	const card = {
		set: new Raw('Set'),
		image: {
			en: `${R2_ORIGIN}/en/tcgp/${config.code}/${String(number).padStart(3, '0')}`,
			'zh-tw': `${R2_ORIGIN}/zh-tw/tcgp/${config.code}/${String(number).padStart(3, '0')}`,
		},
		name: localizedCardName(config, number, pocketCard, cardMetadata),
		illustrator: pocketCard.Illustrator || undefined,
		rarity: config.code === 'P-B' ? 'None' : RARITIES[sourceCard.rarity],
		category: pocketCard['Card-Type'] === 'Pokemon' ? 'Pokemon' : 'Trainer',
	}

	if (!card.rarity) throw new Error(`Unknown rarity ${sourceCard.rarity} on ${pocketCard.ID}`)

	if (card.category === 'Pokemon') {
		card.hp = sourceCard.health
		card.types = [ELEMENTS[sourceCard.element]]
		if (!card.types[0]) throw new Error(`Unknown element ${sourceCard.element} on ${pocketCard.ID}`)
		const dexId = dexMap.get(normalizeText(baseSpeciesName(pocketCard.Name)).toLowerCase())
		if (dexId) card.dexId = [dexId]
		card.evolveFrom = localizedEvolvesFrom(config, number, cardMetadata)
		card.stage = sourceCard.stage === 'basic' ? 'Basic' : `Stage${sourceCard.stage}`
		card.description = localizedText(pocketCard['Flavor-Text'], mapping, todo, context('description'))

		const abilityNames = Array.isArray(pocketCard.Ability) ? pocketCard.Ability : pocketCard.Ability ? [pocketCard.Ability] : []
		const abilityEffects = Array.isArray(pocketCard['Ability-Effect'])
			? pocketCard['Ability-Effect']
			: pocketCard['Ability-Effect'] ? [pocketCard['Ability-Effect']] : []
		if (abilityNames.length) {
			card.abilities = abilityNames.map((name, index) => ({
				type: 'Ability',
				name: {
					...localizedText(name, mapping, todo, context(`abilities[${index}].name`)),
					...(zhSourceTerms.abilities?.[name] ? { 'zh-tw': zhSourceTerms.abilities[name] } : {}),
				},
				effect: localizedText(abilityEffects[index], mapping, todo, context(`abilities[${index}].effect`)),
			}))
		}

		if (pocketCard.Moves?.length) {
			card.attacks = pocketCard.Moves.map((name, index) => {
				const attack = {
					cost: parseEnergyCost(pocketCard['Move-Energy'][index]),
					name: {
						...localizedText(name, mapping, todo, context(`attacks[${index}].name`)),
						...(zhSourceTerms.attacks?.[name] ? { 'zh-tw': zhSourceTerms.attacks[name] } : {}),
					},
					effect: localizedText(pocketCard.Effects[index], mapping, todo, context(`attacks[${index}].effect`)),
					damage: parseDamage(pocketCard['Move-Damage'][index]),
				}
				if (!attack.cost.length) delete attack.cost
				return attack
			})
		}

		if (sourceCard.weakness && sourceCard.weakness.toUpperCase() !== 'UNSPECIFIED') {
			card.weaknesses = [{ type: sourceCard.weakness, value: '+20' }]
		}
		card.retreat = sourceCard.retreatCost
	} else {
		card.effect = localizedText(pocketCard.Description, mapping, todo, context('effect'))
		card.trainerType = pocketCard['Card-Type']
	}

	const boosters = promoBoosters(config, sourceCard)
	if (boosters !== undefined) card.boosters = boosters
	return card
}

function writeFile(file, content) {
	if (!WRITE) return
	fs.mkdirSync(path.dirname(file), { recursive: true })
	fs.writeFileSync(file, content)
}

function main() {
	const cardMetadata = loadCardMetadata()
	const setMetadata = loadSetMetadata()
	const mapping = loadJson(TRANSLATIONS)
	const zhSourceTerms = fs.existsSync(ZH_SOURCE_TERMS) ? loadJson(ZH_SOURCE_TERMS) : { abilities: {}, attacks: {} }
	const officialFlavors = buildOfficialFlavorMap()
	const officialRuleNames = buildOfficialRuleNameMap()
	const pocketMoveNames = buildPocketMoveNameMap()
	const dexMap = buildDexMap()
	const usedRuleTerms = new Set()
	for (const config of SETS) {
		for (const card of loadJson(path.join(POKEDEX_SOURCE, `pocketdex-${config.code}.json`))) {
			for (const move of card.Moves ?? []) usedRuleTerms.add(move)
			const abilities = Array.isArray(card.Ability) ? card.Ability : card.Ability ? [card.Ability] : []
			for (const ability of abilities) usedRuleTerms.add(ability)
		}
	}
	const todo = new Map()
	const glossary = buildSpeciesGlossary()
	let officialFlavorTranslationsAdded = 0
	const officialRuleTranslationsApplied = applyOfficialRuleTranslations(mapping, officialRuleNames, usedRuleTerms)
	const pocketMoveTranslationsApplied = applyOfficialRuleTranslations(mapping, pocketMoveNames, usedRuleTerms)
	for (const [english, translations] of pocketMoveNames) {
		if (translations['zh-tw']) zhSourceTerms.attacks[english] = translations['zh-tw']
	}
	let cardsWritten = 0

	for (const config of SETS) {
		const pocketId = config.code
		const pocketCards = loadJson(path.join(POKEDEX_SOURCE, `pocketdex-${pocketId}.json`))
		if (pocketCards.length !== config.total) {
			throw new Error(`${config.code}: expected ${config.total} PocketDex cards, got ${pocketCards.length}`)
		}
		const sourceCards = [...cardMetadata['en-US'].values()]
			.filter(card => card.set === config.sourceCode && card.number <= config.total)
		if (sourceCards.length !== config.total) {
			throw new Error(`${config.code}: expected ${config.total} source cards, got ${sourceCards.length}`)
		}

		officialFlavorTranslationsAdded += addOfficialFlavorTranslations(mapping, officialFlavors, pocketCards)

		const setObject = {
			id: config.code,
			name: getLocalizedSetName(config, setMetadata),
			serie: new Raw('serie'),
			cardCount: { official: config.official },
			boosters: buildBoosters(config, setMetadata),
			releaseDate: config.releaseDate,
		}
		const setContent = `import { Set } from '../../interfaces'\nimport serie from '../Pokémon TCG Pocket'\n\nconst set: Set = ${render(setObject)}\n\nexport default set\n`
		writeFile(path.join(REPO, `data/Pokémon TCG Pocket/${config.file}.ts`), setContent)

		for (const pocketCard of pocketCards) {
			const number = Number(pocketCard.ID.split('-').at(-1))
			const expectedId = `${config.code}-${String(number).padStart(3, '0')}`
			if (pocketCard.ID !== expectedId) {
				throw new Error(`${config.code}: non-contiguous card ID ${pocketCard.ID}, expected ${expectedId}`)
			}
			const card = buildCard(config, number, pocketCard, cardMetadata, mapping, todo, dexMap, zhSourceTerms)
			const content = `import { Card } from "../../../interfaces";\nimport Set from "../${config.file}";\n\nconst card: Card = ${render(card)};\n\nexport default card;\n`
			writeFile(
				path.join(REPO, `data/Pokémon TCG Pocket/${config.file}/${String(number).padStart(3, '0')}.ts`),
				content,
			)
			cardsWritten++

			const names = card.name
			glossary[names.en] = Object.fromEntries(
				TARGET_LANGS.filter(lang => names[lang]).map(lang => [lang, names[lang]]),
			)
		}
	}

	const todoEntries = [...todo.values()]
		.map(entry => ({
			en: entry.en,
			missing: [...entry.missing],
			files: [...entry.files].sort(),
			paths: [...entry.paths].sort(),
		}))
		.sort((left, right) => left.en.localeCompare(right.en))

	if (WRITE) {
		fs.writeFileSync(TRANSLATIONS, `${JSON.stringify(mapping, null, 2)}\n`)
		fs.writeFileSync(TODO_PATH, `${JSON.stringify(todoEntries, null, 2)}\n`)
		fs.writeFileSync(GLOSSARY_PATH, `${JSON.stringify(glossary, null, 2)}\n`)
	}

	console.log(JSON.stringify({
		mode: WRITE ? 'write' : 'dry-run',
		sets: SETS.length,
		cards: cardsWritten,
		officialFlavorTranslationsAdded,
		officialRuleTranslationsApplied,
		pocketMoveTranslationsApplied,
		pocketMoveNames: pocketMoveNames.size,
		usedRuleTerms: usedRuleTerms.size,
		todoStrings: todoEntries.length,
		glossaryTerms: Object.keys(glossary).length,
	}, null, 2))
}

main()
