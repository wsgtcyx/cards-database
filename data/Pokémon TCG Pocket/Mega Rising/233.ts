import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ludicolo",
        "fr": "Ludicolo",
        "es": "ludicolo",
        "it": "Ludicolo",
        "de": "Ludicolo",
        "pt-br": "Ludicolo",
        "zh-tw": "樂天河童",
    },
    illustrator: "Shimaris Yukichi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Lombre",
        "fr": "Lombre",
        "es": "Lombre",
        "it": "Lombre",
        "de": "Lombard",
        "pt-br": "Lombre",
        "zh-tw": "隆布爾"
    },
    description: {
        en: "If it hears festive music, it begins moving in\nrhythm in order to amplify its power.",
        "fr": "S'il entend de la musique festive, il commence à emménager\nrythme afin d’amplifier sa puissance.",
        "es": "Si escucha música festiva, comienza a moverse.\nritmo para amplificar su poder.",
        "it": "Se sente musica festosa, inizia ad avvicinarsi\nritmo per amplificarne la potenza.",
        "de": "Wenn es festliche Musik hört, beginnt es einzurücken\nRhythmus, um seine Kraft zu verstärken.",
        "pt-br": "Se ouvir música festiva, começa a se mover\nritmo para amplificar seu poder.",
        "zh-tw": "如果它聽到節日音樂，它就會開始移動\n節奏，以增強其力量。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Rhythmic Steps",
                "fr": "Pas rythmiques",
                "es": "Pasos rítmicos",
                "it": "Passi ritmici",
                "de": "Rhythmische Schritte",
                "pt-br": "Passos Rítmicos",
                "zh-tw": "有節奏的舞步"
            },
            damage: 60,
            cost: ["Water", "Water"],
            effect: {
                en: "If you have exactly 1, 3, or 5 cards in your hand, this attack does 60 more damage.",
                "fr": "Si vous avez exactement 1, 3 ou 5 cartes en main, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si tienes exactamente 1, 3 o 5 cartas en tu mano, este ataque hace 60 puntos de daño más.",
                "it": "Se hai esattamente 1, 3 o 5 carte in mano, questo attacco infligge 60 danni in più.",
                "de": "Wenn du genau 1, 3 oder 5 Karten auf der Hand hast, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se você tiver exatamente 1, 3 ou 5 cartas em sua mão, este ataque causa 60 de dano a mais.",
                "zh-tw": "如果你的手牌恰好有 1、3 或 5 張，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
