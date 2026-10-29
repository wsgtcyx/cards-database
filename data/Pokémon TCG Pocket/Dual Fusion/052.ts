import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/052",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/052",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/052",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/052",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/052",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/052",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/052"
    },
    name: {
        en: "Wigglytuff",
        fr: "Grodoudou",
        es: "Wigglytuff",
        "pt-br": "Wigglytuff",
        "zh-tw": "胖可丁",
        ja: "プクリン",
        ko: "푸크린",
        it: "Wigglytuff",
        de: "Knuddeluff"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Psychic"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Jigglypuff",
        fr: "Rondoudou",
        es: "Jigglypuff",
        it: "Jigglypuff",
        de: "Pummeluff",
        "pt-br": "Jigglypuff",
        "zh-tw": "胖丁",
        ja: "Jigglypuff",
        ko: "Jigglypuff"
    },
    attacks: [
        {
            name: {
                en: "Do the Wave",
                fr: "Faites la Vague",
                es: "Hacer la Ola",
                it: "Fare la Ola",
                de: "Wellenreiten",
                "pt-br": "Fazer a \"Ola\"",
                "zh-tw": "朋友之環",
                ja: "Do the Wave",
                ko: "Do the Wave"
            },
            cost: [
                "Psychic",
                "Psychic"
            ],
            damage: "30x",
            effect: {
                en: "This attack does 30 damage for each of your Benched Pokémon.",
                fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
                es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
                de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco.",
                "zh-tw": "造成自己的備戰寶可夢的數量×30點傷害。",
                ja: "This attack does 30 damage for each of your Benched Pokémon.",
                ko: "This attack does 30 damage for each of your Benched Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
        fr: "Il a une très belle fourrure. Mieux vaut éviter de le mettre en colère, ou il gonflera avant d’attaquer de tout son corps.",
        es: "Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo.",
        it: "Ha un pelo molto fino. Attenzione a non farlo adirare, perché può gonfiarsi e caricare con tutto il suo peso.",
        de: "Es hat sehr feines Fell. Doch Vorsicht: Verärgert man Knuddeluff, bläst es sich stark auf und stürzt sich mit seinem ganzen Körper auf einen.",
        "pt-br": "Ele tem a pele muito fina. Tome cuidado para não zangá-lo ou ele pode inflar permanentemente e golpear com uma pancada de corpo.",
        "zh-tw": "擁有細膩的毛皮。小心別欺負牠，否則牠會不斷膨脹並用身體飛撞過來。",
        ja: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
        ko: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam."
    }
};

export default card;
