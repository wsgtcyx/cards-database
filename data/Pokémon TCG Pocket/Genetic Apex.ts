import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A1",

	name: {
		de: "Unschlagbare Gene",
		en: "Genetic Apex",
		es: "Genes Formidables",
		fr: "Puissance Génétique",
		it: "Geni Supremi",
		'pt-br': "Dominação Genética",
		ja: "最強の遺伝子",
		ko: '최강의 유전자',
		'zh-tw': "基因巔峰"
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	boosters: {
		mewtwo: {
			name: {
				de: 'Mewtu',
				en: 'Mewtwo',
				fr: 'Mewtwo',
				es: 'Mewtwo',
				it: 'Mewtwo',
				'pt-br': 'Mewtwo',
				ja: "最強の遺伝子 ミュウツー",
				ko: "최강의 유전자 뮤츠",
				'zh-tw': '超夢'
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/boosters/mewtwo/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/boosters/mewtwo/logo.webp"
			}
		},
		charizard: {
			name: {
				de: 'Glurak',
				en: 'Charizard',
				fr: 'Dracaufeu',
				es: 'Charizard',
				it: 'Charizard',
				'pt-br': 'Charizard',
				ja: "最強の遺伝子 リザードン",
				ko: "최강의 유전자 리자몽",
				'zh-tw': '噴火龍'
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/boosters/charizard/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/boosters/charizard/logo.webp"
			}
		},
		pikachu: {
			name: {
				en: 'Pikachu',
				fr: 'Pikachu',
				es: 'Pikachu',
				it: 'Pikachu',
				de: "Pikachu",
				'pt-br': 'Pikachu',
				ja: "最強の遺伝子 ピカチュウ",
				ko: "최강의 유전자 피카츄",
				'zh-tw': '皮卡丘'
			},
			artwork_front: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/boosters/pikachu/artwork_front.webp"
			},
			logo: {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/boosters/pikachu/logo.webp"
			}
		}
	},

	releaseDate: "2024-10-30",
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/A1/logo"
	}
}

export default set
