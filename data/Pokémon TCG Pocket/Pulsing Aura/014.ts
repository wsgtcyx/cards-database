import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/014"
    },
    name: {
        en: "Carnivine",
        fr: "Vortente",
        es: "Carnivine",
        it: "Carnivine",
        de: "Venuflibis",
        "pt-br": "Carnivine",
        "zh-tw": "尖牙籠",
        ko: "무스틈니",
        ja: "マスキッパ"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [455],
    stage: "Basic",
    description: {
        en: "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
        fr: "Il s’accroche aux arbres des marais et attire ses proies avec\nsa salive à l’odeur enivrante.",
        es: "Se cuelga de los árboles en los pantanos. Atrae a sus presas\ncon su dulce olor y las engulle.",
        it: "Si attacca agli alberi nelle paludi. Attrae le prede con il dolce\naroma della saliva e poi le ingoia.",
        de: "Klammert sich an Bäume in Sümpfen. Lockt Beute mit seinem\nsüßlichen Speichel an und schluckt sie dann.",
        "pt-br": "Ele se liga às árvores dos pântanos. Ele atrai as presas com sua baba cheirosa e as engole.",
        "zh-tw": "它把自己綁在沼澤中的樹木上。它用芳香的口水吸引獵物並將其吞下。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
