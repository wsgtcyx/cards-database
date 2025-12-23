import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Grimer",
        "fr": "Tadmorv",
        "es": "Grimer",
        "it": "Grimer",
        "de": "Sleima",
        "pt-br": "Grimer",
        "zh-tw": "臭泥"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    description: {
        en: "Appears in filthy areas. It thrives by sucking up\npolluted sludge that is pumped out of factories.",
        "fr": "Apparaît dans les zones sales. Il prospère en aspirant\nboues polluées pompées hors des usines.",
        "es": "Aparece en zonas sucias. Prospera chupando\nLodos contaminados que se bombean fuera de las fábricas.",
        "it": "Appare in aree sporche. Prospera succhiando\nfanghi inquinati che vengono pompati fuori dalle fabbriche.",
        "de": "Erscheint in schmutzigen Bereichen. Es gedeiht durch Saugen\nverschmutzter Schlamm, der aus Fabriken gepumpt wird.",
        "pt-br": "Aparece em áreas sujas. Ele prospera sugando\nlama poluída que é bombeada para fora das fábricas.",
        "zh-tw": "出現在骯髒的地方。它靠吸吮而茁壯成長\n從工廠抽出的污染污泥。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Sludge Bomb",
                "fr": "Bombe à boue",
                "es": "Bomba de lodo",
                "it": "Bomba di fango",
                "de": "Schlammbombe",
                "pt-br": "Bomba de lama",
                "zh-tw": "污泥炸彈"
            },
            damage: 40,
            cost: ["Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
