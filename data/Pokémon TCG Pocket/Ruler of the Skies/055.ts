import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/055"
    },
    name: {
        en: "Rotom ex",
        fr: "Motisma-ex",
        es: "Rotom ex",
        it: "Rotom-ex",
        de: "Rotom-ex",
        "pt-br": "Rotom ex",
        "zh-tw": "洛托姆ex",
        ko: "로토무 ex",
        ja: "ロトムex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    dexId: [479],
    stage: "Basic",
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Junk Spark"
            },
            effect: {
                en: "This attack does 10 more damage for each Item card in your discard pile."
            },
            damage: "30+"
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
