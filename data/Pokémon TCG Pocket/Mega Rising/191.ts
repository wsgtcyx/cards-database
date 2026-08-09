import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/191",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/191",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/191",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/191",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/191",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/191",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/191"
    },
    name: {
        en: "Loudred",
        "fr": "Ramboum",
        "es": "Loudred",
        "it": "Loudred",
        "de": "Krakeelo",
        "pt-br": "Loudred",
        "zh-tw": "吼爆彈",
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Whismur",
        "fr": "Chuchmur",
        "es": "Whismur",
        "it": "Whismur",
        "de": "Flurmel",
        "pt-br": "Whismur",
        "zh-tw": "咕妞妞",
    },
    description: {
        en: "The force of this Pokémon's loud voice isn't just\nthe sound—it's also the wave of air pressure that\nblows opponents away and damages them.",
        "fr": "La force de la voix forte de ce Pokémon n'est pas seulement\nle son, c'est aussi l'onde de pression de l'air qui\nsouffle les adversaires et les endommage.",
        "es": "La fuerza de la fuerte voz de este Pokémon no es sólo\nel sonido, también es la onda de presión del aire que\nderriba a los oponentes y los daña.",
        "it": "La forza della voce forte di questo Pokémon non è eccezionale\nil suono... è anche l'onda della pressione dell'aria\nspazza via gli avversari e li danneggia.",
        "de": "Die Kraft der lauten Stimme dieses Pokémon ist nicht einfach\ndas Geräusch – es ist auch die Welle des Luftdrucks\nbläst Gegner weg und fügt ihnen Schaden zu.",
        "pt-br": "A força da voz alta deste Pokémon não é apenas\no som - é também a onda de pressão do ar que\nafasta os oponentes e os causa danos.",
        "zh-tw": "這只神奇寶貝響亮聲音的力量不僅僅是\n聲音——也是氣壓波\n將對手吹走並對其造成傷害。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Hyper Voice",
                "fr": "Hyper voix",
                "es": "Hipervoz",
                "it": "Ipervoce",
                "de": "Hyperstimme",
                "pt-br": "Hiper Voz",
                "zh-tw": "超級語音"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
