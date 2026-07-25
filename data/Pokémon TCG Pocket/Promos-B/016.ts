import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/016",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/016"
    },
    name: {
        en: "Krookodile",
        fr: "Crocorible",
        es: "Krookodile",
        it: "Krookodile",
        de: "Rabigator",
        "pt-br": "Krookodile",
        "zh-tw": "流氓鱷",
        ko: "악비아르",
        ja: "ワルビアル"
    },
    illustrator: "match",
    rarity: "None",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    dexId: [553],
    evolveFrom: {
        en: "Krokorok",
        fr: "Escroco",
        es: "Krokorok",
        it: "Krokorok",
        de: "Rokkaiman",
        "pt-br": "Krokorok",
        "zh-tw": "混混鱷",
        ko: "악비르",
        ja: "ワルビル"
    },
    stage: "Stage2",
    description: {
        en: "Its unique faculty of sight can detect small prey more than 30 miles away, even in the midst of a sandstorm.",
        fr: "Ses yeux perçants lui permettent de détecter\nune petite proie à 50 km, même au cœur\nd’une tempête de sable.",
        es: "Su vista es tan perspicaz que puede divisar\npresas de pequeño tamaño a 50 km de\ndistancia, incluso en plena tormenta de arena.",
        it: "I suoi occhi gli permettono di individuare prede\nminuscole a 50 km di distanza persino nelle\ntempeste di sabbia.",
        de: "Seine Augen sind so außergewöhnlich, dass es\nsogar in einem Sandsturm kleinste Beute aus\n50 km Entfernung entdecken kann.",
        "pt-br": "Sua capacidade de visão única pode detectar pequenas presas a mais de 48 quilômetros de distância, mesmo no meio de uma tempestade de areia.",
        "zh-tw": "擁有特殊的雙眼，\n即使在沙暴中也能發現\n前方５０公里處的小獵物。"
    },
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Colorless"],
            name: {
                en: "Chomp Chomp Bite",
                fr: "Mangeouille Vorace",
                es: "Mordisco Ñam Ñam",
                it: "Morso Mastica Bene",
                de: "Mampfbiss",
                "pt-br": "Mordida Nhoc Nhoc",
                "zh-tw": "大口啃咬"
            },
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                es: "Lanza una moneda hasta que obtengas cruz. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                it: "Lancia una moneta finché non esce croce. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                de: "Wirf eine Münze, bis du „Zahl“ erhältst. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até obter coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣，直到出現反面。對於每個頭，丟棄對手的活躍寶可夢中的隨機能量。"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol2"]
};

export default card;
