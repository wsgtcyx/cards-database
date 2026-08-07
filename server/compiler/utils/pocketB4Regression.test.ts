// @ts-expect-error Bun provides this test module at runtime without a root-level type package.
import { describe, expect, test } from 'bun:test'
import type { SupportedLanguages } from '../../../interfaces'
import firstCard from '../../../data/Pokémon TCG Pocket/Ruler of the Skies/001'
import ancientTechnicalMachine from '../../../data/Pokémon TCG Pocket/Ruler of the Skies/146'
import psychicTechnicalMachine from '../../../data/Pokémon TCG Pocket/Ruler of the Skies/150'
import alolanVulpix from '../../../data/Pokémon TCG Pocket/Ruler of the Skies/204'
import alolanNinetalesEx from '../../../data/Pokémon TCG Pocket/Ruler of the Skies/225'
import rulerOfTheSkies from '../../../data/Pokémon TCG Pocket/Ruler of the Skies'
import promo79 from '../../../data/Pokémon TCG Pocket/Promos-B/079'
import promo80 from '../../../data/Pokémon TCG Pocket/Promos-B/080'
import promo81 from '../../../data/Pokémon TCG Pocket/Promos-B/081'
import promo82 from '../../../data/Pokémon TCG Pocket/Promos-B/082'
import promo83 from '../../../data/Pokémon TCG Pocket/Promos-B/083'
import promo84 from '../../../data/Pokémon TCG Pocket/Promos-B/084'
import promo85 from '../../../data/Pokémon TCG Pocket/Promos-B/085'
import promo86 from '../../../data/Pokémon TCG Pocket/Promos-B/086'
import promosB from '../../../data/Pokémon TCG Pocket/Promos-B'
import translate from './translationUtil'
import { getDataFolder } from './util'

describe('B4 catalog metadata regressions', () => {
	test('keeps Promo-B 79–86 rarity and Vol. 11 membership aligned', () => {
		expect(promosB.boosters?.vol11?.logo).toBeUndefined()
		expect(promosB.boosters?.vol11?.artwork_front).toBeUndefined()
		expect([promo79, promo80, promo81, promo82, promo83, promo84, promo85, promo86].map((card) => card.rarity)).toEqual([
			'One Star', 'Four Diamond', 'One Diamond', 'One Diamond', 'Three Diamond', 'One Diamond', 'Three Diamond', 'Three Diamond',
		])
		expect([promo79, promo80, promo81, promo82, promo83, promo84, promo85, promo86].map((card) => card.boosters ?? [])).toEqual([
			[], ['vol11'], ['vol11'], ['vol11'], ['vol11'], ['vol11'], [], [],
		])
	})

	test('declares one set-level booster without repeating it on cards', () => {
		expect(Object.keys(rulerOfTheSkies.boosters ?? {})).toEqual(['ruler-of-the-skies'])
		expect(firstCard.boosters).toBeUndefined()
		const booster = rulerOfTheSkies.boosters?.['ruler-of-the-skies']
		expect(booster?.logo?.en).toBe('https://game.pokemontcgpocket.app/en/tcgp/B4/boosters/ruler-of-the-skies/logo.webp')
		expect(booster?.artwork_front?.en).toBe('https://game.pokemontcgpocket.app/en/tcgp/B4/boosters/ruler-of-the-skies/artwork_front.webp')
	})

	test('uses the canonical Pocket data tree for every supported locale', () => {
		for (const lang of ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw', 'ko', 'ja', 'id', 'th', 'zh-cn'] as SupportedLanguages[]) {
			expect(getDataFolder(lang)).toBe('data')
		}
	})

	test('keeps sentence boundaries in imported Trainer effects', () => {
		expect(ancientTechnicalMachine.effect?.en).not.toMatch(/\.(?=[A-Z])/u)
		expect(psychicTechnicalMachine.effect?.en).not.toMatch(/\.(?=[A-Z])/u)
	})

	test.each([
		['de', 'Ein Diamant'],
		['es', 'Un Diamante'],
		['fr', 'Un Diamant'],
		['it', 'Un Diamante'],
		['pt-br', 'Um Diamante'],
	] as Array<[SupportedLanguages, string]>)('localizes One Diamond in %s', (lang, expected) => {
		expect(translate('rarity', 'One Diamond', lang)).toBe(expected)
	})

	test('does not duplicate Alolan form markers in localized names', () => {
		expect(alolanVulpix.name).toEqual({
			en: 'Alolan Vulpix',
			fr: "Goupix d'Alola",
			es: 'Vulpix de Alola',
			it: 'Vulpix di Alola',
			de: 'Alola-Vulpix',
			'pt-br': 'Vulpix de Alola',
			'zh-tw': '阿羅拉的六尾',
			ko: '알로라 식스테일',
			ja: 'アローラ ロコン',
		})
		expect(alolanNinetalesEx.name).toEqual({
			en: 'Alolan Ninetales ex',
			fr: "Feunard d'Alola-ex",
			es: 'Ninetales de Alola ex',
			it: 'Ninetales di Alola-ex',
			de: 'Alola-Vulnona-ex',
			'pt-br': 'Ninetales de Alola ex',
			'zh-tw': '阿羅拉的九尾ex',
			ko: '알로라 나인테일 ex',
			ja: 'アローラ キュウコンex',
		})
		expect(alolanNinetalesEx.evolveFrom?.ja).toBe('アローラ ロコン')
	})
})
