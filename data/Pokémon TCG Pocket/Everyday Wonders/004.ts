import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/004",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/004"
    },
    name: {
        en: "Cacnea",
        fr: "Cacnea",
        es: "Cacnea",
        it: "Cacnea",
        de: "Tuska",
        "pt-br": "Cacnea",
        "zh-tw": "刺球仙人掌",
        ko: "선인왕",
        ja: "サボネア"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    dexId: [331],
    stage: "Basic",
    description: {
        en: "It lives in arid locations. Its yellow flowers bloom once a year.",
        fr: "Cacnea vit dans les zones arides. Une fois par an,\nune fleur jaune éclot sur sa tête.",
        es: "Vive en regiones secas y con pocas lluvias. Una vez al\naño, le brota una flor amarilla.",
        it: "Cacnea vive in zone aride, dove non piove quasi mai.\nIl suo fiore giallo sboccia una volta all’anno.",
        de: "Es wächst an trockenen Orten mit wenig Niederschlag.\nNur einmal im Jahr bildet es eine gelbe Blüte.",
        "pt-br": "Vive em locais áridos. Suas flores amarelas florescem uma vez por ano.",
        "zh-tw": "它生活在乾旱的地方。它的黃色花朵每年開放一次。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Spike Sting",
                fr: "Pic Piquant",
                es: "Picotazo Púas",
                it: "Aculeopuntura",
                de: "Stachelstich",
                "pt-br": "Ferroada de Espinhos",
                "zh-tw": "針刺"
            },
            damage: 10
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
