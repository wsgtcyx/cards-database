import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/043"
    },
    name: {
        en: "Dewott",
        fr: "Mateloutre",
        es: "Dewott",
        it: "Dewott",
        de: "Zwottronin",
        "pt-br": "Dewott",
        "zh-tw": "雙刃丸",
        ko: "쌍검자비",
        ja: "フタチマル"
    },
    illustrator: "Megumi Higuchi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [502],
    evolveFrom: {
        en: "Oshawott",
        fr: "Moustillon",
        es: "Oshawott",
        it: "Oshawott",
        de: "Ottaro",
        "pt-br": "Oshawott",
        "zh-tw": "水水獺",
        ko: "수댕이",
        ja: "ミジュマル"
    },
    stage: "Stage1",
    description: {
        en: "Dewott has a studious and stern personality. It masters the use of its scalchops through dedicated, repeated training."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Razor Shell",
                fr: "Coqui-Lame",
                es: "Concha Filo",
                it: "Conchilama",
                de: "Kalkklinge",
                "zh-tw": "貝殼刃"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
