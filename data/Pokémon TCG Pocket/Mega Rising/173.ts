import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Meltan",
        "fr": "Meltan",
        "es": "Meltán",
        "it": "Meltano",
        "de": "Meltan",
        "pt-br": "Meltan",
        "zh-tw": "美爾坦"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    description: {
        en: "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy.",
        "fr": "Il dissout et mange le métal. Liquide en circulation\nle métal dans son corps est la façon dont il génère de l'énergie.",
        "es": "Se disuelve y come metal. Líquido circulante\nEl metal dentro de su cuerpo es la forma en que genera energía.",
        "it": "Si dissolve e mangia il metallo. Liquido circolante\nil metallo all'interno del suo corpo è il modo in cui genera energia.",
        "de": "Es löst sich auf und frisst Metall. Zirkulierende Flüssigkeit\nMetall in seinem Körper erzeugt Energie.",
        "pt-br": "Ele se dissolve e come metal. Líquido circulante\nmetal dentro de seu corpo é como ele gera energia.",
        "zh-tw": "它會溶解併吞噬金屬。循環液\n它體內的金屬是它產生能量的方式。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beam",
                "fr": "Faisceau",
                "es": "Haz",
                "it": "Trave",
                "de": "Strahl",
                "pt-br": "Feixe",
                "zh-tw": "光束"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
