import { Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A4",

	name: {
		en: "Wisdom of Sea and Sky",
		de: "Weisheit von Meer und Himmel",
		es: "Sabiduría del Mar y del Cielo",
		fr: "Sagesse de la Mer et du Ciel",
		it: "Saggezza del Mare e del Cielo",
		'pt-br': "Sabedoria do Mar e do Céu",
		'zh-tw': "海與天空的智慧",
		ja: "空と海の導き"
	},

	serie: serie,

	cardCount: {
		official: 161
	},

	releaseDate: "2025-07-30",

	boosters: {
		lugia: {
			name: {
				en: 'Lugia',
				de: 'Lugia',
				es: 'Lugia',
				fr: 'Lugia',
				it: 'Lugia',
				'pt-br': 'Lugia',
				'zh-tw': '盧基亞',
				ja: "空と海の導き ルギア"
			}
		},
		'ho-oh': {
			name: {
				en: 'Ho-Oh',
				de: 'Ho-Oh',
				es: 'Ho-Oh',
				fr: 'Ho-Oh',
				it: 'Ho-Oh',
				'pt-br': 'Ho-Oh',
				'zh-tw': '鳳王',
				ja: "空と海の導き ホウオウ"
			}
		}
	}
}

export default set
