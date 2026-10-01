import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/252",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/252",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/252",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/252",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/252",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/252",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/252"
    },
    name: {
        en: "Sprigatito",
        fr: "Poussacha",
        es: "Sprigatito",
        it: "Sprigatito",
        de: "Felori",
        "pt-br": "Sprigatito",
        "zh-tw": "新葉喵",
        ja: "ニャオハ",
        ko: "나오하"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    dexId: [
        906
    ],
    description: {
        en: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun.",
        fr: "Il dégage une odeur sucrée qui fascine les êtres alentour. Celle-ci est plus forte lorsqu'il est exposé au soleil.",
        es: "Su cuerpo desprende una dulce fragancia que embriaga a quien tiene a su alrededor. Esta se intensifica al exponerse a los rayos del sol.",
        it: "Il dolce profumo che emana dal corpo incanta chiunque si trovi nelle vicinanze e si intensifica quando il Pokémon si espone al sole.",
        de: "Es verzaubert alle in seiner Umgebung mit dem süßen Duft, der von ihm ausgeht. Dieser wird durch Sonnenschein noch intensiver.",
        "pt-br": "O aroma doce que exala de seu corpo encanta todos à sua volta. O cheiro fica mais forte quando esse Pokémon está no sol.",
        "zh-tw": "會用身體發出甜甜香氣，讓周圍的一切為之傾倒。照到陽光後香氣會變得更濃郁。",
        ja: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun.",
        ko: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Leafage",
                fr: "Feuillage",
                es: "Follaje",
                it: "Fogliame",
                de: "Blattwerk",
                "pt-br": "Folhagem",
                "zh-tw": "樹葉",
                ko: "나뭇잎",
                ja: "Leafage"
            },
            damage: 20,
            cost: [
                "Grass"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
