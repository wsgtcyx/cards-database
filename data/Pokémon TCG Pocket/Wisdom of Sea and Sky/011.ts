import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ledyba",
        "fr": "Lédyba",
        "es": "Ledyba",
        "it": "Ledyba",
        "de": "Ledyba",
        "pt-br": "Ledyba",
        "zh-tw": "芭瓢蟲",
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "These very cowardly Pokémon join together and\nuse Reflect to protect their nest.",
        "fr": "Ces Pokémon très lâches se réunissent et\nutilisez Reflect pour protéger leur nid.",
        "es": "Estos Pokémon muy cobardes se unen y\nusa Reflect para proteger su nido.",
        "it": "Questi Pokémon molto codardi si uniscono e\nusa Reflect per proteggere il loro nido.",
        "de": "Diese sehr feigen Pokémon schließen sich zusammen und\nVerwenden Sie Reflect, um ihr Nest zu schützen.",
        "pt-br": "Esses Pokémon muito covardes se unem e\nuse Reflect para proteger seu ninho.",
        "zh-tw": "這些非常膽小的神奇寶貝聯合起來，\n使用反射來保護它們的巢穴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bug Bite",
                "fr": "Morsure d'insecte",
                "es": "picadura de insecto",
                "it": "Morso di insetto",
                "de": "Insektenstich",
                "pt-br": "Mordida de inseto",
                "zh-tw": "蟲咬"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
