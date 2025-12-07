import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Espeon",
        "fr": "Espéon",
        "es": "Espeon",
        "it": "Espeon",
        "de": "Espeon",
        "pt-br": "Espeon",
        "zh-tw": "埃斯彭"
    },
    illustrator: "Ryota Murayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "The tip of its forked tail quivers when it is\npredicting its opponent's next move.",
        "fr": "Le bout de sa queue fourchue frémit lorsqu'il est\nprédire le prochain coup de son adversaire.",
        "es": "La punta de su cola bifurcada tiembla cuando es\npredecir el próximo movimiento de su oponente.",
        "it": "La punta della coda biforcuta trema quando lo è\nprevedere la prossima mossa del suo avversario.",
        "de": "Die Spitze seines gegabelten Schwanzes zittert, wenn er in Bewegung ist\nden nächsten Zug seines Gegners vorherzusagen.",
        "pt-br": "A ponta de sua cauda bifurcada estremece quando é\nprevendo o próximo movimento do seu oponente.",
        "zh-tw": "它的分叉尾巴尖端會在它顫抖時顫抖\n預測對手的下一步行動。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Energy Crush",
                "fr": "Coup de cœur énergétique",
                "es": "Aplastamiento de energía",
                "it": "Schiacciamento energetico",
                "de": "Energie-Crush",
                "pt-br": "Esmagamento de energia",
                "zh-tw": "能量粉碎"
            },
            damage: 20,
            cost: ["Psychic"],
            effect: {
                en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
                "es": "Este ataque hace 20 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
                "it": "Questo attacco infligge 20 danni per ogni Energia assegnata a tutti i Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 20 Schadenspunkte für jede Energie zu, die an alle Pokémon deines Gegners angelegt ist.",
                "pt-br": "Este ataque causa 20 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
                "zh-tw": "對手所有寶可夢身上所附加的能量每有 1 點，此攻擊就會造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
