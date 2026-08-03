import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/104",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/104",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/104",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/104",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/104"
    },
    name: {
        en: "Skarmory",
        fr: "Airmure",
        es: "Skarmory",
        it: "Skarmory",
        de: "Panzaeron",
        "pt-br": "Skarmory",
        "zh-tw": "盔甲鳥",
        ko: "무장조",
        ja: "エアームド"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    dexId: [227],
    stage: "Basic",
    description: {
        en: "Since the feathers that it sheds are thin and sharp, people apparently once used them as swords."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Drill Peck",
                fr: "Bec Vrille",
                es: "Pico Taladro",
                it: "Perforare Peck",
                de: "Drill Peck",
                "pt-br": "Bico Broca",
                "zh-tw": "啄鑽"
            },
            damage: 40
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
