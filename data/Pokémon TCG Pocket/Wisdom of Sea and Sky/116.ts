import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Weavile",
        "fr": "Tisserand",
        "es": "tejido",
        "it": "Weavile",
        "de": "Webbar",
        "pt-br": "Weavile",
        "zh-tw": "韋維爾"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Sneasel",
        "fr": "Sneasel",
        "es": "Sneasel",
        "it": "Sneasel",
        "de": "Nieseln",
        "pt-br": "Sneasel",
        "zh-tw": "斯內塞爾"
    },
    description: {
        en: "Evolution made it even more devious.\nIt communicates by clawing signs in boulders.",
        "fr": "L'évolution l'a rendu encore plus sournois.\nIl communique en griffant des signes dans les rochers.",
        "es": "La evolución lo hizo aún más tortuoso.\nSe comunica mediante señales de arañas en las rocas.",
        "it": "L'evoluzione lo ha reso ancora più subdolo.\nComunica artigliando segni nei massi.",
        "de": "Die Evolution hat es noch verschlagener gemacht.\nEs kommuniziert, indem es Zeichen in Felsbrocken kratzt.",
        "pt-br": "A evolução tornou tudo ainda mais tortuoso.\nEle se comunica arranhando sinais em pedras.",
        "zh-tw": "進化使它變得更加狡猾。\n它通過抓撓巨石上的標誌進行交流。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 50,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["lugia"]
};
export default card;
