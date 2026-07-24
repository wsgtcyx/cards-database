import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/115"
    },
    name: {
        en: "Ferroseed",
        "fr": "Graine de fer",
        "es": "Ferrosa",
        "it": "Ferroseme",
        "de": "Ferroseed",
        "pt-br": "Ferrosemente",
        "zh-tw": "鐵玫瑰"
    },
    illustrator: "Satoshi Shirai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
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
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
