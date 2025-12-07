import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Flaaffy",
        "fr": "Flaaffy",
        "es": "flaco",
        "it": "Flaaffy",
        "de": "Flaaffy",
        "pt-br": "Flaaffy",
        "zh-tw": "綿綿",
    },
    illustrator: "MAHOU",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Mareep",
        "fr": "Mareep",
        "es": "Mareep",
        "it": "Mareep",
        "de": "Mareep",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
    },
    description: {
        en: "As a result of storing too much electricity,\nit developed patches where even downy\nwool won't grow.",
        "fr": "En raison du stockage d'une trop grande quantité d'électricité,\nil a développé des taches où même du duvet\nla laine ne poussera pas.",
        "es": "Como resultado de almacenar demasiada electricidad,\ndesarrolló parches donde incluso el vello\nla lana no crecerá.",
        "it": "A causa dell’immagazzinamento di troppa elettricità,\nha sviluppato macchie anche lanuginose\nla lana non crescerà.",
        "de": "Da zu viel Strom gespeichert wird,\nEs entwickelten sich sogar flaumige Stellen\nWolle wächst nicht.",
        "pt-br": "Como resultado de armazenar muita eletricidade,\ndesenvolveu manchas onde até mesmo felpudo\na lã não crescerá.",
        "zh-tw": "由於儲存過多的電力，\n它甚至出現了絨毛狀的斑塊\n羊毛不會生長。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Zap Kick",
                "fr": "Coup de pied Zap",
                "es": "Patada rápida",
                "it": "Calcio di zap",
                "de": "Zap-Kick",
                "pt-br": "Chute Zap",
                "zh-tw": "電擊踢"
            },
            damage: 50,
            cost: ["Lightning", "Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
