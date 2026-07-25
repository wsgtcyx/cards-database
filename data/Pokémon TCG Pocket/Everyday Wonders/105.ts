import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/105",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/105",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/105",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/105",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/105",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/105"
    },
    name: {
        en: "Munchlax",
        fr: "Goinfrex",
        es: "Munchlax",
        it: "Munchlax",
        de: "Mampfaxo",
        "pt-br": "Munchlax",
        "zh-tw": "小卡比獸",
        ko: "먹고자",
        ja: "ゴンベ"
    },
    illustrator: "Ayaka Yoshida",
    rarity: "Crown",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    dexId: [446],
    stage: "Basic",
    description: {
        en: "When it is voraciously gulping down food, it forgets about the food it has hidden under its fur.",
        fr: "Lorsqu’il avale avec voracité de la nourriture, il oublie la nourriture qu’il a cachée sous sa fourrure.",
        es: "Cuando devora comida con voracidad, se olvida de la comida que tiene escondida bajo su pelaje.",
        it: "Quando divora con voracità il cibo, si dimentica del cibo che ha nascosto sotto la pelliccia.",
        de: "Wenn es gefräßig Nahrung verschlingt, vergisst es die Nahrung, die es unter seinem Fell versteckt hat.",
        "pt-br": "Quando engole vorazmente a comida, esquece-se da comida que escondeu sob o pêlo.",
        "zh-tw": "當它貪婪地吞嚥食物時，它忘記了隱藏在皮毛下的食物。"
    },
    attacks: [
        {
            name: {
                en: "Hungrily Draw",
                fr: "Dessiner avidement",
                es: "Dibujar con hambre",
                it: "Disegna avidamente",
                de: "Hungrig zeichnen",
                "pt-br": "Desenhe com fome",
                "zh-tw": "吃吃抽"
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
    retreat: 2
};

export default card;
