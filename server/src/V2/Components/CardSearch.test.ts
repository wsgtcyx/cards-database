import { describe, expect, test } from 'bun:test'
import { CatalogSearchValidationError, getCardRelations, getCatalogSearchOptions, normalizeCanonicalName, searchCatalogCards } from './CardSearch'
import { Errors, sendError } from '../../libs/Errors'
import express from 'express'
import jsonEndpoints from '../endpoints/jsonEndpoints'

describe('card relations', () => {
	test('rejects non-string search inputs without losing localized validation messages', () => {
		const fields = ['q', 'name', 'ability', 'attack', 'set', 'booster', 'category', 'type', 'rarity', 'stage', 'trainerType', 'suffix', 'retreat', 'weakness', 'attackCostType', 'hasAbility', 'hpMin', 'hpMax', 'damageMin', 'damageMax', 'illustrator', 'page', 'pageSize']
		for (const field of fields) {
			for (const value of [{ x: 'Grass' }, [{ x: 'Grass' }], ['Grass', { x: 'Fire' }], null, 1, true]) {
				try {
					searchCatalogCards('ja', { [field]: value })
					throw new Error('Expected an invalid query to fail')
				} catch (error) {
					expect(error).toBeInstanceOf(CatalogSearchValidationError)
					expect((error as CatalogSearchValidationError).japaneseDetails).toEqual([`${field} は文字列または文字列の配列で指定してください。`])
				}
			}
		}
		expect(searchCatalogCards('ja', { type: ['Grass', 'Fire'], pageSize: '1' })).toEqual(searchCatalogCards('ja', { type: 'Grass,Fire', pageSize: '1' }))
		expect(searchCatalogCards('ja', { q: ['ピカチュウ', 'フシギダネ'], page: ['1', '2'], pageSize: '1' })).toEqual(searchCatalogCards('ja', { q: 'ピカチュウ', page: '1', pageSize: '1' }))
	})
	test('nested HTTP search parameters return localized 400 responses', async () => {
		const app = express()
		app.use('/v2', jsonEndpoints)
		const server = app.listen(0, '127.0.0.1')
		try {
			await new Promise<void>(resolve => server.once('listening', resolve))
			const address = server.address()
			if (!address || typeof address === 'string') throw new Error('Missing test server port')
			for (const lang of ['ja', 'ko', 'en']) {
				for (const query of ['type[0][x]=Grass', 'q[x]=Pikachu', 'page[0][x]=1', 'hpMin[x]=1', 'hasAbility[x]=true']) {
					const response = await fetch(`http://127.0.0.1:${address.port}/v2/${lang}/cards/search?${query}`)
					const body = await response.json() as { detail: string }
					expect(response.status).toBe(400)
					expect(body.detail).toContain(lang === 'ko' ? '문자열 또는 문자열 배열' : lang === 'ja' ? '文字列または文字列の配列' : 'must be a string or an array of strings')
				}
			}
		} finally {
			await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()))
		}
	})
	test('Japanese API errors use Japanese text while English responses stay unchanged', () => {
		for (const [path, expected] of [
			['/v2/ja/cards/missing', '指定されたデータが見つかりません'],
			['/v2/ko/cards/missing', '요청한 데이터를 찾을 수 없습니다'],
			['/V2/%6Bo/cards/missing', '요청한 데이터를 찾을 수 없습니다'],
			['/v2/%6Aa/cards/missing', '指定されたデータが見つかりません'],
			['/V2/ja/cards/missing', '指定されたデータが見つかりません'],
			['/v2/ja/unknown?name=foo', '指定されたデータが見つかりません'],
			['/v2/en/cards/missing', 'The resource you are trying to reach does not exists'],
		]) {
			let body: any
			let status: number | undefined
			const response = {
				req: { originalUrl: path, url: path, method: 'GET' },
				status(value: number) { status = value; return this },
				json(value: unknown) { body = value; return this },
				end() {},
			}
			sendError(Errors.NOT_FOUND, response as any)
			expect(body.title).toBe(expected)
			expect(status).toBe(404)
			expect(body.type).toBe('https://tcgdex.dev/errors/not-found')
		}
	})
	test('Korean 500 errors remain localized, including encoded locale paths', () => {
		for (const path of ['/v2/ko/cards/A1-001', '/V2/%6Bo/cards/A1-001']) {
			let body: any
			let status: number | undefined
			const response = {
				req: { originalUrl: path, url: path, method: 'GET' },
				status(value: number) { status = value; return this },
				json(value: unknown) { body = value; return this },
				end() {},
			}
			sendError(Errors.GENERAL, response as any)
			expect(status).toBe(500)
			expect(body.title).toBe('오류가 발생했습니다. 이 메시지와 함께 개발자에게 문의해 주세요')
		}
	})
	test('Japanese metadata labels stay native while canonical filter values stay stable', () => {
		const ja = getCatalogSearchOptions('ja')
		const en = getCatalogSearchOptions('en')
		for (const field of ['categories', 'types', 'rarities', 'stages', 'trainerTypes', 'weaknesses', 'attackCostTypes'] as const) {
			expect(ja[field].length).toBeGreaterThan(0)
			expect(ja[field].map(item => item.value).sort()).toEqual(en[field].map(item => item.value).sort())
			expect(ja[field].every(item => item.label !== item.value)).toBe(true)
		}
		expect(ja.types.find(item => item.value === 'Grass')?.label).toBe('草')
		expect(ja.stages.find(item => item.value === 'Basic')?.label).toBe('たね')
		const japanese = searchCatalogCards('ja', { type: 'Grass', pageSize: '100' })
		const english = searchCatalogCards('en', { type: 'Grass', pageSize: '100' })
		expect(japanese.items.map(card => card.id)).toEqual(english.items.map(card => card.id))
		expect(japanese.items.every(card => card.category.label === 'ポケモン')).toBe(true)
		expect(getCardRelations('ja', 'A1-003')?.sameName?.items.every(card => card.category === 'ポケモン')).toBe(true)
	})
	test('Japanese validation errors retain native messages for every validation path', () => {
		for (const query of [
			{ unknown: 'x' }, { name: '' }, { q: 'a'.repeat(201) }, { page: '0' }, { hpMin: '-1' }, { hasAbility: 'maybe' },
			{ hpMin: '100', hpMax: '1' }, { name: 'not a card' }, { type: 'not a type' },
			{ type: Array.from({ length: 21 }, (_, index) => `type${index}`) }, { type: 'a'.repeat(81) },
		]) {
			try {
				searchCatalogCards('ja', query)
				throw new Error('Expected an invalid query to fail')
			} catch (error) {
				expect(error).toBeInstanceOf(CatalogSearchValidationError)
				const invalid = error as CatalogSearchValidationError
				expect(invalid.japaneseDetails.length).toBe(invalid.details.length)
				expect(invalid.japaneseDetails.every(message => /[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(message))).toBe(true)
			}
		}
	})
	test('Korean labels, filters, relations and every validation path stay localized', () => {
		const ko = getCatalogSearchOptions('ko'), en = getCatalogSearchOptions('en')
		expect(ko.total).toBe(4561)
		expect(ko.sets).toHaveLength(26)
		expect(ko.boosters).toHaveLength(58)
		expect(ko.boosters.map(item => item.value).sort()).toEqual(en.boosters.map(item => item.value).sort())
		const empty = ko.boosters.find(item => item.count === 0)!
		expect(empty).toBeDefined()
		expect(searchCatalogCards('ko', { booster: empty.value }).pagination.total).toBe(0)
		for (const field of ['categories', 'types', 'rarities', 'stages', 'trainerTypes', 'weaknesses', 'attackCostTypes'] as const) {
			expect(ko[field].map(item => item.value).sort()).toEqual(en[field].map(item => item.value).sort())
			expect(ko[field].every(item => item.label !== item.value)).toBe(true)
		}
		expect(ko.rarities.find(item => item.value === 'Anomaly')?.label).toBe('특수 카드(일반 레어도 분류 외)')
		const korean = searchCatalogCards('ko', { type: 'Grass', pageSize: '100' })
		expect(korean.items.map(card => card.id)).toEqual(searchCatalogCards('en', { type: 'Grass', pageSize: '100' }).items.map(card => card.id))
		expect(korean.items.every(card => card.category.label === '포켓몬' && card.image.includes('/ko/tcgp/'))).toBe(true)
		expect(searchCatalogCards('ko', { q: '피카츄' }).pagination.total).toBeGreaterThan(0)
		expect(getCardRelations('ko', 'A1-003')?.sameName?.items.every(card => card.category === '포켓몬')).toBe(true)
		for (const query of [
			{ unknown: 'x' }, { name: '' }, { q: 'a'.repeat(201) }, { page: '0' }, { hpMin: '-1' }, { hasAbility: 'maybe' },
			{ hpMin: '100', hpMax: '1' }, { name: 'not a card' }, { type: 'not a type' }, { q: { x: 'value' } },
			{ type: Array.from({ length: 21 }, (_, index) => `type${index}`) }, { type: 'a'.repeat(81) },
		]) {
			try {
				searchCatalogCards('ko', query)
				throw new Error('Expected invalid query to fail')
			} catch (error) {
				expect(error).toBeInstanceOf(CatalogSearchValidationError)
				const invalid = error as CatalogSearchValidationError
				expect(invalid.koreanDetails.length).toBe(invalid.details.length)
				expect(invalid.koreanDetails.every(message => /[가-힣]/u.test(message))).toBe(true)
			}
		}
	})
	test('Japanese catalog search folds kana and width while preserving voiced marks', () => {
		const ids = (q: string) => searchCatalogCards('ja', { q, pageSize: '100' }).items.map(card => card.id)
		const garchomp = ids('ガブリアス')
		expect(garchomp.length).toBeGreaterThan(0)
		expect(ids('がぶりあす')).toEqual(garchomp)
		expect(ids('ｶﾞﾌﾞﾘｱｽ')).toEqual(garchomp)
		expect(ids('カフリアス')).toEqual([])
	})
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
