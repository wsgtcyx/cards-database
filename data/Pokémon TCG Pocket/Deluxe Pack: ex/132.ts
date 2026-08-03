import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/132"
    },
    name: {
        en: "Pikachu ex",
        "fr": "Pikachu-ex",
        "es": "Pikachu ex",
        "it": "Pikachu-ex",
        "de": "Pikachu-ex",
        "pt-br": "Pikachu ex",
        "zh-tw": "皮卡丘ex",
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Thunderbolt",
                "fr": "Coup de tonnerre",
                "es": "Rayo",
                "it": "Fulmine",
                "de": "Blitz",
                "pt-br": "Raio",
                "zh-tw": "霹靂"
            },
            damage: 150,
            cost: ["Lightning", "Lightning", "Lightning"],
            effect: {
                en: "Discard all Energy from this Pokémon.",
                "fr": "Défaussez toute l'énergie de ce Pokémon.",
                "es": "Descarta toda la Energía de este Pokémon.",
                "it": "Scarta tutte le Energie da questo Pokémon.",
                "de": "Lege die gesamte Energie dieses Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的所有能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
