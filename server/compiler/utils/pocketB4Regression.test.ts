// @ts-expect-error Bun provides this test module at runtime without a root-level type package.
import { describe, expect, test } from 'bun:test'
import type { SupportedLanguages } from '../../../interfaces'
import firstCard from '../../../data/Pokémon TCG Pocket/Ruler of the Skies/001'
import rulerOfTheSkies from '../../../data/Pokémon TCG Pocket/Ruler of the Skies'
import translate from './translationUtil'

describe('B4 catalog metadata regressions', () => {
	test('declares one set-level booster without repeating it on cards', () => {
		expect(Object.keys(rulerOfTheSkies.boosters ?? {})).toEqual(['ruler-of-the-skies'])
		expect(firstCard.boosters).toBeUndefined()
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
})
