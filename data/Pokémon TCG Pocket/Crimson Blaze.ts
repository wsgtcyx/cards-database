import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "B1a",

	name: {
		de: "Feuerrote Flammen",
		en: "Crimson Blaze",
		es: "Fuego Carmesí",
		fr: "Embrasement Écarlate",
		it: "Fiamme Cremisi",
		'pt-br': "Chama Carmesim",
		'zh-tw': "緋紅烈焰",
		ja: "紅蓮ブレイズ",
		ko: '홍련 블레이즈'
	},

	serie: serie,

	cardCount: {
		official: 69 // nice
	},

	releaseDate: "2025-12-17",
	boosters: {
		"crimson-blaze": {
			"name": {
				"en": "Crimson Blaze",
				"fr": "Embrasement Écarlate",
				"es": "Fuego Carmesí",
				"it": "Fiamme Cremisi",
				"de": "Feuerrote Flammen",
				"pt-br": "Chama Carmesim",
				"zh-tw": "紅蓮烈焰",
				"ja": "紅蓮ブレイズ",
				"ko": "홍련 블레이즈"
			},
			"logo": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B1a/boosters/crimson-blaze/logo.webp"
			},
			"artwork_front": {
				"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B1a/boosters/crimson-blaze/artwork_front.webp"
			}
		}
	},
	symbol: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B1a/symbol"
	},
	logo: {
		"ko": "https://game.pokemontcgpocket.app/ko/tcgp/B1a/logo"
	}
}

export default set
