import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/215"
    },
    name: {
        en: "Falinks",
        fr: "Hexadron",
        es: "Falinks",
        it: "Falinks",
        de: "Legios",
        "pt-br": "Falinks",
        "zh-tw": "列陣兵",
        ko: "대여르",
        ja: "タイレーツ"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    dexId: [870],
    stage: "Basic",
    description: {
        en: "The leader, known as the brass, uses its extendible horn to issue orders to the others when it's time to change formation."
    },
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Coordinated Unit",
                fr: "Unité coordonnée",
                es: "Unidad Coordinada",
                it: "Unità coordinata",
                de: "Koordinierte Einheit",
                "pt-br": "Unidade Coordenada",
                "zh-tw": "協調單位"
            },
            effect: {
                en: "If you have another Falinks in play, this Pokémon's attacks do +20 damage to your opponent's Active Pokémon, and this Pokémon takes -20 damage from attacks from your opponent's Pokémon."
            }
        }
    ],
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Invade",
                fr: "Envahir",
                es: "Invadir",
                it: "Invadere",
                de: "Einmarschieren",
                "pt-br": "Invadir",
                "zh-tw": "攻入"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
