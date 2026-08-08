import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/132",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/132",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/132",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/132",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/132",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/132",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/132"
    },
    name: {
        en: "Aipom",
        fr: "Capumain",
        es: "Aipom",
        it: "Aipom",
        de: "Griffel",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
        ko: "에이팜",
        ja: "エイパム"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [190],
    stage: "Basic",
    description: {
        en: "Its tail moves with greater dexterity than its hands. Making deft use of this tail, Aipom lives high among the treetops."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Playful Kick",
                fr: "Coup de Pied de Garnement",
                es: "Patada Juguetona",
                it: "Calcio Briccone",
                de: "Verspielter Kick",
                "pt-br": "Chute Brincalhão",
                "zh-tw": "調皮踢"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
