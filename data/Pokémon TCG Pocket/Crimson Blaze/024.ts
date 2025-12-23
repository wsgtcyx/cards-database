import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Magnemite",
        "fr": "Magnéti",
        "es": "Magnemite",
        "it": "Magnemite",
        "de": "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Lightning"],
    description: {
        en: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float.",
        "fr": "Les ondes électromagnétiques émises par les unités\nsur les côtés de sa tête expulsent l'antigravité, qui\nlui permet de flotter.",
        "es": "Las ondas electromagnéticas emitidas por las unidades.\na los lados de su cabeza expulsan antigravedad, que\nle permite flotar.",
        "it": "Le onde elettromagnetiche emesse dalle unità\nai lati della sua testa espellono l'antigravità, che\ngli permette di galleggiare.",
        "de": "Die von den Einheiten ausgesendeten elektromagnetischen Wellen\nan den Seiten seines Kopfes stoßen Antigravitation aus, die\nlässt es schweben.",
        "pt-br": "As ondas eletromagnéticas emitidas pelas unidades\nnas laterais de sua cabeça expelem antigravidade, que\npermite que ele flutue.",
        "zh-tw": "各裝置發射的電磁波\n在其頭部的兩側驅逐反重力，這\n讓它漂浮。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Electro Ball",
                "fr": "Boule Électro",
                "es": "Electrobola",
                "it": "Palla elettrica",
                "de": "Elektroball",
                "pt-br": "Bola Eletro",
                "zh-tw": "電球"
            },
            damage: 30,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
