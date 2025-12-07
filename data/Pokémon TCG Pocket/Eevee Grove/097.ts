import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Ralts",
        "fr": "Ralts",
        "es": "Ralts",
        "it": "Ralts",
        "de": "Ralts",
        "pt-br": "Ralts",
        "zh-tw": "拉爾茨"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "The horns on its head provide a strong power\nthat enables it to sense people's emotions.",
        "fr": "Les cornes sur sa tête lui confèrent une forte puissance\ncela lui permet de ressentir les émotions des gens.",
        "es": "Los cuernos en su cabeza le proporcionan un gran poder.\nque le permite sentir las emociones de las personas.",
        "it": "Le corna sulla sua testa forniscono un forte potere\nche gli consente di percepire le emozioni delle persone.",
        "de": "Die Hörner auf seinem Kopf verleihen ihm eine starke Kraft\nDadurch ist es in der Lage, die Emotionen der Menschen zu spüren.",
        "pt-br": "Os chifres em sua cabeça fornecem um forte poder\nque lhe permite sentir as emoções das pessoas.",
        "zh-tw": "頭上的角提供了強大的力量\n這使得它能夠感知人們的情緒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Teleport",
                "fr": "Téléportation",
                "es": "Teletransportarse",
                "it": "Teletrasporto",
                "de": "Teleportieren",
                "pt-br": "Teleporte",
                "zh-tw": "傳送"
            },
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
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
