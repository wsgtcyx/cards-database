import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Growlithe",
        "fr": "Growlithe",
        "es": "crecer",
        "it": "Growlithe",
        "de": "Growlithe",
        "pt-br": "Growlithe",
        "zh-tw": "卡蒂狗",
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "It's very friendly and faithful to people. It will try\nto repel enemies by barking and biting.",
        "fr": "C'est très amical et fidèle aux gens. Il va essayer\npour repousser les ennemis en aboyant et en mordant.",
        "es": "Es muy amigable y fiel con la gente. Lo intentará\npara repeler a los enemigos ladrando y mordiendo.",
        "it": "È molto amichevole e fedele alle persone. Ci proverà\nper respingere i nemici abbaiando e mordendo.",
        "de": "Es ist sehr freundlich und treu den Menschen gegenüber. Es wird es versuchen\num Feinde durch Bellen und Beißen abzuwehren.",
        "pt-br": "É muito amigável e fiel às pessoas. Ele vai tentar\npara repelir os inimigos latindo e mordendo.",
        "zh-tw": "它對人非常友好和忠誠。它會嘗試\n通過吠叫和撕咬來擊退敵人。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dig Claws",
                "fr": "Creuser des griffes",
                "es": "Cavar garras",
                "it": "Scavare gli artigli",
                "de": "Krallen graben",
                "pt-br": "Cavar Garras",
                "zh-tw": "挖爪"
            },
            damage: 20,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
