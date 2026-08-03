import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/048"
    },
    name: {
        en: "Bruxish",
        fr: "Denticrisse",
        es: "Bruxish",
        it: "Bruxish",
        de: "Knirfish",
        "pt-br": "Bruxish",
        "zh-tw": "磨牙彩皮魚",
        ko: "치갈기",
        ja: "ハギギシリ"
    },
    illustrator: "Misa Tsutsui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [779],
    stage: "Basic",
    description: {
        en: "When sunlight reflects on the ripples created by a Bruxish grinding its teeth, the water all around sparkles brilliantly."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
