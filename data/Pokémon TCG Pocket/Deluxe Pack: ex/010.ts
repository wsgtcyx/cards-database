import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Beedrill ex",
        "fr": "Ex-Beedrill",
        "es": "ex beedrill",
        "it": "Beedrill es",
        "de": "Beedrill ex",
        "pt-br": "Beedrill ex",
        "zh-tw": "大針蜂 ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: ["Grass"],
    evolveFrom: {
        en: "Kakuna",
        "fr": "Kakuna",
        "es": "Kakuna",
        "it": "Kakuna",
        "de": "Kakuna",
        "pt-br": "Kakuna",
        "zh-tw": "鐵殼蛹",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Crushing Spear",
                "fr": "Lance écrasante",
                "es": "Lanza aplastante",
                "it": "Lancia schiacciante",
                "de": "Zerschmetternder Speer",
                "pt-br": "Lança Esmagadora",
                "zh-tw": "粉碎矛"
            },
            damage: 80,
            cost: ["Grass", "Grass"],
            effect: {
                en: "Discard a random Energy from your opponent's Active Pokémon.",
                "fr": "Défaussez une Énergie aléatoire du Pokémon Actif de votre adversaire.",
                "es": "Descarta una Energía aleatoria del Pokémon Activo de tu rival.",
                "it": "Scarta un'Energia casuale dal Pokémon attivo del tuo avversario.",
                "de": "Lege eine zufällige Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte uma Energia aleatória do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍神奇寶貝中的隨機能量。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
