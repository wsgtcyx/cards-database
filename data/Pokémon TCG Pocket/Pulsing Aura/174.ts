import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/174",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/174",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/174",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/174",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/174",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/174",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/174"
    },
    name: {
        en: "Zorua",
        fr: "Zorua",
        es: "Zorua",
        it: "Zorua",
        de: "Zorua",
        "pt-br": "Zorua",
        "zh-tw": "索羅亞",
        ko: "조로아",
        ja: "ゾロア"
    },
    illustrator: "MINAMINAMI Take",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [570],
    stage: "Basic",
    description: {
        en: "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon.",
        fr: "Il peut se transformer en humain ou en d’autres Pokémon.\nIl se protège du danger en dissimulant sa vraie identité.",
        es: "Se transforma en humanos o en otros Pokémon. Se defiende\ndel peligro ocultando su verdadera apariencia.",
        it: "Si protegge dai pericoli trasformandosi in essere umano o in\nun altro Pokémon, nascondendo così la sua vera identità.",
        de: "Es tarnt sich als Mensch oder als andere Pokémon. Es schützt\nsich vor Gefahren, indem es seine wahre Gestalt geheim hält.",
        "pt-br": "Para se protegerem do perigo, eles escondem suas verdadeiras identidades transformando-se em pessoas e Pokémon.",
        "zh-tw": "為了保護自己免受危險，他們透過變身為人和寶可夢來隱藏自己的真實身份。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Ascension",
                fr: "Ascension",
                es: "Ascensión",
                it: "Ascensione",
                de: "Aufstieg",
                "pt-br": "Ascensão",
                "zh-tw": "覺醒"
            },
            effect: {
                en: "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                fr: "Mettez une carte aléatoire de votre deck qui évolue de ce Pokémon sur ce Pokémon pour le faire évoluer.",
                es: "Coloca una carta aleatoria de tu mazo que evolucione de este Pokémon a este Pokémon para evolucionarlo.",
                it: "Metti una carta a caso dal tuo mazzo che si evolve da questo Pokémon a questo Pokémon per farlo evolvere.",
                de: "Lege eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es weiterzuentwickeln.",
                "pt-br": "Coloque uma carta aleatória do seu baralho que evolui deste Pokémon neste Pokémon para evoluí-lo.",
                "zh-tw": "從你的牌組中隨機放置一張由該寶可夢進化而來的卡牌到該寶可夢上以使其進化。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
