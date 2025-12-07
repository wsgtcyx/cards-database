import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Sableye",
        "fr": "Sableye",
        "es": "Sableye",
        "it": "Sableye",
        "de": "Sableye",
        "pt-br": "Sableye",
        "zh-tw": "勾魂眼",
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Darkness"],
    description: {
        en: "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals.",
        "fr": "Les matériaux provenant des pierres précieuses qu'il a mangées flottent vers le\nsurface de son corps et peut former une infinité\nnombre de modèles parmi les individus.",
        "es": "Los materiales de las gemas que ha comido flotan hacia el\nsuperficie de su cuerpo y puede formar un infinito\nnúmero de patrones entre los individuos.",
        "it": "I materiali delle gemme che ha mangiato galleggiano sul\nsuperficie del suo corpo e può formare un infinito\nnumero di modelli tra gli individui.",
        "de": "Materialien aus Edelsteinen, die es gefressen hat, schweben dorthin\nOberfläche seines Körpers und kann ein Unendliches bilden\nAnzahl der Muster zwischen Individuen.",
        "pt-br": "Os materiais das gemas que ele comeu flutuam para o\nsuperfície de seu corpo e pode formar um infinito\nnúmero de padrões entre os indivíduos.",
        "zh-tw": "牠吃掉的寶石材料會漂浮到\n它的身體表面可以形成無限大的\n個體之間的模式數量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Scratch",
                "fr": "Gratter",
                "es": "Rascar",
                "it": "Graffio",
                "de": "Kratzen",
                "pt-br": "Arranhar",
                "zh-tw": "划痕"
            },
            damage: 30,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
