import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/198",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/198",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/198",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/198",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/198",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/198"
    },
    name: {
        en: "Crustle ex",
        fr: "Crabaraque-ex",
        es: "Crustle ex",
        it: "Crustle-ex",
        de: "Castellith-ex",
        "pt-br": "Crustle ex",
        "zh-tw": "岩殿居蟹ex",
        ko: "암팰리스 ex",
        ja: "イワパレスex"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 160,
    types: ["Fighting"],
    dexId: [558],
    evolveFrom: {
        en: "Dwebble",
        fr: "Crabicoque",
        es: "Dwebble",
        it: "Dwebble",
        de: "Lithomith",
        "pt-br": "Dwebble",
        "zh-tw": "石居蟹",
        ko: "돌살이",
        ja: "イシズマイ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Boulder Crush",
                fr: "Rocher Écrasant",
                es: "Alud de Rocas",
                it: "Macignata",
                de: "Felsenquetscher",
                "pt-br": "Rocha Esmagadora",
                "zh-tw": "岩石粉碎"
            },
            damage: 90
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
