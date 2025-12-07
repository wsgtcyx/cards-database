import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Tangrowth",
        "fr": "Tangroissance",
        "es": "crecimiento tangencial",
        "it": "Tangcrescita",
        "de": "Tangwachstum",
        "pt-br": "Tangrowth",
        "zh-tw": "巨蔓藤",
    },
    illustrator: "tetsuya koizumi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Tangela",
        "fr": "Tangela",
        "es": "Tangela",
        "it": "Tangela",
        "de": "Tangela",
        "pt-br": "Tangela",
        "zh-tw": "蔓藤怪",
    },
    description: {
        en: "Tangrowth has two arms that it can extend as it\npleases. Recent research has shown that these\narms are, in fact, bundles of vines.",
        "fr": "Tangrowth a deux bras qu'il peut étendre à mesure qu'il\nplaît. Des recherches récentes ont montré que ces\nles bras sont en fait des fagots de vigne.",
        "es": "Tangrowth tiene dos brazos que puede extender a medida que\nagrada. Investigaciones recientes han demostrado que estos\nLas armas son, de hecho, haces de enredaderas.",
        "it": "Tangrowth ha due braccia che può estendere man mano\npiace. Recenti ricerche hanno dimostrato che questi\nle braccia sono, infatti, fasci di viti.",
        "de": "Tangrowth hat zwei Arme, die es ausstrecken kann\ngefällt. Neuere Untersuchungen haben gezeigt, dass diese\nArme sind in Wirklichkeit Weinrebenbündel.",
        "pt-br": "Tangrowth tem dois braços que pode estender conforme\nagrada. Pesquisas recentes mostraram que estes\nos braços são, na verdade, feixes de videiras.",
        "zh-tw": "Tangrowth 有兩條手臂，可以隨心所欲地伸展\n請。最近的研究表明，這些\n事實上，手臂是一捆捆的藤蔓。"
    },
    stage: "Stage1",
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
            damage: 10,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "This attack does 40 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost.",
                "fr": "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie du Coût de Retraite du Pokémon Actif de votre adversaire.",
                "es": "Este ataque hace 40 puntos de daño más por cada Energía en el Coste de Retirada del Pokémon Activo de tu rival.",
                "it": "Questo attacco infligge 40 danni in più per ogni Energia nel costo di ritirata del Pokémon attivo del tuo avversario.",
                "de": "Dieser Angriff verursacht 40 weitere Schadenspunkte für jede Energie in den Rückzugskosten des Aktiven Pokémon deines Gegners.",
                "pt-br": "Este ataque causa 40 pontos de dano a mais para cada Energia no Custo de Recuo do Pokémon Ativo do seu oponente.",
                "zh-tw": "對手的現役寶可夢的撤退費用中每有一個能量，該攻擊就會造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["ho-oh"]
};
export default card;
