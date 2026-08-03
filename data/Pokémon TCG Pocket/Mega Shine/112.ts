import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/112",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/112",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/112",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/112",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/112",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/112",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/112"
    },
    name: {
        en: "Mega Slowbro ex",
        fr: "Méga-Flagadoss-ex",
        es: "Mega-Slowbro ex",
        it: "Mega Slowbro-ex",
        de: "Mega-Lahmus-ex",
        "pt-br": "Mega Slowbro ex",
        "zh-tw": "超級呆殼獸ex",
        ko: "메가야도란 ex",
        ja: "メガヤドランex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 200,
    types: ["Water"],
    dexId: [80],
    evolveFrom: {
        en: "Slowpoke",
        fr: "Ramoloss",
        es: "Slowpoke",
        it: "Slowpoke",
        de: "Flegmon",
        "pt-br": "Slowpoke",
        "zh-tw": "呆呆獸",
        ko: "야돈",
        ja: "ヤドン"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Laundry-Go-Round",
                fr: "Manège à Laver",
                es: "Triovivo",
                it: "Centrifuga Travolgente",
                de: "Reihumwäsche",
                "pt-br": "Carrossel Lavador",
                "zh-tw": "洗來運轉"
            },
            effect: {
                en: "Flip 3 coins. This attack also does 20 damage for each heads to each of your opponent's Benched Pokémon.",
                fr: "Lancez 3 pièces. Cette attaque inflige également 20 dégâts pour chaque face à chacun des Pokémon de Banc de votre adversaire.",
                es: "Lanza 3 monedas. Este ataque también hace 20 puntos de daño por cada cabeza a cada uno de los Pokémon en Banca de tu rival.",
                it: "Lancia 3 monete. Questo attacco infligge inoltre 20 danni per ogni testa a ciascuno dei Pokémon nella panchina del tuo avversario.",
                de: "Wirf 3 Münzen. Dieser Angriff fügt außerdem jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 3 moedas. Este ataque também causa 20 pontos de dano para cada cara de cada Pokémon no Banco do seu oponente.",
                "zh-tw": "翻轉 3 個硬幣。此攻擊還會對對手的後備寶可夢每頭造成 20 點傷害。"
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
