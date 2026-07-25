import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/021",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/021"
    },
    name: {
        en: "Numel",
        fr: "Chamallot",
        es: "Numel",
        it: "Numel",
        de: "Camaub",
        "pt-br": "Numel",
        "zh-tw": "呆火駝",
        ko: "둔타",
        ja: "ドンメル"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    dexId: [322],
    stage: "Basic",
    description: {
        en: "The flaming magma it stores in the hump on its back is the source of its tremendous power.",
        fr: "Le magma enflammé qu’il emmagasine dans la bosse sur son dos est la source de son immense pouvoir.",
        es: "El magma llameante que almacena en la joroba de su espalda es la fuente de su tremendo poder.",
        it: "Il magma fiammeggiante che immagazzina nella gobba sulla schiena è la fonte del suo tremendo potere.",
        de: "Das flammende Magma, das es in dem Höcker auf seinem Rücken speichert, ist die Quelle seiner enormen Kraft.",
        "pt-br": "O magma flamejante que ele armazena na protuberância em suas costas é a fonte de seu tremendo poder.",
        "zh-tw": "它背上駝峰儲存的火焰岩漿是它巨大力量的來源。"
    },
    attacks: [
        {
            cost: ["Fire", "Colorless"],
            name: {
                en: "Knock Away",
                fr: "Asticotage",
                es: "Derribar",
                it: "Scaraventa",
                de: "Zurückschlagen",
                "pt-br": "Jogar Longe",
                "zh-tw": "擊飛"
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
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
