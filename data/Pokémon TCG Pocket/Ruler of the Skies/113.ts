import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/113"
    },
    name: {
        en: "Archaludon",
        fr: "Pondralugon",
        es: "Archaludon",
        it: "Archaludon",
        de: "Briduradon",
        "pt-br": "Archaludon",
        "zh-tw": "鋁鋼橋龍",
        ko: "브리두라스",
        ja: "ブリジュラス"
    },
    illustrator: "Takumi Wada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    dexId: [1018],
    evolveFrom: {
        en: "Duraludon",
        fr: "Duralugon",
        es: "Duraludon",
        it: "Duraludon",
        de: "Duraludon",
        "pt-br": "Duraludon",
        "zh-tw": "鋁鋼龍",
        ko: "두랄루돈",
        ja: "ジュラルドン"
    },
    stage: "Stage1",
    description: {
        en: "It digs holes on mountains, searching for food. It’s so durable that being caught in a cave-in won’t faze it."
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Raging Blade"
            },
            effect: {
                en: "If this Pokémon has damage on it, this attack does 80 more damage."
            },
            damage: "80+"
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
