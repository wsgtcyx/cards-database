import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/016",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/016"
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
        "zh-tw": "據說雪童子拜訪過的家庭將會繁榮。它可以承受-150華氏度的寒冷。"
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
                "zh-tw": "頭錘"
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
