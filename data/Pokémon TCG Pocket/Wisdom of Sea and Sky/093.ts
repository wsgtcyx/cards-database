import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Sudowoodo",
        "fr": "Sudowoodo",
        "es": "Sudowoodo",
        "it": "Sudowoodo",
        "de": "Sudowoodo",
        "pt-br": "Sudowoodo",
        "zh-tw": "樹才怪",
    },
    illustrator: "AKIRA EGAWA",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    description: {
        en: "Although it always pretends to be a tree,\nits composition appears more similar to\nrock than to vegetation.",
        "fr": "Même s'il prétend toujours être un arbre,\nsa composition semble plus proche de\nla roche qu'à la végétation.",
        "es": "Aunque siempre finge ser un árbol,\nsu composición parece más similar a\nroca que a la vegetación.",
        "it": "Anche se finge sempre di essere un albero,\nla sua composizione appare più simile a\nroccia che alla vegetazione.",
        "de": "Obwohl es immer vorgibt, ein Baum zu sein,\nseine Zusammensetzung scheint ähnlicher zu sein\nFelsen als zur Vegetation.",
        "pt-br": "Embora sempre finja ser uma árvore,\nsua composição parece mais semelhante a\nrocha do que à vegetação.",
        "zh-tw": "雖然它總是假裝是一棵樹，\n它的組成看起來更類似於\n岩石比植被更重要。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rock Throw",
                "fr": "Lancer de pierre",
                "es": "Lanzamiento de piedras",
                "it": "Lancio di roccia",
                "de": "Steinwurf",
                "pt-br": "Lançamento de pedra",
                "zh-tw": "扔石頭"
            },
            damage: 50,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
