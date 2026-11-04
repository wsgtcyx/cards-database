// @ts-expect-error Bun provides this test module at runtime without a root-level type package.
import { expect, test } from 'bun:test'
import type { Card } from '../../../interfaces'
import { getCardPictures } from './cardUtil'

for (const lang of ['ja', 'ko'] as const) {
	test(`accepts native ${lang} image versions without weakening locale or card identity`, async () => {
		const base = `https://game.pokemontcgpocket.app/${lang}/tcgp/P-C/001`
		const card = (image: string) => ({ set: { id: 'P-C' }, image: { [lang]: image } }) as Card
		for (const url of [base, `${base}/0123456789abcdef`]) {
			expect(await getCardPictures('001', card(url), lang)).toBe(url)
		}
		for (const url of [base.replace(`/${lang}/`, '/en/'), base.replace('/001', '/002'), `${base}/../002`, `${base}/short`, `${base}/0123456789abcdef?x=1`, `${base}/0123456789abcdef/high.webp`]) {
			await expect(getCardPictures('001', card(url), lang)).rejects.toThrow('native')
		}
	})
}
