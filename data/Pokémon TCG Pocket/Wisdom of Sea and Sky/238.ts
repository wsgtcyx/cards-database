import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Weavile ex",
        "fr": "Ex-Weavile",
        "es": "ex weavile",
        "it": "Weavile es",
        "de": "Weavile ex",
        "pt-br": "Ex Weavile",
        "zh-tw": "韋維爾前夫"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Darkness"],
    evolveFrom: {
        en: "Sneasel",
        "fr": "Sneasel",
        "es": "Sneasel",
        "it": "Sneasel",
        "de": "Nieseln",
        "pt-br": "Sneasel",
        "zh-tw": "斯內塞爾"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Scratching Nails",
                "fr": "Se gratter les ongles",
                "es": "Rascarse las uñas",
                "it": "Grattarsi le unghie",
                "de": "Kratzende Nägel",
                "pt-br": "Coçar as unhas",
                "zh-tw": "抓指甲"
            },
            damage: 30,
            cost: ["Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 40 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire subit des dégâts, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival tiene daño, este ataque hace 40 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario ha dei danni su di sé, questo attacco infligge 40 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners Schaden hat, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente sofrer dano, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果對手的出戰寶可夢受到傷害，則這次攻擊造成的傷害增加 40 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
