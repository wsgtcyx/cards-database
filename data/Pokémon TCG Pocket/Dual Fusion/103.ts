import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/103",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/103",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/103",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/103"
    },
    name: {
        en: "Pidgeotto",
        fr: "Roucoups",
        es: "Pidgeotto",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥",
        ja: "ピジョン",
        ko: "피죤",
        it: "Pidgeotto",
        de: "Tauboga"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Pidgey",
        fr: "Roucool",
        es: "Pidgey",
        it: "Pidgey",
        de: "Taubsi",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
        ja: "ポッポ",
        ko: "Pidgey"
    },
    attacks: [
        {
            name: {
                en: "Cutting Wind",
                fr: "Vent Glacial",
                es: "Viento Helado",
                it: "Vento Tagliente",
                de: "Schneidender Wind",
                "pt-br": "Vento Dilacerante",
                "zh-tw": "利刃之風",
                ja: "カッターウインド",
                ko: "Cutting Wind"
            },
            cost: [
                "Colorless"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
        fr: "Grâce à ses griffes très puissantes, il est capable de transporter des Noeunoeuf vers un nid éloigné de plus de 100 km.",
        es: "Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.",
        it: "Grazie ai potenti artigli può trasportare una preda delle dimensioni di un Exeggcute per oltre 100 km.",
        de: "Die Krallen an seinen Füßen sind sehr ausgeprägt. Es kann sogar ein Owei zu seinem Nest in 100 km Entfernung tragen.",
        "pt-br": "As garras nos seus pés são bem desenvolvidas. Ele pode levar presas como Exeggcute para seu ninho a mais de 100 km de distância.",
        "zh-tw": "腳爪非常發達。曾一把抓住獵物蛋蛋，帶回１００公里外的巢穴。",
        ja: "足の ツメが 発達している。 エサの タマタマを つかんで １００キロ先の 巣まで 運ぶ。",
        ko: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away."
    }
};

export default card;
