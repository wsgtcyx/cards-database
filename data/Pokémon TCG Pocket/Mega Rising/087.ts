import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Luxio",
        "fr": "Luxio",
        "es": "lucio",
        "it": "Luxio",
        "de": "Luxio",
        "pt-br": "Luxo",
        "zh-tw": "勒克貓",
    },
    illustrator: "NC Empire",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Shinx",
        "fr": "Shinx",
        "es": "Shinx",
        "it": "Shinx",
        "de": "Shinx",
        "pt-br": "Shinx",
        "zh-tw": "小貓怪",
    },
    description: {
        en: "By gathering their tails together, they collectively\ngenerate powerful electricity from their claws.",
        "fr": "En rassemblant leurs queues, ils\ngénèrent une puissante électricité à partir de leurs griffes.",
        "es": "Al juntar sus colas, colectivamente\nGeneran poderosa electricidad a partir de sus garras.",
        "it": "Riunendo insieme le code, si riuniscono collettivamente\ngenerano una potente elettricità dai loro artigli.",
        "de": "Indem sie ihre Schwänze zusammenziehen, bilden sie ein Kollektiv\nerzeugen aus ihren Klauen starke Elektrizität.",
        "pt-br": "Ao juntarem suas caudas, eles coletivamente\ngerar eletricidade poderosa com suas garras.",
        "zh-tw": "通過將尾巴聚集在一起，它們集體\n從它們的爪子中產生強大的電力。"
    },
    stage: "Stage1",
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
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
