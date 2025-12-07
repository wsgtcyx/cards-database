import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Lillipup",
        "fr": "Lilipup",
        "es": "lilipup",
        "it": "Lillipup",
        "de": "Lillipup",
        "pt-br": "Lillipup",
        "zh-tw": "小約克",
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "This Pokémon is far brighter than the average\nchild, and Lillipup won't forget the love it\nreceives or any abuse it suffers.",
        "fr": "Ce Pokémon est bien plus brillant que la moyenne\nenfant, et Lillipup n'oubliera pas son amour\nreçoit ou tout abus dont il est victime.",
        "es": "Este Pokémon es mucho más brillante que el promedio.\nniño, y Lillipup no olvidará el amor\nrecibe o cualquier abuso que sufra.",
        "it": "Questo Pokémon è molto più luminoso della media\nbambino, e Lillipup non dimenticherà di amarlo\nriceve o qualsiasi abuso subisce.",
        "de": "Dieses Pokémon ist viel heller als der Durchschnitt\nKind, und Lillipup wird die Liebe nicht vergessen\nerhält oder irgendeinen Missbrauch erleidet.",
        "pt-br": "Este Pokémon é muito mais brilhante que a média\ncriança, e Lillipup não esquecerá o amor que\nrecebe ou qualquer abuso que sofra.",
        "zh-tw": "這只神奇寶貝比一般神奇寶貝明亮得多\n孩子，利利普不會忘記對它的愛\n受到或遭受任何虐待。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Collect",
                "fr": "Collecter",
                "es": "Recolectar",
                "it": "Raccogliere",
                "de": "Sammeln",
                "pt-br": "Coletar",
                "zh-tw": "收集"
            },
            cost: ["Colorless"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
