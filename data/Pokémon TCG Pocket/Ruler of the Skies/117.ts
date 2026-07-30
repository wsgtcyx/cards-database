import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/117"
    },
    name: {
        en: "Dragonair",
        fr: "Draco",
        es: "Dragonair",
        it: "Dragonair",
        de: "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ko: "신뇽",
        ja: "ハクリュー"
    },
    illustrator: "HACCAN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Dragon"],
    dexId: [148],
    evolveFrom: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ko: "미뇽",
        ja: "ミニリュウ"
    },
    stage: "Stage1",
    description: {
        en: "It is called the divine POKéMON. When its entire body brightens slightly, the weather changes."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Dragon's Blessing"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is on your Bench, you may attach an Energy from your discard pile to your Active Dragon Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Draconic Whip",
                fr: "Fouet Draconien",
                es: "Látigo Dracónico",
                it: "Frustata del Drago",
                de: "Drachenpeitsche",
                "pt-br": "Chicote Dracônico",
                "zh-tw": "龍之鞭打"
            },
            damage: 40
        }
    ],
    retreat: 2
};

export default card;
