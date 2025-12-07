import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Beautifly",
        "fr": "Magnifiquement",
        "es": "hermosamente",
        "it": "Bellissima",
        "de": "Wunderschön",
        "pt-br": "Lindamente",
        "zh-tw": "狩獵鳳蝶",
    },
    illustrator: "Midori Harada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Grass"],
    evolveFrom: {
        en: "Silcoon",
        "fr": "Silicone",
        "es": "Silcoon",
        "it": "Silcoon",
        "de": "Silcoon",
        "pt-br": "Silcon",
        "zh-tw": "甲殼蛹",
    },
    description: {
        en: "It has an aggressive nature. It stabs prey with its\nlong, narrow mouth to drain the prey's fluids.",
        "fr": "Il a un caractère agressif. Il poignarde ses proies avec son\nbouche longue et étroite pour drainer les fluides de la proie.",
        "es": "Tiene un carácter agresivo. Apuñala a su presa con su\nBoca larga y estrecha para drenar los fluidos de la presa.",
        "it": "Ha una natura aggressiva. Trafigge la preda con il suo\nbocca lunga e stretta per drenare i liquidi della preda.",
        "de": "Es hat eine aggressive Natur. Es ersticht die Beute damit\nLanges, schmales Maul, um die Flüssigkeiten der Beute abzuleiten.",
        "pt-br": "Tem uma natureza agressiva. Ele apunhala a presa com seu\nboca longa e estreita para drenar os fluidos da presa.",
        "zh-tw": "它具有攻擊性。它用它的刺刺獵物\n長而窄的嘴可以排出獵物的體液。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Skill Dive",
                "fr": "Plongée de compétence",
                "es": "Buceo de habilidad",
                "it": "Immersione di abilità",
                "de": "Geschicklichkeitstauchen",
                "pt-br": "Mergulho de Habilidade",
                "zh-tw": "技能潛水"
            },
            cost: ["Grass"],
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 50 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 50 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
