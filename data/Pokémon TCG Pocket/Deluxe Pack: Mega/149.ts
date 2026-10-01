import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/149",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/149",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/149",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/149",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/149",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/149",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/149"
    },
    name: {
        en: "Hoopa ex",
        fr: "Hoopa-ex",
        es: "Hoopa ex",
        it: "Hoopa-ex",
        de: "Hoopa-ex",
        "pt-br": "Hoopa ex",
        "zh-tw": "胡帕ex",
        ja: "フーパex",
        ko: "후파 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Darkness"
    ],
    dexId: [
        720
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Darkness"
            ],
            name: {
                en: "Shadow Bullet",
                fr: "Kunaï Sournois",
                es: "Bala Sombra",
                "pt-br": "Projétil Sombrio",
                "zh-tw": "暗影子彈",
                it: "Dardombra",
                de: "Schattenkugel",
                ja: "Shadow Bullet",
                ko: "Shadow Bullet"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢也受到20點傷害。",
                ja: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                ko: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
            },
            damage: 30
        },
        {
            cost: [
                "Darkness",
                "Darkness",
                "Colorless"
            ],
            name: {
                en: "Dynamite Punch",
                fr: "Poing Dynamite",
                es: "Puño Dinamita",
                it: "Pugno Dinamite",
                de: "Dynamitstoß",
                "pt-br": "Soco Dinamite",
                "zh-tw": "炸藥拳",
                ja: "Dynamite Punch",
                ko: "Dynamite Punch"
            },
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
                es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到20點傷害。",
                ja: "This Pokémon also does 20 damage to itself.",
                ko: "This Pokémon also does 20 damage to itself."
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
