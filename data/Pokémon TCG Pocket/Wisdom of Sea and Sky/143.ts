import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Ambipom",
        "fr": "Ambipome",
        "es": "ambipom",
        "it": "Ambipom",
        "de": "Ambipom",
        "pt-br": "Ambipom",
        "zh-tw": "雙尾怪手",
    },
    illustrator: "Atsushi Furusawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    evolveFrom: {
        en: "Aipom",
        "fr": "Aipom",
        "es": "Aipom",
        "it": "Aipom",
        "de": "Aipom",
        "pt-br": "Aipom",
        "zh-tw": "愛波姆"
    },
    description: {
        en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
        "fr": "Il utilise sa queue pour tout. Si ça enveloppe les deux\nde ses queues autour de vous et vous serre,\nc'est la preuve qu'il t'aime vraiment.",
        "es": "Utiliza sus colas para todo. Si envuelve a ambos\nde sus colas te rodea y te da un apretón,\nEsa es la prueba de que realmente le gustas.",
        "it": "Usa la coda per tutto. Se avvolge entrambi\ndelle sue code intorno a te e ti stringe,\nquesta è la prova che gli piaci davvero.",
        "de": "Es nutzt seinen Schwanz für alles. Wenn es beides umhüllt\nseiner Schwänze um dich herum und drückt dich,\nDas ist der Beweis, dass es dich wirklich mag.",
        "pt-br": "Ele usa a cauda para tudo. Se envolver ambos\nde suas caudas ao seu redor e lhe dá um aperto,\nisso é prova de que ele realmente gosta de você.",
        "zh-tw": "它用尾巴做一切事情。如果它包住了兩個\n它的尾巴圍繞著你並擠壓你，\n這就是它真的喜歡你的證據。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Tail Jab",
                "fr": "Coup de queue",
                "es": "Golpe de cola",
                "it": "Colpo di coda",
                "de": "Schwanzstoß",
                "pt-br": "Golpe de cauda",
                "zh-tw": "尾刺"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
