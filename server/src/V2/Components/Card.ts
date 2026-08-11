import { objectOmit } from '@dzeio/object-util'
import type { CardResume, Card as SDKCard } from '@tcgdex/sdk'
import type { PocketLanguage } from '../../util'
import de from '../../../generated/de/cards.json'
import en from '../../../generated/en/cards.json'
import es from '../../../generated/es/cards.json'
import fr from '../../../generated/fr/cards.json'
import it from '../../../generated/it/cards.json'
import ja from '../../../generated/ja/cards.json'
import ko from '../../../generated/ko/cards.json'
import ptbr from '../../../generated/pt-br/cards.json'
import zhtw from '../../../generated/zh-tw/cards.json'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'

// any is CompiledCard that is currently not mapped correctly
const list: Record<string, any> = {}

function indexCards(items: readonly unknown[], lang: string): void {
	for (const item of items) {
		if (!item || typeof item !== 'object' || !('id' in item) || typeof item.id !== 'string') {
			throw new TypeError(`Compiled ${lang} card is missing a string id`)
		}
		list[`${item.id.toLowerCase()}${lang}`] = item
	}
}

indexCards(en, 'en')
indexCards(fr, 'fr')
indexCards(es, 'es')
indexCards(it, 'it')
indexCards(ptbr, 'pt-br')
indexCards(de, 'de')
indexCards(ja, 'ja')
indexCards(ko, 'ko')
indexCards(zhtw, 'zh-tw')

const cards = {
	en: en,
	fr: fr,
	es: es,
	it: it,
	'pt-br': ptbr,
	de: de,
	ja: ja,
	ko: ko,
	'zh-tw': zhtw,
} as const

type MappedCard = SDKCard // (typeof en)[number]

export type Card = SDKCard

/**
 * Returns the compiled database records used by catalog search.
 */
export function getCompiledCards(lang: PocketLanguage): Array<any> {
	return cards[lang] as Array<any>
}

export async function getAllCards(lang: PocketLanguage): Promise<Array<SDKCard>> {
	return Promise.all((cards[lang] as Array<MappedCard>).map((it) => loadCard(lang, it.id))) as Promise<Array<SDKCard>>
}

export function getCompiledCard(lang: PocketLanguage, id: string): any {
	const key = `${id}${lang}`.toLowerCase() as `${any}${string}`
	return list[key]
}

/**
 * Function that do the hard work of loading the card with the external processors
 *
 * It should run once until it's timeout runout :D
 * @param lang
 * @param id
 */
async function loadCard(lang: PocketLanguage, id: string): Promise<SDKCard | null> {
	const key = `${id}${lang}`.toLowerCase()
	// console.time(`loading card ${id}${lang}`)

	// console.time('fetching DB')
	const card = list[key]
	if (!card) {
		return null
	}
	// console.timeEnd('fetching DB')

	// console.time('loading providers')
	const res = objectOmit(card, 'thirdParty') as SDKCard
	// console.timeEnd('remapping card')

	// console.timeEnd(`loading card ${id}${lang}`)
	return res
}

export async function getCardById(lang: PocketLanguage, id: string) {
	return loadCard(lang, id)
}

export async function findCards(lang: PocketLanguage, query: Query<SDKCard>) {
	return executeQuery(await getAllCards(lang), query).data
}

export async function findOneCard(lang: PocketLanguage, query: Query<SDKCard>) {
	const res = await findCards(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function toBrief(card: SDKCard): CardResume {
	return {
		id: card.id,
		localId: card.localId,
		name: card.name,
		image: card.image
	}
}
