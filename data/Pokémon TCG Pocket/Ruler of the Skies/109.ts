import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/109"
    },
    name: {
        en: "Mega Metagross ex",
        fr: "Méga-Métalosse-ex",
        es: "Mega-Metagross ex",
        it: "Mega Metagross-ex",
        de: "Mega-Metagross-ex",
        "pt-br": "Mega Metagross ex",
        "zh-tw": "超級巨金怪ex",
        ko: "메가메타그로스 ex",
        ja: "メガメタグロスex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 230,
    types: ["Metal"],
    dexId: [376],
    evolveFrom: {
        en: "Metang",
        fr: "Métang",
        es: "Metang",
        it: "Metang",
        de: "Metang",
        "pt-br": "Metang",
        "zh-tw": "金屬怪",
        ko: "메탕구",
        ja: "メタング"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Gatling Slug"
            },
            effect: {
                en: "This attack does 10 more damage for each {M} Energy attached to this Pokémon."
            },
            damage: "100+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
