import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Jolteon",
        es: "Jolteon",
        "fr": "Joltéon",
        "it": "Jolteon",
        "de": "Ruck",
        "pt-br": "Jolteon",
        "zh-tw": "雷伊布",
    },
    illustrator: "Mizue",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Eevee",
        es: "Eevee",
        "fr": "Évoli",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "It concentrates the weak electric charges emitted\nby its cells and launches wicked lightning bolts.",
        es: "Concentra la débil actividad eléctrica de\nsus células para lanzar dañinas descargas.",
        "fr": "Il concentre les faibles charges électriques émises\npar ses cellules et lance de méchants éclairs.",
        "it": "Concentra le deboli cariche elettriche emesse\ndalle sue cellule e lancia fulmini malvagi.",
        "de": "Es konzentriert die emittierten schwachen elektrischen Ladungen\ndurch seine Zellen und feuert böse Blitze ab.",
        "pt-br": "Ele concentra as cargas elétricas fracas emitidas\npor suas células e lança relâmpagos perversos.",
        "zh-tw": "它集中發射的微弱電荷\n通過它的細胞並發射邪惡的閃電。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Beginning Bolt",
                es: "Descarga de Arranque",
                "fr": "Boulon de début",
                "it": "Bullone iniziale",
                "de": "Anfangsbolzen",
                "pt-br": "Parafuso Inicial",
                "zh-tw": "起始螺栓"
            },
            damage: 40,
            cost: ["Lightning"],
            effect: {
                en: "If this Pokémon evolved during this turn, this attack does 20 more damage.",
                es: "Si este Pokémon ha evolucionado durante este turno, este ataque hace 20 puntos de daño más.",
                "fr": "Si ce Pokémon a évolué durant ce tour, cette attaque inflige 20 dégâts supplémentaires.",
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
    retreat: 1,
    boosters: ["vol10"]
};
export default card;
