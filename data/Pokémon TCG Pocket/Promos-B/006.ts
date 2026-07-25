import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/006",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/006"
    },
    name: {
        en: "Mega Pidgeot ex",
        fr: "Méga-Roucarnage-ex",
        es: "Mega-Pidgeot ex",
        it: "Mega Pidgeot-ex",
        de: "Mega-Tauboss-ex",
        "pt-br": "Mega Pidgeot ex",
        "zh-tw": "超級大比鳥ex",
        ko: "메가피죤투 ex",
        ja: "メガピジョットex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 210,
    types: ["Colorless"],
    dexId: [18],
    evolveFrom: {
        en: "Pidgeotto",
        fr: "Roucoups",
        es: "Pidgeotto",
        it: "Pidgeotto",
        de: "Tauboga",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ko: "피죤",
        ja: "ピジョン"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Giant Twister",
                fr: "Tornade Géante",
                es: "Tornado Gigante",
                it: "Tornado Gigante",
                de: "Gigantischer Wirbel",
                "pt-br": "Tornado Gigante",
                "zh-tw": "巨型龍捲風"
            },
            effect: {
                en: "Flip 3 coins. For each heads, discard a random Energy from your opponent's Active Pokémon. If all of them are tails, this attack does nothing.",
                fr: "Lancez 3 pièces. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire. Si tous sont face, cette attaque ne fait rien.",
                es: "Lanza 3 monedas. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival. Si todos son cruz, este ataque no hace nada.",
                it: "Lancia 3 monete. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario. Se escono tutte croce, questo attacco non ha alcun effetto.",
                de: "Wirf 3 Münzen. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab. Wenn alle davon Schwänze sind, bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue 3 moedas. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente. Se todos derem coroa, este ataque não fará nada.",
                "zh-tw": "翻轉 3 個硬幣。對於每個頭，丟棄對手的活躍寶可夢中的隨機能量。如果它們都是反面，則此攻擊不起作用。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol1"]
};

export default card;
