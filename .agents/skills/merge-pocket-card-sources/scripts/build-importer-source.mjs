#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

function getArg(name) {
	const exact = process.argv.indexOf(`--${name}`)
	if (exact >= 0) return process.argv[exact + 1]
	return process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3)
}

function loadJson(file) {
	return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'))
}

function normalize(value) {
	return String(value ?? '').normalize('NFKC').replace(/\s+/gu, ' ').trim()
}

const canonicalPath = getArg('canonical')
const templateRoot = getArg('template-root')
const outputRoot = getArg('output')
const speciesNamesPath = getArg('species-names')
if (!canonicalPath || !templateRoot || !outputRoot || !speciesNamesPath) {
	throw new Error('--canonical, --template-root, --species-names and --output are required')
}

const canonical = loadJson(canonicalPath)
if (canonical.setId !== 'B4' || canonical.cards?.length !== 233) {
	throw new Error('This reviewed source builder expects the complete 233-card B4 canonical file')
}
const canonicalIds = new Set()
for (let index = 0; index < canonical.cards.length; index++) {
	const expectedId = `B4-${String(index + 1).padStart(3, '0')}`
	const actualId = canonical.cards[index]?.id
	if (actualId !== expectedId) {
		throw new Error(`Canonical card order is unsafe: expected ${expectedId} at position ${index + 1}, got ${actualId}`)
	}
	if (canonicalIds.has(actualId)) throw new Error(`Duplicate canonical card id: ${actualId}`)
	canonicalIds.add(actualId)
}

const LOCALES = ['en-US', 'fr-FR', 'es-ES', 'it-IT', 'de-DE', 'pt-BR', 'zh-TW', 'ko-KR', 'ja-JP']
const LANG_BY_LOCALE = {
	'en-US': 'en',
	'fr-FR': 'fr',
	'es-ES': 'es',
	'it-IT': 'it',
	'de-DE': 'de',
	'pt-BR': 'pt-br',
	'zh-TW': 'zh-tw',
	'ko-KR': 'ko',
	'ja-JP': 'ja',
}
const SET_NAMES = {
	en: 'Ruler of the Skies',
	fr: 'Domination Céleste',
	es: 'Dominador de los Cielos',
	it: 'Sovrano dei Cieli',
	de: 'Herrscher der Lüfte',
	'pt-br': 'Mestre dos Céus',
	'zh-tw': '天空主宰',
	ko: '천공의 지배자',
	ja: '天空の支配者',
}
const TRAINER_NAMES = {
	'Order Pad': {
		fr: 'Terminal de Commande', es: 'Dispositivo de Pedidos', it: 'Schermo Ordini', de: 'Bestellpad',
		'pt-br': 'Tablet de Pedido', 'zh-tw': '指令機', ko: '주문 패드', ja: 'オーダーパッド',
	},
	'Claw Fossil': {
		fr: 'Fossile Griffe', es: 'Fósil Garra', it: 'Fossilunghia', de: 'Klauenfossil',
		'pt-br': 'Fóssil Garra', 'zh-tw': '爪子化石', ko: '발톱화석', ja: 'ツメの化石',
	},
	'Root Fossil': {
		fr: 'Fossile Racine', es: 'Fósil Raíz', it: 'Fossilradice', de: 'Wurzelfossil',
		'pt-br': 'Fóssil Raiz', 'zh-tw': '根狀化石', ko: '뿌리화석', ja: 'ねっこのカセキ',
	},
	'Deceptive Needle': {
		fr: 'Aiguille Trompeuse', es: 'Aguja Engañosa', it: 'Ago Ingannevole', de: 'Täuschende Nadel',
		'pt-br': 'Agulha Enganosa', 'zh-tw': '欺詐之針', ko: '속임수바늘', ja: 'だましのハリ',
	},
	'Clear Veil': {
		fr: 'Voile Limpide', es: 'Velo Límpido', it: 'Velo Limpido', de: 'Klarer Schleier',
		'pt-br': 'Véu Límpido', 'zh-tw': '清澈頭紗', ko: '맑은베일', ja: 'クリアベール',
	},
	Psychic: {
		fr: 'Kinésiste', es: 'Psíquico', it: 'Psiche', de: 'Psycho',
		'pt-br': 'Psíquico', 'zh-tw': '超能力者', ko: '사이킥', ja: 'サイキッカー',
	},
	Drayden: {
		fr: 'Watson', es: 'Lirio', it: 'Aristide', de: 'Lysander',
		'pt-br': 'Drayden', 'zh-tw': '夏卡', ko: '사간', ja: 'シャガ',
	},
	Skyla: {
		fr: 'Carolina', es: 'Gerania', it: 'Anemone', de: 'Géraldine',
		'pt-br': 'Skyla', 'zh-tw': '風露', ko: '풍란', ja: 'フウロ',
	},
	Wally: {
		fr: 'Timmy', es: 'Blasco', it: 'Lino', de: 'Heiko',
		'pt-br': 'Wally', 'zh-tw': '滿充', ko: '민진', ja: 'ミツル',
	},
	'Soothing Shore': {
		fr: 'Rivage Apaisant', es: 'Costa Relajante', it: 'Riva Ristoratrice', de: 'Heilsames Ufer',
		'pt-br': 'Costa Relaxante', 'zh-tw': '療癒海岸', ko: '평온한해안', ja: 'いやしのなぎさ',
	},
	'Rainbow Cave': {
		fr: 'Grotte Arc-en-ciel', es: 'Cueva Arcoíris', it: 'Grotta Arcobaleno', de: 'Regenbogenhöhle',
		'pt-br': 'Caverna Arco-Íris', 'zh-tw': '彩虹洞窟', ko: '무지개동굴', ja: 'にじのどうくつ',
	},
}
const NAME_OVERRIDES = {
	'Teal Mask Ogerpon': {
		fr: 'Ogerpon Masque Turquoise', es: 'Ogerpon Máscara Turquesa', it: 'Ogerpon Maschera Turchese',
		de: 'Ogerpon (Türkisgrüne Maske)', 'pt-br': 'Ogerpon Máscara Turquesa', 'zh-tw': '厄鬼椪 碧草面具',
		ko: '오거폰 벽록의가면', ja: 'オーガポン みどりのめん',
	},
}
const RARITY = {
	'One Diamond': 'C', 'Two Diamond': 'U', 'Three Diamond': 'R', 'Four Diamond': 'RR',
	'One Star': 'AR', 'Two Star': 'SR', 'Three Star': 'IM', 'One Shiny': 'S',
	'Two Shiny': 'SSR', Crown: 'UR',
}

function templateFile(root, kind, locale, filename) {
	return path.join(path.resolve(root), 'metadata', kind, locale, filename)
}

const sourceByLocale = Object.fromEntries(LOCALES.map(locale => [locale, loadJson(
	templateFile(templateRoot, 'cards', locale, 'cards.extra.json'),
)]))
const englishById = new Map(sourceByLocale['en-US'].map(card => [`${card.set}-${card.number}`, card]))

function buildLocalizedNameMap(locale) {
	const localizedById = new Map(sourceByLocale[locale].map(card => [`${card.set}-${card.number}`, card]))
	const candidates = new Map()
	for (const [id, englishCard] of englishById) {
		const localized = localizedById.get(id)?.name
		if (!localized) continue
		const key = normalize(englishCard.name)
		const counts = candidates.get(key) ?? new Map()
		counts.set(localized, (counts.get(localized) ?? 0) + 1)
		candidates.set(key, counts)
	}
	return new Map([...candidates].map(([english, counts]) => [
		english,
		[...counts].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))[0][0],
	]))
}

const localizedNames = Object.fromEntries(LOCALES.map(locale => [locale, buildLocalizedNameMap(locale)]))

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
			} else if (char === '"') quoted = false
			else value += char
		} else if (char === '"') quoted = true
		else if (char === ',') {
			row.push(value)
			value = ''
		} else if (char === '\n') {
			row.push(value)
			rows.push(row)
			row = []
			value = ''
		} else if (char !== '\r') value += char
	}
	if (value || row.length) {
		row.push(value)
		rows.push(row)
	}
	return rows
}

function buildSpeciesNames() {
	const languageById = {
		'1': 'ja-JP', '3': 'ko-KR', '4': 'zh-TW', '5': 'fr-FR', '6': 'de-DE',
		'7': 'es-ES', '8': 'it-IT', '9': 'en-US', '13': 'pt-BR',
	}
	const bySpecies = new Map()
	for (const [species, language, name] of parseCsv(fs.readFileSync(speciesNamesPath, 'utf8')).slice(1)) {
		const locale = languageById[language]
		if (!locale || !name) continue
		const entry = bySpecies.get(species) ?? {}
		entry[locale] = name
		bySpecies.set(species, entry)
	}
	const result = Object.fromEntries(LOCALES.map(locale => [locale, new Map()]))
	for (const entry of bySpecies.values()) {
		const english = entry['en-US']
		if (!english) continue
		for (const locale of LOCALES) {
			if (entry[locale]) result[locale].set(normalize(english), entry[locale])
		}
	}
	return result
}

const speciesNames = buildSpeciesNames()

function stripEx(name) {
	return name.replace(/\s*-?ex$/iu, '').trim()
}

function addEx(name, lang) {
	if (['fr', 'it', 'de'].includes(lang)) return `${name}-ex`
	if (['zh-tw', 'ja'].includes(lang)) return `${name}ex`
	return `${name} ex`
}

function localizedBase(base, locale) {
	return localizedNames[locale].get(base)
		?? speciesNames[locale].get(base)
		?? (locale === 'pt-BR' && speciesNames['en-US'].has(base) ? base : undefined)
		?? base
}

function constructFormName(english, locale) {
	const lang = LANG_BY_LOCALE[locale]
	const ex = / ex$/iu.test(english)
	let base = english.replace(/ ex$/iu, '')
	if (base.startsWith('Mega ')) {
		base = base.slice(5)
		const translated = stripEx(localizedBase(base, locale))
		const mega = {
			fr: `Méga-${translated}`, es: `Mega-${translated}`, it: `Mega ${translated}`, de: `Mega-${translated}`,
			'pt-br': `Mega ${translated}`, 'zh-tw': `超級${translated}`, ko: `메가${translated}`, ja: `メガ${translated}`,
		}[lang] ?? `Mega ${translated}`
		return ex ? addEx(mega, lang) : mega
	}
	if (base.startsWith('Galarian ')) {
		base = base.slice(9)
		const translated = stripEx(localizedBase(base, locale))
		const galarian = {
			fr: `${translated} de Galar`, es: `${translated} de Galar`, it: `${translated} di Galar`, de: `Galar-${translated}`,
			'pt-br': `${translated} de Galar`, 'zh-tw': `伽勒爾的${translated}`, ko: `가라르 ${translated}`, ja: `ガラル ${translated}`,
		}[lang] ?? `Galarian ${translated}`
		return ex ? addEx(galarian, lang) : galarian
	}
	if (base.startsWith('Alolan ')) {
		base = base.slice(7)
		const translated = stripEx(localizedBase(base, locale))
		const alolan = {
			fr: `${translated} d'Alola`, es: `${translated} de Alola`, it: `${translated} di Alola`, de: `Alola-${translated}`,
			'pt-br': `${translated} de Alola`, 'zh-tw': `阿羅拉的${translated}`, ko: `알로라 ${translated}`, ja: `アローラ ${translated}`,
		}[lang] ?? `Alolan ${translated}`
		return ex ? addEx(alolan, lang) : alolan
	}
	return undefined
}

function resolveLocalizedName(english, locale) {
	if (locale === 'en-US') return { name: english, source: 'canonical-en' }
	const lang = LANG_BY_LOCALE[locale]
	const override = TRAINER_NAMES[english]?.[lang] ?? NAME_OVERRIDES[english]?.[lang]
	if (override) return { name: override, source: 'reviewed-override' }
	const exact = localizedNames[locale].get(normalize(english))
	if (exact) return { name: exact, source: 'historical-card-name' }
	const constructed = constructFormName(english, locale)
	if (constructed) return { name: constructed, source: 'official-base-plus-form-rule' }
	if (/ ex$/iu.test(english)) {
		const base = normalize(english.replace(/ ex$/iu, ''))
		const translated = localizedNames[locale].get(base)
			?? speciesNames[locale].get(base)
			?? (locale === 'pt-BR' && speciesNames['en-US'].has(base) ? base : undefined)
		if (translated) return { name: addEx(stripEx(translated), lang), source: 'official-base-plus-ex-rule' }
	}
	const species = speciesNames[locale].get(normalize(english))
	if (species) return { name: species, source: 'pokeapi-species-name' }
	if (locale === 'pt-BR' && speciesNames['en-US'].has(normalize(english))) {
		return { name: english, source: 'pokeapi-international-species-name' }
	}
	return { name: english, source: 'unresolved-english-fallback' }
}

function localizedName(english, locale) {
	return resolveLocalizedName(english, locale).name
}

function structuralCard(card, number, locale) {
	const trainer = card.category === 'Trainer'
	const result = {
		set: 'B4',
		number,
		name: localizedName(card.name, locale),
		rarity: RARITY[card.rarity],
		image: path.basename(card.sourceImage ?? `${number}.webp`),
		packs: ['Ruler of the Skies'],
		element: trainer ? 'colorless' : card.types?.[0]?.toLowerCase(),
		type: trainer ? 'trainer' : 'pokemon',
		stage: trainer ? undefined : card.stage === 'Basic' ? 'basic' : Number(card.stage?.match(/\d+/u)?.[0]),
		health: trainer ? undefined : card.hp,
		retreatCost: trainer ? undefined : card.retreat,
		weakness: trainer ? undefined : card.weaknesses?.[0]?.type ?? null,
		evolvesFrom: trainer || !card.evolveFrom ? null : localizedName(card.evolveFrom, locale),
	}
	if (!result.rarity) throw new Error(`${card.id}: unsupported rarity ${card.rarity}`)
	return Object.fromEntries(Object.entries(result).filter(([, value]) => value !== undefined))
}

fs.cpSync(path.join(path.resolve(templateRoot), 'metadata'), path.join(path.resolve(outputRoot), 'metadata'), {
	recursive: true,
})

const unresolved = []
for (const locale of LOCALES) {
	const b4Cards = canonical.cards.map((card, index) => {
		const source = structuralCard(card, index + 1, locale)
		const resolution = resolveLocalizedName(card.name, locale)
		if (locale !== 'en-US' && resolution.source === 'unresolved-english-fallback') {
			unresolved.push({ locale, id: card.id, name: card.name, source: resolution.source })
		}
		return source
	})
	const cardsFile = templateFile(outputRoot, 'cards', locale, 'cards.extra.json')
	fs.writeFileSync(cardsFile, `${JSON.stringify([...sourceByLocale[locale], ...b4Cards], null, 2)}\n`)

	const sourceSets = loadJson(templateFile(templateRoot, 'sets', locale, 'sets.json'))
	const lang = LANG_BY_LOCALE[locale]
	const b4Set = {
		code: 'B4', releaseDate: '2026-07-30', count: 233,
		name: { en: SET_NAMES[lang] },
		packs: [{ name: SET_NAMES[lang], skuId: 'B4_1' }],
	}
	sourceSets.B = [...sourceSets.B.filter(set => set.code !== 'B4'), b4Set]
	const setsFile = templateFile(outputRoot, 'sets', locale, 'sets.json')
	fs.writeFileSync(setsFile, `${JSON.stringify(sourceSets, null, 2)}\n`)
}

const report = {
	set: 'B4', cards: canonical.cards.length, locales: LOCALES.length,
	unresolvedLocalizedNames: unresolved,
}
const reportPath = path.join(path.resolve(outputRoot), 'B4.localization-report.json')
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
console.log(JSON.stringify({ ...report, reportPath }, null, 2))
