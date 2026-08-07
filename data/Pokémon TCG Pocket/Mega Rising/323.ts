import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/323",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/323",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/323",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/323",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/323",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/323",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/323"
    },
    name: {
        en: "Lycanroc ex",
        "fr": "Lougaroc-ex",
        "es": "Lycanroc ex",
        "it": "Lycanroc-ex",
        "de": "Wolwerock-ex",
        "pt-br": "Lycanroc ex",
        "zh-tw": "鬃岩狼人ex",
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
