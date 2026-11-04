import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/103/ad35b7d9baf7700b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/103/ad35b7d9baf7700b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/103/ad35b7d9baf7700b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/103/ad35b7d9baf7700b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/103/ad35b7d9baf7700b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/103/ad35b7d9baf7700b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/103/ad35b7d9baf7700b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/103/ad35b7d9baf7700b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/103/ad35b7d9baf7700b"
    },
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		de: "Quapsel",
		"pt-br": "Poliwag",
		"zh-tw": "蚊香蝌蚪",
		ja: "ニョロモ",
		ko: "발챙이"
	},
	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		en: "For Poliwag, swimming is easier than walking.\nThe swirl pattern on its belly is actually part of\nthe Pokémon's innards showing through the skin.",
		fr: "Il est plus à l'aise dans l'eau que sur la terre ferme. Le motif de spirale sur son ventre est en fait une partie de ses organes visibles à travers la peau.",
		es: "Es más ágil en el agua que en la tierra. La espiral de su vientre no es más que parte de sus vísceras que se ven a través de la piel.",
		it: "È più portato per il nuoto che per la corsa. Il motivo spiraliforme sul ventre è parte dei suoi organi interni visibili in trasparenza.",
		de: "Quapsel kann besser schwimmen als laufen. Das Spiralmuster auf seinem Bauch ist ein Teil seiner Innereien, der durch die Haut sichtbar ist.",
		"pt-br": "Para Poliwag, nadar é mais fácil do que andar. A espiral em sua barriga é, na verdade, parte dos órgãos deste Pokémon que pode ser vista através de sua pele.",
		"zh-tw": "比起步行更擅長游泳。腹部的漩渦花紋是透過皮膚可以看到的部分內臟。",
		ja: "歩くよりも 泳ぐほうが 得意。 お腹の 渦巻き模様は 透けて 見える 内臓の 一部だ。",
		ko: "걷기보다 헤엄치기가 특기다.\n배의 소용돌이 모양은\n내장의 일부가 비쳐 보이는 것이다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				it: "Attacco a sorpresa",
				de: "Überraschungsangriff",
				"pt-br": "Ataque Surpresa",
				"zh-tw": "偷襲",
				ja: "ふいをつく",
				ko: "허찌르기"
			},
			damage: 40,
			cost: ["Colorless"],
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
				"pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
				"zh-tw": "擲1次硬幣若為反面,則這個招式失敗。",
				ja: "コインを1回投げウラなら、このワザは失敗。",
				ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
	boosters: ["vol12"]
};

export default card;
