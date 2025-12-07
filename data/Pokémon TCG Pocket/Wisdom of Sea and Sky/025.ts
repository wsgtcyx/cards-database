import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Vulpix",
        "fr": "Goupix",
        "es": "vulpix",
        "it": "Vulpix",
        "de": "Vulpix",
        "pt-br": "Vulpix",
        "zh-tw": "六尾"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "While young, it has six gorgeous tails. When it\ngrows, several new tails are sprouted.",
        "fr": "Lorsqu'il est jeune, il possède six magnifiques queues. Quand il\ngrandit, plusieurs nouvelles queues poussent.",
        "es": "Cuando es joven, tiene seis hermosas colas. cuando\ncrece, brotan varias colas nuevas.",
        "it": "Da giovane ha sei splendide code. Quando\ncresce, spuntano diverse nuove code.",
        "de": "Als junges Tier hat es sechs wunderschöne Schwänze. Wenn es\nwächst, mehrere neue Schwänze sprießen.",
        "pt-br": "Enquanto jovem, tem seis lindas caudas. Quando\ncresce, várias novas caudas brotam.",
        "zh-tw": "年輕時，它有六條華麗的尾巴。當它\n長大了，又長出了幾條新的尾巴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Live Coal",
                "fr": "Charbon vivant",
                "es": "Carbón vivo",
                "it": "Carbone vivo",
                "de": "Lebende Kohle",
                "pt-br": "Carvão Vivo",
                "zh-tw": "生煤"
            },
            damage: 30,
            cost: ["Fire", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
