import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/068"
    },
    name: {
        en: "Mabosstiff",
        fr: "Dogrino",
        es: "Mabosstiff",
        it: "Mabosstiff",
        de: "Mastifioso",
        "pt-br": "Mabosstiff",
        "zh-tw": "獒教父",
        pt: "Mabosstiff"
    },
    illustrator: "KIYOTAKA OSHIYAMA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [943],
    evolveFrom: {
        en: "Maschiff",
        fr: "Grondogue",
        es: "Maschiff",
        it: "Maschiff",
        de: "Mobtiff",
        "pt-br": "Maschiff",
        "zh-tw": "偶叫獒",
        pt: "Maschiff"
    },
    description: {
        en: "Mabosstiff loves playing with children. Though usually gentle, it takes on an intimidating look when protecting its family.",
        "fr": "Dogrino adore jouer avec les enfants. Bien que généralement doux, il prend un air intimidant lorsqu'il protège sa famille.",
        "es": "A Mabosstiff le encanta jugar con los niños. Aunque suele ser amable, adquiere un aspecto intimidante cuando protege a su familia.",
        "it": "Mabosstiff ama giocare con i bambini. Anche se solitamente è gentile, assume un aspetto intimidatorio quando protegge la sua famiglia.",
        "de": "Mastifioso liebt es, mit Kindern zu spielen. Obwohl es normalerweise sanftmütig ist, wirkt es einschüchternd, wenn es seine Familie beschützt.",
        "pt-br": "Mabosstiff adora brincar com crianças. Embora geralmente gentil, assume uma aparência intimidadora ao proteger sua família.",
        "zh-tw": "獒教父 喜歡和孩子們一起玩。雖然通常很溫和，但在保護家人時卻顯得令人生畏。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Wild Tackle",
                fr: "Tacle Brutal",
                es: "Placaje Salvaje",
                it: "Azionferoce",
                de: "Wilder Tackle",
                "pt-br": "Equipamento Selvagem",
                "zh-tw": "狂野鏟球",
                pt: "Investida Feroz"
            },
            damage: "110",
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
                es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 20 點傷害。",
                pt: "Este Pokémon também causa 20 pontos de dano a si mesmo."
            },
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
