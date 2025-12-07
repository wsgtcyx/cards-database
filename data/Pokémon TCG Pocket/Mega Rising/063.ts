import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Tympole",
        "fr": "Tympole",
        "es": "tímpano",
        "it": "Timpano",
        "de": "Trommelfell",
        "pt-br": "Timpole",
        "zh-tw": "圓蝌蚪",
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It uses sound waves to communicate with\nothers of its kind. People and other Pokémon\nspecies can't hear its cries of warning.",
        "fr": "Il utilise des ondes sonores pour communiquer avec\nd'autres du genre. Les gens et autres Pokémon\nles espèces ne peuvent pas entendre ses cris d’avertissement.",
        "es": "Utiliza ondas sonoras para comunicarse con\notros de su tipo. Personas y otros Pokémon\nlas especies no pueden escuchar sus gritos de advertencia.",
        "it": "Utilizza le onde sonore per comunicare\naltri del suo genere. Persone e altri Pokémon\nla specie non può sentire le sue grida di avvertimento.",
        "de": "Zur Kommunikation nutzt es Schallwellen\nandere seiner Art. Menschen und andere Pokémon\nArten können ihre Warnrufe nicht hören.",
        "pt-br": "Ele usa ondas sonoras para se comunicar com\noutros de seu tipo. Pessoas e outros Pokémon\nespécies não conseguem ouvir seus gritos de alerta.",
        "zh-tw": "它利用聲波與\n其他同類。人和其他神奇寶貝\n物種聽不到它的警告叫聲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mud-Slap",
                "fr": "Gifle de boue",
                "es": "Bofetada de barro",
                "it": "Schiaffo di fango",
                "de": "Schlammklatsch",
                "pt-br": "Tapa de lama",
                "zh-tw": "拍泥"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
