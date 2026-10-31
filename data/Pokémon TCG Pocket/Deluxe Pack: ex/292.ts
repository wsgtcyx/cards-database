import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";

const card: Card = {
	set: Set,
	image: {
		en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/292",
		de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/292",
		es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/292",
		fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/292",
		it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/292",
		"zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/292",
		"pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/292",
		ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/292",
		ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/292"
	},
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		de: "Enekoro",
		"pt-br": "Delcatty",
		"zh-tw": "優雅貓",
		ja: "エネコロロ",
		ko: "델케티"
	},
	illustrator: "0313",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		de: "Eneco",
		"pt-br": "Skitty",
		"zh-tw": "向尾喵",
		ja: "エネコ",
		ko: "에나비"
	},
	description: {
		en: "It dislikes dirty places. It often searches for a comfortable place in which to groom itself.",
		fr: "Il déteste la saleté et passe son temps à\nentretenir sa fourrure, confortablement installé.",
		es: "No soporta los lugares sucios. Le encanta acicalarse\nel pelaje cuando está a gusto en un sitio.",
		it: "Detesta gli ambienti sporchi. Se ne sta sempre\nad allisciarsi la pelliccia in luoghi accoglienti.",
		de: "Hasst schmutzige Orte. Behagt ihm ein Platz,\nfängt es sofort an, sein glänzendes Fell zu pflegen.",
		"pt-br": "Detesta lugares sujos. Frequentemente,\nprocura lugares confortáveis para se embelezar.",
		ja: "汚い 場所が 大嫌い。 居心地の 良い 場所で いつも 毛並みを 手入れしている。",
		ko: "더러운 곳을 아주 싫어한다.\n편안한 곳에서\n늘 털을 다듬고 있다.",
		"zh-tw": "它不喜歡骯髒的地方。它經常尋找一個舒適的地方來梳理自己。"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique",
				es: "Asistencia de Energía",
				it: "Assistienergia",
				de: "Energieförderung",
				"pt-br": "Socorro de Energia",
				ja: "エネアシスト",
				ko: "에너지 어시스트",
				"zh-tw": "能量輔助"
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				en: "Take a {C} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
				fr: "Prenez une Énergie {C} de votre zone Énergie et attachez-la à un de vos Pokémon de Banc.",
				es: "Une 1 Energía {C} de tu área de Energía a 1 de tus Pokémon en Banca.",
				it: "Prendi un'Energia {C} dalla tua Zona Energia e assegnala a uno dei tuoi Pokémon in panchina.",
				de: "Lege 1 {C}-Energie aus deinem Energiebereich an 1 Pokémon auf deiner Bank an.",
				"pt-br": "Pegue uma Energia {C} da sua Zona de Energia e ligue-a 1 dos seus Pokémon no Banco.",
				ja: "自分のエネルギーゾーンから{C}エネルギーを1個出し、ベンチポケモンにつける。",
				ko: "자신의 에너지존에서 {C}에너지를 1개 내보내 벤치 포켓몬에게 붙인다.",
				"zh-tw": "從你的能量區取出一個 {C} 能量並將其附加到你的 1 個後備神奇寶貝身上。"
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1
};

export default card;
