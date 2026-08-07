import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/001",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/001"
    },
    name: {
        en: "Ledyba",
        "fr": "Coxy",
        "es": "Ledyba",
        "it": "Ledyba",
        "de": "Ledyba",
        "pt-br": "Ledyba",
        "zh-tw": "芭瓢蟲"
    },
    illustrator: "Yuka Morii",
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
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
