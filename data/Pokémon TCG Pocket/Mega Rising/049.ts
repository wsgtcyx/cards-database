import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Golduck",
        "fr": "Golduck",
        "es": "Golduck",
        "it": "Golduck",
        "de": "Golduck",
        "pt-br": "Golduck",
        "zh-tw": "哥達鴨",
    },
    illustrator: "Hasuno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Psyduck",
        "fr": "Psycanard",
        "es": "Psyduck",
        "it": "Psyduck",
        "de": "Psyduck",
        "pt-br": "Psicoduck",
        "zh-tw": "可達鴨",
    },
    description: {
        en: "It swims gracefully along on the quiet, slow-\nmoving rivers and lakes of which it is so fond.",
        "fr": "Il nage gracieusement sur le courant calme et lent.\nrivières et lacs mouvants dont il est si friand.",
        "es": "Nada con gracia en las tranquilas y lentas aguas.\nríos y lagos en movimiento que tanto le gustan.",
        "it": "Nuota con grazia nella quiete, lentamente\ncommovente fiumi e laghi di cui è così affezionato.",
        "de": "Es schwimmt anmutig auf dem ruhigen, langsamen Weg dahin.\nfließende Flüsse und Seen, die es so liebt.",
        "pt-br": "Ele nada graciosamente na calma e lenta\nmover rios e lagos de que tanto gosta.",
        "zh-tw": "它在安靜、緩慢的水面上優雅地游動——\n它如此喜愛的流動的河流和湖泊。"
    },
    stage: "Stage1",
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
            damage: 50,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
