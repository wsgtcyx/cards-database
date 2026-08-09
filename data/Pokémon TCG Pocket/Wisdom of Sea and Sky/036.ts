import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/036",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/036",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/036",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/036",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/036",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/036",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/036"
    },
    name: {
        en: "Darmanitan",
        "fr": "Darumacho",
        "es": "Darmanitan",
        "it": "Darmanitan",
        "de": "Flampivian",
        "pt-br": "Darmanitan",
        "zh-tw": "達摩狒狒",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    evolveFrom: {
        en: "Darumaka",
        "fr": "Darumarond",
        "es": "Darumaka",
        "it": "Darumaka",
        "de": "Flampion",
        "pt-br": "Darumaka",
        "zh-tw": "火紅不倒翁",
    },
    description: {
        en: "The thick arms of this hot-blooded Pokémon\ncan deliver punches capable of obliterating a\ndump truck.",
        "fr": "Les bras épais de ce Pokémon au sang chaud\npeut délivrer des coups de poing capables d'effacer un\ncamion à benne basculante.",
        "es": "Los gruesos brazos de este Pokémon de sangre caliente\nPuede dar golpes capaces de destruir a un\ncamión volquete.",
        "it": "Le braccia spesse di questo Pokémon dal sangue caldo\npuò sferrare pugni capaci di annientare a\nautocarro con cassone ribaltabile.",
        "de": "Die dicken Arme dieses heißblütigen Pokémon\nkann Schläge ausführen, die einen auslöschen können\nMuldenkipper.",
        "pt-br": "Os braços grossos deste Pokémon de sangue quente\npode desferir socos capazes de obliterar um\ncaminhão basculante.",
        "zh-tw": "熱血神奇寶貝的粗壯手臂\n可以打出能夠消滅敵人的拳頭\n自卸車。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風"
            },
            damage: 70,
            cost: ["Fire", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
