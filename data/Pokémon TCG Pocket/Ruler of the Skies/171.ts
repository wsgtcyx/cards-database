import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/171"
    },
    name: {
        en: "Poochyena",
        fr: "Medhyèna",
        es: "Poochyena",
        it: "Poochyena",
        de: "Fiffyen",
        "pt-br": "Poochyena",
        "zh-tw": "土狼犬",
        ko: "포챠나",
        ja: "ポチエナ"
    },
    illustrator: "okayamatakatoshi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [261],
    stage: "Basic",
    description: {
        en: "Poochyena pursue their prey in packs. Once the prey is exhausted, the pack finishes it off. But sometimes the prey retaliates, and the pack flees."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Team Hunt"
            },
            effect: {
                en: "Draw a card for each Poochyena you have in play."
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
