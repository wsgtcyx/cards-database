import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/197",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/197",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/197",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/197",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/197",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/197",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/197"
    },
    name: {
        en: "Terapagos ex",
        fr: "Terapagos-ex",
        es: "Terapagos ex",
        it: "Terapagos-ex",
        de: "Terapagos-ex",
        "pt-br": "Terapagos ex",
        "zh-tw": "太樂巴戈斯ex",
        ja: "テラパゴスex",
        ko: "테라파고스 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Colorless"
    ],
    dexId: [
        1024
    ],
    stage: "Basic",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Prism Impact",
                fr: "Impact Prismatique",
                es: "Impacto Prismático",
                it: "Impatto Prismatico",
                de: "Prisma-Einschlag",
                "pt-br": "Impacto Prismático",
                "zh-tw": "稜鏡衝擊",
                ja: "Prism Impact",
                ko: "Prism Impact"
            },
            effect: {
                en: "This attack does 20 more damage for each type of Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque type d'Énergie attaché à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada tipo de Energía diferente unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni tipo di Energia assegnata a questo Pokémon.",
                de: "Diese Attacke fügt für jeden an dieses Pokémon angelegten Energietyp 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada tipo de Energia ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的能量屬性的數量×20點傷害。",
                ja: "This attack does 20 more damage for each type of Energy attached to this Pokémon.",
                ko: "This attack does 20 more damage for each type of Energy attached to this Pokémon."
            },
            damage: "80+"
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
