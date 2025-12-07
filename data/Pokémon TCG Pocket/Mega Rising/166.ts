import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ferroseed",
        "fr": "Graine de fer",
        "es": "Ferrosa",
        "it": "Ferroseme",
        "de": "Ferroseed",
        "pt-br": "Ferrosemente",
        "zh-tw": "種子鐵球",
    },
    illustrator: "ryoma uratsuka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "Mossy caves are their preferred dwellings.\nEnzymes contained in mosses help Ferroseed's\nspikes grow big and strong.",
        "fr": "Les grottes moussues sont leurs habitations préférées.\nLes enzymes contenues dans les mousses aident Ferroseed\nles pointes deviennent grandes et fortes.",
        "es": "Las cuevas cubiertas de musgo son sus viviendas preferidas.\nLas enzimas contenidas en los musgos ayudan a Ferroseed\nlas espinas crecen grandes y fuertes.",
        "it": "Le grotte muschiose sono le loro dimore preferite.\nGli enzimi contenuti nei muschi aiutano i Ferroseed\nle punte diventano grandi e forti.",
        "de": "Moosbewachsene Höhlen sind ihre bevorzugte Behausung.\nIn Moosen enthaltene Enzyme helfen Ferroseed\nDie Ähren werden groß und stark.",
        "pt-br": "Cavernas cobertas de musgo são suas habitações preferidas.\nAs enzimas contidas nos musgos ajudam o Ferroseed\nos espinhos ficam grandes e fortes.",
        "zh-tw": "長滿青苔的洞穴是他們最喜歡的住所。\n苔蘚中含有的酶有助於 Ferroseed\n穗狀花序長得又大又強。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rolling Tackle",
                "fr": "Matériel roulant",
                "es": "Aparejo rodante",
                "it": "Contrasto rotolante",
                "de": "Rollendes Gerät",
                "pt-br": "Equipamento de rolamento",
                "zh-tw": "滾動釣具"
            },
            damage: 20,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
