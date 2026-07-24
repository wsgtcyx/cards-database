import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/014",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/014"
    },
    name: {
        en: "Rellor",
        fr: "Léboulérou",
        es: "Rellor",
        it: "Rellor",
        de: "Relluk",
        "pt-br": "Rellor",
        "zh-tw": "蟲滾泥",
        pt: "Rellor",
        'es-mx': "Rellor"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [953],
    description: {
        en: "It rolls its mud ball around while the energy it needs for evolution matures. Eventually the time comes for it to evolve.",
        "fr": "Il fait rouler sa boule de boue pendant que mûrit l'énergie dont il a besoin pour évoluer. Finalement, le moment est venu pour cela d’évoluer.",
        "es": "Hace rodar su bola de barro mientras madura la energía que necesita para la evolución. Al final llega el momento de evolucionar.",
        "it": "Fa rotolare la sua palla di fango mentre matura l'energia di cui ha bisogno per l'evoluzione. Alla fine arriva il momento di evolversi.",
        "de": "Es rollt seinen Schlammball herum, während die Energie heranreift, die es für die Evolution braucht. Irgendwann ist die Zeit gekommen, dass es sich weiterentwickelt.",
        "pt-br": "Ele rola sua bola de lama enquanto a energia necessária para a evolução amadurece. Eventualmente chega a hora de evoluir.",
        "zh-tw": "當它進化所需的能量成熟時，它會滾動它的泥球。最終，它進化的時刻來了。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Ball Roll",
                fr: "Boulé-Roulade",
                es: "Rodabola",
                it: "Rotopalla",
                de: "Ballrolle",
                "pt-br": "Rolar bola",
                "zh-tw": "滾球",
                'es-mx': "Bola Rodante",
                pt: "Rolo Bola"
            },
            damage: "20×",
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
                fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 20 點傷害。",
                'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
                pt: "Jogue uma moeda até sair coroa. Este ataque causa 20 pontos de dano para cada cara."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
