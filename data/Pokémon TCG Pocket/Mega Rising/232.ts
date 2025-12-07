import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Magikarp",
        "fr": "Magikarpe",
        "es": "Magikarp",
        "it": "Magikarp",
        "de": "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王"
    },
    illustrator: "Tetsu Kayama",
    rarity: "One Star",
    category: "Pokemon",
    hp: 30,
    types: ["Water"],
    description: {
        en: "In the distant past, it was somewhat stronger than\nthe horribly weak descendants that exist today.",
        "fr": "Dans un passé lointain, il était un peu plus fort que\nles descendants horriblement faibles qui existent aujourd’hui.",
        "es": "En el pasado lejano, era algo más fuerte que\nlos descendientes horriblemente débiles que existen hoy.",
        "it": "In un lontano passato, era un po 'più forte di\ni discendenti orribilmente deboli che esistono oggi.",
        "de": "In der fernen Vergangenheit war es etwas stärker als\ndie schrecklich schwachen Nachkommen, die es heute gibt.",
        "pt-br": "No passado distante, era um pouco mais forte do que\nos descendentes terrivelmente fracos que existem hoje.",
        "zh-tw": "在遙遠的過去，它比\n今天存在的極其弱小的後代。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Waterfall Evolution",
                "fr": "Évolution de la cascade",
                "es": "Evolución de la cascada",
                "it": "Evoluzione della cascata",
                "de": "Wasserfallentwicklung",
                "pt-br": "Evolução da Cachoeira",
                "zh-tw": "瀑布進化"
            },
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                "fr": "Mettez une carte aléatoire de votre deck qui évolue de ce Pokémon sur ce Pokémon pour le faire évoluer.",
                "es": "Coloca una carta aleatoria de tu mazo que evolucione de este Pokémon a este Pokémon para evolucionarlo.",
                "it": "Metti una carta a caso dal tuo mazzo che si evolve da questo Pokémon a questo Pokémon per farlo evolvere.",
                "de": "Lege eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es weiterzuentwickeln.",
                "pt-br": "Coloque uma carta aleatória do seu baralho que evolui deste Pokémon neste Pokémon para evoluí-lo.",
                "zh-tw": "從你的牌組中隨機放置一張由該神奇寶貝進化而來的卡牌到該神奇寶貝上以使其進化。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
