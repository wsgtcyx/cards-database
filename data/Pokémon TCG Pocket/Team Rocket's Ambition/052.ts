import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/052",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/052",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/052",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/052",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/052",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/052"
    },
    name: {
        en: "Gible",
        fr: "Griknot",
        es: "Gible",
        it: "Gible",
        de: "Kaumalat",
        "pt-br": "Gible",
        "zh-tw": "圓陸鯊",
        ko: "딥상어동",
        ja: "フカマル"
    },
    illustrator: "saino misaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    dexId: [443],
    stage: "Basic",
    description: {
        en: "It nests in horizontal holes warmed by geothermal heat. Foes who get too close can expect to be pounced on and bitten.",
        fr: "Il vit dans des cavités chauffées par géothermie, dont il bondit pour mordre tout intrus.",
        es: "Vive en agujeros en las cuevas, al amparo del calor geotérmico. Si se acerca un enemigo, se abalanza sobre él y lo muerde con su gran boca.",
        it: "Vive in gallerie scaldate dal calore geotermico, Se sente un nemico arrivare, salta fuori e lo addenta.",
        de: "Dieses Pokémon lebt in Höhlen, die Erdwärme ausgesetzt sind. Wenn Feinde sich nähern, springt es heraus und beißt mit seinem großen Maul zu.",
        "pt-br": "Faz ninhos em buracos horizontais que são aquecidos pelo calor geotérmico. Inimigos que se aproximam demais serão atacados e mordidos.",
        "zh-tw": "生活在被地熱加溫的洞窟裡。如果有敵人靠近，就會從洞裡撲出來大口咬住。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Take Down",
                fr: "Bélier",
                es: "Derribo",
                it: "Riduttore",
                de: "Bodycheck",
                "pt-br": "Desmantelar",
                "zh-tw": "猛撞"
            },
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
                es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt auch selbst sich 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到10點傷害。"
            },
            damage: 30
        }
    ],
    retreat: 1
};

export default card;
