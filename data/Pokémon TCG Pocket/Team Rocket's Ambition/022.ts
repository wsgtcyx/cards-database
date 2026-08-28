import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/022",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/022",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/022",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/022",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/022",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/022",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/022"
    },
    name: {
        en: "Blitzle",
        fr: "Zébibron",
        es: "Blitzle",
        it: "Blitzle",
        de: "Elezeba",
        "pt-br": "Blitzle",
        "zh-tw": "斑斑馬",
        ko: "줄뮤마",
        ja: "シママ"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [522],
    stage: "Basic",
    description: {
        en: "This Pokémon prefers places with lots of lightning strikes. It catches lightning with its mane and stores the electricity within its body.",
        fr: "Ce Pokémon aime les zones où la foudre tombe souvent. Il capte les éclairs à l'aide de sa crinière et charge ainsi son corps d'électricité.",
        es: "Le gustan los lugares donde las tormentas son frecuentes. Capta los rayos con la crin y acumula la electricidad en el interior del cuerpo.",
        it: "Ama i luoghi colpiti di frequente dai fulmini, che intercetta con la criniera. In questo modo, accumula elettricità.",
        de: "Es bevorzugt Gebiete, in denen häufig Blitze einschlagen. Diese fängt es mit seiner Mähne, um ihre Energie in seinem Körper zu horten.",
        "pt-br": "Este Pokémon prefere lugares com muitas quedas de raio. Captura raios com sua crina e armazena eletricidade dentro de seu corpo.",
        "zh-tw": "喜歡經常發生落雷的土地。會用鬃毛接下雷電，把電力儲存到體內。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Double Headbutt",
                fr: "Double Coup d'Boule",
                es: "Doble Cabezazo",
                it: "Doppia Bottintesta",
                de: "Doppelte Kopfnuss",
                "pt-br": "Cabeçada Dupla",
                "zh-tw": "二連頭錘"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。"
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
