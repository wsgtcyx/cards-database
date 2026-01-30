import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Doublade",
        "fr": "Doublade",
        "es": "doble hoja",
        "it": "Doppia lama",
        "de": "Doublade",
        "pt-br": "Lâmina Dupla",
        "zh-tw": "雙刃"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    evolveFrom: {
        en: "Honedge",
        "fr": "Honedge",
        "es": "afilar",
        "it": "Honedge",
        "de": "Honedge",
        "pt-br": "Honedge",
        "zh-tw": "霍內奇"
    },
    description: {
        en: "The two swords employ a strategy of rapidly\nalternating between offense and defense to\nbring down their prey.",
        "fr": "Les deux épées emploient une stratégie de rapidité\nalterner entre attaque et défense pour\nabattre leurs proies.",
        "es": "Las dos espadas emplean una estrategia de rápido\nalternando entre ataque y defensa para\nderribar a sus presas.",
        "it": "Le due spade utilizzano una strategia di rapidità\nalternando attacco e difesa\nabbattere la loro preda.",
        "de": "Die beiden Schwerter verfolgen eine schnelle Strategie\nWechsel zwischen Angriff und Verteidigung\nbringen ihre Beute zur Strecke.",
        "pt-br": "As duas espadas empregam uma estratégia de rapidamente\nalternando entre ataque e defesa para\nderrubar suas presas.",
        "zh-tw": "兩把劍採用了快速的策略\n攻防交替\n打倒他們的獵物。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Dual Blades",
                "fr": "Doubles lames",
                "es": "Cuchillas dobles",
                "it": "Doppie lame",
                "de": "Doppelklingen",
                "pt-br": "Lâminas Duplas",
                "zh-tw": "雙刀片"
            },
            damage: 40,
            cost: ["Metal", "Metal"],
            effect: {
                en: "Flip 2 coins. This attack does 40 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
                "es": "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
                "it": "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
                "de": "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
