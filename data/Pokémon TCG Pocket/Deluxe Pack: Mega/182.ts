import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/182",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/182",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/182",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/182",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/182",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/182",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/182"
    },
    name: {
        en: "Tauros ex",
        fr: "Tauros-ex",
        es: "Tauros ex",
        it: "Tauros-ex",
        de: "Tauros-ex",
        "pt-br": "Tauros ex",
        "zh-tw": "肯泰羅ex",
        ja: "ケンタロスex",
        ko: "켄타로스 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Wild Tackle",
                fr: "Tacle Brutal",
                es: "Placaje Salvaje",
                it: "Azionferoce",
                de: "Wilder Tackle",
                "pt-br": "Investida Feroz",
                "zh-tw": "狂野衝撞",
                ja: "Wild Tackle",
                ko: "Wild Tackle"
            },
            damage: 90,
            cost: [
                "Colorless",
                "Colorless"
            ],
            effect: {
                en: "Flip a coin. If tails, this Pokémon also does 30 damage to itself.",
                fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 30 dégâts.",
                es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 30 puntos de daño a sí mismo.",
                it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 30 danni a se stesso.",
                de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 30 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este Pokémon também causará 30 pontos de dano a si mesmo.",
                "zh-tw": "擲1次硬幣若為反面,則這隻寶可夢也受到30點傷害。",
                ja: "Flip a coin. If tails, this Pokémon also does 30 damage to itself.",
                ko: "Flip a coin. If tails, this Pokémon also does 30 damage to itself."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
