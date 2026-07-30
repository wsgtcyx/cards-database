import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/133"
    },
    name: {
        en: "Ambipom",
        fr: "Capidextre",
        es: "Ambipom",
        it: "Ambipom",
        de: "Ambidiffel",
        "pt-br": "Ambipom",
        "zh-tw": "雙尾怪手",
        ko: "겟핸보숭",
        ja: "エテボース"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [424],
    evolveFrom: {
        en: "Aipom",
        fr: "Capumain",
        es: "Aipom",
        it: "Aipom",
        de: "Griffel",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
        ko: "에이팜",
        ja: "エイパム"
    },
    stage: "Stage1",
    description: {
        en: "Split into two, the tails are so adept at handling and doing things, AMBIPOM rarely uses its hands."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Smack",
                fr: "Claque",
                es: "Palmetazo",
                it: "Schiaffo",
                de: "Klatscher",
                "pt-br": "Estalo",
                "zh-tw": "掌擊"
            },
            damage: 60
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
