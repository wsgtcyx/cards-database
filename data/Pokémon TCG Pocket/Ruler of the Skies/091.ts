import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/091",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/091",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/091",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/091",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/091",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/091",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/091"
    },
    name: {
        en: "Grimer",
        fr: "Tadmorv",
        es: "Grimer",
        it: "Grimer",
        de: "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "臭泥",
        ko: "알로라 질퍽이",
        ja: "アローラ ベトベター"
    },
    illustrator: "Nisota Niso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    dexId: [88],
    stage: "Basic",
    description: {
        en: "When two of these Pokémon's bodies are combined together, new poisons are created."
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Gentle Slap",
                fr: "Gifle Douce",
                es: "Bofetada Gentil",
                it: "Schiaffetto",
                de: "Sanfter Hieb",
                "pt-br": "Tapinha",
                "zh-tw": "重摑"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
