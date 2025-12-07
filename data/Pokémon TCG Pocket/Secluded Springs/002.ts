import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Skiploom",
        "fr": "Skiplum",
        "es": "Skiploom",
        "it": "Skiploom",
        "de": "Skiploom",
        "pt-br": "Skiploom",
        "zh-tw": "毽子花",
    },
    illustrator: "Dsuke",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    evolveFrom: {
        en: "Hoppip",
        "fr": "Hoppip",
        "es": "Hoppip",
        "it": "Hoppip",
        "de": "Hoppip",
        "pt-br": "Hoppip",
        "zh-tw": "霍皮普"
    },
    description: {
        en: "Skiploom enthusiasts can apparently tell where a\nSkiploom was born by the scent drifting from the\nflower on the Pokémon's head.",
        "fr": "Les amateurs de Skiploom peuvent apparemment dire où se trouve un\nSkiploom est né du parfum qui s'échappe du\nfleur sur la tête du Pokémon.",
        "es": "Los entusiastas de Skiploom aparentemente pueden saber dónde\nSkiploom nació del aroma que emanaba del\nflor en la cabeza del Pokémon.",
        "it": "Gli appassionati di Skiploom possono apparentemente dire dove a\nSkiploom è nato dal profumo che deriva dal\nfiore sulla testa del Pokémon.",
        "de": "Skiploom-Enthusiasten können offenbar erkennen, wo a\nSkiploom wurde durch den Duft geboren, der von dort wehte\nBlume auf dem Kopf des Pokémon.",
        "pt-br": "Os entusiastas do Skiploom aparentemente podem dizer onde um\nSkiploom nasceu do perfume que vem do\nflor na cabeça do Pokémon.",
        "zh-tw": "Skiploom 愛好者顯然可以分辨出\nSkiploom 的誕生是由飄來的香味所決定的。\n神奇寶貝頭上的花。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bounce",
                "fr": "Rebond",
                "es": "Rebotar",
                "it": "Rimbalzo",
                "de": "Prallen",
                "pt-br": "Quicar",
                "zh-tw": "彈跳"
            },
            damage: 30,
            cost: ["Colorless"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                "fr": "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此神奇寶貝與你的 1 個替補神奇寶貝交換。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
