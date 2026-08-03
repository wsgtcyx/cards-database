import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/014",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/014",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/014",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/014",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/014",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/014"
    },
    name: {
        en: "Paldean Tauros",
        fr: "Tauros de Paldea",
        es: "Tauros de Paldea",
        it: "Tauros di Paldea",
        de: "Paldea-Tauros",
        "pt-br": "Tauros de Paldea",
        "zh-tw": "帕底亞 肯泰羅",
        ko: "팔데아 켄타로스",
        ja: "パルデア ケンタロス"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    dexId: [128],
    stage: "Basic",
    description: {
        en: "People call this kind of Tauros the Blaze Breed due to the hot air it snorts from its nostrils. Its three tails are intertwined.",
        fr: "Les gens appellent ce type de Tauros la race Blaze en raison de l'air chaud qu'il renifle par ses narines. Ses trois queues sont entrelacées.",
        es: "La gente llama a este tipo de Tauros Blaze Breed debido al aire caliente que exhala por sus fosas nasales. Sus tres colas están entrelazadas.",
        it: "La gente chiama questo tipo di Tauros la razza Blaze per via dell'aria calda che sbuffa dalle narici. Le sue tre code sono intrecciate.",
        de: "Aufgrund der heißen Luft, die es aus seinen Nasenlöchern schnupft, nennen die Leute diese Art von Tauros die Blaze-Rasse. Seine drei Schwänze sind ineinander verschlungen.",
        "pt-br": "As pessoas chamam esse tipo de Tauros de Raça Blaze devido ao ar quente que ele exala pelas narinas. Suas três caudas estão entrelaçadas.",
        "zh-tw": "人們稱這種肯泰羅為火焰品種，因為它從鼻孔噴出熱氣。它的三個尾巴是糾纏在一起的。"
    },
    attacks: [
        {
            cost: ["Fire", "Fire"],
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
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige également 20 dégâts.",
                es: "Este Pokémon también se hace 20 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 20 點傷害。"
            },
            damage: 60
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
