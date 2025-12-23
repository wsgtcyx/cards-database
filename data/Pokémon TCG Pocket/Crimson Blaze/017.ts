import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Squirtle",
        "fr": "Carapuce",
        "es": "Squirtle",
        "it": "Squirtle",
        "de": "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth.",
        "fr": "Lorsqu’il se sent menacé, il rentre ses membres à l’intérieur\nsa coquille et pulvérise de l'eau de sa bouche.",
        "es": "Cuando se siente amenazado, mete sus extremidades hacia dentro.\nsu caparazón y rocía agua por la boca.",
        "it": "Quando si sente minacciato, ritira le sue membra verso l'interno\nil suo guscio e spruzza acqua dalla bocca.",
        "de": "Wenn es sich bedroht fühlt, zieht es seine Gliedmaßen hinein\nsein Panzer und spritzt Wasser aus seinem Maul.",
        "pt-br": "Quando se sente ameaçado, ele puxa seus membros para dentro\nsua concha e espirra água pela boca.",
        "zh-tw": "當它感到受到威脅時，它會把四肢縮進去\n它的殼並從嘴裡噴出水。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tail Whap",
                "fr": "Coup de queue",
                "es": "Golpe de cola",
                "it": "Colpo di coda",
                "de": "Tail Whap",
                "pt-br": "Golpe de cauda",
                "zh-tw": "尾擊"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
