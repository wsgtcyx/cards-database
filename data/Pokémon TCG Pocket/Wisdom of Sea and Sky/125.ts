import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Mawile",
        "fr": "Mawile",
        "es": "mawile",
        "it": "Mawile",
        "de": "Mawile",
        "pt-br": "Mawile",
        "zh-tw": "馬維勒"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    description: {
        en: "It uses its docile-looking face to lull foes into\ncomplacency, then bites with its huge,\nrelentless jaws.",
        "fr": "Il utilise son visage docile pour endormir ses ennemis.\ncomplaisance, puis mord avec son énorme,\ndes mâchoires implacables.",
        "es": "Utiliza su rostro de aspecto dócil para adormecer a los enemigos.\ncomplacencia, luego muerde con su enorme,\nmandíbulas implacables.",
        "it": "Usa il suo volto dall'aspetto docile per ingannare i nemici\ncompiacimento, poi morde con il suo enorme,\nmascelle implacabili.",
        "de": "Es nutzt sein fügsam aussehendes Gesicht, um Feinde einzulullen\nSelbstgefälligkeit, dann beißt er mit seinem riesigen,\nunerbittliche Kiefer.",
        "pt-br": "Ele usa seu rosto de aparência dócil para acalmar os inimigos.\ncomplacência, então morde com seu enorme,\nmandíbulas implacáveis.",
        "zh-tw": "它用它溫順的面孔來誘騙敵人\n自滿，然後用它的巨大咬住，\n無情的下巴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 30,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
