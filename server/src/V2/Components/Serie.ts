import type { Serie as SDKSerie, SerieResume } from '@tcgdex/sdk'
import type { PocketLanguage } from '../../util'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'

import de from '../../../generated/de/series.json'
import en from '../../../generated/en/series.json'
import es from '../../../generated/es/series.json'
import fr from '../../../generated/fr/series.json'
import it from '../../../generated/it/series.json'
import ja from '../../../generated/ja/series.json'
import ko from '../../../generated/ko/series.json'
import ptbr from '../../../generated/pt-br/series.json'
import zhtw from '../../../generated/zh-tw/series.json'

const series = {
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

type MappedSerie = any // (typeof en)[number]

export async function getAllSeries(lang: PocketLanguage): Promise<Array<SDKSerie>> {
	return Promise.all((series[lang] as Array<MappedSerie>).map(transformSerie))
}

async function transformSerie(serie: MappedSerie): Promise<SDKSerie> {
	return serie
}

export async function findSeries(lang: PocketLanguage, query: Query<SDKSerie>) {
	return executeQuery(await getAllSeries(lang), query).data
}

export async function findOneSerie(lang: PocketLanguage, query: Query<SDKSerie>) {
	const res = await findSeries(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function serieToBrief(set: SDKSerie): SerieResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo
	}
}
