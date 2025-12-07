import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Sudowoodo",
        "fr": "Sudowoodo",
        "es": "Sudowoodo",
        "it": "Sudowoodo",
        "de": "Sudowoodo",
        "pt-br": "Sudowoodo",
        "zh-tw": "須多木多"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
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
                en: "Fighting Headbutt",
                "fr": "Combattre le coup de tête",
                "es": "Cabezazo de lucha",
                "it": "Combattere la testata",
                "de": "Kampf gegen den Kopfstoß",
                "pt-br": "Lutando cabeçada",
                "zh-tw": "格鬥頭撞"
            },
            damage: 20,
            cost: ["Fighting"],
            effect: {
                en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 30 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est un ex Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 30 daños más.",
                "it": "Se il Pokémon attivo del tuo avversario è un Pokémon ex, questo attacco infligge 30 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners ein Pokémon-Ex ist, fügt dieser Angriff 30 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 30 de dano a mais.",
                "zh-tw": "如果對手的現役神奇寶貝是前神奇寶貝，則此攻擊造成的傷害增加 30 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
