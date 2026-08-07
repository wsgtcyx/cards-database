import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/072",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/072",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/072",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/072",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/072",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/072",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/072"
    },
    name: {
        en: "Chimchar",
        "fr": "Ouisticram",
        "es": "Chimchar",
        "it": "Chimchar",
        "de": "Panflam",
        "pt-br": "Chimchar",
        "zh-tw": "小火焰猴",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
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
