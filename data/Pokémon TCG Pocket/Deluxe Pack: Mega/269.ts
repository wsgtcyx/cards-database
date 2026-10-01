import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/269",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/269",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/269",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/269",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/269",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/269",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/269"
    },
    name: {
        en: "Crocalor",
        fr: "Crocogril",
        es: "Crocalor",
        it: "Crocalor",
        de: "Lokroko",
        "pt-br": "Crocalor",
        "zh-tw": "炙燙鱷",
        ja: "アチゲータ",
        ko: "악뜨거"
    },
    illustrator: "kantaro",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: [
        "Fire"
    ],
    dexId: [
        910
    ],
    evolveFrom: {
        en: "Fuecoco",
        fr: "Chochodile",
        es: "Fuecoco",
        it: "Fuecoco",
        de: "Krokel",
        "pt-br": "Fuecoco",
        "zh-tw": "呆火鱷",
        ja: "Fuecoco",
        ko: "Fuecoco"
    },
    description: {
        en: "The valve in Crocalor's flame sac is closely connected to its vocal cords. This Pokémon utters a guttural cry as it spews flames every which way.",
        fr: "Ses cordes vocales et la valve de sa poche à flammes sont étroitement liées, ce qui lui permet de pousser des cris gutturaux en crachant du feu.",
        es: "Sus cuerdas vocales y la válvula de su saca de fuego están estrechamente relacionadas. Emite sonidos guturales al expeler llamas.",
        it: "Le sue corde vocali sono strettamente collegate alla valvola della sacca ignea. Mentre sputa fiammate tutt'intorno, emette versi rauchi.",
        de: "Das Ventil für seinen Flammensack ist eng mit den Stimmbändern verbunden. Wenn es Feuer spuckt, stößt es raue Laute aus.",
        "pt-br": "A válvula na bolsa de chamas de Crocalor está conectada às suas cordas vocais. Este Pokémon solta um grito do fundo de suas entranhas, liberando chamas para todos os lados.",
        "zh-tw": "聲帶和火囊的開關緊黏在一起。會一邊發出嘶啞的聲音，一邊噴灑火焰。",
        ja: "The valve in Crocalor's flame sac is closely connected to its vocal cords. This Pokémon utters a guttural cry as it spews flames every which way.",
        ko: "The valve in Crocalor's flame sac is closely connected to its vocal cords. This Pokémon utters a guttural cry as it spews flames every which way."
    },
    stage: "Stage1",
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
                pt: "Mordida",
                "es-mx": "Mordida",
                ja: "Bite",
                ko: "Bite"
            },
            damage: 50,
            cost: [
                "Fire",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
