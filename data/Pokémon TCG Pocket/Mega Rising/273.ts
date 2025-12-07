import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Whimsicott ex",
        "fr": "ex-Whimsicott",
        "es": "Whimsicott ex",
        "it": "Whimsicott ex",
        "de": "Whimsicott ex",
        "pt-br": "Whimsicott ex",
        "zh-tw": "異想天開"
    },
    illustrator: "Kanami Ogata",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Grass"],
    evolveFrom: {
        en: "Cottonee",
        "fr": "Cotonee",
        "es": "algodón",
        "it": "Cottonee",
        "de": "Cottonee",
        "pt-br": "Algodão",
        "zh-tw": "科托尼"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Grass Knot",
                "fr": "Noeud d'herbe",
                "es": "Nudo de hierba",
                "it": "Nodo d'erba",
                "de": "Grasknoten",
                "pt-br": "Nó de grama",
                "zh-tw": "草結"
            },
            damage: 40,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
                "fr": "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie du Coût de Retraite du Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño más por cada Energía en el Coste de Retirada del Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 30 danni in più per ogni Energia nel costo di ritirata del Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff fügt 30 weitere Schadenspunkte für jede Energie in den Rückzugskosten des Aktiven Pokémon deines Gegners zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada Energia no Custo de Recuo do Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的現役寶可夢的撤退費用中每有一個能量，該攻擊就會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
