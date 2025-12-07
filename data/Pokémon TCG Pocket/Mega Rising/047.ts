import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Turtonator",
        "fr": "Turtonateur",
        "es": "Turtonador",
        "it": "Turtonatore",
        "de": "Turtonator",
        "pt-br": "Turtonador",
        "zh-tw": "爆焰龜獸",
    },
    illustrator: "KEIICHIRO ITO",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    description: {
        en: "Eating sulfur in its volcanic habitat is what causes\nexplosive compounds to develop in its shell.\nIts droppings are also dangerously explosive.",
        "fr": "Manger du soufre dans son habitat volcanique est la cause\ndes composés explosifs se développent dans sa coquille.\nSes excréments sont également dangereusement explosifs.",
        "es": "Comer azufre en su hábitat volcánico es lo que causa\ncompuestos explosivos se desarrollen en su caparazón.\nSus excrementos también son peligrosamente explosivos.",
        "it": "La causa è il consumo di zolfo nel suo habitat vulcanico\ncomposti esplosivi da sviluppare nel suo guscio.\nI suoi escrementi sono anche pericolosamente esplosivi.",
        "de": "Der Verzehr von Schwefel in seinem vulkanischen Lebensraum ist die Ursache\ndass sich in seiner Hülle explosive Verbindungen bilden.\nSein Kot ist außerdem gefährlich explosiv.",
        "pt-br": "Comer enxofre em seu habitat vulcânico é o que causa\ncompostos explosivos se desenvolvam em sua concha.\nSeus excrementos também são perigosamente explosivos.",
        "zh-tw": "在火山棲息地吃硫磺是導致\n其殼內會形成爆炸性化合物。\n它的糞便也具有危險的爆炸性。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Shell Trap",
                "fr": "Piège à obus",
                "es": "Trampa de concha",
                "it": "Trappola di conchiglie",
                "de": "Muschelfalle",
                "pt-br": "Armadilha de concha",
                "zh-tw": "貝殼陷阱"
            },
            damage: 40,
            cost: ["Fire", "Fire"],
            effect: {
                en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 20 damage to the Attacking Pokémon.",
                "fr": "Lors du prochain tour de votre adversaire, si ce Pokémon est blessé par une attaque, infligez 20 dégâts au Pokémon attaquant.",
                "es": "Durante el próximo turno de tu rival, si este Pokémon es dañado por un ataque, haz 20 puntos de daño al Pokémon atacante.",
                "it": "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, infliggi 20 danni al Pokémon attaccante.",
                "de": "Wenn dieses Pokémon im nächsten Zug deines Gegners durch einen Angriff beschädigt wird, füge dem angreifenden Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Durante o próximo turno do seu oponente, se este Pokémon receber dano de um ataque, cause 20 pontos de dano ao Pokémon atacante.",
                "zh-tw": "在對手的下一個回合中，如果這只神奇寶貝因攻擊而受到傷害，則對攻擊的神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
