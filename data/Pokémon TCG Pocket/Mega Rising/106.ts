import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Jirachi",
        "fr": "Jirachi",
        "es": "Jirachi",
        "it": "Jirachi",
        "de": "Jirachi",
        "pt-br": "Jirachi",
        "zh-tw": "吉拉奇"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "It is said to have the ability to grant any wish for\njust one week every thousand years.",
        "fr": "On dit qu'il a la capacité d'exaucer n'importe quel souhait\njuste une semaine tous les mille ans.",
        "es": "Se dice que tiene la capacidad de conceder cualquier deseo de\nsólo una semana cada mil años.",
        "it": "Si dice che abbia la capacità di esaudire qualsiasi desiderio\nsolo una settimana ogni mille anni.",
        "de": "Ihm wird die Fähigkeit nachgesagt, jeden Wunsch zu erfüllen\nnur eine Woche alle tausend Jahre.",
        "pt-br": "Diz-se que tem a capacidade de realizar qualquer desejo de\napenas uma semana a cada mil anos.",
        "zh-tw": "據說有能力實現任何願望\n每千年只有一周。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Star Drop",
                "fr": "Chute d'étoiles",
                "es": "Caída de estrellas",
                "it": "Caduta di stelle",
                "de": "Sternentropfen",
                "pt-br": "Gota de estrela",
                "zh-tw": "星星掉落"
            },
            cost: ["Psychic"],
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 30 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
