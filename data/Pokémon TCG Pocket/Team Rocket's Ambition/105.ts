import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/105",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/105",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/105",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/105",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/105",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/105",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/105"
    },
    name: {
        en: "Mega Charizard Y ex",
        fr: "Méga-Dracaufeu Y-ex",
        es: "Mega-Charizard Y ex",
        it: "Mega Charizard Y-ex",
        de: "Mega-Glurak Y-ex",
        "pt-br": "Mega Charizard Y ex",
        "zh-tw": "超級噴火龍Yex",
        ko: "메가리자몽Y ex",
        ja: "メガリザードンYex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 220,
    types: ["Fire"],
    dexId: [6],
    evolveFrom: {
        en: "Charmeleon",
        fr: "Reptincel",
        es: "Charmeleon",
        it: "Charmeleon",
        de: "Glutexo",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
        ko: "리자드",
        ja: "リザード"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Fire", "Fire", "Fire", "Colorless"],
            name: {
                en: "Crimson Dive",
                fr: "Plongeon Écarlate",
                es: "Picado Carmesí",
                it: "Tufforosso",
                de: "Feuerroter Sturzflug",
                "pt-br": "Mergulho Carmim",
                "zh-tw": "紅蓮俯衝"
            },
            effect: {
                en: "This Pokémon also does 50 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
                es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 50 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 50 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到50點傷害。"
            },
            damage: 250
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
