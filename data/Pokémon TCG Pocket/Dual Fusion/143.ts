import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/143",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/143",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/143",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/143",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/143",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/143",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/143"
    },
    name: {
        en: "Mimikyu",
        fr: "Mimiqui",
        es: "Mimikyu",
        "pt-br": "Mimikyu",
        "zh-tw": "謎擬Ｑ",
        ja: "ミミッキュ",
        ko: "따라큐",
        it: "Mimikyu",
        de: "Mimigma"
    },
    illustrator: "Kanami Ogata",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 70,
    types: [
        "Psychic"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Dress Up",
                fr: "Costumes",
                es: "Arreglarse",
                it: "Ghingheri",
                de: "In Schale werfen",
                "pt-br": "Vestir-se",
                "zh-tw": "盛裝打扮",
                ja: "Dress Up",
                ko: "Dress Up"
            },
            cost: [
                "Psychic"
            ],
            damage: "20+",
            effect: {
                en: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
                fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
                it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 30 danni in più.",
                de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 30 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢身上附有「寶可夢道具」,則增加30點傷害。",
                ja: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
                ko: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage."
            }
        }
    ],
    abilities: [],
    description: {
        en: "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu.",
        fr: "Il vit dans les lieux sombres, à l’abri du soleil. Lorsqu’il se montre, il dissimule tout son corps sous un déguisement qui rappelle Pikachu.",
        es: "Vive en lugares oscuros donde no llega el sol. Cuando se deja ver por la gente, oculta todo su cuerpo bajo un saco con aspecto de Pikachu.",
        it: "Vive nell’ombra, lontano dalla luce del sole. Quando appare davanti alle persone si nasconde sotto un panno che somiglia a un Pikachu.",
        de: "Es lebt an dunklen Orten ohne Sonnenlicht. Menschen zeigt es sich nur, wenn es mit einem Lumpen bedeckt ist, der aussieht wie ein Pikachu.",
        "pt-br": "Este Pokémon vive em lugares escuros livres da luz do sol. Quando aparece diante de humanos, esconde-se sob um pano parecido com Pikachu.",
        "zh-tw": "棲息在陽光照射不到的陰暗處。在人們面前現身時會用看似破布般的布來隱藏身子。",
        ja: "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu.",
        ko: "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu."
    }
};

export default card;
