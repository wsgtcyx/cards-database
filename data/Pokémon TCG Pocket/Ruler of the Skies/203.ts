import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/203"
    },
    name: {
        en: "Mega Rayquaza ex",
        fr: "Méga-Rayquaza-ex",
        es: "Mega-Rayquaza ex",
        it: "Mega Rayquaza-ex",
        de: "Mega-Rayquaza-ex",
        "pt-br": "Mega Rayquaza ex",
        "zh-tw": "超級烈空坐ex",
        ko: "메가레쿠쟈 ex",
        ja: "メガレックウザex"
    },
    illustrator: "Iwamoto05",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    dexId: [384],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fire", "Lightning"],
            name: {
                en: "Mega Burst"
            },
            effect: {
                en: "Discard all {R} and {L} Energy from this Pokémon, and this attack does 50 damage for each Energy you discarded in this way."
            },
            damage: "50x"
        }
    ],
    retreat: 1
};

export default card;
