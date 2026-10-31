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
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/174",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3/174",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3/174"
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
        "zh-tw": "為了保護自己免受危險，他們透過變身為人和寶可夢來隱藏自己的真實身份。",
        ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
        ko: "사람이나 다른 포켓몬으로 둔갑한다.\n자신의 정체를 감추어\n위험으로부터 몸을 지키는 것이다."
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
                "zh-tw": "覺醒",
                ja: "かくせい",
                ko: "각성"
            },
            effect: {
                en: "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
                fr: "Mettez une carte aléatoire de votre deck qui évolue de ce Pokémon sur ce Pokémon pour le faire évoluer.",
                es: "Coloca una carta aleatoria de tu mazo que evolucione de este Pokémon a este Pokémon para evolucionarlo.",
                it: "Metti una carta a caso dal tuo mazzo che si evolve da questo Pokémon a questo Pokémon per farlo evolvere.",
                de: "Lege eine zufällige Karte aus deinem Deck, die sich aus diesem Pokémon entwickelt, auf dieses Pokémon, um es weiterzuentwickeln.",
                "pt-br": "Coloque uma carta aleatória do seu baralho que evolui deste Pokémon neste Pokémon para evoluí-lo.",
                "zh-tw": "從你的牌組中隨機放置一張由該寶可夢進化而來的卡牌到該寶可夢上以使其進化。",
                ja: "このポケモンから進化するカードを、自分の山札からランダムに1枚、このポケモンにのせて進化させる。",
                ko: "이 포켓몬에서 진화하는 카드를 자신의 덱에서 랜덤으로 1장 이 포켓몬에게 올려서 진화시킨다."
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
