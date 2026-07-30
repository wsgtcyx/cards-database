import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/049"
    },
    name: {
        en: "Pikachu",
        fr: "Pikachu",
        es: "Pikachu",
        it: "Pikachu",
        de: "Pikachu",
        "pt-br": "Pikachu",
        "zh-tw": "皮卡丘",
        ko: "피카츄",
        ja: "ピカチュウ"
    },
    illustrator: "Kariya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [25],
    stage: "Basic",
    description: {
        en: "When several of these POKéMON gather, their electricity can build and cause lightning storms."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Growl",
                fr: "Rugissement",
                es: "Gruñido",
                it: "Ruggito",
                de: "Heuler",
                "pt-br": "Rosnadura",
                "zh-tw": "叫聲"
            },
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon do -20 damage."
            }
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
