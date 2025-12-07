import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Weedle",
        "fr": "Mauvaise herbe",
        "es": "weedle",
        "it": "Weedle",
        "de": "Unkraut",
        "pt-br": "erva daninha",
        "zh-tw": "獨角蟲",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "Often found in forests and grasslands.\nIt has a sharp, toxic barb of around two inches\non top of its head.",
        "fr": "On le trouve souvent dans les forêts et les prairies.\nIl a une barbe pointue et toxique d’environ deux pouces\nau dessus de sa tête.",
        "es": "A menudo se encuentra en bosques y pastizales.\nTiene una púa afilada y tóxica de alrededor de dos pulgadas.\nencima de su cabeza.",
        "it": "Si trova spesso nelle foreste e nelle praterie.\nHa una punta affilata e tossica di circa due pollici\nsopra la sua testa.",
        "de": "Häufig in Wäldern und Grasland zu finden.\nEs hat einen scharfen, giftigen Stachel von etwa fünf Zentimetern Länge\nauf dem Kopf.",
        "pt-br": "Frequentemente encontrado em florestas e pastagens.\nTem uma farpa afiada e tóxica de cerca de cinco centímetros\nno topo de sua cabeça.",
        "zh-tw": "常見於森林和草原。\n它有一個大約兩英寸長的鋒利有毒倒鉤\n在它的頭頂上。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Multiply",
                "fr": "Multiplier",
                "es": "Multiplicar",
                "it": "Moltiplicare",
                "de": "Multiplizieren",
                "pt-br": "Multiplicar",
                "zh-tw": "乘"
            },
            cost: ["Grass"],
            effect: {
                en: "Put 1 random Weedle from your deck onto your Bench.",
                "fr": "Placez 1 Weedle aléatoire de votre deck sur votre Banc.",
                "es": "Coloca 1 Weedle aleatorio de tu mazo en tu Banca.",
                "it": "Metti 1 Weedle a caso dal tuo mazzo nella tua panchina.",
                "de": "Lege 1 zufälliges Unkraut aus deinem Deck auf deine Bank.",
                "pt-br": "Coloque 1 Weedle aleatório do seu deck no seu Banco.",
                "zh-tw": "將 1 個隨機雜草從你的牌組放到你的替補席上。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
