import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/062",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/062",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/062",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/062",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/062"
    },
    name: {
        en: "Wattrel",
        fr: "Zapétrel",
        es: "Wattrel",
        it: "Wattrel",
        de: "Voltrel",
        "pt-br": "Wattrel",
        "zh-tw": "電海燕",
        ko: "찌리비",
        ja: "カイデン"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [940],
    stage: "Basic",
    description: {
        en: "These Pokémon make their nests on coastal cliffs. The nests have a strange, crackling texture, and they’re a popular delicacy."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
