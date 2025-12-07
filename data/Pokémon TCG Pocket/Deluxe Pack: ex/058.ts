import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Charmeleon",
        "fr": "Charméléon",
        "es": "Charmeleon",
        "it": "Charmeleon",
        "de": "Charmeleon",
        "pt-br": "Charmeleon",
        "zh-tw": "變色龍"
    },
    illustrator: "kantaro",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    evolveFrom: {
        en: "Charmander",
        "fr": "Salamèche",
        "es": "Charmander",
        "it": "Charmander",
        "de": "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍"
    },
    description: {
        en: "It has a barbaric nature. In battle, it whips its\nfiery tail around and slashes away with sharp claws.",
        "fr": "Cela a un caractère barbare. Au combat, il fouette\nqueue enflammée autour et coupe avec des griffes acérées.",
        "es": "Tiene un carácter bárbaro. En la batalla, azota su\ncola de fuego alrededor y corta con garras afiladas.",
        "it": "Ha una natura barbarica. In battaglia, frusta il suo\ncoda infuocata e sferza con artigli affilati.",
        "de": "Es hat einen barbarischen Charakter. Im Kampf peitscht es\nfeurigen Schwanz herum und schlägt mit scharfen Krallen zu.",
        "pt-br": "Tem uma natureza bárbara. Na batalha, ele chicoteia seus\ncauda de fogo ao redor e corta com garras afiadas.",
        "zh-tw": "它具有野蠻的本質。在戰鬥中，它鞭打自己\n火尾環繞，用鋒利的爪子斬開。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fire Claws",
                "fr": "Griffes de Feu",
                "es": "Garras de fuego",
                "it": "Artigli di fuoco",
                "de": "Feuerkrallen",
                "pt-br": "Garras de Fogo",
                "zh-tw": "火爪"
            },
            damage: 60,
            cost: ["Fire", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
