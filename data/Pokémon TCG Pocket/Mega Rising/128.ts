import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Hippopotas",
        "fr": "Hippopotames",
        "es": "hipopótamos",
        "it": "Ippopotami",
        "de": "Nilpferde",
        "pt-br": "Hipopótamos",
        "zh-tw": "怪河馬",
    },
    illustrator: "Yuya Oka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "It shrouds itself in sand to ward off germs.\nIt travels easily through the sands of the desert.",
        "fr": "Il s'enveloppe de sable pour éloigner les microbes.\nIl se déplace facilement à travers les sables du désert.",
        "es": "Se envuelve en arena para protegerse de los gérmenes.\nViaja fácilmente por las arenas del desierto.",
        "it": "Si avvolge nella sabbia per allontanare i germi.\nViaggia facilmente attraverso le sabbie del deserto.",
        "de": "Zur Abwehr von Keimen hüllt es sich in Sand.\nEs bewegt sich problemlos durch den Sand der Wüste.",
        "pt-br": "Ele se envolve em areia para afastar os germes.\nEle viaja facilmente pelas areias do deserto.",
        "zh-tw": "它用沙子包裹自己以抵禦細菌。\n它可以輕鬆地穿過沙漠的沙子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mud Shot",
                "fr": "Tir de boue",
                "es": "Tiro de barro",
                "it": "Colpo di fango",
                "de": "Schlammschuss",
                "pt-br": "Tiro de lama",
                "zh-tw": "泥彈"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
