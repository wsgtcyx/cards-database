import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/053"
    },
    name: {
        en: "Luxray",
        fr: "Luxray",
        es: "Luxray",
        it: "Luxray",
        de: "Luxtra",
        "pt-br": "Luxray",
        "zh-tw": "倫琴貓",
        ko: "렌트라",
        ja: "レントラー"
    },
    illustrator: "aoki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [405],
    evolveFrom: {
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
    stage: "Stage2",
    description: {
        en: "LUXRAY’s ability to see through objects comes in handy when it’s scouting for danger."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Revenge Blast"
            },
            effect: {
                en: "This attack does 50 more damage for each point your opponent has gotten."
            },
            damage: "80+"
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
