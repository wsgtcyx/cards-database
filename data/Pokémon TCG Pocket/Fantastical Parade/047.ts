import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/047",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/047",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/047",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/047",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/047",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/047"
    },
    name: {
        en: "Barraskewda",
        "fr": "Hastacuda",
        "es": "Barraskewda",
        "it": "Barraskewda",
        "de": "Barrakiefa",
        "pt-br": "Barraskewda",
        "zh-tw": "戽斗尖梭"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
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
                en: "Jet Headbutt",
                "fr": "Coup de tête de jet",
                "es": "Cabezazo Jet",
                "it": "Testata a getto",
                "de": "Jet-Kopfstoß",
                "pt-br": "Cabeçada de jato",
                "zh-tw": "噴射頭撞"
            },
            damage: 40,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
