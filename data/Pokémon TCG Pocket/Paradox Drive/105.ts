import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/105",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/105",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/105",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/105",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/105",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/105"
    },
    name: {
        en: "Armarouge ex",
        fr: "Carmadura-ex",
        es: "Armarouge ex",
        it: "Armarouge-ex",
        de: "Crimanzo-ex",
        "pt-br": "Armarouge ex",
        "zh-tw": "紅蓮鎧騎ex",
        ko: "카디나르마 ex",
        ja: "グレンアルマex"
    },
    illustrator: "takuyoa",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    dexId: [936],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ko: "카르본",
        ja: "カルボウ"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Armor",
                fr: "Armure",
                es: "Armadura",
                it: "Armatura",
                de: "Rüstung",
                "pt-br": "Armadura",
                "zh-tw": "裝甲"
            },
            effect: {
                en: "This Pokémon takes -30 damage from attacks.",
                fr: "Ce Pokémon subit -30 dégâts des attaques.",
                es: "Este Pokémon recibe -30 de daño por ataques.",
                it: "Questo Pokémon subisce -30 danni dagli attacchi.",
                de: "Dieses Pokémon erleidet -30 Schaden durch Angriffe.",
                "pt-br": "Este Pokémon sofre -30 de dano de ataques.",
                "zh-tw": "這隻寶可夢受到的攻擊傷害為-30。"
            }
        }
    ],
    attacks: [
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                en: "Armor Cannon",
                fr: "Canon Blindé",
                es: "Cañón Armadura",
                it: "Corazza Cannone",
                de: "Rüstungskanone",
                "pt-br": "Canhão de Armadura",
                "zh-tw": "鎧農炮"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta una Energía {R} de este Pokémon.",
                it: "Scarta un'Energia {R} da questo Pokémon.",
                de: "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 {R} 能量。"
            },
            damage: 120
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
