import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/029",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/029",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/029",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/029",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/029",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/029",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/029"
    },
    name: {
        en: "Heatmor",
        fr: "Aflamanoir",
        es: "Heatmor",
        it: "Heatmor",
        de: "Furnifraß",
        "pt-br": "Heatmor",
        "zh-tw": "熔蟻獸",
        ko: "앤티골",
        ja: "クイタラン"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    dexId: [631],
    stage: "Basic",
    description: {
        en: "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides.",
        fr: "Il se sert de sa flamme comme d’une langue.\nIl fait fondre peu à peu l’exosquelette des Fermite\npour se délecter de leur chair.",
        es: "Usa llamas a modo de lengua para derretir\nel duro exoesqueleto de los Durant antes de\ndevorarlos.",
        it: "Usa la fiamma a mo’ di lingua. Liquefà il duro\nesoscheletro dei Durant e poi ne fa un sol\nboccone.",
        de: "Es nutzt eine Flamme als Zunge. Damit bringt es\ndie Panzer von Fermicula zum Schmelzen und\nverspeist im Anschluss ihr Inneres.",
        "zh-tw": "將火焰當成舌頭來使用。\n會一點一點地熔化鐵蟻\n堅硬的外骨骼，然後把牠吃掉。",
        "pt-br": "A lingua de Heatmor é uma chama capaz de derreter o casco duro de Durant. permitindo que devore tudo o que há dentro."
    },
    attacks: [
        {
            cost: ["Fire", "Colorless"],
            name: {
                en: "Fire Claws",
                fr: "Griffes Enflammées",
                es: "Garras de Fuego",
                it: "Artigli di fuoco",
                de: "Feuerkrallen",
                "pt-br": "Garras de Fogo",
                "zh-tw": "火之爪"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
