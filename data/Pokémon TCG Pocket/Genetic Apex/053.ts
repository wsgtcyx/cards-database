import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/053",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/053",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/053",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/053",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/053",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/053",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A1/053",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A1/053"
    },
    name: {
        en: "Squirtle",
        fr: "Carapuce",
        es: "Squirtle",
        it: "Squirtle",
        de: "Schiggy",
        'pt-br': "Squirtle",
        ja: "ゼニガメ",
        ko: "꼬부기",
        "zh-tw": "傑尼龜"
    },
    illustrator: "Mizue",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    stage: "Basic",
    attacks: [{
            cost: ["Water"],
            name: {
                en: "Water Gun",
                fr: "Pistolet à O",
                es: "Pistola Agua",
                it: "Pistolacqua",
                de: "Aquaknarre",
                'pt-br': "Revólver d'Água",
                ja: "みずでっぽう",
                ko: "물대포",
                "zh-tw": "水槍"
            },
            damage: "20"
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond",
    description: {
        en: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        fr: "Quand il rentre son cou dans sa carapace,\nil peut projeter de l'eau à haute pression.",
        es: "Cuando retrae su largo cuello en el caparazón,\ndispara agua a una presión increíble.",
        it: "Quando ritrae il lungo collo dentro la\ncorazza sputa un vigoroso getto d'acqua.",
        de: "Zieht es seinen langen Hals in seinen Panzer\nzurück, verspritzt es Wasser mit unbändiger Kraft.",
        'pt-br': "Ao retrair o pescoço longo para dentro\ndo seu casco, lança um jato de água\nmuito poderoso.",
        ja: "長い 首を 甲羅のなかに 引っこめるとき 勢いよく 水鉄砲を 発射する。",
        ko: "기다란 목을 등껍질 속에\n감춘 다음 기세 좋게\n물대포를 발사한다.",
        "zh-tw": "當它把長長的脖子縮進殼裡時，就會用力噴出水。"
    },
    boosters: ["pikachu"]
};
export default card;
