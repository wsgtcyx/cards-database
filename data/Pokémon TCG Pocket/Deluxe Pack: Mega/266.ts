import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/266",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/266",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/266",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/266",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/266",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/266",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/266"
    },
    name: {
        en: "Numel",
        fr: "Chamallot",
        es: "Numel",
        it: "Numel",
        de: "Camaub",
        "pt-br": "Numel",
        "zh-tw": "呆火駝",
        ja: "ドンメル",
        ko: "둔타"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fire"
    ],
    dexId: [
        322
    ],
    stage: "Basic",
    description: {
        en: "The flaming magma it stores in the hump on its back is the source of its tremendous power.",
        fr: "Il tire son incroyable puissance du magma en fusion emmagasiné dans sa bosse.",
        es: "Acumula magma en ebullición en la joroba de su lomo que transforma en una energía extraordinaria.",
        it: "Il magma che ribolle dentro la sua gobba si trasforma in energia, donandogli una forza straordinaria.",
        de: "Das heiße Magma in seinem Höcker dient ihm als Energiereserve und verleiht ihm enorme Stärke.",
        "pt-br": "O magma flamejante que armazena na corcunda em suas costas é a fonte de seu tremendo poder.",
        "zh-tw": "背上的駝峰裡燃燒的熔岩會轉變成能量，發揮出驚人的力量。",
        ja: "The flaming magma it stores in the hump on its back is the source of its tremendous power.",
        ko: "The flaming magma it stores in the hump on its back is the source of its tremendous power."
    },
    attacks: [
        {
            cost: [
                "Fire",
                "Colorless"
            ],
            name: {
                en: "Knock Away",
                fr: "Asticotage",
                es: "Derribar",
                it: "Scaraventa",
                de: "Zurückschlagen",
                "pt-br": "Jogar Longe",
                "zh-tw": "擊飛",
                ja: "Knock Away",
                ko: "Knock Away"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加30點傷害。",
                ja: "Flip a coin. If heads, this attack does 30 more damage.",
                ko: "Flip a coin. If heads, this attack does 30 more damage."
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
