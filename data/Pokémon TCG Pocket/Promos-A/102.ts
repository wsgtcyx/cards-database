import { Card } from "../../../interfaces";
import Set from "../Promos-A";

const card: Card = {
	set: Set,
	image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/102/baa3c983161f8b09",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/102/baa3c983161f8b09",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/102/baa3c983161f8b09",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/102/baa3c983161f8b09",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/102/baa3c983161f8b09",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/102/baa3c983161f8b09",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/102/baa3c983161f8b09",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/102/baa3c983161f8b09",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/102/baa3c983161f8b09"
    },
	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		it: "Tropius",
		de: "Tropius",
		"pt-br": "Tropius",
		"zh-tw": "熱帶龍",
		ja: "トロピウス",
		ko: "트로피우스"
	},
	illustrator: "sowsow",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	description: {
		en: "It lives in tropical jungles. The bunch of fruit\naround its neck is delicious. The fruit grows\ntwice a year.",
		fr: "Tropius vit dans les jungles tropicales. Les fruits sur son cou sont sucrés et succulents. Ils poussent deux fois par an.",
		es: "Habita en las junglas tropicales. Le crece un delicioso racimo de fruta dulce en el cuello dos veces al año.",
		it: "Vive in giungle tropicali. Due volte all'anno gli crescono attorno al collo dei frutti dolci dal sapore squisito.",
		de: "Es lebt im tropischen Dschungel. Die süßen, leckeren Früchte an seinem Hals wachsen zweimal im Jahr.",
		"pt-br": "Vive em florestas tropicais. O cacho em seu pescoço dá frutas deliciosas duas vezes por ano.",
		"zh-tw": "棲息在熱帶叢林裡。脖子上的果實香甜美味，每年會結果2次。",
		ja: "熱帯の ジャングルに 生息。 首の フサは 甘くて 美味しい。 １年に ２回 実を つける。",
		ko: "열대 정글에 서식한다.\n목에 달린 송이는 달고 맛있다.\n1년에 2번 열매를 맺는다."
	},
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Double Smash",
				fr: "Double Broiement",
				es: "Golpe Doble",
				it: "Colpo Duplice",
				de: "Doppelstoß",
				"pt-br": "Bordoada Dupla",
				"zh-tw": "雙重粉碎",
				ja: "ダブルスマッシュ",
				ko: "더블스매시"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
				"pt-br": "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				"zh-tw": "擲2次硬幣,造成正面出現的次數×40點傷害。",
				ja: "コインを2回投げ、オモテの数×40ダメージ。",
				ko: "동전을 2번 던져서 앞면이 나온 수 × 40데미지를 준다."
			},
			damage: "40x",
			cost: ["Colorless", "Colorless"]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 2,
	boosters: ["vol12"]
};

export default card;
