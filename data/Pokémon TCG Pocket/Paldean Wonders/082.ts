import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/082",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/082"
    },
    name: {
        en: "Maushold",
        fr: "Famignol",
        es: "Maushold",
        it: "Maushold",
        de: "Famieps",
        "pt-br": "Maushold",
        "zh-tw": "一家鼠",
        pt: "Maushold"
    },
    illustrator: "Saya Tsuruta",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [925],
    evolveFrom: {
        en: "Tandemaus",
        fr: "Compagnol",
        es: "Tandemaus",
        it: "Tandemaus",
        de: "Zwieps",
        "pt-br": "Tandemaus",
        "zh-tw": "一對鼠",
        pt: "Tandemaus"
    },
    description: {
        en: "The little one just appeared one day. They all live together like a family, but the relationship between the three is still unclear.",
        "fr": "Le petit vient d'apparaître un jour. Ils vivent tous ensemble comme une famille, mais la relation entre les trois n'est toujours pas claire.",
        "es": "El pequeño apareció justo un día. Todos viven juntos como una familia, pero la relación entre los tres aún no está clara.",
        "it": "Il piccolo è appena apparso un giorno. Vivono tutti insieme come una famiglia, ma il rapporto tra i tre non è ancora chiaro.",
        "de": "Der Kleine ist gerade eines Tages aufgetaucht. Sie leben alle wie eine Familie zusammen, doch die Beziehung der drei zueinander ist noch unklar.",
        "pt-br": "O pequeno apareceu um dia. Todos vivem juntos como uma família, mas a relação entre os três ainda não está clara.",
        "zh-tw": "小傢伙有一天才出現。他們都像一家人一樣生活在一起，但三人之間的關係至今仍不清楚。"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Triple Gnawing",
                "fr": "Triple rongement",
                "es": "Triple Roer",
                "it": "Tripla rosicchiatura",
                "de": "Dreifaches Nagen",
                "pt-br": "Roedor Triplo",
                "zh-tw": "三重啃咬"
            },
            damage: "60",
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip 3 coins. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez 3 pièces. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza 3 monedas. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia 3 monete. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf 3 Münzen. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue 3 moedas. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "翻轉 3 個硬幣。對於每個頭，丟棄對手的戰鬥寶可夢中的隨機能量。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
