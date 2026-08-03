import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/076",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/076",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/076",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/076",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/076"
    },
    name: {
        en: "Swoobat",
        fr: "Rhinolove",
        es: "Swoobat",
        it: "Swoobat",
        de: "Fletiamo",
        "pt-br": "Swoobat",
        "zh-tw": "心蝙蝠",
        ko: "맘박쥐",
        ja: "ココロモリ"
    },
    illustrator: "Narumi Sato",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Psychic"],
    dexId: [528],
    evolveFrom: {
        en: "Woobat",
        fr: "Chovsourir",
        es: "Woobat",
        it: "Woobat",
        de: "Fleknoil",
        "pt-br": "Woobat",
        "zh-tw": "滾滾蝙蝠",
        ko: "또르박쥐",
        ja: "コロモリ"
    },
    stage: "Stage1",
    description: {
        en: "The auspicious shape of this Pokémon’s nose apparently led some regions to consider Swoobat a symbol of good luck.",
        fr: "Certaines contrées le vénèrent et pensent\nque la forme de son nez est un symbole\nde chance et de bonheur.",
        es: "En algunas regiones se venera a este Pokémon,\nya que consideran la forma de su nariz como un\nsímbolo de felicidad.",
        it: "Si dice che in alcune regioni venga venerato\nper via della forma del suo naso, ritenuta\ndi buon auspicio.",
        de: "Es wird in manchen Regionen für seine Nasenform\nverehrt, die angeblich Glück bringen soll.",
        "zh-tw": "據說有些地區的人覺得\n牠鼻子的形狀很吉利，\n而把牠當成幸福的象徵來祭拜。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Mind Bend",
                fr: "Contrôleur d'Esprit",
                es: "Fusión Mental",
                "pt-br": "Dobra Mentes",
                "zh-tw": "精神歪曲"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Confused.",
                fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
                es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
                it: "Il Pokémon attivo del tuo avversario è ora confuso.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verwirrt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Confuso.",
                "zh-tw": "將對手的戰鬥寶可夢混亂。"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
