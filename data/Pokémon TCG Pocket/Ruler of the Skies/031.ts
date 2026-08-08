import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/031",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/031",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/031",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/031",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/031",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/031",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/031"
    },
    name: {
        en: "Golduck",
        fr: "Akwakwak",
        es: "Golduck",
        it: "Golduck",
        de: "Entoron",
        "pt-br": "Golduck",
        "zh-tw": "哥達鴨",
        ko: "골덕",
        ja: "ゴルダック"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Water"],
    dexId: [55],
    evolveFrom: {
        en: "Psyduck",
        fr: "Psykokwak",
        es: "Psyduck",
        it: "Psyduck",
        de: "Enton",
        "pt-br": "Psyduck",
        "zh-tw": "可達鴨",
        ko: "고라파덕",
        ja: "コダック"
    },
    stage: "Stage1",
    description: {
        en: "It swims grace­ fully along on the quiet, slow-moving rivers and lakes of which it is so fond."
    },
    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                en: "Surf",
                fr: "Surf",
                es: "Surf",
                it: "Surf",
                de: "Surfer",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 80
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
