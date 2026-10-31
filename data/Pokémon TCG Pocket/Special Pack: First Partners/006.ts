import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/006",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/006",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/006",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/006",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/006",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/006",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/006"
    },
    name: {
        en: "Totodile",
        fr: "Kaiminus",
        es: "Totodile",
        "pt-br": "Totodile",
        "zh-tw": "小鋸鱷",
        ja: "ワニノコ",
        ko: "리아코",
        it: "Totodile",
        de: "Karnimani"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: [
        "Water"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住",
                ja: "Bite",
                ko: "Bite"
            },
            cost: [
                "Colorless",
                "Water",
                "Water"
            ],
            damage: 60
        }
    ],
    abilities: [],
    description: {
        en: "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful.",
        fr: "La mâchoire bien développée de ce Pokémon est si puissante qu'elle peut broyer n'importe quoi. Même son partenaire doit s'en méfier.",
        es: "Las desarrolladas y potentes mandíbulas pueden triturar cualquier cosa, por lo que hasta su propio Entrenador debe andarse con cuidado.",
        it: "Le sue mandibole sono così potenti da frantumare qualsiasi cosa, perciò anche chi lo allena deve agire con cautela.",
        de: "Seine kräftigen, gut entwickelten Kiefer können alles zermalmen. Selbst sein Trainer muss sich vor ihm in Acht nehmen.",
        "pt-br": "Suas poderosas e bem desenvolvidas mandíbulas são capazes de esmagar qualquer coisa. Até mesmo seu Treinador deve ter cuidado.",
        "zh-tw": "強而有力且發達的顎，連任何東西都能咬碎。因此就算是牠的訓練家也要當心。",
        ja: "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful.",
        ko: "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful."
    }
};

export default card;
