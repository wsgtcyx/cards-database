import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Chikorita",
        "fr": "Chikorita",
        "es": "Chikorita",
        "it": "Chikorita",
        "de": "Chikorita",
        "pt-br": "Chikorita",
        "zh-tw": "菊苣"
    },
    illustrator: "Keisin",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "A sweet aroma gently wafts from the leaf on its\nhead. It is docile and loves to soak up sun rays.",
        "fr": "Un doux arôme s'échappe doucement de la feuille sur son\ntête. Il est docile et adore profiter des rayons du soleil.",
        "es": "Un dulce aroma flota suavemente desde la hoja en su\ncabeza. Es dócil y le encanta tomar los rayos del sol.",
        "it": "Un dolce aroma si diffonde delicatamente dalle foglie\ntesta. È docile e ama prendere i raggi del sole.",
        "de": "Ein süßer Duft weht sanft aus dem Blatt\nKopf. Er ist fügsam und liebt es, Sonnenstrahlen aufzusaugen.",
        "pt-br": "Um aroma doce emana suavemente da folha em seu\ncabeça. É dócil e adora absorver os raios solares.",
        "zh-tw": "一股甜甜的香氣從它的葉子上輕輕地飄來\n頭。它性格溫順，喜歡吸收陽光。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
