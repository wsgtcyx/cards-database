import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Wormadam",
        fr: "Cheniselle",
        es: "Wormadam",
        it: "Wormadam",
        de: "Burmadame",
        'pt-br': "Wormadam",
        ko: "도롱마담",
        "zh-tw": "結草貴婦",
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    evolveFrom: {
        en: "Burmy",
        "fr": "Burmy",
        "es": "burmy",
        "it": "Burmy",
        "de": "Burmy",
        "pt-br": "Burmy",
        "zh-tw": "結草兒",
    },
    description: {
        en: "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
        fr: "Son apparence varie selon le lieu d'évolution.\nSon corps est façonné avec les matériaux à disposition.",
        es: "Su apariencia varía según dónde evolucione.\nLos materiales que haya pasan a formar parte de su cuerpo.",
        it: "Il suo aspetto dipende dal luogo in cui si evolve.\nTutto ciò che ha intorno va a costituire il suo corpo.",
        de: "Die Umgebung, in der es sich entwickelt, bestimmt\nsein Aussehen. Es formt seinen Körper mithilfe\nder umliegenden Materialien.",
        'pt-br': "Muda de aparência dependendo do local\nde sua evolução. Os materiais que tiver\nà mão se tornam parte de seu corpo.",
        ko: "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다.",
        "zh-tw": "它的外觀會根據它的進化位置而變化。手上的材料變成了它身體的一部分。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Land Crush",
                fr: "Écras'Terre",
                es: "Aterrizaje",
                it: "Schiacciaterra",
                de: "Schollenbrecher",
                'pt-br': "Aperto de Terra",
                ko: "랜드크래시",
                "zh-tw": "土地擠壓"
            },
            damage: 70,
            cost: ["Fighting", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["dialga"]
};
export default card;
