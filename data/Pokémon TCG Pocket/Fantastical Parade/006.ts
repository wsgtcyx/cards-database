import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/006",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/006",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/006",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/006"
    },
    name: {
        en: "Cacnea",
        "fr": "Cacnea",
        "es": "Cacnea",
        "it": "Cacnea",
        "de": "Tuska",
        "pt-br": "Cacnea",
        "zh-tw": "刺球仙人掌",
        ja: "サボネア",
        ko: "선인왕"
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
        "zh-tw": "它生活在乾旱的地方。它的黃色花朵盛開\n每年一次。",
        ja: "雨が 少ない 乾燥した 地域に 生息。 １年に １回 黄色の 花を 咲かせる。",
        ko: "비가 적은 건조한 지역에 서식한다.\n1년에 1번 노란 꽃을 피운다."
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
                "zh-tw": "螺旋沖頭",
                ja: "どつく",
                ko: "쥐어박기"
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
