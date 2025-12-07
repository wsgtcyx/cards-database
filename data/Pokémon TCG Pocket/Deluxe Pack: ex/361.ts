import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Charizard ex",
        "fr": "Dracaufeu ex",
        "es": "ex charizard",
        "it": "Charizard ex",
        "de": "Glurak ex",
        "pt-br": "Ex-Charizard",
        "zh-tw": "噴火龍 ex",
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmeleon",
        "fr": "Charméléon",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Charmeleon",
        "pt-br": "Charmeleon",
        "zh-tw": "火恐龍",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 60,
            cost: ["Fire", "Colorless", "Colorless"]
        }, {
            name: {
                en: "Crimson Storm",
                "fr": "Tempête cramoisie",
                "es": "Tormenta carmesí",
                "it": "Tempesta Cremisi",
                "de": "Purpurner Sturm",
                "pt-br": "Tempestade Carmesim",
                "zh-tw": "猩紅風暴"
            },
            damage: 200,
            cost: ["Fire", "Fire", "Colorless", "Colorless"],
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                "fr": "Défaussez 2 {R} Énergie de ce Pokémon.",
                "es": "Descarta 2 {R} de Energía de este Pokémon.",
                "it": "Scarta 2 Energie {R} da questo Pokémon.",
                "de": "Lege 2 {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 2 個 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
