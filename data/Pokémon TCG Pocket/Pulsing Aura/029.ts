import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/029"
    },
    name: {
        en: "Darumaka",
        fr: "Darumarond",
        es: "Darumaka",
        it: "Darumaka",
        de: "Flampion",
        "pt-br": "Darumaka",
        "zh-tw": "火紅不倒翁",
        ko: "달막화",
        ja: "ダルマッカ"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [554],
    stage: "Basic",
    description: {
        en: "This popular symbol of good fortune will never fall over in its sleep, no matter how it’s pushed or pulled.",
        fr: "On a beau le pousser ou le tirer, quand il dort,\nrien ne le fait vaciller. Cette qualité lui a valu\nde devenir un emblème pour les porte-bonheurs.",
        es: "Cuando duerme es imposible tumbarlo por más\nque lo zarandeen. Es muy popular como amuleto\nde la suerte.",
        it: "Quando dorme è impossibile buttarlo giù,\nper quanto lo si spinga. I portafortuna che\nlo rappresentano sono molto popolari.",
        de: "Während es schläft, lässt es sich nicht mal mit\nGewalt umstoßen. Aus diesem Grund ist es ein\nbeliebtes Motiv für Glücksbringer.",
        "pt-br": "Este popular símbolo de boa sorte nunca cairá durante o sono, não importa como seja empurrado ou puxado.",
        "zh-tw": "在牠睡覺的時候，\n無論是推是拉，牠都不會倒下。\n因為象徵著吉利而大受歡迎。"
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
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
