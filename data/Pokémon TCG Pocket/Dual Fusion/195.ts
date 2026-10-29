import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/195",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/195",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/195",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/195",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/195",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/195",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/195"
    },
    name: {
        en: "Abra",
        fr: "Abra",
        es: "Abra",
        "pt-br": "Abra",
        "zh-tw": "凱西",
        ja: "ケーシィ",
        ko: "캐이시",
        it: "Abra",
        de: "Abra"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 50,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Beam",
                fr: "Rayon",
                es: "Transmisión",
                it: "Raggio",
                de: "Strahl",
                "pt-br": "Feixe",
                "zh-tw": "光束",
                ja: "Beam",
                ko: "Beam"
            },
            cost: [
                "Psychic"
            ],
            damage: 30
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
        fr: "Le contenu de ses rêves influe sur les pouvoirs psychiques qu’il utilise dans son sommeil.",
        es: "Es capaz de usar sus poderes psíquicos aun estando dormido. Al parecer, el contenido del sueño influye en sus facultades.",
        it: "Il contenuto dei suoi sogni influisce sui suoi poteri psichici, che può utilizzare anche mentre dorme.",
        de: "Es setzt seine Psycho-Kräfte selbst im Schlaf ein. Der Inhalt seiner Träume hat Einfluss auf die Kräfte, die es verwendet.",
        "pt-br": "Usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que este Pokémon possui.",
        "zh-tw": "會一邊睡覺一邊操縱超能力。夢的內容會影響牠使用的能力。",
        ja: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
        ko: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields."
    }
};

export default card;
