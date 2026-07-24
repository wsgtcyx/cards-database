import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/046",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/046"
    },
    name: {
        en: "Chatot",
        fr: "Pijako",
        es: "Chatot",
        it: "Chatot",
        de: "Plaudagei",
        "pt-br": "Chatot",
        "zh-tw": "聒噪鳥",
        ko: "페라페",
        ja: "ペラップ"
    },
    illustrator: "0313",
    rarity: "None",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [441],
    stage: "Basic",
    description: {
        en: "It can learn and speak human words. If they gather, they all learn the same saying.",
        fr: "On peut lui enseigner quelques mots. S’il s’agit d’un groupe,\nils retiendront les mêmes phrases.",
        es: "Puede imitar el lenguaje humano. Si se juntan varios, todos\naprenden las mismas palabras.",
        it: "Può imparare il linguaggio umano. Se un gruppo si raduna,\ntutti imparano le stesse parole.",
        de: "Es kann die menschliche Sprache nachahmen.\nVersammeln sie sich, bringen sich alle dasselbe bei.",
        "pt-br": "Ele pode aprender e falar palavras humanas. Se eles se reunirem, todos aprenderão o mesmo ditado.",
        "zh-tw": "它可以學習並說出人類語言。如果他們聚集在一起，他們都會學到同樣的說法。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Spinning Draw",
                fr: "Pioche Tournante",
                es: "Robo Giratorio",
                it: "Pesca Rotante",
                de: "Drehender Zug",
                "pt-br": "Compra Giratória",
                "zh-tw": "迴轉抽出"
            },
            effect: {
                en: "Draw a card.",
                fr: "Piochez une carte.",
                es: "Saca una carta.",
                it: "Pesca una carta.",
                de: "Ziehe eine Karte.",
                "pt-br": "Compre uma carta.",
                "zh-tw": "畫一張卡片。"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol6"]
};

export default card;
