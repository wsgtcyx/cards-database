import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/022"
    },
    name: {
        en: "Flareon",
        fr: "Pyroli",
        es: "Flareon",
        it: "Flareon",
        de: "Flamara",
        "pt-br": "Flareon",
        "zh-tw": "火伊布",
        ko: "부스터",
        ja: "ブースター"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    dexId: [136],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ko: "이브이",
        ja: "イーブイ"
    },
    stage: "Stage1",
    description: {
        en: "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit."
    },
    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                en: "Burning Tail"
            },
            effect: {
                en: "Discard a Fire Energy from this Pokémon. Your opponent's Active Pokémon is now Burned."
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
