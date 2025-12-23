import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Emolga",
        "fr": "Emolga",
        "es": "Emolga",
        "it": "Emolga",
        "de": "Emolga",
        "pt-br": "Emolga",
        "zh-tw": "電飛鼠"
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Lightning"],
    description: {
        en: "This Pokémon absolutely loves sweet berries.\nSometimes it stuffs its cheeks full of so much\nfood that it can't fly properly.",
        "fr": "Ce Pokémon adore les baies sucrées.\nParfois, il se remplit tellement les joues\nnourriture qu'il ne peut pas voler correctement.",
        "es": "A este Pokémon le encantan las bayas dulces.\nA veces se llena las mejillas de tanto\ncomida que no puede volar correctamente.",
        "it": "Questo Pokémon adora assolutamente le bacche dolci.\nA volte si riempie le guance di così tanto\ncibo che non può volare correttamente.",
        "de": "Dieses Pokémon liebt süße Beeren.\nManchmal stopft es sich die Wangen voll\nNahrung, dass es nicht richtig fliegen kann.",
        "pt-br": "Este Pokémon adora frutas doces.\nÀs vezes enche as bochechas de tanta coisa\ncomida que não pode voar corretamente.",
        "zh-tw": "這只神奇寶貝非常喜歡甜漿果。\n有時它的臉頰塞滿了這麼多\n食物使其無法正常飛行。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mach Bolt",
                "fr": "Boulon de Mach",
                "es": "Perno Mach",
                "it": "Mach Bolt",
                "de": "Mach Bolt",
                "pt-br": "Parafuso Mach",
                "zh-tw": "馬赫螺栓"
            },
            damage: 50,
            cost: ["Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
