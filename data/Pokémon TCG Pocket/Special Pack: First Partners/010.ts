import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/010",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/010",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/010",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/010",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/010",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/010",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/010"
    },
    name: {
        en: "Turtwig",
        fr: "Tortipouss",
        es: "Turtwig",
        "pt-br": "Turtwig",
        "zh-tw": "草苗龜",
        ja: "ナエトル",
        ko: "모부기",
        it: "Turtwig",
        de: "Chelast"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "飛葉快刀",
                ja: "Razor Leaf",
                ko: "Razor Leaf"
            },
            cost: [
                "Colorless",
                "Grass",
                "Grass"
            ],
            damage: 60
        }
    ],
    abilities: [],
    description: {
        en: "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.",
        fr: "Ce Pokémon vit le long des lacs. Il est doté d'une carapace sur son dos qui se durcit lorsqu'il boit.",
        es: "La concha de su espalda es de tierra y se endurece cuando bebe agua. Vive cerca de los lagos.",
        it: "Il suo guscio fatto di terra diventa più duro quando il Pokémon beve. Vive sulle rive dei laghi.",
        de: "Der Panzer auf seinem Rücken besteht aus Lehm und wird härter, wenn das Pokémon Wasser trinkt. Es lebt an Seen.",
        "pt-br": "Feita de terra, a casca em suas costas endurece quando bebe água. Vive perto de lagos.",
        "zh-tw": "背上的甲殼是由泥土形成的。喝水後會變得堅硬。棲息在湖邊。",
        ja: "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.",
        ko: "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes."
    }
};

export default card;
