import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/106"
    },
    name: {
        en: "Beldum",
        fr: "Terhal",
        es: "Beldum",
        it: "Beldum",
        de: "Tanhel",
        "pt-br": "Beldum",
        "zh-tw": "鐵啞鈴",
        ko: "메탕",
        ja: "ダンバル"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    dexId: [374],
    stage: "Basic",
    description: {
        en: "All its cells are magnets. It communicates with others of its kind by transmitting magnetic forces from its body."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Conductive Body"
            },
            effect: {
                en: "If you have another Beldum in play, this Pokémon's Retreat Cost is 2 less."
            }
        }
    ],
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Ram",
                fr: "Collision",
                es: "Apisonar",
                it: "Carica",
                de: "Ramme",
                "pt-br": "Aríete",
                "zh-tw": "衝撞"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
