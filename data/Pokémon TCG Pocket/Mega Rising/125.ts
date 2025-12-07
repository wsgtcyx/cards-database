import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
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
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    description: {
        en: "To avoid being attacked, it does nothing but\nmimic a tree. It hates water and flees from rain.",
        "fr": "Pour éviter d'être attaqué, il ne fait que\nimiter un arbre. Il déteste l'eau et fuit la pluie.",
        "es": "Para evitar ser atacado, no hace más que\nimitar un árbol. Odia el agua y huye de la lluvia.",
        "it": "Per evitare di essere attaccato, non fa altro che\nimitare un albero. Odia l'acqua e fugge la pioggia.",
        "de": "Um nicht angegriffen zu werden, tut es nichts anderes als\neinen Baum nachahmen. Es hasst Wasser und flieht vor Regen.",
        "pt-br": "Para evitar ser atacado, ele não faz nada além de\nimitar uma árvore. Ele odeia água e foge da chuva.",
        "zh-tw": "為了避免受到攻擊，它什麼也不做，只是\n模仿一棵樹。它討厭水並躲避雨。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Fight Back",
                "fr": "Riposter",
                "es": "Contraatacar",
                "it": "Combatti",
                "de": "Schlagen Sie zurück",
                "pt-br": "Contra-atacar",
                "zh-tw": "回擊"
            },
            damage: 30,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "If this Pokémon has damage on it, this attack does 50 more damage.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene daño, este ataque hace 50 puntos de daño más.",
                "it": "Se questo Pokémon ha dei danni su di sé, questo attacco infligge 50 danni in più.",
                "de": "Wenn dieses Pokémon Schaden hat, verursacht dieser Angriff 50 weitere Schadenspunkte.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝受到傷害，則這次攻擊會造成額外 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
