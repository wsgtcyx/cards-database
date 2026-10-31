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
				ko: '뮤츠',
				'zh-tw': '超夢'
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
				ko: '리자몽',
				'zh-tw': '噴火龍'
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
				ko: '피카츄',
				'zh-tw': '皮卡丘'
			}
		}
	},

	releaseDate: "2024-10-30"
}

export default set
