import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/134",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/134",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/134",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/134",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/134",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/134",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/134",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/134",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/134"
    },
    name: {
        en: "Slakoth",
        "fr": "Parecool",
        "es": "Slakoth",
        "it": "Slakoth",
        "de": "Bummelz",
        "pt-br": "Slakoth",
        "zh-tw": "懶人獺",
        ja: "ナマケロ",
        ko: "게을로"
    },
    illustrator: "okayamatakatoshi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "The way Slakoth lolls around makes anyone who\nwatches it feel like doing the same.",
        "fr": "La façon dont Slakoth se prélasse fait que quiconque\nje regarde, j'ai envie de faire la même chose.",
        "es": "La forma en que Slakoth se recuesta hace que cualquiera que\nobserva que tiene ganas de hacer lo mismo.",
        "it": "Il modo in cui Slakoth si rilassa rende chiunque\nguarda, sembra di fare lo stesso.",
        "de": "Die Art und Weise, wie Slakoth herumlümmelt, macht jeden zum Lachen\nbeobachtet, dass es sich anfühlt, als würde man das Gleiche tun.",
        "pt-br": "A maneira como Slakoth fica relaxado faz com que qualquer um que\nobserva que parece fazer o mesmo.",
        "zh-tw": "Slakoth 懶洋洋地閒逛的樣子讓任何人\n看著感覺就像做同樣的事情。",
        ja: "ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。",
        ko: "게을로의 게으른 모습은\n보고 있는 사람의 게으른 마음을\n충분히 자극한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Yawn",
                "fr": "Bâillement",
                "es": "Bostezo",
                "it": "Sbadiglio",
                "de": "Gähnen",
                "pt-br": "Bocejar",
                "zh-tw": "打哈欠",
                ja: "あくび",
                ko: "하품"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。",
                ja: "相手のバトルポケモンをねむりにする。",
                ko: "상대의 배틀 포켓몬을 잠듦으로 만든다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
