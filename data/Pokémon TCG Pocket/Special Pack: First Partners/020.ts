import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/020",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/020"
    },
    name: {
        en: "Litten",
        fr: "Flamiaou",
        es: "Litten",
        "pt-br": "Litten",
        "zh-tw": "火斑喵",
        ja: "ニャビー",
        ko: "냐오불",
        it: "Litten",
        de: "Flamiau"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Fire Fang",
                fr: "Crocs Feu",
                es: "Colmillo Ígneo",
                it: "Rogodenti",
                de: "Feuerzahn",
                "pt-br": "Presas de Fogo",
                "zh-tw": "火焰牙",
                ja: "Fire Fang",
                ko: "Fire Fang"
            },
            cost: [
                "Colorless",
                "Fire",
                "Fire"
            ],
            damage: 40,
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
                es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
                it: "Il Pokémon attivo del tuo avversario viene bruciato.",
                de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "將對手的戰鬥寶可夢灼傷。",
                ja: "Your opponent's Active Pokémon is now Burned.",
                ko: "Your opponent's Active Pokémon is now Burned."
            }
        }
    ],
    abilities: [],
    description: {
        en: "While grooming itself, it builds up fur inside its stomach. It sets the fur alight and spews fiery attacks, which change based on how it coughs.",
        fr: "Il enflamme des poils accumulés dans son ventre après sa toilette. Les flammes qu’il crache varient en fonction de la manière dont il tousse.",
        es: "Prende las bolas de pelo que se le forman en el estómago tras acicalarse. Las llamas resultantes cambian según la forma en la que escupe el pelo.",
        it: "Incendia le palle di pelo accumulate nello stomaco durante la toeletta ed espelle fiamme che plasma a suo piacimento.",
        de: "Es verbrennt Haare, die es bei der Körperpflege verschluckt hat, indem es Feuer speit. Die Flammen verändern je nach Art des Spuckens.",
        "pt-br": "Enquanto se lambe, acumula pelos em seu estômago. Acende esse pelo e expele ataques flamejantes, que podem variar dependendo de como tosse.",
        "zh-tw": "將理毛時屯積在肚子裡的落毛引燃並吐出火焰。火焰會隨著吐毛的方式不同而變化。",
        ja: "While grooming itself, it builds up fur inside its stomach. It sets the fur alight and spews fiery attacks, which change based on how it coughs.",
        ko: "While grooming itself, it builds up fur inside its stomach. It sets the fur alight and spews fiery attacks, which change based on how it coughs."
    }
};

export default card;
