import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
        "pt-br": "Misdreavus",
        "zh-tw": "夢妖",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy.",
        "fr": "Ce Pokémon surprend les gens en plein milieu de\nla nuit. Il rassemble la peur comme énergie.",
        "es": "Este Pokémon asusta a la gente en medio de\nla noche. Reúne el miedo como su energía.",
        "it": "Questo Pokémon spaventa le persone nel mezzo\nla notte. Raccoglie la paura come energia.",
        "de": "Dieses Pokémon erschreckt die Leute mittendrin\ndie Nacht. Es sammelt Angst als seine Energie.",
        "pt-br": "Este Pokémon assusta as pessoas no meio de\na noite. Ele reúne o medo como sua energia.",
        "zh-tw": "這個神奇寶貝在中間嚇到了人們\n那個晚上。它聚集恐懼作為能量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mumble",
                "fr": "Marmonner",
                "es": "Mascullar",
                "it": "Mumble",
                "de": "Murmeln",
                "pt-br": "Resmungar",
                "zh-tw": "咕噥"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
