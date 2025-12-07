import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Lycanroc ex",
        "fr": "Lycanroc ex",
        "es": "Lycanroc ex",
        "it": "Lycanroc es",
        "de": "Lycanroc ex",
        "pt-br": "Ex-Lycanroc",
        "zh-tw": "鬃岩狼人 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Fighting"],
    evolveFrom: {
        en: "Rockruff",
        "fr": "Rockruff",
        "es": "rockruff",
        "it": "Rockruff",
        "de": "Rockruff",
        "pt-br": "Rockruff",
        "zh-tw": "岩狗狗",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Lycanfang",
                "fr": "Lycancroc",
                "es": "colmillo licántropo",
                "it": "Lycanfang",
                "de": "Lycanfang",
                "pt-br": "Presa Licantina",
                "zh-tw": "狼牙"
            },
            damage: 130,
            cost: ["Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Discard a {F} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {F} de ce Pokémon.",
                "es": "Descarta una Energía {F} de este Pokémon.",
                "it": "Scarta un'Energia {F} da questo Pokémon.",
                "de": "Wirf eine {F}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {F} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {F} 能量。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
