import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/043",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/043"
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
    illustrator: "nagimiso",
    rarity: "One Diamond",
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
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                "pt-br": "Ataque Surpresa",
                "zh-tw": "偷襲"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                es: "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                de: "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            },
            damage: 40
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
