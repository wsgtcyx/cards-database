import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Manaphy",
        "fr": "Manaphy",
        "es": "manafi",
        "it": "Manaphy",
        "de": "Manaphy",
        "pt-br": "Manaphy",
        "zh-tw": "瑪納菲"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Water"],
    description: {
        en: "It is born with a wondrous power that lets it bond\nwith any kind of Pokémon.",
        "fr": "Il est né avec un pouvoir merveilleux qui lui permet de créer des liens\navec n'importe quel type de Pokémon.",
        "es": "Nace con un poder maravilloso que le permite unirse.\ncon cualquier tipo de Pokémon.",
        "it": "Nasce con un potere meraviglioso che gli consente di legarsi\ncon qualsiasi tipo di Pokémon.",
        "de": "Es wird mit einer wundersamen Kraft geboren, die es verbindet\nmit jeder Art von Pokémon.",
        "pt-br": "Nasce com um poder maravilhoso que lhe permite unir-se\ncom qualquer tipo de Pokémon.",
        "zh-tw": "它與生俱來就有一種奇妙的力量，可以讓它結合在一起\n與任何種類的神奇寶貝。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Oceanic Gift",
                "fr": "Cadeau océanique",
                "es": "Regalo oceánico",
                "it": "Regalo oceanico",
                "de": "Ozeanisches Geschenk",
                "pt-br": "Presente Oceânico",
                "zh-tw": "海洋禮物"
            },
            cost: ["Water"],
            effect: {
                en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a {W} Energy from your Energy Zone and attach it to that Pokémon.",
                "fr": "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, prenez une Énergie {W} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                "es": "Elige 2 de tus Pokémon en Banca. Para cada uno de esos Pokémon, toma una Energía {W} de tu Zona de Energía y únela a ese Pokémon.",
                "it": "Scegli 2 dei tuoi Pokémon in panchina. Per ognuno di questi Pokémon, prendi un'Energia {W} dalla tua Zona Energetica e assegnala a quel Pokémon.",
                "de": "Wähle 2 deiner Bank-Pokémon. Nimm für jedes dieser Pokémon eine {W}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Escolha 2 dos seus Pokémon no Banco. Para cada um desses Pokémon, pegue uma Energia {W} da sua Zona de Energia e ligue-a àquele Pokémon.",
                "zh-tw": "選擇 2 個後備神奇寶貝。對於每一個神奇寶貝，從你的能量區獲取一個 {W} 能量並將其附加到該神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
