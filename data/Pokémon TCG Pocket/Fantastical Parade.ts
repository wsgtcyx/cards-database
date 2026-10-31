import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B2",

	name: {
		de: "Traumhafte Parade",
		en: "Fantastical Parade",
		es: "Desfile de Ensueño",
		fr: "Parade Onirique",
		it: "Parata Fantasmagorica",
		'pt-br': "Desfile Onírico",
		ja: "夢幻パレード",
		ko: '몽환 퍼레이드',
		'zh-tw': '奇幻遊行'
	},

	serie: serie,

	cardCount: {
		official: 155
	},

	boosters: {
		booster: {
			name: {
				de: "Booster",
				en: 'Booster',
				fr: 'Booster',
				es: 'Booster',
				it: 'Booster',
				'pt-br': 'Booster',
				ja: "夢幻パレード",
				ko: "몽환 퍼레이드",
				'zh-tw': 'Booster'
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2/boosters/booster/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2/boosters/booster/logo.webp"
			}
		}
	},

	releaseDate: "2025-01-29",
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B2/logo"
	}
}

export default set
