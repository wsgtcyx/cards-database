import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/006"
    },
    name: {
        en: "Cacnea",
        "fr": "Cacnéie",
        "es": "cacnea",
        "it": "Cacnea",
        "de": "Cacnea",
        "pt-br": "Cacneia",
        "zh-tw": "卡內亞"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It lives in arid locations. Its yellow flowers bloom\nonce a year.",
        "fr": "Il vit dans des endroits arides. Ses fleurs jaunes s'épanouissent\nune fois par an.",
        "es": "Vive en lugares áridos. Sus flores amarillas florecen\nuna vez al año.",
        "it": "Vive in luoghi aridi. I suoi fiori gialli sbocciano\nuna volta all'anno.",
        "de": "Es lebt an trockenen Standorten. Seine gelben Blüten blühen\neinmal im Jahr.",
        "pt-br": "Vive em locais áridos. Suas flores amarelas desabrocham\numa vez por ano.",
        "zh-tw": "它生活在乾旱的地方。它的黃色花朵盛開\n每年一次。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Corkscrew Punch",
                "fr": "Poinçon tire-bouchon",
                "es": "Sacacorchos",
                "it": "Punzone per cavatappi",
                "de": "Korkenzieherstanze",
                "pt-br": "Furador de saca-rolhas",
                "zh-tw": "螺旋沖頭"
            },
            damage: 30,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
