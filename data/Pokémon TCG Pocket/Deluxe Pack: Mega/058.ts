import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/058",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/058",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/058",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/058",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/058",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/058",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/058"
    },
    name: {
        en: "Mega Slowbro ex",
        fr: "Méga-Flagadoss-ex",
        es: "Mega-Slowbro ex",
        it: "Mega Slowbro-ex",
        de: "Mega-Lahmus-ex",
        "pt-br": "Mega Slowbro ex",
        "zh-tw": "超級呆殼獸ex",
        ja: "メガヤドランex",
        ko: "메가야도란 ex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 200,
    types: [
        "Water"
    ],
    dexId: [
        80
    ],
    evolveFrom: {
        en: "Slowpoke",
        fr: "Ramoloss",
        es: "Slowpoke",
        it: "Slowpoke",
        de: "Flegmon",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸",
        ja: "Slowpoke",
        ko: "Slowpoke"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Water",
                "Water",
                "Colorless"
            ],
            name: {
                en: "Laundry-Go-Round",
                fr: "Manège à Laver",
                es: "Triovivo",
                it: "Centrifuga Travolgente",
                de: "Reihumwäsche",
                "pt-br": "Carrossel Lavador",
                "zh-tw": "洗來運轉",
                ja: "Laundry-Go-Round",
                ko: "Laundry-Go-Round"
            },
            effect: {
                en: "Flip 3 coins. This attack also does 20 damage for each heads to each of your opponent's Benched Pokémon.",
                fr: "Lancez 3 pièces. Cette attaque inflige aussi 20 dégâts pour chaque côté face à chaque Pokémon de Banc de votre adversaire.",
                es: "Lanza 3 monedas. Este ataque también hace 20 puntos de daño por cada cara a cada uno de los Pokémon en Banca de tu rival.",
                it: "Lancia 3 volte una moneta. Questo attacco infligge anche 20 danni ogni volta che esce testa a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Wirf 3 Münzen. Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque também causa 20 pontos de dano para cada cara a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "擲3次硬幣,對手的所有備戰寶可夢也受到正面出現的次數×20點傷害。",
                ja: "Flip 3 coins. This attack also does 20 damage for each heads to each of your opponent's Benched Pokémon.",
                ko: "Flip 3 coins. This attack also does 20 damage for each heads to each of your opponent's Benched Pokémon."
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
