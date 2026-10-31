import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/007",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/007",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/007"
    },
    name: {
        en: "Pinsir",
        "fr": "Scarabrute",
        "es": "Pinsir",
        "it": "Pinsir",
        "de": "Pinsir",
        "pt-br": "Pinsir",
        "zh-tw": "凱羅斯",
        ja: "カイロス",
        ko: "쁘사이저",
    },
    illustrator: "Toshinao Aoki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    description: {
        en: "These Pokémon judge one another based on\npincers. Thicker, more impressive pincers make\nfor more popularity with the opposite gender.",
        "fr": "Ces Pokémon se jugent mutuellement en fonction de\npinces. Des pinces plus épaisses et plus impressionnantes font\npour plus de popularité auprès du sexe opposé.",
        "es": "Estos Pokémon se juzgan entre sí basándose en\npinzas. Unas pinzas más gruesas e impresionantes hacen\npara obtener más popularidad entre el sexo opuesto.",
        "it": "Questi Pokémon si giudicano a vicenda in base a\ntenaglie. Le tenaglie sono più spesse e più impressionanti\nper una maggiore popolarità con il sesso opposto.",
        "de": "Diese Pokémon beurteilen sich gegenseitig anhand\nZangen. Dickere, eindrucksvollere Zangen ergeben\nfür mehr Beliebtheit beim anderen Geschlecht.",
        "pt-br": "Esses Pokémon julgam uns aos outros com base em\npinças. Pinças mais grossas e impressionantes fazem\npara mais popularidade com o sexo oposto.",
        "zh-tw": "這些神奇寶貝根據以下標準相互評判\n鉗子。更厚、更令人印象深刻的鉗子\n為了更受異性歡迎。",
        ja: "ツノで 互いを 格付けする。 太く 立派な ツノを 持つ カイロスほど 異性に 人気。",
        ko: "뿔로 서로의 등급을 매긴다.\n굵고 훌륭한 뿔을 가진\n쁘사이저일수록 이성에게 인기다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Guillotine",
                "fr": "Guillotine",
                "es": "Guillotina",
                "it": "Ghigliottina",
                "de": "Guillotine",
                "pt-br": "Guilhotina",
                "zh-tw": "斷頭台",
                ja: "ハサミギロチン",
                ko: "가위자르기"
            },
            damage: 70,
            cost: ["Grass", "Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
