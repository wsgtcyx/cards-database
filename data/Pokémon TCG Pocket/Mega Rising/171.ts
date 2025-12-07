import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Doublade",
        "fr": "Doublade",
        "es": "doble hoja",
        "it": "Doppia lama",
        "de": "Doublade",
        "pt-br": "Lâmina Dupla",
        "zh-tw": "雙劍鞘",
    },
    illustrator: "Hajime Kusajima",
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
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 40,
            cost: ["Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
