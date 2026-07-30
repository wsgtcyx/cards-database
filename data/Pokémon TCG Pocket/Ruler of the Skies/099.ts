import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/099"
    },
    name: {
        en: "Swalot",
        fr: "Avaltout",
        es: "Swalot",
        it: "Swalot",
        de: "Schlukwech",
        "pt-br": "Swalot",
        "zh-tw": "吞食獸",
        ko: "꿀꺽몬",
        ja: "マルノーム"
    },
    illustrator: "Yuka Morii",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [317],
    evolveFrom: {
        en: "Gulpin",
        fr: "Gloupti",
        es: "Gulpin",
        it: "Gulpin",
        de: "Schluppuck",
        "pt-br": "Gulpin",
        "zh-tw": "溶食獸",
        ko: "꼴깍몬",
        ja: "ゴクリン"
    },
    stage: "Stage1",
    description: {
        en: "It can swallow a tire whole in one gulp. It secretes a horribly toxic fluid from the pores on its body."
    },
    attacks: [
        {
            cost: ["Darkness", "Colorless"],
            name: {
                en: "Swallow Up"
            },
            effect: {
                en: "If your opponent's Active Pokémon has less remaining HP than this Pokémon, this attack does 80 more damage."
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
    retreat: 3
};

export default card;
