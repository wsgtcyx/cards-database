import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Wailmer",
        "fr": "Wailmer",
        "es": "wailmer",
        "it": "Wailmer",
        "de": "Wailmer",
        "pt-br": "Wailmer",
        "zh-tw": "吼吼鯨",
    },
    illustrator: "Mékayu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    description: {
        en: "When it sucks in a large volume of seawater,\nit becomes like a big, bouncy ball. It eats a ton\nof food daily.",
        "fr": "Lorsqu'il aspire un grand volume d'eau de mer,\ncela devient comme une grosse balle rebondissante. Ça mange une tonne\nde nourriture quotidiennement.",
        "es": "Cuando aspira un gran volumen de agua de mar,\nse vuelve como una pelota grande que rebota. come una tonelada\nde comida diariamente.",
        "it": "Quando aspira un grande volume di acqua di mare,\ndiventa come una grande palla rimbalzante. Ne mangia una tonnellata\ndi cibo ogni giorno.",
        "de": "Wenn es eine große Menge Meerwasser ansaugt,\nes wird wie ein großer, hüpfender Ball. Es frisst eine Tonne\nEssen täglich.",
        "pt-br": "Quando suga um grande volume de água do mar,\ntorna-se como uma bola grande e saltitante. Come uma tonelada\nde comida diariamente.",
        "zh-tw": "當它吸入大量海水時，\n它變得像一個大的有彈性的球。牠吃了一噸\n每天的食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Surf",
                "fr": "Surf",
                "es": "Navegar",
                "it": "Navigare",
                "de": "Surfen",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
