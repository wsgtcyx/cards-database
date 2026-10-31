import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/017",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/017",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/017",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/017",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/017",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/017",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/017",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/017"
    },
    name: {
        en: "Fennekin",
        fr: "Feunnec",
        es: "Fennekin",
        "pt-br": "Fennekin",
        "zh-tw": "火狐狸",
        ja: "フォッコ",
        ko: "푸호꼬",
        it: "Fennekin",
        de: "Fynx"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Scratch",
                fr: "Griffe",
                es: "Arañazo",
                it: "Graffio",
                de: "Kratzer",
                "pt-br": "Arranhão",
                "zh-tw": "抓",
                ja: "ひっかく",
                ko: "Scratch"
            },
            cost: [
                "Fire"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit.",
        fr: "Quand il grignote des rameaux, il prend des forces et ses grandes oreilles dégagent une chaleur qui dépasse les 200 °C.",
        es: "Tras mordisquear e ingerir pequeñas ramas se siente pletórico y expulsa aire caliente por sus grandes orejas a temperaturas superiores a los 200 °C.",
        it: "Fa il pieno di energia mangiando ramoscelli ed emette aria calda dalle grandi orecchie a una temperatura di oltre 200 °C.",
        de: "Wenn es Zweige frisst, fasst es neue Kraft und stößt über seine Ohren über 200 °C heiße Luft aus.",
        "pt-br": "Comer um galho o enche de energia, suas orelhas espaçosas expelem ar mais quente que 200 °C.",
        "zh-tw": "吃了小樹枝就會精神百倍，並從大大的耳朵中呼出超過攝氏２００度的熱氣。",
        ja: "小枝を 食べると 元気になって 摂氏２００度を 超える 熱気を 大きな 耳から 噴き出す。",
        ko: "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit."
    }
};

export default card;
