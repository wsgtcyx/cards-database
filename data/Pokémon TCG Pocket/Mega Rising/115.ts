import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/115",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/115",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/115",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/115",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/115",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/115",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/115",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/115",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/115"
    },
    name: {
        en: "Spritzee",
        "fr": "Fluvetin",
        "es": "Spritzee",
        "it": "Spritzee",
        "de": "Parfi",
        "pt-br": "Spritzee",
        "zh-tw": "粉香香",
        ja: "シュシュプ",
        ko: "슈쁘",
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "The scent its body gives off enraptures those\nwho smell it. Noble ladies had no shortage of\nlove for Spritzee.",
        "fr": "Le parfum que dégage son corps ravit ceux\nqui le sent. Les dames nobles ne manquaient pas de\namour pour Spritzee.",
        "es": "El olor que desprende su cuerpo embelesa a quienes\nquien lo huele. A las damas nobles no les faltaba\namor por Spritzee.",
        "it": "Il profumo che emana il suo corpo li incanta\nche l'annusano. Le nobildonne non mancavano\namore per Spritzee.",
        "de": "Der Duft, den sein Körper verströmt, verzaubert diese\nwer es riecht. An edlen Damen mangelte es nicht\nLiebe für Spritzee.",
        "pt-br": "O perfume que seu corpo exala encanta aqueles\nquem sente o cheiro. Senhoras nobres não tinham falta de\namor por Spritzee.",
        "zh-tw": "它的身體散發出的香味讓那些人著迷\n誰聞到了。貴族小姐們都不缺\n對Spritzee的愛。",
        ja: "人を 魅了する 香しい においを 体から 漂わせる。 高貴な 婦人たちに 愛された。",
        ko: "사람을 매료하는 황홀한\n냄새를 몸에서 풍긴다.\n귀부인들에게 사랑받았다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fairy Wind",
                "fr": "Fée du vent",
                "es": "viento de hadas",
                "it": "Vento fatato",
                "de": "Feenwind",
                "pt-br": "Vento Fada",
                "zh-tw": "仙風",
                ja: "ようせいのかぜ",
                ko: "요정의바람"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-altaria",
		"mega-blaziken",
		"mega-gyarados"
	]
};
export default card;
