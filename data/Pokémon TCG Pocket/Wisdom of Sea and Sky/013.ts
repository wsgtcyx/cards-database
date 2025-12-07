import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Hoppip",
        "fr": "Hoppip",
        "es": "Hoppip",
        "it": "Hoppip",
        "de": "Hoppip",
        "pt-br": "Hoppip",
        "zh-tw": "霍皮普"
    },
    illustrator: "Mékayu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "Outside of cold regions, Hoppip can be found\npractically everywhere. This is because the wind\ncarries this species all over the world.",
        "fr": "En dehors des régions froides, Hoppip peut être trouvé\npratiquement partout. C'est parce que le vent\ntransporte cette espèce partout dans le monde.",
        "es": "Fuera de las regiones frías, se puede encontrar Hoppip.\nprácticamente en todas partes. Esto se debe a que el viento\nlleva esta especie por todo el mundo.",
        "it": "Al di fuori delle regioni fredde, è possibile trovare Hoppip\npraticamente ovunque. Questo perché il vento\ntrasporta questa specie in tutto il mondo.",
        "de": "Außerhalb kalter Regionen ist Hoppip zu finden\npraktisch überall. Das liegt am Wind\nträgt diese Art auf der ganzen Welt.",
        "pt-br": "Fora das regiões frias, o Hoppip pode ser encontrado\npraticamente em todos os lugares. Isto acontece porque o vento\ncarrega esta espécie por todo o mundo.",
        "zh-tw": "在寒冷地區之外，也可以找到 Hoppip\n幾乎無處不在。這是因為風\n該物種遍布世界各地。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
