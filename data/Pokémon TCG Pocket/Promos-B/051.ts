import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/051",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/051"
    },
    name: {
        en: "Zygarde",
        fr: "Zygarde",
        es: "Zygarde",
        it: "Zygarde",
        de: "Zygarde",
        "pt-br": "Zygarde",
        "zh-tw": "基格爾德",
        ko: "지가르데",
        ja: "ジガルデ"
    },
    illustrator: "Akira Komayama",
    rarity: "None",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    dexId: [718],
    stage: "Basic",
    description: {
        en: "Born when around 10% of Zygarde’s cells have been gathered from all over, this form is skilled in close-range combat.",
        fr: "Née lorsqu'environ 10 % des cellules de Zygarde ont été rassemblées partout, cette forme est habile au combat rapproché.",
        es: "Nacida cuando alrededor del 10% de las células de Zygarde se han reunido de todas partes, esta forma es experta en combates a corta distancia.",
        it: "Nata quando circa il 10% delle cellule di Zygarde è stata raccolta da ogni parte, questa forma è abile nel combattimento a distanza ravvicinata.",
        de: "Diese Form wurde geboren, als etwa 10 % der Zellen von Zygarde von überall her gesammelt wurden, und ist im Nahkampf geübt.",
        "pt-br": "Nascida quando cerca de 10% das células de Zygarde foram coletadas de todos os lugares, esta forma é hábil em combate de curta distância.",
        "zh-tw": "當基格爾德的細胞從各地收集到10%左右時誕生，這種形態擅長近距離戰鬥。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Bite",
                fr: "Morsure",
                es: "Mordisco",
                it: "Morso",
                de: "Biss",
                "pt-br": "Mordida",
                "zh-tw": "咬住"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol7"]
};

export default card;
