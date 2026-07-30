import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/073"
    },
    name: {
        en: "Chimecho",
        fr: "Éoko",
        es: "Chimecho",
        it: "Chimecho",
        de: "Palimpalim",
        "pt-br": "Chimecho",
        "zh-tw": "風鈴鈴",
        ko: "치렁",
        ja: "チリーン"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    dexId: [358],
    stage: "Basic",
    description: {
        en: "Its cries echo inside its hollow body to emerge as beautiful notes for startling and repelling foes."
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Extrasensory",
                fr: "Extrasenseur",
                es: "Paranormal",
                it: "Extrasenso",
                de: "Sondersensor",
                "zh-tw": "神通力"
            },
            effect: {
                en: "If you have the same number of cards in your hand as your opponent, this attack does 40 more damage."
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
