import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/130",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/130",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/130",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/130",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/130",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/130",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/130",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/130",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/130"
    },
    name: {
        en: "Sandile",
        "fr": "Mascaïman",
        "es": "Sandile",
        "it": "Sandile",
        "de": "Ganovil",
        "pt-br": "Sandile",
        "zh-tw": "黑眼鱷",
        ja: "メグロコ",
        ko: "깜눈크",
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "They live hidden under hot desert sands in order\nto keep their body temperature from dropping.",
        "fr": "Ils vivent cachés sous les sables chauds du désert afin\npour empêcher leur température corporelle de baisser.",
        "es": "Viven escondidos bajo las cálidas arenas del desierto para poder\npara evitar que su temperatura corporal baje.",
        "it": "Vivono nascosti sotto le calde sabbie del deserto in ordine\nper evitare che la temperatura corporea scenda.",
        "de": "Sie leben der Reihe nach versteckt unter heißem Wüstensand\num zu verhindern, dass ihre Körpertemperatur sinkt.",
        "pt-br": "Eles vivem escondidos sob as areias quentes do deserto para\npara evitar que a temperatura corporal caia.",
        "zh-tw": "它們隱藏在炎熱的沙漠之下，秩序井然\n以防止他們的體溫下降。",
        ja: "体温を 下げないように 砂漠の 熱い 砂に 潜り 隠れながら 生活 している。",
        ko: "체온이 내려가지 않게\n사막의 뜨거운 모래에 들어가\n숨어 생활하고 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gnaw",
                "fr": "Ronger",
                "es": "Roer",
                "it": "Rosicchiare",
                "de": "Nagen",
                "pt-br": "Roer",
                "zh-tw": "啃",
                ja: "かじる",
                ko: "갉기"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-gyarados"
	]
};
export default card;
