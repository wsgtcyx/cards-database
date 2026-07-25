import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/078",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/078",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/078",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/078",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/078",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/078"
    },
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
    rarity: "Two Star",
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
