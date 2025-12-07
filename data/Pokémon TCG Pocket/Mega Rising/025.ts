import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Grookey",
        "fr": "Groogy",
        "es": "Grookey",
        "it": "Grookey",
        "de": "Grookey",
        "pt-br": "Grookey",
        "zh-tw": "敲音猴",
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It attacks with rapid beats of its stick.\nAs it strikes with amazing speed, it gets\nmore and more pumped.",
        "fr": "Il attaque avec des coups rapides de son bâton.\nEn frappant à une vitesse incroyable, il devient\nde plus en plus pompé.",
        "es": "Ataca con rápidos golpes de su bastón.\nMientras golpea con una velocidad asombrosa, se vuelve\ncada vez más bombeado.",
        "it": "Attacca con rapidi colpi del bastone.\nMentre colpisce con una velocità sorprendente, ottiene\nsempre più pompato.",
        "de": "Es greift mit schnellen Schlägen seines Stockes an.\nDa es mit erstaunlicher Geschwindigkeit zuschlägt, wird es\nimmer mehr aufgepumpt.",
        "pt-br": "Ele ataca com batidas rápidas de seu bastão.\nÀ medida que ataca com uma velocidade incrível, fica\ncada vez mais bombeado.",
        "zh-tw": "它用棍子快速擊打進行攻擊。\n當它以驚人的速度撞擊時，它得到了\n越來越抽。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat",
                "fr": "Battre",
                "es": "Derrotar",
                "it": "Colpo",
                "de": "Schlagen",
                "pt-br": "Bater",
                "zh-tw": "打"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
