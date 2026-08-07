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
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/134"
    },
    name: {
        en: "Slakoth",
        "fr": "Parecool",
        "es": "Slakoth",
        "it": "Slakoth",
        "de": "Bummelz",
        "pt-br": "Slakoth",
        "zh-tw": "懶人獺"
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
        "zh-tw": "Slakoth 懶洋洋地閒逛的樣子讓任何人\n看著感覺就像做同樣的事情。"
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
                "zh-tw": "打哈欠"
            },
            cost: ["Colorless"],
            effect: {
                en: "Your opponent's Active Pokémon is now Asleep.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Endormi.",
                "es": "El Pokémon Activo de tu rival ahora está Dormido.",
                "it": "Il Pokémon attivo del tuo avversario è addormentato.",
                "de": "Das aktive Pokémon deines Gegners schläft jetzt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Adormecido.",
                "zh-tw": "你對手的活躍神奇寶貝現在處於睡眠狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
