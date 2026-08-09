import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/041",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/041"
    },
    name: {
        en: "Chien-Pao ex",
        fr: "Baojian-ex",
        es: "Chien-Pao ex",
        it: "Chien-Pao-ex",
        de: "Baojian-ex",
        "pt-br": "Chien-Pao ex",
        "zh-tw": "古劍豹ex",
        ko: "파오젠 ex",
        ja: "パオジアンex"
    },
    illustrator: "aky CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [1002],
    stage: "Basic",
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Icicle",
                fr: "Concrétion Glacée",
                es: "Témpano",
                it: "Stalattite",
                de: "Eiszapfen",
                "pt-br": "Pingente de Gelo",
                "zh-tw": "冰柱"
            },
            damage: 20
        },
        {
            cost: ["Water", "Water", "Water"],
            name: {
                en: "Diving Icicles",
                fr: "Bond Stalactite",
                es: "Embestida Témpano",
                it: "Tuffo Glaciale",
                de: "Eiszapfenregen",
                "pt-br": "Mergulho Gélido",
                "zh-tw": "冰柱俯衝"
            },
            effect: {
                en: "Discard all {W} Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
                fr: "Défaussez toute l'énergie {W} de ce Pokémon. Cette attaque inflige 130 dégâts à 1 des Pokémon de votre adversaire.",
                es: "Descarta toda la Energía {W} de este Pokémon. Este ataque hace 130 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Scarta tutte le Energie {W} da questo Pokémon. Questo attacco infligge 130 danni a 1 dei Pokémon del tuo avversario.",
                de: "Lege alle {W}-Energien von diesem Pokémon ab. Dieser Angriff fügt 1 Pokémon deines Gegners 130 Schadenspunkte zu.",
                "pt-br": "Descarte todas as Energias {W} deste Pokémon. Este ataque causa 130 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "丟棄該寶可夢的所有 {W} 能量。這次攻擊對對手的 1 隻寶可夢造成 130 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
