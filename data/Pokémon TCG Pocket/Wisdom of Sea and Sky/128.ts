import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Klinklang",
        "fr": "Klinklang",
        "es": "klinklang",
        "it": "Klinklang",
        "de": "Klinklang",
        "pt-br": "Klinklang",
        "zh-tw": "克林克朗"
    },
    illustrator: "Akira Komayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Metal"],
    evolveFrom: {
        en: "Klang",
        "fr": "Kuala Lumpur",
        "es": "Klang",
        "it": "Klang",
        "de": "Klang",
        "pt-br": "Klang",
        "zh-tw": "巴生"
    },
    description: {
        en: "From its spikes, it launches powerful blasts of\nelectricity. Its red core contains an enormous\namount of energy.",
        "fr": "Depuis ses pointes, il lance de puissantes explosions de\nélectricité. Son noyau rouge contient un énorme\nquantité d'énergie.",
        "es": "Desde sus púas, lanza poderosas ráfagas de\nelectricidad. Su núcleo rojo contiene una enorme\ncantidad de energía.",
        "it": "Dalle sue punte lancia potenti esplosioni di\nelettricità. Il suo nucleo rosso contiene un enorme\nquantità di energia.",
        "de": "Von seinen Stacheln aus feuert es mächtige Schüsse ab\nStrom. Sein roter Kern enthält eine enorme Menge\nMenge an Energie.",
        "pt-br": "Dos seus espinhos, ele lança rajadas poderosas de\neletricidade. Seu núcleo vermelho contém uma enorme\nquantidade de energia.",
        "zh-tw": "它從它的尖刺中發射出強大的爆炸\n電力。它的紅色核心含有巨大的\n能量量。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Gear Spinner",
                "fr": "Spinner à engrenages",
                "es": "Girador de engranajes",
                "it": "Filatore di ingranaggi",
                "de": "Zahnradspinner",
                "pt-br": "Girador de engrenagem",
                "zh-tw": "齒輪旋轉器"
            },
            damage: 70,
            cost: ["Metal", "Metal", "Colorless"],
            effect: {
                en: "During your next turn, this Pokémon's Gear Spinner attack does +70 damage.",
                "fr": "Lors de votre prochain tour, l'attaque Gear Spinner de ce Pokémon inflige +70 dégâts.",
                "es": "Durante tu próximo turno, el ataque Gear Spinner de este Pokémon hace +70 de daño.",
                "it": "Durante il tuo prossimo turno, l'attacco Gira-Ingranaggio di questo Pokémon infligge +70 danni.",
                "de": "Während deines nächsten Zuges verursacht der Gear-Spinner-Angriff dieses Pokémon +70 Schaden.",
                "pt-br": "Durante o seu próximo turno, o ataque Gear Spinner deste Pokémon causa +70 de dano.",
                "zh-tw": "在你的下一個回合中，這只神奇寶貝的齒輪旋轉攻擊造成+70點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
