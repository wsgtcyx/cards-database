import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/030"
    },
    name: {
        en: "Tornadus",
        fr: "Boréas",
        es: "Tornadus",
        it: "Tornadus",
        de: "Boreos",
        "pt-br": "Tornadus",
        "zh-tw": "龍捲雲",
        ko: "토네로스",
        ja: "トルネロス"
    },
    illustrator: "Shigenori Negishi",
    rarity: "None",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    dexId: [641],
    stage: "Basic",
    description: {
        en: "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
        fr: "L’énergie dégagée par sa queue provoque d’énormes\ntempêtes dont la force peut renverser des maisons.",
        es: "La energía que desprende de su cola genera violentas\ntempestades capaces de echar abajo casas.",
        it: "L’energia sprigionata dalla coda di Tornadus provoca una\nviolenta tempesta in grado di spazzare via le case.",
        de: "Mit der Energie aus seiner Rute erzeugt es wilde Stürme,\ndie stark genug sind, um ganze Wohnhäuser davonzuwehen.",
        "pt-br": "Tornadus expele energia massiva de sua cauda, ​​causando fortes tempestades. Seu poder é grande o suficiente para explodir casas.",
        "zh-tw": "龍捲雲從尾部排出大量能量，引發嚴重風暴。其威力之大足以炸毀房屋。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Blow Through",
                fr: "Grosse Bourrasque",
                es: "Gran Torbellino",
                it: "Colposecco",
                de: "Durchdringender Strahl",
                "pt-br": "Sopro Intenso",
                "zh-tw": "穿堂風"
            },
            effect: {
                en: "If a Stadium is in play, this attack does 40 more damage.",
                fr: "Si un Stade est en jeu, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si hay un Estadio en juego, este ataque hace 40 puntos de daño más.",
                it: "Se è in gioco uno Stadio, questo attacco infligge 40 danni in più.",
                de: "Wenn ein Stadion im Spiel ist, fügt dieser Angriff 40 Schadenspunkte mehr zu.",
                "pt-br": "Se um Estádio estiver em jogo, este ataque causa 40 de dano a mais.",
                "zh-tw": "如果體育場正在進行中，則此攻擊會造成 40 點以上的傷害。"
            },
            damage: "40+"
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
