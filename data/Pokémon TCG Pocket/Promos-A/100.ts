import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/100",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/100",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/100",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/100",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/100",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/100"
    },
    name: {
        en: "Weavile",
        "fr": "Dimoret",
        "es": "Weavile",
        "it": "Weavile",
        "de": "Snibunna",
        "pt-br": "Weavile",
        "zh-tw": "瑪狃拉",
    },
    illustrator: "Satoshi Shirai",
    rarity: "Three Diamond",
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
    retreat: 0
};
export default card;
