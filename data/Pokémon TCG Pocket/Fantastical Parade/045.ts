import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/045"
    },
    name: {
        en: "Cramorant",
        "fr": "Nigosier",
        "es": "Cramorant",
        "it": "Cramorant",
        "de": "Urgl",
        "pt-br": "Cramorant",
        "zh-tw": "克拉莫蘭特"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "Cramorant takes advantage of Arrokuda's frantic\nthrashing to help spit Arrokuda out at high speed.",
        "fr": "Cramorant profite de la frénésie d'Arrokuda\nse débattant pour aider à cracher Arrokuda à grande vitesse.",
        "es": "Cramorant aprovecha la frenética de Arrokuda\ngolpeando para ayudar a escupir a Arrokuda a gran velocidad.",
        "it": "Cramorant approfitta della frenetica di Arrokuda\ndimenandosi per aiutare a sputare Arrokuda ad alta velocità.",
        "de": "Cramorant nutzt Arrokudas Hektik aus\num sich zu schlagen, um Arrokuda mit hoher Geschwindigkeit auszuspucken.",
        "pt-br": "Cramorant aproveita o frenético de Arrokuda\nse debatendo para ajudar a cuspir Arrokuda em alta velocidade.",
        "zh-tw": "克拉莫蘭特利用阿羅庫達的瘋狂\n猛擊以幫助Arrokuda高速吐出。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Spit-Out Shot",
                "fr": "Tir craché",
                "es": "Tiro escupido",
                "it": "Tiro sputato",
                "de": "Ausgespuckter Schuss",
                "pt-br": "Tiro cuspido",
                "zh-tw": "吐出射擊"
            },
            cost: ["Water"],
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 30 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
