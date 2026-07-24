import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/086"
    },
    name: {
        en: "Boldore",
        "fr": "Boldoré",
        "es": "Boldoré",
        "it": "Boldore",
        "de": "Boldore",
        "pt-br": "Boldoré",
        "zh-tw": "博爾多雷"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Roggenrola",
        "fr": "Roggenrola",
        "es": "Roggenrola",
        "it": "Roggenrola",
        "de": "Roggenrola",
        "pt-br": "Roggenrola",
        "zh-tw": "羅根羅拉"
    },
    description: {
        en: "It relies on sound in order to monitor what's in its\nvicinity. When angered, it will attack without ever\nchanging the direction it's facing.",
        "fr": "Il s'appuie sur le son pour surveiller ce qu'il contient.\nvoisinage. Lorsqu'il est en colère, il attaquera sans jamais\nchanger la direction à laquelle il fait face.",
        "es": "Se basa en el sonido para monitorear lo que hay en su\nvecindad. Cuando se enoja, atacará sin\ncambiando la dirección en la que mira.",
        "it": "Si basa sul suono per monitorare cosa c'è dentro\nvicinanze. Quando è arrabbiato, attaccherà senza mai\ncambiando la direzione in cui è rivolto.",
        "de": "Es ist auf den Ton angewiesen, um zu überwachen, was sich darin befindet\nUmgebung. Wenn es verärgert ist, greift es ohne jemals an\ndie Richtung ändern, in die es zeigt.",
        "pt-br": "Ele depende do som para monitorar o que está em seu\nvizinhança. Quando irritado, ele atacará sem nunca\nmudando a direção para a qual está voltado.",
        "zh-tw": "它依靠聲音來監視其內部的內容\n附近。當它被激怒時，它會毫不猶豫地攻擊\n改變它所面對的方向。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Power Gem",
                "fr": "Gemme de puissance",
                "es": "Gema de poder",
                "it": "Gemma del potere",
                "de": "Kraftjuwel",
                "pt-br": "Gema de Poder",
                "zh-tw": "能量寶石"
            },
            damage: 70,
            cost: ["Fighting", "Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
