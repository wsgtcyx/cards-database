import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/087",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/087",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/087",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/087",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/087",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/087",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/087"
    },
    name: {
        en: "Timburr",
        fr: "Charpenti",
        es: "Timburr",
        it: "Timburr",
        de: "Praktibalk",
        "pt-br": "Timburr",
        "zh-tw": "搬運小匠",
        ko: "으랏차",
        ja: "ドッコラー"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [532],
    stage: "Basic",
    description: {
        en: "It fights by swinging a piece of lumber around. It is close to evolving when it can handle the lumber without difficulty.",
        fr: "Il combat avec une poutre. Quand il en\narrive à transporter de lourds madriers\nsans problème, l’évolution est proche."
    },
    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                en: "Confront",
                fr: "Confrontation",
                es: "Confrontar",
                it: "Confrontarsi",
                de: "Konfrontieren",
                "pt-br": "Confrontar",
                "zh-tw": "正面對決"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
