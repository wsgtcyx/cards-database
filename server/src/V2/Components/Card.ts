import Cache from '@cachex/memory'
import { objectOmit } from '@dzeio/object-util'
import type { CardResume, Card as SDKCard } from '@tcgdex/sdk'
import { SupportedLanguages } from '@tcgdex/sdk'
import de from '../../../generated/de/cards.json'
import en from '../../../generated/en/cards.json'
import esmx from '../../../generated/es-mx/cards.json'
import es from '../../../generated/es/cards.json'
import fr from '../../../generated/fr/cards.json'
import id from '../../../generated/id/cards.json'
import it from '../../../generated/it/cards.json'
import ja from '../../../generated/ja/cards.json'
import ko from '../../../generated/ko/cards.json'
import nl from '../../../generated/nl/cards.json'
import pl from '../../../generated/pl/cards.json'
import ptbr from '../../../generated/pt-br/cards.json'
import ptpt from '../../../generated/pt-pt/cards.json'
import pt from '../../../generated/pt/cards.json'
import ru from '../../../generated/ru/cards.json'
import th from '../../../generated/th/cards.json'
import zhcn from '../../../generated/zh-cn/cards.json'
import zhtw from '../../../generated/zh-tw/cards.json'
import { getCardMarketPrice } from '../../libs/providers/cardmarket'
import { getTCGPlayerPrice } from '../../libs/providers/tcgplayer'
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
indexCards(esmx, 'es-mx')
indexCards(it, 'it')
indexCards(pt, 'pt')
indexCards(ptbr, 'pt-br')
indexCards(ptpt, 'pt-pt')
indexCards(de, 'de')
indexCards(nl, 'nl')
indexCards(pl, 'pl')
indexCards(ru, 'ru')
indexCards(ja, 'ja')
indexCards(ko, 'ko')
indexCards(zhtw, 'zh-tw')
indexCards(id, 'id')
indexCards(th, 'th')
indexCards(zhcn, 'zh-cn')

const cards = {
	en: en,
	fr: fr,
	es: es,
	'es-mx': esmx,
	it: it,
	pt: pt,
	'pt-br': ptbr,
	'pt-pt': ptpt,
	de: de,
	nl: nl,
	pl: pl,
	ru: ru,
	ja: ja,
	ko: ko,
	'zh-tw': zhtw,
	id: id,
	th: th,
	'zh-cn': zhcn,
} as const

const cache = new Cache()

type MappedCard = SDKCard // (typeof en)[number]

export type Card = SDKCard

/**
 * Returns the compiled database records without loading third-party pricing.
 * Catalog search only needs the static card data and must stay deterministic.
 */
export function getCompiledCards(lang: SupportedLanguages): Array<any> {
	return cards[lang] as Array<any>
}

export async function getAllCards(lang: SupportedLanguages): Promise<Array<SDKCard>> {
	return Promise.all((cards[lang] as Array<MappedCard>).map((it) => loadCard(lang, it.id))) as Promise<Array<SDKCard>>
}

export function getCompiledCard(lang: SupportedLanguages, id: string): any {
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
async function loadCard(lang: SupportedLanguages, id: string): Promise<SDKCard | null> {
	const key = `${id}${lang}`.toLowerCase()
	const value = cache.get<SDKCard>(key)

	// expect the cache to be present
	if (value) {
		return value
	}
	// console.time(`loading card ${id}${lang}`)

	// console.time('fetching DB')
	const card = list[key]
	if (!card) {
		return null
	}
	// console.timeEnd('fetching DB')

	// console.time('loading providers')
	const [cardmarket, tcgplayer] = await Promise.all([
		getCardMarketPrice(card),
		getTCGPlayerPrice(card),
	])
	// console.timeEnd('loading providers')
	// console.time('remapping card')
	const res = {
		...objectOmit(card, 'thirdParty'),
		pricing: {
			cardmarket: cardmarket,
			tcgplayer: tcgplayer
		}
	} as SDKCard
	// console.timeEnd('remapping card')

	cache.set(key, res, 60 * 60)
	// console.timeEnd(`loading card ${id}${lang}`)
	return res
}

export async function getCardById(lang: SupportedLanguages, id: string) {
	return loadCard(lang, id)
}

export async function findCards(lang: SupportedLanguages, query: Query<SDKCard>) {
	return executeQuery(await getAllCards(lang), query).data
}

export async function findOneCard(lang: SupportedLanguages, query: Query<SDKCard>) {
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
