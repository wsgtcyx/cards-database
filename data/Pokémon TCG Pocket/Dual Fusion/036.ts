import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/036",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/036"
    },
    name: {
        en: "Jynx",
        fr: "Lippoutou",
        es: "Jynx",
        "pt-br": "Jynx",
        "zh-tw": "迷唇姐",
        ja: "ルージュラ",
        ko: "루주라",
        it: "Jynx",
        de: "Rossana"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 80,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Slap",
                fr: "Gifle",
                es: "Bofetón",
                it: "Sberla",
                de: "Hieb",
                "pt-br": "Tapa",
                "zh-tw": "巴掌",
                ja: "Slap",
                ko: "Slap"
            },
            cost: [
                "Water"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
        fr: "Dans une certaine zone de Galar, Lippoutou était craint et vénéré par la population qui l’avait surnommé la « reine des glaces ».",
        es: "En cierta parte de Galar se conocía a Jynx como la Reina del Hielo y se reverenciaba con cierto temor.",
        it: "In una certa zona di Galar, Jynx era temuto e venerato dagli abitanti, che lo chiamavano “Regina dei ghiacci”.",
        de: "In einer bestimmten Gegend von Galar wurde Rossana einst als „Königin des Eises“ gleichermaßen gefürchtet wie verehrt.",
        "pt-br": "Em algumas partes de Galar, Jynx já foi temida e idolatrada como a “Rainha do Gelo”.",
        "zh-tw": "在伽勒爾的某個地區，人們既害怕她又崇拜她，並且敬稱其為「冰之女王」。",
        ja: "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
        ko: "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice."
    }
};

export default card;
