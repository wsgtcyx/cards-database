import { describe, expect, test } from 'bun:test'
import { CatalogSearchValidationError, getCardRelations, normalizeCanonicalName, searchCatalogCards } from './CardSearch'

describe('card relations', () => {
	test('normalizes canonical names and returns localized stable relations', () => {
		expect(normalizeCanonicalName('  Volt\u200B  Charge ')).toBe('volt charge')
		const english = getCardRelations('en', 'A1-098')!
		const french = getCardRelations('fr', 'A1-098')!
		expect(english.sameName?.items.every(card => card.id !== 'A1-098')).toBe(true)
		expect(english.evolvesFrom?.canonicalName).toBe('Magnemite')
		expect(english.abilities[0]?.canonicalName).toBe('Volt Charge')
		expect(french.abilities[0]?.name).toBe('Charge Volt')
		expect(french.abilities[0]?.items.map(card => card.id)).toEqual(english.abilities[0]?.items.map(card => card.id))
		expect(english.attacks[0]?.items.length).toBeLessThanOrEqual(6)
		expect(english.attacks[0]?.total).toBeGreaterThanOrEqual(english.attacks[0]?.items.length ?? 0)

		const fossil = getCardRelations('zh-tw', 'A1a-046')!
		expect(fossil.evolvesFrom?.canonicalName).toBe('Old Amber')
		expect(fossil.evolvesFrom?.name).toBe('秘密琥珀')
		expect(fossil.evolvesFrom?.items.every(card => card.category === 'Trainer')).toBe(true)

		const commonAttack = getCardRelations('en', 'A1-208')!.attacks.find(group => group.canonicalName === 'Tackle')!
		expect(commonAttack.total).toBeGreaterThan(6)
		expect(new Set(commonAttack.items.map(card => card.name)).size).toBe(6)
		expect(getCardRelations('en', 'A1-036')!.attacks.length).toBe(2)

		const veevee = getCardRelations('en', 'P-A-109')!.abilities.find(group => group.canonicalName === "Veevee 'volve")!
		expect(veevee.total).toBe(5)
		expect(veevee.items.every(card => card.id !== 'P-A-109')).toBe(true)
	})

	test('exact catalog filters compose with existing filters', () => {
		const result = searchCatalogCards('en', { name: 'magneton', ability: 'volt charge', type: 'Lightning', pageSize: '100' })
		const french = searchCatalogCards('fr', { name: 'Magneton', ability: 'Volt Charge', type: 'Lightning', pageSize: '100' })
		const chinese = searchCatalogCards('zh-tw', { name: 'Magneton', ability: 'Volt Charge', type: 'Lightning', pageSize: '100' })
		expect(result.items.length).toBeGreaterThan(0)
		expect(result.items.every(card => card.name === 'Magneton')).toBe(true)
		expect(french.items.map(card => card.id)).toEqual(result.items.map(card => card.id))
		expect(chinese.items.map(card => card.id)).toEqual(result.items.map(card => card.id))
		expect(result.appliedExactFilters.ability?.label).toBe('Volt Charge')
		expect(french.appliedExactFilters.ability?.label).toBe('Charge Volt')
		expect(chinese.appliedExactFilters.ability?.label).not.toBe('Volt Charge')
		expect(result.appliedExactFilters.name?.value).toBe('Magneton')
		expect(() => searchCatalogCards('en', { attack: '' })).toThrow(CatalogSearchValidationError)
		expect(() => searchCatalogCards('en', { ability: 'Not a real ability' })).toThrow(CatalogSearchValidationError)
	})
})
