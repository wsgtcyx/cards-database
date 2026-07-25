import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/007",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/007"
    },
    name: {
        en: "Torchic",
        fr: "Poussifeu",
        es: "Torchic",
        it: "Torchic",
        de: "Flemmli",
        "pt-br": "Torchic",
        "zh-tw": "火稚雞",
        ko: "아차모",
        ja: "アチャモ"
    },
    illustrator: "MAHOU",
    rarity: "None",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    dexId: [255],
    stage: "Basic",
    description: {
        en: "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit.",
        fr: "Ses câlins réchauffent car il renferme une fournaise.\nIl envoie des boules de feu à 1 000 °C.",
        es: "En su interior arde una llama que mantiene su cuerpo\ncaliente. Tira bolas de fuego a 1000 °C.",
        it: "Nel suo corpo brucia una fiamma e abbracciandolo\nsi avverte calore. Lancia palle di fuoco a 1000 °C.",
        de: "In seinem Inneren lodert ein Feuer. Es schleudert\n1 000 °C heiße Feuerbälle.",
        "pt-br": "Um fogo queima por dentro, então é muito quente abraçar. Ele lança bolas de fogo de 1.800 graus Fahrenheit.",
        "zh-tw": "裡面有一團火在燃燒，擁抱起來感覺很溫暖。它發射 1,800 華氏度的火球。"
    },
    attacks: [
        {
            cost: ["Fire"],
            name: {
                en: "Peck",
                fr: "Picpic",
                es: "Picotazo",
                it: "Beccata",
                de: "Pikser",
                "pt-br": "Bicada",
                "zh-tw": "啄"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
