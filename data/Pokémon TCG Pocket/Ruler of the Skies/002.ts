import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/002"
    },
    name: {
        en: "Silcoon",
        fr: "Armulys",
        es: "Silcoon",
        it: "Silcoon",
        de: "Schaloko",
        "pt-br": "Silcoon",
        "zh-tw": "甲殼繭",
        ko: "실쿤",
        ja: "カラサリス"
    },
    illustrator: "Satoshi Shirai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [266],
    evolveFrom: {
        en: "Wurmple",
        fr: "Chenipotte",
        es: "Wurmple",
        it: "Wurmple",
        de: "Waumpel",
        "pt-br": "Wurmple",
        "zh-tw": "刺尾蟲",
        ko: "개무소",
        ja: "ケムッソ"
    },
    stage: "Stage1",
    description: {
        en: "It drinks dew that collects on its silk and waits for evolution. Its hard cocoon repels attacks.",
        fr: "Il boit la rosée récoltée par sa soie en attendant\nd’évoluer. Il est à l’abri dans son robuste cocon.",
        es: "Bebe el rocío que recoge con su seda mientras espera\nevolucionar. Se defiende en su capullo.",
        it: "Beve la rugiada che si posa sulla seta e aspetta\nl’evoluzione. Il suo bozzolo duro respinge gli attacchi.",
        de: "Es trinkt den Tau, der sich in der Seide fängt, und\nwartet auf seine Entwicklung. Sein Kokon schützt es."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Cocoon Collector"
            },
            effect: {
                en: "Put 3 random cards from among Silcoon and Cascoon from your deck onto your Bench."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
