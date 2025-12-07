import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Guzzlord ex",
        "fr": "Ex-Guzzlord",
        "es": "ex guzzlord",
        "it": "Guzzlord es",
        "de": "Guzzlord ex",
        "pt-br": "Guzzlord ex",
        "zh-tw": "惡食大王 ex",
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Darkness"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Grindcore",
                "fr": "Grindcore",
                "es": "Grindcore",
                "it": "Grindcore",
                "de": "Grindcore",
                "pt-br": "Grindcore",
                "zh-tw": "磨核"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda hasta que obtengas cruz. Por cada cara, descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Lancia una moneta finché non esce croce. Per ogni testa, scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze, bis du „Zahl“ erhältst. Lege für jeden Kopf eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda até obter coroa. Para cada cara, descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣，直到出現反面。對於每個頭，丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }, {
            name: {
                en: "Tyrannical Hole",
                "fr": "Trou tyrannique",
                "es": "Agujero tiránico",
                "it": "Buco tirannico",
                "de": "Tyrannisches Loch",
                "pt-br": "Buraco Tirânico",
                "zh-tw": "強橫洞"
            },
            damage: 120,
            cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
