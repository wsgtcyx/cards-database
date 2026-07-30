import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/122"
    },
    name: {
        en: "Noivern",
        fr: "Bruyverne",
        es: "Noivern",
        it: "Noivern",
        de: "UHaFnir",
        "pt-br": "Noivern",
        "zh-tw": "音波龍",
        ko: "음번",
        ja: "オンバーン"
    },
    illustrator: "aoki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    dexId: [715],
    evolveFrom: {
        en: "Noibat",
        fr: "Sonistrelle",
        es: "Noibat",
        it: "Noibat",
        de: "eF-eM",
        "pt-br": "Noibat",
        "zh-tw": "嗡蝠",
        ko: "음뱃",
        ja: "オンバット"
    },
    stage: "Stage1",
    description: {
        en: "In the dark, even Hydreigon are terrified of this Pokémon. But in the light, Noivern is the one that avoids battle."
    },
    attacks: [
        {
            cost: ["Psychic", "Darkness", "Darkness"],
            name: {
                en: "Draco Meteor",
                fr: "Draco-Météore",
                es: "Cometa Draco",
                it: "Dragobolide",
                de: "Draco Meteor",
                "pt-br": "Meteoro do Dragão",
                "zh-tw": "流星群"
            },
            effect: {
                en: "1 of your opponent's Pokémon is chosen at random 3 times. For each time a Pokémon was chosen, do 60 damage to it."
            }
        }
    ],
    retreat: 1
};

export default card;
