import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/027"
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
                en: "Sharp Claws"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
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
