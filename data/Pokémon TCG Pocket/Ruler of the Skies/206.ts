import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/206"
    },
    name: {
        en: "Marshtomp",
        fr: "Flobio",
        es: "Marshtomp",
        it: "Marshtomp",
        de: "Moorabbel",
        "pt-br": "Marshtomp",
        "zh-tw": "沼躍魚",
        ko: "늪짱이",
        ja: "ヌマクロー"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [259],
    evolveFrom: {
        en: "Mudkip",
        fr: "Gobou",
        es: "Mudkip",
        it: "Mudkip",
        de: "Hydropi",
        "pt-br": "Mudkip",
        "zh-tw": "水躍魚",
        ko: "물짱이",
        ja: "ミズゴロウ"
    },
    stage: "Stage1",
    description: {
        en: "It is at its best when on muddy ground that offers poor footing. It quickly overwhelms opponents that are bogged down and unable to move."
    },
    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
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
    retreat: 2
};

export default card;
