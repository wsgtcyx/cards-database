import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Barraskewda",
        "fr": "Barraskewda",
        "es": "Barraskewda",
        "it": "Barraskewda",
        "de": "Barraskewda",
        "pt-br": "Barraskewda",
        "zh-tw": "戽斗尖梭",
    },
    illustrator: "Hideki Ishikawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Arrokuda",
        "fr": "Arrokuda",
        "es": "Arrokuda",
        "it": "Arrokuda",
        "de": "Arrokuda",
        "pt-br": "Arrokuda",
        "zh-tw": "阿羅庫達"
    },
    description: {
        en: "It spins its tail fins to propel itself, surging\nforward at speeds of over 100 knots before\nramming prey and spearing into them.",
        "fr": "Il fait tourner ses nageoires caudales pour se propulser, s'élevant\navancer à une vitesse supérieure à 100 nœuds avant\néperonner ses proies et les transpercer.",
        "es": "Gira sus aletas caudales para impulsarse, surgiendo\navance a velocidades de más de 100 nudos antes\nembistiendo a sus presas y atravesándolas con lanzas.",
        "it": "Ruota le pinne caudali per spingersi, impennandosi\navanti a velocità superiori a 100 nodi prima\nsperonando la preda e trafiggendola.",
        "de": "Es dreht seine Schwanzflossen, um sich fortzubewegen\nVorwärts mit Geschwindigkeiten von über 100 Knoten\nBeute rammen und in sie hineinspießen.",
        "pt-br": "Ele gira suas barbatanas caudais para se impulsionar, surgindo\navançar a velocidades superiores a 100 nós antes\natacando as presas e atacando-as.",
        "zh-tw": "它旋轉尾鰭來推動自己，洶湧澎湃\n之前以超過100節的速度前進\n撞擊獵物並用矛刺入其中。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Double-Edge",
                "fr": "Double tranchant",
                "es": "Doble filo",
                "it": "Doppio bordo",
                "de": "Doppelte Kante",
                "pt-br": "Borda Dupla",
                "zh-tw": "雙刃"
            },
            damage: 80,
            cost: ["Water", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 20 dégâts.",
                "es": "Este Pokémon también se hace 20 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
