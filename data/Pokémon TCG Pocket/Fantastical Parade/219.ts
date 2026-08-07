import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/219",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/219",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/219",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/219",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/219",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/219",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/219"
    },
    name: {
        en: "Hitmonchan",
        "fr": "Tygnon",
        "es": "Hitmonchan",
        "it": "Hitmonchan",
        "de": "Nockchan",
        "pt-br": "Hitmonchan",
        "zh-tw": "快拳郎"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "Its punches slice the air. They are launched at\nsuch high speed, even a slight graze could cause\na burn.",
        "fr": "Ses coups fendent l’air. Ils sont lancés à\nune vitesse si élevée, même une légère éraflure pourrait provoquer\nune brûlure.",
        "es": "Sus golpes cortan el aire. Se lanzan en\nA una velocidad tan alta, incluso un ligero roce podría causar\nuna quemadura.",
        "it": "I suoi pugni tagliano l'aria. Vengono lanciati a\nuna velocità così elevata che potrebbe causare anche un leggero sfioramento\nun'ustione.",
        "de": "Seine Schläge zerschneiden die Luft. Sie werden um gestartet\nBei solch einer hohen Geschwindigkeit könnte sogar eine leichte Schürfwunde entstehen\neine Verbrennung.",
        "pt-br": "Seus socos cortam o ar. Eles são lançados em\nvelocidade tão alta, mesmo um leve arranhão pode causar\numa queimadura.",
        "zh-tw": "它的拳頭劃破空氣。它們的發佈時間為\n如此高的速度，即使是輕微的擦傷也可能導致\n燒傷。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Jab",
                "fr": "Taquet",
                "es": "Puya",
                "it": "Stoccata",
                "de": "Boxschlag",
                "pt-br": "Murro",
                "zh-tw": "戳"
            },
            damage: 30,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
