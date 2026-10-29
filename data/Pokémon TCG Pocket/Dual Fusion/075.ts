import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/075",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/075",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/075",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/075",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/075",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/075",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/075"
    },
    name: {
        en: "Larvitar",
        fr: "Embrylex",
        es: "Larvitar",
        "pt-br": "Larvitar",
        "zh-tw": "幼基拉斯",
        ja: "ヨーギラス",
        ko: "애버라스",
        it: "Larvitar",
        de: "Larvitar"
    },
    illustrator: "Haru Akasaka",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 50,
    types: [
        "Fighting"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
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
                "Colorless"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
        fr: "Il naît dans les profondeurs terrestres. Après avoir englouti une quantité de terre équivalente à une montagne, il se transforme en chrysalide.",
        es: "Nacido en las profundidades subterráneas, este Pokémon se convierte en pupa al comer la cantidad de tierra equivalente a una montaña.",
        it: "Nasce nel profondo sottosuolo e dopo aver mangiato una montagna di terra si trasforma in una crisalide.",
        de: "Es wird tief im Erdreich geboren. Hat es einen Berg Erde gefressen, verpuppt sich dieses Pokémon.",
        "pt-br": "Este Pokémon nasce no subsolo e se torna uma pupa após comer terra o suficiente para fazer uma montanha.",
        "zh-tw": "誕生在地底深處。當牠吃完滿山的土壤後，就會為了成長而變成蛹。",
        ja: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
        ko: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain."
    }
};

export default card;
