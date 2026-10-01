import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/133",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/133",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/133",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/133",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/133",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/133",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/133"
    },
    name: {
        en: "Crustle ex",
        fr: "Crabaraque-ex",
        es: "Crustle ex",
        it: "Crustle-ex",
        de: "Castellith-ex",
        "pt-br": "Crustle ex",
        "zh-tw": "岩殿居蟹ex",
        ja: "イワパレスex",
        ko: "암팰리스 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: [
        "Fighting"
    ],
    dexId: [
        558
    ],
    evolveFrom: {
        en: "Dwebble",
        fr: "Crabicoque",
        es: "Dwebble",
        it: "Dwebble",
        de: "Lithomith",
        "pt-br": "Dwebble",
        "zh-tw": "石居蟹",
        ja: "Dwebble",
        ko: "Dwebble"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Fighting",
                "Fighting"
            ],
            name: {
                en: "Boulder Crush",
                fr: "Rocher Écrasant",
                es: "Alud de Rocas",
                it: "Macignata",
                de: "Felsenquetscher",
                "pt-br": "Rocha Esmagadora",
                "zh-tw": "岩石粉碎",
                ja: "Boulder Crush",
                ko: "Boulder Crush"
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
