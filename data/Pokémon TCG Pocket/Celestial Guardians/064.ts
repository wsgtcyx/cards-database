import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Charjabug",
        fr: "Chrysapile",
        es: "Charjabug",
        it: "Charjabug",
        de: "Akkup",
        'pt-br': "Charjabug",
        ko: "전지충이",
        "zh-tw": "蟲電寶",
    },
    illustrator: "Naoki Saito",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Grubbin",
        "fr": "Grubbin",
        "es": "Grubbin",
        "it": "Grubbin",
        "de": "Grubbin",
        "pt-br": "Grubbin",
        "zh-tw": "格魯賓"
    },
    description: {
        en: "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws.",
        fr: "Il est bien protégé par sa robuste carapace,\net se défend en générant un courant\nélectrique au bout de ses mandibules.",
        es: "Se protege el cuerpo con un robusto caparazón. Contraataca\nliberando corriente eléctrica por la punta de las mandíbulas.",
        it: "È protetto da un robusto esoscheletro. Contrattacca con\nl'elettricità che rilascia dalle punte che ha sulla mandibola.",
        de: "Es schützt sich mithilfe seines robusten Panzers.\nDurch die Spitzen an seinem Kiefer leitet es Strom,\nmit dem es sich gegen Angreifer wehrt.",
        'pt-br': "Enquanto sua carapaça resistente o protege de ataques,\nCharjabug ataca oponentes com raios elétricos disparados\ndas pontas da sua mandíbula.",
        ko: "튼튼한 껍질로 몸을 보호한다.\n턱의 끝부분에서 전기를\n흘려보내 반격한다.",
        "zh-tw": "雖然它堅固的外殼可以保護它免受攻擊，但 Charjabug 會用下巴尖端釋放出的電流來攻擊敵人。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Vise Grip",
                fr: "Force Poigne",
                es: "Agarre",
                it: "Presa",
                de: "Klammer",
                'pt-br': "Agarramento Compressor",
                ko: "찝기",
                "zh-tw": "虎鉗夾具"
            },
            damage: 30,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lunala"]
};
export default card;
