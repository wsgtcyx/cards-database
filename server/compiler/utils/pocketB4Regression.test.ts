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
import promo95 from '../../../data/Pokémon TCG Pocket/Promos-B/095'
import promo96 from '../../../data/Pokémon TCG Pocket/Promos-B/096'
import promo97 from '../../../data/Pokémon TCG Pocket/Promos-B/097'
import promo98 from '../../../data/Pokémon TCG Pocket/Promos-B/098'
import promo99 from '../../../data/Pokémon TCG Pocket/Promos-B/099'
import promo100 from '../../../data/Pokémon TCG Pocket/Promos-B/100'
import promosB from '../../../data/Pokémon TCG Pocket/Promos-B'
import teamRocketsAmbition from '../../../data/Pokémon TCG Pocket/Team Rocket\'s Ambition'
import deluxePackMega from '../../../data/Pokémon TCG Pocket/Deluxe Pack: Mega'
import dualFusion from '../../../data/Pokémon TCG Pocket/Dual Fusion'
import firstPartners from '../../../data/Pokémon TCG Pocket/Special Pack: First Partners'
import TCGdex from '@tcgdex/sdk'
import translate from './translationUtil'
import { getDataFolder, resolveOptionalAsset, resolveText } from './util'
import { getCardPictures, getCards } from './cardUtil'
import { getSetPictures, isSetAvailable } from './setUtil'

describe('B4 catalog metadata regressions', () => {
 test('locale-only optional assets preserve other locales and reject English fallback', () => {
  expect(resolveOptionalAsset({ ko: 'https://game.pokemontcgpocket.app/ko/tcgp/A1/logo.webp' }, 'ja')).toBeUndefined()
  expect(resolveOptionalAsset({ ko: 'https://game.pokemontcgpocket.app/ko/tcgp/A1/logo.webp' }, 'ko')).toContain('/ko/')
  expect(() => resolveOptionalAsset({ en: 'https://example.test/en/logo.webp' }, 'ko')).toThrow('Missing Korean')
 })
 test('Korean compilation rejects missing text, unresolved templates and English images', async () => {
  expect(() => resolveText({ en: 'English' }, 'ko')).toThrow('Missing Korean')
  expect(() => resolveText({ en: 'English', ko: 'English' }, 'ko')).toThrow('not native Korean')
  expect(() => resolveText({ en: 'English', ko: '카드 [Gr:Patchim v="이/가"]' }, 'ko')).toThrow('Unresolved Korean')
  expect(resolveText({ en: 'Bulbasaur', ko: '이상해씨' }, 'ko')).toBe('이상해씨')
  expect(() => isSetAvailable({ ...rulerOfTheSkies, name: { en: 'English' } }, 'ko')).toThrow('Korean')
  await expect(getCardPictures('001', { ...firstCard, image: { en: 'https://example.com/en/001' } }, 'ko')).rejects.toThrow('native Korean image')
  await expect(getSetPictures({ ...rulerOfTheSkies, logo: { en: 'https://example.com/en/logo' } }, 'ko')).rejects.toThrow('Missing Korean')
 })

	test('uses native Japanese Pocket metadata and rejects missing translations', async () => {
		expect(translate('types', 'Grass', 'ja')).toBe('草')
		expect(translate('stage', 'Basic', 'ja')).toBe('たね')
		expect(translate('trainerType', 'Tool', 'ja')).toBe('ポケモンのどうぐ')
		expect(translate('abilityType', 'Ability', 'ja')).toBe('特性')
		expect(translate('rarity', 'One Diamond', 'ja')).toBe('♦1')
		expect(translate('suffix', 'EX', 'ja')).toBe('ex')
		expect(() => translate('types', 'Unreviewed type', 'ja')).toThrow('Could not find translation')
		expect(() => resolveText({ en: 'English fallback' }, 'ja')).toThrow('Missing Japanese')
		expect(() => resolveText({ en: 'English fallback', ja: ' ' }, 'ja')).toThrow('Missing Japanese')
		expect(() => resolveText({ en: 'English fallback', ja: 'English fallback' }, 'ja')).toThrow('not native Japanese')
		expect(() => resolveText({ en: 'Promo pack', ja: 'パック [Mst:SeriesName v="SERIES_NAME_2"]' }, 'ja')).toThrow('Unresolved Japanese')
		for (const value of ['カード[Gr:Count ref="0"]', 'カード [/Text:Foo]']) expect(() => resolveText({ en: 'English fallback', ja: value }, 'ja')).toThrow('Unresolved Japanese')
		expect(() => resolveText({ en: 'Draw a card.', ja: '自分の山札を枚引く。' }, 'ja')).toThrow('numeric count')
		expect(() => resolveText({ en: 'Pokémon TCG Pocket', ja: 'Pokémon Trading Card Game Pocket' }, 'ja')).toThrow('not native Japanese')
		expect(resolveText({ en: 'English fallback', ja: '原文' }, 'ja')).toBe('原文')
		for (const name of ['CHECK', 'GUARD', 'POWER']) expect(resolveText({ en: name, ja: name }, 'ja')).toBe(name)
		expect(() => isSetAvailable({ ...teamRocketsAmbition, name: { en: 'English fallback' } }, 'ja')).toThrow('Japanese')
		await expect(getCardPictures('001', { ...firstCard, image: { en: 'https://example.com/en/001' } }, 'ja')).rejects.toThrow('native Japanese image')
		await expect(getSetPictures({ ...teamRocketsAmbition, logo: { en: 'https://example.com/en/logo' } }, 'ja')).rejects.toThrow('Missing Japanese')
		expect(await getCardPictures('001', firstCard, 'ja')).toBe(firstCard.image!.ja!)
	})
	test('Japanese compilation rejects a missing card instead of silently filtering it out', async () => {
		const name = firstCard.name.ja
		try {
			delete firstCard.name.ja
			await expect(getCards('ja', rulerOfTheSkies)).rejects.toThrow('has no Japanese name')
		} finally {
			firstCard.name.ja = name
		}
	})
	test('keeps Promo-B 095–100 localized and limits Vol. 13 to its five rewards', () => {
		const cards = [promo95, promo96, promo97, promo98, promo99, promo100]
		expect(cards.map(card => card.name.en)).toEqual(['Darkrai', 'Falinks', 'Gible', 'Gabite', 'Mega Garchomp ex', 'Delcatty'])
		expect(cards.map(card => card.rarity)).toEqual(['One Star', 'Two Diamond', 'One Diamond', 'Two Diamond', 'Four Diamond', 'Two Diamond'])
		expect(cards.map(card => card.boosters)).toEqual([[], ['vol13'], ['vol13'], ['vol13'], ['vol13'], ['vol13']])
		for (const lang of ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw'] as const) {
			for (const [index, card] of cards.entries()) {
				expect(card.name[lang]).toBeTruthy()
				expect(card.image?.[lang]).toBe(`https://game.pokemontcgpocket.app/${lang}/tcgp/P-B/${String(95 + index).padStart(3, '0')}`)
				for (const attack of card.attacks ?? []) {
					expect(attack.name[lang]).toBeTruthy()
					if (attack.effect) expect(attack.effect[lang]).toBeTruthy()
				}
			}
		}
		expect(promo99.attacks?.[0]).toMatchObject({ cost: ['Water', 'Fighting', 'Colorless'], damage: 190 })
		expect(promo99.attacks?.[0].effect?.en).toBe('Discard 2 random Energy from this Pokémon.')
		expect(promo99.suffix).toBe('EX')
		expect(promo99.evolveFrom?.en).toBe('Gabite')
		expect(promo95.illustrator).toBe('YASHIRO Nanaco')
		expect(promosB.boosters?.vol13?.artwork_front?.en).toContain('/boosters/vol13/artwork_front.webp')
	})
	test('keeps set and series logos as image bases compatible with the SDK', async () => {
		const originalFetch = TCGdex.fetch
		try {
			for (const set of [teamRocketsAmbition, deluxePackMega, dualFusion, firstPartners]) {
				for (const lang of ['en', 'fr', 'es', 'it', 'de', 'pt-br', 'zh-tw', 'ja', 'ko'] as const) {
					const [logo] = await getSetPictures(set, lang)
					const booster = Object.values(set.boosters!)[0]
					const expectedImage = lang === 'ko' ? `https://game.pokemontcgpocket.app/ko/tcgp/${set.id}/logo.webp` : booster.logo?.[lang] ?? booster.logo?.en
					expect(logo).toBeDefined()
					expect(logo).not.toMatch(/\.(?:png|jpe?g|webp)$/u)
					TCGdex.fetch = async () => new Response(JSON.stringify({ id: 'tcgp', name: 'Pocket', logo, sets: [] }))
					const serie = await new TCGdex().serie.get('tcgp')
					if (!serie) throw new Error('SDK did not deserialize the series fixture')
					expect(serie.getImageURL('webp')).toBe(expectedImage)
				}
			}
		} finally {
			TCGdex.fetch = originalFetch
		}
	})
	test('keeps Promo-B 79–86 rarity and Vol. 11 membership aligned', () => {
		expect(promosB.boosters?.vol11?.logo?.en).toBeUndefined()
		expect(promosB.boosters?.vol11?.logo?.ko).toBe('https://game.pokemontcgpocket.app/ko/tcgp/P-B/boosters/vol11/logo.webp')
		expect(promosB.boosters?.vol11?.artwork_front?.en).toBeUndefined()
		expect(promosB.boosters?.vol11?.artwork_front?.ko).toBe('https://game.pokemontcgpocket.app/ko/tcgp/P-B/boosters/vol11/artwork_front.webp')
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

	test('uses official Korean rarity labels and native Promo-B particles', async () => {
		expect(translate('rarity', 'Crown', 'ko')).toBe('왕관')
		expect(translate('rarity', 'One Shiny', 'ko')).toBe('색이 다른1')
		expect(translate('rarity', 'Two Shiny', 'ko')).toBe('색이 다른2')
		expect(promo86.abilities?.[0].effect?.ko).toBe('자신의 필드에 다른 「메탕」이 있다면 이 포켓몬의 후퇴에 필요한 에너지를 2개 적게 만든다.')
		expect(promo86.abilities?.[0].effect?.en).toContain('1 less')
	})

	test('uses the native Spanish label for Fire types and energy costs', () => {
		expect(translate('types', 'Fire', 'es')).toBe('Fuego')
	})

	test('does not duplicate Alolan form markers in localized names', () => {
		expect(alolanVulpix.name).toEqual({
			en: 'Alolan Vulpix',
			fr: "Goupix d'Alola",
			es: 'Vulpix de Alola',
			it: 'Vulpix di Alola',
			de: 'Alola-Vulpix',
			'pt-br': 'Vulpix de Alola',
			'zh-tw': '阿羅拉六尾',
			ko: '알로라 식스테일',
			ja: 'アローラロコン',
		})
		expect(alolanNinetalesEx.name).toEqual({
			en: 'Alolan Ninetales ex',
			fr: "Feunard d'Alola-ex",
			es: 'Ninetales de Alola ex',
			it: 'Ninetales di Alola-ex',
			de: 'Alola-Vulnona-ex',
			'pt-br': 'Ninetales de Alola ex',
			'zh-tw': '阿羅拉九尾ex',
			ko: '알로라 나인테일 ex',
			ja: 'アローラキュウコンex',
		})
		expect(alolanNinetalesEx.evolveFrom?.ja).toBe('アローラロコン')
	})
})
