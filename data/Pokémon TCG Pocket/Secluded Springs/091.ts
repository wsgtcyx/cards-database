import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Chimchar",
        "fr": "Chimchar",
        "es": "Chimchar",
        "it": "Chimchar",
        "de": "Chimchar",
        "pt-br": "Chimchar",
        "zh-tw": "奇姆查爾"
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "Its fiery rear end is fueled by gas made in its belly.\nEven rain can't extinguish the fire.",
        "fr": "Son arrière-train enflammé est alimenté par le gaz produit dans son ventre.\nMême la pluie ne peut pas éteindre le feu.",
        "es": "Su ardiente trasero se alimenta del gas que se produce en su vientre.\nNi siquiera la lluvia puede apagar el fuego.",
        "it": "La sua focosa parte posteriore è alimentata dal gas prodotto nel suo ventre.\nNeppure la pioggia riesce a spegnere l'incendio.",
        "de": "Sein feuriges Hinterteil wird durch das in seinem Bauch erzeugte Gas angetrieben.\nSelbst Regen kann das Feuer nicht löschen.",
        "pt-br": "Sua traseira ardente é alimentada pelo gás produzido em sua barriga.\nNem a chuva consegue apagar o fogo.",
        "zh-tw": "它燃燒的後端由腹部產生的氣體提供燃料。\n即使下雨也無法撲滅大火。"
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
            damage: 20,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
