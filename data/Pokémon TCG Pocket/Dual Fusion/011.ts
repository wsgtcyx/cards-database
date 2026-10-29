import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/011",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/011"
    },
    name: {
        en: "Foongus",
        fr: "Trompignon",
        es: "Foongus",
        "pt-br": "Foongus",
        "zh-tw": "哎呀球菇",
        ja: "タマゲタケ",
        ko: "깜놀버슬",
        it: "Foongus",
        de: "Tarnpignon"
    },
    illustrator: "Yuka Morii",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Beat",
                fr: "Bataille",
                es: "Toque",
                it: "Battuta",
                de: "Verprügler",
                "pt-br": "Pulso",
                "zh-tw": "敲擊",
                ja: "Beat",
                ko: "Beat"
            },
            cost: [
                "Grass"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "There is a theory that the developer of the modern-day Poké Ball really liked Foongus, but this has not been confirmed.",
        fr: "Une théorie dit que l’inventeur de la Poké Ball se serait inspiré des Trompignon, qu’il aimait beaucoup. Elle n’a cependant pas été confirmée.",
        es: "Ciertas teorías, cuya veracidad no ha podido constatarse, afirman que quien desarrolló las Poké Balls admiraba con fervor a este Pokémon.",
        it: "C’è chi teorizza che questo Pokémon piacesse molto all’inventore delle Poké Ball. Nessuno però sa se sia vero o no.",
        de: "Einer Theorie zufolge fand der Entwickler des Pokéballs Gefallen an Tarnpignon. Jedoch konnte dies bisher nicht bestätigt werden.",
        "pt-br": "Existe uma teoria de que o desenvolvedor da atual Poké Bola gostava muito de Foongus, mas isso não foi confirmado.",
        "zh-tw": "據說開發精靈球的人很喜歡哎呀球菇，但不知是真是假。",
        ja: "There is a theory that the developer of the modern-day Poké Ball really liked Foongus, but this has not been confirmed.",
        ko: "There is a theory that the developer of the modern-day Poké Ball really liked Foongus, but this has not been confirmed."
    }
};

export default card;
