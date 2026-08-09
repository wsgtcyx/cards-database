import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/011",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/011"
    },
    name: {
        en: "Brambleghast",
        fr: "Virevorreur",
        es: "Brambleghast",
        it: "Brambleghast",
        de: "Horrerba",
        "pt-br": "Brambleghast",
        "zh-tw": "怖納噬草",
        pt: "Brambleghast"
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    dexId: [947],
    evolveFrom: {
        en: "Bramblin",
        fr: "Virovent",
        es: "Bramblin",
        it: "Bramblin",
        de: "Weherba",
        "pt-br": "Bramblin",
        "zh-tw": "納噬草",
        pt: "Bramblin"
    },
    description: {
        en: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
        "fr": "Virevorreur erre dans les régions arides. En de rares occasions, des épidémies massives de ces Pokémon enseveliront une ville entière.",
        "es": "Brambleghast deambula por regiones áridas. En raras ocasiones, brotes masivos de estos Pokémon enterrarán una ciudad entera.",
        "it": "Brambleghast vaga per regioni aride. In rare occasioni, epidemie di massa di questi Pokémon seppelliranno un'intera città.",
        "de": "Horrerba wandert durch trockene Regionen. In seltenen Fällen begraben Massenausbrüche dieser Pokémon eine ganze Stadt.",
        "pt-br": "Brambleghast vagueia por regiões áridas. Em raras ocasiões, surtos em massa destes Pokémon enterrarão uma cidade inteira.",
        "zh-tw": "怖納噬草在乾旱地區徘徊。在極少數情況下，這些寶可夢的大規模爆發將埋葬整個城鎮。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Continuous Tumble",
                fr: "Roulade Continue",
                es: "Avalancha Continua",
                it: "Capriole",
                de: "Dauerrollen",
                "pt-br": "Queda Contínua",
                "zh-tw": "連續翻滾",
                pt: "Tombo Contínuo"
            },
            damage: "60×",
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
                fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
                de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 60 點傷害。",
                pt: "Jogue 1 moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
