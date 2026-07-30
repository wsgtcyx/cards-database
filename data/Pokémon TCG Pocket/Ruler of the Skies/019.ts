import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/019"
    },
    name: {
        en: "Teal Mask Ogerpon",
        fr: "Ogerpon Masque Turquoise",
        es: "Ogerpon Máscara Turquesa",
        it: "Ogerpon Maschera Turchese",
        de: "Ogerpon (Türkisgrüne Maske)",
        "pt-br": "Ogerpon Máscara Turquesa",
        "zh-tw": "厄鬼椪 碧草面具",
        ko: "오거폰 벽록의가면",
        ja: "オーガポン みどりのめん"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    stage: "Basic",
    description: {
        en: "This mischief-loving Pokémon is full of curiosity. It battles by drawing out the type-based energy contained within its masks."
    },
    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                en: "Ogre's Whip"
            },
            effect: {
                en: "This attack does damage to your opponent's Active Pokémon equal to this Pokémon's remaining HP."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
