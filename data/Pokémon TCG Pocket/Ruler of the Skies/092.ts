import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/092"
    },
    name: {
        en: "Muk",
        fr: "Grotadmorv",
        es: "Muk",
        it: "Muk",
        de: "Sleimok",
        "pt-br": "Muk",
        "zh-tw": "臭臭泥",
        ko: "질뻐기",
        ja: "ベトベトン"
    },
    illustrator: "moki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Darkness"],
    dexId: [89],
    evolveFrom: {
        en: "Grimer",
        fr: "Tadmorv",
        es: "Grimer",
        it: "Grimer",
        de: "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "阿羅拉 臭泥",
        ko: "알로라 질퍽이",
        ja: "アローラ ベトベター"
    },
    stage: "Stage1",
    description: {
        en: "It’s so stinky! Muk’s body contains toxic elements, and any plant will wilt when it passes by."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Ambush",
                fr: "Embuscade",
                es: "Emboscada",
                it: "Imboscata",
                de: "Hinterhalt",
                "pt-br": "Emboscada",
                "zh-tw": "伏擊"
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
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
