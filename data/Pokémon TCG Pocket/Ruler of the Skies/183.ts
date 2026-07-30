import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/183"
    },
    name: {
        en: "Wailord ex",
        fr: "Wailord-ex",
        es: "Wailord ex",
        it: "Wailord-ex",
        de: "Wailord-ex",
        "pt-br": "Wailord ex",
        "zh-tw": "吼鯨王ex",
        ko: "고래왕 ex",
        ja: "ホエルオーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 250,
    types: ["Water"],
    dexId: [321],
    evolveFrom: {
        en: "Wailmer",
        fr: "Wailmer",
        es: "Wailmer",
        it: "Wailmer",
        de: "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
        ko: "고래왕자",
        ja: "ホエルコ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Water", "Water", "Water", "Water"],
            name: {
                en: "Wondrous Waves"
            },
            effect: {
                en: "This Pokémon recovers from all Special Conditions."
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 4
};

export default card;
