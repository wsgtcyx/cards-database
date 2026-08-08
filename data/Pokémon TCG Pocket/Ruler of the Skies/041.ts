import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/041",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/041",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/041"
    },
    name: {
        en: "Kyogre",
        fr: "Kyogre",
        es: "Kyogre",
        it: "Kyogre",
        de: "Kyogre",
        "pt-br": "Kyogre",
        "zh-tw": "蓋歐卡",
        ko: "가이오가",
        ja: "カイオーガ"
    },
    illustrator: "Shin Nagasawa",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    dexId: [382],
    stage: "Basic",
    description: {
        en: "It is said to have widened the seas by causing downpours. It had been asleep in a marine trench.",
        fr: "On dit qu’il a fait monter les eaux en causant des\npluies diluviennes. Il somnolait dans une fosse marine.",
        es: "Se dice que aumentó el nivel del mar a base de\naguaceros. Ha estado durmiendo en una fosa marina.",
        it: "Si dice che abbia ampliato i mari provocando piogge\ntorrenziali. Si è assopito in una fossa marina.",
        de: "Man sagt, es habe die Meere vergrößert, indem es\nes regnen ließ. Es schlief in einem Meeresgraben."
    },
    attacks: [
        {
            cost: ["Water", "Water", "Water", "Water"],
            name: {
                en: "Tidal Blast",
                fr: "Marée Explosive",
                es: "Explosión Marina",
                "pt-br": "Maré Explosiva",
                "zh-tw": "潮汐爆破",
                "it": "Mareggiata Rovinosa",
                "de": "Gezeitenstoß"
            },
            effect: {
                en: "Discard 3 {W} Energy from this Pokémon, and this attack does 50 damage to each of your opponent's Pokémon.",
                fr: "Défaussez 3 Énergies {W} de ce Pokémon. Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire.",
                es: "Descarta 3 Energías {W} de este Pokémon. Este ataque hace 50 puntos de daño a cada uno de los Pokémon de tu rival.",
                "pt-br": "Descarte 3 Energias {W} deste Pokémon, e este ataque causa 50 pontos de dano a cada um dos Pokémon do seu oponente.",
                "zh-tw": "將這隻寶可夢身上的3個{W}能量丟棄,對手的所有寶可夢受到50點傷害。",
                "de": "Lege 3 {W}-Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt jedem Pokémon deines Gegners 50 Schadenspunkte zu."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};
export default card;
