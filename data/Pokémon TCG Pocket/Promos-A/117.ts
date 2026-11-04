import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/117/08d4a91aa42cc98e",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/117/08d4a91aa42cc98e",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/117/08d4a91aa42cc98e",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/117/08d4a91aa42cc98e",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/117/08d4a91aa42cc98e",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/117/08d4a91aa42cc98e",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/117/08d4a91aa42cc98e",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/117/08d4a91aa42cc98e",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/117/08d4a91aa42cc98e"
    },
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		de: "Absol",
		"pt-br": "Absol",
		"zh-tw": "阿勃梭魯",
		ja: "アブソル",
		ko: "앱솔"
	},
	illustrator: "Eri Yamaki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	description: {
		en: "Swift as the wind, Absol races through fields and\nmountains. Its curved, bow-like horn is acutely\nsensitive to the warning signs of natural disasters.",
		fr: "Il court par monts et par vaux, rapide comme le vent. Sa corne arquée lui permet de percevoir les signes avant-coureurs des cataclysmes.",
		es: "Corre por montañas y prados a la velocidad del viento. Su cuerno curvado tiene tal sensibilidad que puede predecir catástrofes naturales.",
		it: "Corre veloce come il vento attraverso colline e campi. Il suo corno ricurvo è in grado di prevedere con precisione le calamità naturali.",
		de: "Schnell wie der Wind rauscht es über Felder und Berge. Sein gebogenes Horn ist sehr sensibel gegenüber herannahenden Naturkatastrophen.",
		"pt-br": "Absol dispara por campos e montanhas, rápido como o vento. Seu chifre arqueado é altamente sensível aos sinais de desastres naturais.",
		"zh-tw": "如風般地奔馳在山野中。形狀如弓的角能夠敏銳感應到自然災害的預兆。",
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。",
		ko: "바람처럼 산과 들을 달려나간다.\n초승달 모양의 뿔은 자연재해의\n징조를 민감하게 감지한다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Leap Over",
				fr: "Élan Bondissant",
				es: "Gran Brinco",
				it: "Granbalzo",
				de: "Überspringen",
				"pt-br": "Pulão",
				"zh-tw": "飛越",
				ja: "とびこえる",
				ko: "넘어뛰기"
			},
			cost: ["Darkness"],
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts à un des Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
				"pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
				"zh-tw": "對手的1隻備戰寶可夢受到30點傷害。",
				ja: "相手のベンチポケモン1匹に30ダメージ。",
				ko: "상대의 벤치 포켓몬 1마리에게 30데미지를 준다."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: []
};

export default card;
