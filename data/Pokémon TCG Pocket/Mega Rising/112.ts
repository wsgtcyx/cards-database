import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Gothita",
        "fr": "Gothita",
        "es": "gotita",
        "it": "Gothita",
        "de": "Gothita",
        "pt-br": "Gothita",
        "zh-tw": "哥提塔"
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Beware of touching the ribbon-shaped feelers\nthat control its psychic power. Gothita will begin\nbawling if you do.",
        "fr": "Attention à ne pas toucher les palpeurs en forme de ruban\nqui contrôlent son pouvoir psychique. Gothita va commencer\nbrailler si vous le faites.",
        "es": "Cuidado con tocar las antenas en forma de cinta.\nque controlan su poder psíquico. Gothita comenzará\nllorando si lo haces.",
        "it": "Fare attenzione a toccare le antenne a forma di nastro\nche controllano il suo potere psichico. Inizierà Gothita\nurlando se lo fai.",
        "de": "Achten Sie darauf, die bandförmigen Fühler nicht zu berühren\ndie seine psychische Kraft kontrollieren. Gothita wird beginnen\nheulen, wenn du das tust.",
        "pt-br": "Cuidado ao tocar nas antenas em forma de fita\nque controlam seu poder psíquico. Gothita vai começar\ngritando se você fizer isso.",
        "zh-tw": "小心觸摸帶狀觸角\n控制它的精神力量。哥提塔即將開始\n如果你這樣做的話，你會大喊大叫。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stampede",
                "fr": "Débandade",
                "es": "Estampida",
                "it": "Fuga precipitosa",
                "de": "Ansturm",
                "pt-br": "Debandada",
                "zh-tw": "踩踏"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
