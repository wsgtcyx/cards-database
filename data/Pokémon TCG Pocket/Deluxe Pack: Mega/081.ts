import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/081",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/081",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/081",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/081"
    },
    name: {
        en: "Chien-Pao ex",
        fr: "Baojian-ex",
        es: "Chien-Pao ex",
        it: "Chien-Pao-ex",
        de: "Baojian-ex",
        "pt-br": "Chien-Pao ex",
        "zh-tw": "古劍豹ex",
        ja: "パオジアンex",
        ko: "파오젠 ex"
    },
    suffix: "EX",
    illustrator: "aky CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    dexId: [
        1002
    ],
    hp: 130,
    types: [
        "Water"
    ],
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Icicle",
                fr: "Concrétion Glacée",
                es: "Témpano",
                it: "Stalattite",
                de: "Eiszapfen",
                "pt-br": "Pingente de Gelo",
                "zh-tw": "冰柱",
                pt: "Pingente de Gelo",
                "es-mx": "Témpano de Hielo",
                ja: "Icicle",
                ko: "Icicle"
            },
            damage: 20,
            cost: [
                "Water"
            ]
        },
        {
            name: {
                en: "Diving Icicles",
                fr: "Bond Stalactite",
                es: "Embestida Témpano",
                it: "Tuffo Glaciale",
                de: "Eiszapfenregen",
                "pt-br": "Mergulho Gélido",
                "zh-tw": "冰柱俯衝",
                ja: "Diving Icicles",
                ko: "Diving Icicles"
            },
            cost: [
                "Water",
                "Water",
                "Water"
            ],
            effect: {
                en: "Discard all {W} Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
                fr: "Défaussez toutes les Énergies {W} de ce Pokémon. Cette attaque inflige 130 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Descarta todas las Energías {W} de este Pokémon. Este ataque hace 130 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Rimuovi tutte le Energie {W} da questo Pokémon. Questo attacco infligge 130 danni a uno dei Pokémon del tuo avversario.",
                de: "Lege alle {W}-Energien von diesem Pokémon ab. Diese Attacke fügt 1 Pokémon deines Gegners 130 Schadenspunkte zu.",
                "pt-br": "Descarte todas as Energias {W} deste Pokémon. Este ataque causa 130 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "將這隻寶可夢身上的{W}能量全部丟棄,對手的1隻寶可夢受到130點傷害。",
                ja: "Discard all {W} Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
                ko: "Discard all {W} Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
