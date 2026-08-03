import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/028",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/028",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/028",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/028",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/028",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/028",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/028"
    },
    name: {
        en: "Palafin",
        fr: "Superdofin",
        es: "Palafin",
        it: "Palafin",
        de: "Delfinator",
        "pt-br": "Palafin",
        "zh-tw": "海豚俠",
        pt: "Palafin"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    dexId: [964],
    evolveFrom: {
        en: "Finizen",
        fr: "Dofin",
        es: "Finizen",
        it: "Finizen",
        de: "Normifin",
        "pt-br": "Finizen",
        "zh-tw": "波普海豚",
        pt: "Finizen"
    },
    description: {
        en: "This hero of the ocean swims at a speed of 50 knots and saves drowning people and Pokémon.",
        "fr": "Ce héros de l'océan nage à une vitesse de 50 nœuds et sauve les noyés et les Pokémon.",
        "es": "Este héroe del océano nada a una velocidad de 50 nudos y salva a personas y Pokémon que se están ahogando.",
        "it": "Questo eroe dell'oceano nuota ad una velocità di 50 nodi e salva persone e Pokémon che stanno annegando.",
        "de": "Dieser Held des Ozeans schwimmt mit einer Geschwindigkeit von 50 Knoten und rettet Ertrinkende und Pokémon.",
        "pt-br": "Este herói do oceano nada a uma velocidade de 50 nós e salva pessoas e Pokémon que estão se afogando.",
        "zh-tw": "這位海洋英雄以 50 節的速度游泳，拯救溺水者和寶可夢。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Jet Punch",
                fr: "Poing Sonique",
                es: "Puño Jet",
                it: "Pugnojet",
                de: "Düsenhieb",
                "pt-br": "Soco a Jato",
                "zh-tw": "噴射沖床",
                pt: "Soco Jato"
            },
            damage: 50,
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 50 de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 隻寶可夢造成 50 點傷害。",
                pt: "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                'es-mx': "Este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival."
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
