import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/098",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/098",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/098",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/098"
    },
    name: {
        en: "Galarian Zigzagoon",
        "fr": "Zigzaton de Galar",
        "es": "Zigzagoon de Galar",
        "it": "Zigzagoon di Galar",
        "de": "Galar-Zigzachs",
        "pt-br": "Zigzagoon de Galar",
        "zh-tw": "伽勒爾蛇紋熊",
        ja: "ガラルジグザグマ",
        ko: "가라르 지그제구리"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "Thought to be the oldest form of Zigzagoon,\nit moves in zigzags and wreaks havoc upon\nits surroundings.",
        "fr": "Considéré comme la forme la plus ancienne de Zigzagoon,\nil se déplace en zigzags et fait des ravages\nses environs.",
        "es": "Se cree que es la forma más antigua de Zigzagoon,\nse mueve en zigzag y causa estragos\nsus alrededores.",
        "it": "Pensato per essere la forma più antica di Zigzagoon,\nsi muove a zigzag e semina il caos\ni suoi dintorni.",
        "de": "Gilt als die älteste Form des Zickzacks.\nes bewegt sich im Zickzack und richtet verheerende Schäden an\nseine Umgebung.",
        "pt-br": "Considerada a forma mais antiga de Zigzagoon,\nele se move em ziguezagues e causa estragos\nseu entorno.",
        "zh-tw": "被認為是 Zigzagoon 最古老的形式，\n它以之字形移動並造成嚴重破壞\n它的周圍環境。",
        ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。",
        ko: "이 모습이 가장 오래된 지그제구리의\n모습인 듯하다. 지그재그로 움직이며\n주변을 엉망으로 만든다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dig Claws",
                "fr": "Creuser des griffes",
                "es": "Cavar garras",
                "it": "Scavare gli artigli",
                "de": "Krallen graben",
                "pt-br": "Cavar Garras",
                "zh-tw": "挖爪",
                ja: "ツメをたてる",
                ko: "발톱세우기"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
