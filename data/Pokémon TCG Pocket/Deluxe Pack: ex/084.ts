import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/084",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/084",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/084",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/084",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/084",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/084",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/084",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/084",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/084"
    },
    name: {
        en: "Squirtle",
        "fr": "Carapuce",
        "es": "Squirtle",
        "it": "Squirtle",
        "de": "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "ゼニガメ",
        ko: "꼬부기"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "When it retracts its long neck into its shell, it\nsquirts out water with vigorous force.",
        "fr": "Lorsqu'il rentre son long cou dans sa coquille, il\nprojette de l'eau avec une force vigoureuse.",
        "es": "Cuando retrae su largo cuello dentro de su caparazón,\nLanza agua con fuerza vigorosa.",
        "it": "Quando ritrae il lungo collo nel guscio,\nschizza acqua con forza vigorosa.",
        "de": "Wenn es seinen langen Hals in seinen Panzer zurückzieht, ist es\nspritzt Wasser mit kräftiger Kraft heraus.",
        "pt-br": "Quando ele retrai o longo pescoço para dentro da concha, ele\nesguicha água com força vigorosa.",
        "zh-tw": "當它把長脖子縮進殼裡時\n用強力噴出水。",
        ja: "長い 首を 甲羅のなかに 引っこめるとき 勢いよく 水鉄砲を 発射する。",
        ko: "기다란 목을 등껍질 속에\n감춘 다음 기세 좋게\n물대포를 발사한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍",
                ja: "みずでっぽう",
                ko: "물대포"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
