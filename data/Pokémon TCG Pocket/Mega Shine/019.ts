import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/019",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/019"
    },
    name: {
        en: "Prinplup",
        fr: "Prinplouf",
        es: "Prinplup",
        it: "Prinplup",
        de: "Pliprin",
        "pt-br": "Prinplup",
        "zh-tw": "波皇子",
        ko: "팽태자",
        ja: "ポッタイシ"
    },
    illustrator: "Suwama Chiaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [394],
    evolveFrom: {
        en: "Piplup",
        fr: "Tiplouf",
        es: "Piplup",
        it: "Piplup",
        de: "Plinfa",
        "pt-br": "Piplup",
        "zh-tw": "波加曼",
        ko: "팽도리",
        ja: "ポッチャマ"
    },
    stage: "Stage1",
    description: {
        en: "Because every Prinplup considers itself to be the most important, they can never form a group.",
        fr: "Parce que chaque Prinplouf se considère comme le plus important, ils ne peuvent jamais former un groupe.",
        es: "Debido a que cada Prinplup se considera el más importante, nunca podrán formar un grupo.",
        it: "Poiché ogni Prinplup si considera il più importante, non potranno mai formare un gruppo.",
        de: "Da sich jeder Pliprin für den Wichtigsten hält, können sie niemals eine Gruppe bilden.",
        "pt-br": "Como cada Prinplup se considera o mais importante, eles nunca poderão formar um grupo.",
        "zh-tw": "因為每個波皇子都認為自己是最重要的，所以他們永遠無法組成一個團體。"
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Water Splash",
                fr: "Éclaboussure",
                es: "Chapoteo Agua",
                it: "Acquasplash",
                de: "Wasserplatscher",
                "pt-br": "Espirro d’Água",
                "zh-tw": "水沫"
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
            damage: "30+"
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
