import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Jolteon",
        "fr": "Joltéon",
        "es": "Jolteon",
        "it": "Jolteon",
        "de": "Ruck",
        "pt-br": "Jolteon",
        "zh-tw": "雷頓"
    },
    illustrator: "Nisota Niso",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
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
        en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
        "fr": "Il concentre les faibles charges électriques émises\npar ses cellules et lance de méchants éclairs.",
        "es": "Concentra las débiles cargas eléctricas emitidas.\npor sus células y lanza malvados relámpagos.",
        "it": "Concentra le deboli cariche elettriche emesse\ndalle sue cellule e lancia fulmini malvagi.",
        "de": "Es konzentriert die emittierten schwachen elektrischen Ladungen\ndurch seine Zellen und feuert böse Blitze ab.",
        "pt-br": "Ele concentra as cargas elétricas fracas emitidas\npor suas células e lança relâmpagos perversos.",
        "zh-tw": "它集中發射的微弱電荷\n通過它的細胞並發射邪惡的閃電。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Beginning Bolt",
                "fr": "Boulon de début",
                "es": "Perno inicial",
                "it": "Bullone iniziale",
                "de": "Anfangsbolzen",
                "pt-br": "Parafuso Inicial",
                "zh-tw": "起始螺栓"
            },
            damage: 40,
            cost: ["Lightning"],
            effect: {
                en: "If this Pokémon evolved during this turn, this attack does 20 more damage.",
                "fr": "Si ce Pokémon a évolué durant ce tour, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Si este Pokémon evolucionó durante este turno, este ataque hace 20 puntos de daño más.",
                "it": "Se questo Pokémon si è evoluto durante questo turno, questo attacco infligge 20 danni in più.",
                "de": "Wenn sich dieses Pokémon in diesem Zug weiterentwickelt hat, fügt dieser Angriff 20 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon evoluiu durante este turno, este ataque causará 20 danos a mais.",
                "zh-tw": "如果這只寶可夢在本回合中進化，則這次攻擊造成的傷害增加 20 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
