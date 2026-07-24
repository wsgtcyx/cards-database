import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/054",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/054"
    },
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    illustrator: "Lee HyunJung",
    rarity: "None",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [133],
    stage: "Basic",
    description: {
        en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
        fr: "Son code génétique est irrégulier. Il peut muter s'il est exposé aux radiations des pierres élémentaires.",
        es: "Su código genético es irregular. Puede mutar si se expone a la radiación de las piedras elementales.",
        it: "Il suo codice genetico è irregolare. Potrebbe mutare se esposto alle radiazioni delle pietre elementali.",
        de: "Sein genetischer Code ist unregelmäßig. Es kann mutieren, wenn es der Strahlung von Elementsteinen ausgesetzt wird.",
        "pt-br": "Seu código genético é irregular. Ele pode sofrer mutação se for exposto à radiação das pedras elementares.",
        "zh-tw": "它的遺傳密碼是不規則的。如果受到元素石的輻射，就有可能發生變異。"
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Boosted Evolution",
                fr: "Évolution boostée",
                es: "Evolución impulsada",
                it: "Evoluzione potenziata",
                de: "Gesteigerte Evolution",
                "pt-br": "Evolução Impulsionada",
                "zh-tw": "提升進化"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
                fr: "Tant que ce Pokémon est dans le Spot Actif, il peut évoluer lors de votre premier tour ou du tour où vous le jouez.",
                es: "Mientras este Pokémon esté en el Punto Activo, puede evolucionar durante tu primer turno o el turno en el que lo juegues.",
                it: "Finché questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o nel turno in cui lo giochi.",
                de: "Solange sich dieses Pokémon an der aktiven Stelle befindet, kann es sich während Ihres ersten Zuges oder in dem Zug, in dem Sie es spielen, weiterentwickeln.",
                "pt-br": "Enquanto este Pokémon estiver no Active Spot, ele poderá evoluir durante seu primeiro turno ou no turno em que você o jogar.",
                "zh-tw": "只要該寶可夢位於活動點，它就可以在你的第一個回合或你玩它的回合中進化。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Stampede",
                fr: "Ruée",
                es: "Estampida",
                it: "Fuggi Fuggi",
                de: "Zertrampeln",
                "pt-br": "Estouro",
                "zh-tw": "踩"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol7"]
};

export default card;
