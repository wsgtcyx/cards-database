import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/025",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/025"
    },
    name: {
        en: "Jirachi",
        fr: "Jirachi",
        es: "Jirachi",
        it: "Jirachi",
        de: "Jirachi",
        "pt-br": "Jirachi",
        "zh-tw": "基拉祈",
        ko: "지라치",
        ja: "ジラーチ"
    },
    illustrator: "Rond",
    rarity: "None",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    dexId: [385],
    stage: "Basic",
    description: {
        en: "It is said to have the ability to grant any wish for just one week every thousand years.",
        fr: "On raconte qu’une fois tous les 1 000 ans, il a la\ncapacité d’exaucer tous les vœux durant une semaine.",
        es: "Se dice que puede otorgar cualquier deseo durante\nuna semana cada 1000 años.",
        it: "Ha l’abilità di realizzare ogni desiderio, ma soltanto\nper una settimana ogni 1000 anni.",
        de: "Man sagt, es kann alle 1 000 Jahre für eine Woche\njeden Wunsch erfüllen.",
        "pt-br": "Diz-se que tem a capacidade de realizar qualquer desejo durante apenas uma semana a cada mil anos.",
        "zh-tw": "據說每千年只有一週的時間可以實現任何願望。"
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Star Drop",
                fr: "Chute d'Étoiles",
                es: "Caída Sideral",
                it: "Caduta Astrale",
                de: "Sternensturz",
                "pt-br": "Queda de Estrela",
                "zh-tw": "星墜"
            },
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 30 dégâts à 1 des Pokémon de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 30 danni a 1 dei Pokémon del tuo avversario.",
                de: "Dieser Angriff fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只寶可夢造成 30 點傷害。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
