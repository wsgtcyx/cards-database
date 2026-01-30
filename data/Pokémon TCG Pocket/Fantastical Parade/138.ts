import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Tornadus",
        "fr": "Tornade",
        "es": "Tornado",
        "it": "Tornadus",
        "de": "Tornadus",
        "pt-br": "Tornado",
        "zh-tw": "龍捲風"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    description: {
        en: "Tornadus expels massive energy from its tail,\ncausing severe storms. Its power is great enough\nto blow houses away.",
        "fr": "Tornadus expulse une énergie massive de sa queue,\nprovoquant de violentes tempêtes. Sa puissance est assez grande\nfaire sauter les maisons.",
        "es": "Tornadus expulsa una enorme energía de su cola,\nprovocando fuertes tormentas. Su poder es lo suficientemente grande\npara volar casas.",
        "it": "Tornadus espelle un'enorme energia dalla coda,\nprovocando forti temporali. Il suo potere è abbastanza grande\nper far saltare le case.",
        "de": "Tornadus stößt massive Energie aus seinem Schwanz aus,\nschwere Stürme verursachen. Seine Kraft ist groß genug\nHäuser wegblasen.",
        "pt-br": "Tornadus expele energia massiva de sua cauda,\ncausando fortes tempestades. Seu poder é grande o suficiente\npara explodir casas.",
        "zh-tw": "龍捲風從尾部排出大量能量，\n造成嚴重的風暴。它的威力足夠大\n炸毀房屋。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Blow Through",
                "fr": "Souffler",
                "es": "Soplar",
                "it": "Soffia attraverso",
                "de": "Durchblasen",
                "pt-br": "Soprar",
                "zh-tw": "吹穿"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "If a Stadium is in play, this attack does 40 more damage.",
                "fr": "Si un Stade est en jeu, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si hay un Estadio en juego, este ataque hace 40 puntos de daño más.",
                "it": "Se è in gioco uno Stadio, questo attacco infligge 40 danni in più.",
                "de": "Wenn ein Stadion im Spiel ist, fügt dieser Angriff 40 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causa 40 de dano a mais.",
                "zh-tw": "如果體育場正在進行中，則此攻擊會造成 40 點以上的傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
