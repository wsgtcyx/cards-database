import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/070"
    },
    name: {
        en: "Mewtwo",
        fr: "Mewtwo",
        es: "Mewtwo",
        it: "Mewtwo",
        de: "Mewtu",
        "pt-br": "Mewtwo",
        "zh-tw": "超夢",
        ko: "뮤츠",
        ja: "ミュウツー"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    dexId: [150],
    stage: "Basic",
    description: {
        en: "The research efforts of a certain scientist ultimately resulted in this Pokémon. Its powers are dedicated to battling."
    },
    attacks: [
        {
            cost: ["Psychic", "Psychic", "Psychic"],
            name: {
                en: "Psychic",
                fr: "Psyko",
                es: "Psíquico",
                it: "Psichico",
                de: "Psychokinese",
                "pt-br": "Psíquico",
                "zh-tw": "精神強念"
            },
            effect: {
                en: "This attack does 40 more damage for each Energy attached to your opponent's Active Pokémon."
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
