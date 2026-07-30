import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/165"
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
    illustrator: "Natsumi Yoshida",
    rarity: "One Star",
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
