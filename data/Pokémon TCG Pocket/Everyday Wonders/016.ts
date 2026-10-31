import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/016",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/016",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/016",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/016",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/016",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/016",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3b/016",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3b/016"
    },
    name: {
        en: "Snorunt",
        fr: "Stalgamin",
        es: "Snorunt",
        it: "Snorunt",
        de: "Schneppke",
        "pt-br": "Snorunt",
        "zh-tw": "雪童子",
        ko: "눈꼬마",
        ja: "ユキワラシ"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [361],
    stage: "Basic",
    description: {
        en: "It is said that a home visited by a Snorunt will prosper. It can withstand cold of -150 degrees Fahrenheit.",
        fr: "On dit qu’une maison visitée par un Stalgamin prospérera. Il peut résister à un froid de -150 degrés Fahrenheit.",
        es: "Se dice que una casa visitada por un Snorunt prosperará. Puede soportar un frío de -150 grados Fahrenheit.",
        it: "Si dice che una casa visitata da uno Snorunt prospererà. Può resistere al freddo di -150 gradi Fahrenheit.",
        de: "Man sagt, dass ein Haus, das von einem Schneppke besucht wird, gedeihen wird. Es hält einer Kälte von -150 Grad Fahrenheit stand.",
        "pt-br": "Diz-se que uma casa visitada por um Snorunt prosperará. Pode suportar frio de -150 graus Fahrenheit.",
        "zh-tw": "據說雪童子拜訪過的家庭將會繁榮。它可以承受-150華氏度的寒冷。",
        ja: "ユキワラシが 訪れた 家は お金持ちに なると 言われている。 マイナス 100度でも へっちゃら。",
        ko: "눈꼬마가 찾아온 집은\n부자가 된다고 전해진다.\n영하 100도에도 끄떡없다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Headbutt",
                fr: "Coup d'Boule",
                es: "Golpe Cabeza",
                it: "Bottintesta",
                de: "Kopfnuss",
                "pt-br": "Cabeçada",
                "zh-tw": "頭錘",
                ja: "ずつき",
                ko: "박치기"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
