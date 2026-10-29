import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/055",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/055",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/055"
    },
    name: {
        en: "Alakazam",
        fr: "Alakazam",
        es: "Alakazam",
        "pt-br": "Alakazam",
        "zh-tw": "胡地",
        ja: "フーディン",
        ko: "후딘",
        it: "Alakazam",
        de: "Simsala"
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 130,
    types: [
        "Psychic"
    ],
    stage: "Stage2",
    retreat: 1,
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Kadabra",
        fr: "Kadabra",
        es: "Kadabra",
        it: "Kadabra",
        de: "Kadabra",
        "pt-br": "Kadabra",
        "zh-tw": "勇基拉",
        ja: "Kadabra",
        ko: "Kadabra"
    },
    attacks: [
        {
            name: {
                en: "Mind Jack",
                fr: "Emprise Mentale",
                es: "Levantamente",
                it: "Sollevamente",
                de: "Gedankenstoß",
                "pt-br": "Tomada Mental",
                "zh-tw": "意志劫持",
                ja: "Mind Jack",
                ko: "Mind Jack"
            },
            cost: [
                "Colorless",
                "Psychic"
            ],
            damage: "50+",
            effect: {
                en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a mais para cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "增加對手備戰寶可夢的數量×30點傷害。",
                ja: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
                ko: "This attack does 30 more damage for each of your opponent's Benched Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
        fr: "Doué d’une intelligence hors du commun, ce Pokémon serait capable de conserver tous ses souvenirs, de sa naissance jusqu’à sa mort.",
        es: "Posee una capacidad intelectual fuera de lo común que le permite recordar todo lo sucedido desde el instante de su nacimiento.",
        it: "Possiede un intelletto estremamente elevato e si dice sia in grado di ricordare ogni evento della sua vita, dalla nascita alla morte.",
        de: "Es verfügt über extrem hohe Intelligenz und soll sich an alles erinnern können, was zwischen seiner Geburt und seinem Tod passiert.",
        "pt-br": "Tem um nível de inteligência incrivelmente alto. Alguns dizem que Alakazam se lembra de tudo que acontece na sua vida, do nascimento até a morte.",
        "zh-tw": "擁有非常高的智商。據說牠能記住從出生到死一輩子發生過的所有事情。",
        ja: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
        ko: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death."
    }
};

export default card;
