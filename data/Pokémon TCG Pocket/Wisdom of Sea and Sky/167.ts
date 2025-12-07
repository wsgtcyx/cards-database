import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Totodile",
        "fr": "Totodile",
        "es": "totodile",
        "it": "Totodile",
        "de": "Totodile",
        "pt-br": "Totodile",
        "zh-tw": "小鋸鱷",
    },
    illustrator: "Ayako Ozaki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It is small but rough and tough. It won't hesitate to\ntake a bite out of anything that moves.",
        "fr": "Il est petit mais rude et résistant. Il n'hésitera pas à\nmordez tout ce qui bouge.",
        "es": "Es pequeño pero áspero y resistente. No dudará en\nDale un mordisco a todo lo que se mueva.",
        "it": "È piccolo ma ruvido e resistente. Non esiterà a farlo\ndai un morso a tutto ciò che si muove.",
        "de": "Es ist klein, aber rau und robust. Es wird nicht zögern\nBeißen Sie in alles, was sich bewegt.",
        "pt-br": "É pequeno, mas áspero e resistente. Não hesitará em\ndê uma mordida em qualquer coisa que se mova.",
        "zh-tw": "它雖小，但粗糙而堅韌。它會毫不猶豫地\n咬一口任何會動的東西。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Wave Splash",
                "fr": "Éclaboussure de vague",
                "es": "Salpicadura de onda",
                "it": "Spruzzo dell'onda",
                "de": "Wellenspritzer",
                "pt-br": "Respingo de onda",
                "zh-tw": "波浪飛濺"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
