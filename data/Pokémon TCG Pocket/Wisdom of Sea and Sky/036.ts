import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Darmanitan",
        "fr": "Darmanitan",
        "es": "darmanitano",
        "it": "Darmanitano",
        "de": "Darmanitan",
        "pt-br": "Darmanitano",
        "zh-tw": "達摩狒狒",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    evolveFrom: {
        en: "Darumaka",
        "fr": "Darumaka",
        "es": "Darumaka",
        "it": "Darumaka",
        "de": "Darumaka",
        "pt-br": "Darumaka",
        "zh-tw": "達摩卡"
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
