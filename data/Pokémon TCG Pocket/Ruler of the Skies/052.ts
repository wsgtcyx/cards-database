import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/052",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/052",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/052",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/052"
    },
    name: {
        en: "Luxio",
        fr: "Luxio",
        es: "Luxio",
        it: "Luxio",
        de: "Luxio",
        "pt-br": "Luxio",
        "zh-tw": "勒克貓",
        ko: "럭시오",
        ja: "ルクシオ"
    },
    illustrator: "Eri Yamaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    dexId: [404],
    evolveFrom: {
        en: "Shinx",
        fr: "Lixy",
        es: "Shinx",
        it: "Shinx",
        de: "Sheinux",
        "pt-br": "Shinx",
        "zh-tw": "小貓怪",
        ko: "꼬링크",
        ja: "コリンク"
    },
    stage: "Stage1",
    description: {
        en: "By gathering their tails together, they collectively generate powerful electricity from their claws."
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Zap Kick",
                fr: "Coup de Pied Ravageur",
                es: "Electropatada",
                it: "Calcio di zap",
                de: "Zap-Kick",
                "pt-br": "Chute Zap",
                "zh-tw": "電氣踢"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 0
};

export default card;
