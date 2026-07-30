import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/041"
    },
    name: {
        en: "Kyogre",
        fr: "Kyogre",
        es: "Kyogre",
        it: "Kyogre",
        de: "Kyogre",
        "pt-br": "Kyogre",
        "zh-tw": "蓋歐卡",
        ko: "가이오가",
        ja: "カイオーガ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    dexId: [382],
    stage: "Basic",
    description: {
        en: "It is said to have widened the seas by causing downpours. It had been asleep in a marine trench.",
        fr: "On dit qu’il a fait monter les eaux en causant des\npluies diluviennes. Il somnolait dans une fosse marine.",
        es: "Se dice que aumentó el nivel del mar a base de\naguaceros. Ha estado durmiendo en una fosa marina.",
        it: "Si dice che abbia ampliato i mari provocando piogge\ntorrenziali. Si è assopito in una fossa marina.",
        de: "Man sagt, es habe die Meere vergrößert, indem es\nes regnen ließ. Es schlief in einem Meeresgraben."
    },
    attacks: [
        {
            cost: ["Water", "Water", "Water", "Water"],
            name: {
                en: "Tidal Blast"
            },
            effect: {
                en: "Discard 3 {W} Energy from this Pokémon, and this attack does 50 damage to each of your opponent's Pokémon."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
