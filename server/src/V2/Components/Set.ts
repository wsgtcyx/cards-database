import type { Set as SDKSet, SetResume } from '@tcgdex/sdk'
import type { PocketLanguage } from '../../util'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectOmit } from '@dzeio/object-util'

import de from '../../../generated/de/sets.json'
import en from '../../../generated/en/sets.json'
import es from '../../../generated/es/sets.json'
import fr from '../../../generated/fr/sets.json'
import it from '../../../generated/it/sets.json'
import ja from '../../../generated/ja/sets.json'
import ko from '../../../generated/ko/sets.json'
import ptbr from '../../../generated/pt-br/sets.json'
import zhtw from '../../../generated/zh-tw/sets.json'

export const sets = {
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

type MappedSet = any // (typeof en)[number]

export function getCompiledSets(lang: PocketLanguage): Array<MappedSet> {
	return sets[lang] as Array<MappedSet>
}

export async function getAllSets(lang: PocketLanguage): Promise<Array<SDKSet>> {
	return Promise.all((sets[lang] as Array<MappedSet>).map(transformSet))
}

async function transformSet(set: MappedSet): Promise<SDKSet> {
	return objectOmit(set, 'thirdParty') as SDKSet
}

export async function findSets(lang: PocketLanguage, query: Query<SDKSet>) {
	return executeQuery(await getAllSets(lang), query).data
}

export async function findOneSet(lang: PocketLanguage, query: Query<SDKSet>) {
	const res = await findSets(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function setToBrief(set: SDKSet): SetResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo,
		symbol: set.symbol,
		cardCount: {
			total: set.cardCount.total,
			official: set.cardCount.official
		}
	}
}
