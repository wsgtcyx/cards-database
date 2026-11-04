import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/105/f4154efc827aa16b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/105/f4154efc827aa16b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/105/f4154efc827aa16b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/105/f4154efc827aa16b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/105/f4154efc827aa16b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/105/f4154efc827aa16b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/105/f4154efc827aa16b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/105/f4154efc827aa16b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/105/f4154efc827aa16b"
    },
	name: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		de: "Zorua",
		"pt-br": "Zorua",
		"zh-tw": "索羅亞",
		ja: "ゾロア",
		ko: "조로아"
	},
	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	description: {
		en: "It changes into the forms of others to surprise\nthem. Apparently, it often transforms into a\nsilent child.",
		fr: "Il prend l'apparence des autres afin de les surprendre. On dit qu'il se transforme souvent en petit enfant silencieux.",
		es: "Se transforma en otros para crear desconcierto. A menudo, adopta la forma de un niño parco en palabras.",
		it: "Sorprende gli altri assumendo il loro aspetto. Pare che si trasformi spesso in un bambino taciturno.",
		de: "Es übertölpelt andere, indem es deren Gestalt annimmt. Angeblich tarnt es sich oft als wortkarges Kind.",
		"pt-br": "Ele muda para as formas de outros para surpreendê-los. Aparentemente, transforma-se com frequência em uma criança quieta.",
		"zh-tw": "會幻化成對手的樣子嚇唬對方。似乎經常幻化成沉默寡言的小孩。",
		ja: "相手の 姿に 化けてみせて 驚かせる。 無口な 子どもに 化けていることが 多いらしい。",
		ko: "상대의 모습으로 둔갑하여\n놀라게 한다. 말수가 적은 아이로\n둔갑해 있을 때가 잦다고 한다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				de: "RAM",
				"pt-br": "Aríete",
				"zh-tw": "衝撞",
				ja: "ぶつかる",
				ko: "부딪치기"
			},
			damage: 20,
			cost: ["Darkness"]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: ["vol12"]
};

export default card;
