import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Delibird",
        "fr": "Délibird",
        "es": "Delibird",
        "it": "Delibird",
        "de": "Delibird",
        "pt-br": "Delibird",
        "zh-tw": "熟食鳥"
    },
    illustrator: "Narumi Sato",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "It carries food all day long. There are tales about\nlost people who were saved by the food it had.",
        "fr": "Il transporte de la nourriture toute la journée. Il y a des histoires sur\ndes personnes perdues qui ont été sauvées grâce à la nourriture dont elle disposait.",
        "es": "Lleva comida todo el día. Hay cuentos sobre\npersonas perdidas que fueron salvadas por la comida que tenía.",
        "it": "Trasporta cibo tutto il giorno. Ci sono storie su\npersone perse che furono salvate dal cibo che aveva.",
        "de": "Es trägt den ganzen Tag über Nahrung. Es gibt Geschichten darüber\nverlorene Menschen, die durch die Nahrung, die es gab, gerettet wurden.",
        "pt-br": "Ele carrega comida o dia todo. Existem contos sobre\nperdeu pessoas que foram salvas pela comida que tinha.",
        "zh-tw": "它整天攜帶食物。有一些關於\n失去的人被它所擁有的食物拯救了。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stumbling Draw",
                "fr": "Tirage au sort trébuchant",
                "es": "Empate a trompicones",
                "it": "Pareggio inciampante",
                "de": "Stolpernder Zug",
                "pt-br": "Empate de tropeço",
                "zh-tw": "跌跌撞撞的平局"
            },
            damage: 10,
            cost: ["Water"],
            effect: {
                en: "Draw a card.",
                "fr": "Piochez une carte.",
                "es": "Saca una carta.",
                "it": "Pesca una carta.",
                "de": "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
