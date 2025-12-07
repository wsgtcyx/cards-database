import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Cherrim",
        "fr": "Cherrim",
        "es": "Cherrim",
        "it": "Cherrim",
        "de": "Cherrim",
        "pt-br": "Cherrim",
        "zh-tw": "櫻桃木"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Cherubi",
        "fr": "Chérubin",
        "es": "querubín",
        "it": "Cherubini",
        "de": "Cherubi",
        "pt-br": "Querubim",
        "zh-tw": "切魯比"
    },
    description: {
        en: "After absorbing plenty of sunlight, Cherrim takes\nthis form. It's full of energy while it's like this,\nand its liveliness will go on until sundown.",
        "fr": "Après avoir absorbé beaucoup de soleil, Cherrim prend\ncette forme. C'est plein d'énergie quand c'est comme ça,\net sa vivacité durera jusqu'au coucher du soleil.",
        "es": "Después de absorber mucha luz solar, Cherrim toma\neste formulario. Está lleno de energía mientras está así,\ny su vivacidad durará hasta la puesta del sol.",
        "it": "Dopo aver assorbito molta luce solare, Cherrim prende\nquesto modulo. È pieno di energia mentre è così,\ne la sua vivacità durerà fino al tramonto.",
        "de": "Nachdem Cherrim viel Sonnenlicht absorbiert hat, nimmt er es auf\ndieses Formular. Es ist voller Energie, während es so ist,\nund seine Lebendigkeit wird bis zum Sonnenuntergang anhalten.",
        "pt-br": "Depois de absorver bastante luz solar, Cherrim leva\neste formulário. Está cheio de energia enquanto está assim,\ne sua vivacidade continuará até o pôr do sol.",
        "zh-tw": "吸收充足的陽光後，Cherrim 採取\n這種形式。這樣一來就充滿了能量，\n它的熱鬧將會持續到日落。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
