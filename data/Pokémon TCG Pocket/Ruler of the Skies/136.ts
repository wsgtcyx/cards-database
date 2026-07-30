import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/136"
    },
    name: {
        en: "Kecleon",
        fr: "Kecleon",
        es: "Kecleon",
        it: "Kecleon",
        de: "Kecleon",
        "pt-br": "Kecleon",
        "zh-tw": "變隱龍",
        ko: "켈리몬",
        ja: "カクレオン"
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    dexId: [352],
    stage: "Basic",
    description: {
        en: "It changes color to blend in with its surroundings in order to sneak up on prey. It can't make its belly pattern disappear, however."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Samesies Slap"
            },
            effect: {
                en: "If this Pokémon and your opponent's Active Pokémon have 1 or more of the same type of Energy attached, this attack does 30 more damage."
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
