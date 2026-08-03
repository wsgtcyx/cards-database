import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/027"
    },
    name: {
        en: "Houndour",
        fr: "Malosse",
        es: "Houndour",
        it: "Houndour",
        de: "Hunduster",
        "pt-br": "Houndour",
        "zh-tw": "戴魯比",
        ko: "델빌",
        ja: "デルビル"
    },
    illustrator: "Kurata So",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [228],
    stage: "Basic",
    description: {
        en: "It uses different kinds of cries for communicating with others of its kind and for pursuing its prey."
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Sharp Claws",
                fr: "Griffes Affûtées",
                es: "Garras Afiladas",
                "pt-br": "Garras Cortantes",
                "zh-tw": "銳利之爪"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加20點傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
