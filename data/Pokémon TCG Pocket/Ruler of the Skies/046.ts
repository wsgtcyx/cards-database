import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/046",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/046",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/046",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/046",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/046",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/046"
    },
    name: {
        en: "Dewpider",
        fr: "Araqua",
        es: "Dewpider",
        it: "Dewpider",
        de: "Araqua",
        "pt-br": "Dewpider",
        "zh-tw": "滴蛛",
        ko: "물거미",
        ja: "シズクモ"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [751],
    stage: "Basic",
    description: {
        en: "It supports the water bubble that envelops its head with three of its legs. Sometimes it secretly swaps which legs are holding up the bubble."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Wave Splash",
                fr: "Grosse Vague",
                es: "Chapoteo Ondulante",
                it: "Schizzi d'Onda",
                de: "Wellenplatscher",
                "pt-br": "Onda Borrifante",
                "zh-tw": "飛濺"
            },
            damage: 20
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
