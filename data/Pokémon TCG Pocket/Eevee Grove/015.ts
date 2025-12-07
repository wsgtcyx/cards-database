import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Salazzle",
        "fr": "Salazzle",
        "es": "Salazzle",
        "it": "Salazzle",
        "de": "Salazzle",
        "pt-br": "Salazzle",
        "zh-tw": "焰后蜥",
    },
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fire"],
    evolveFrom: {
        en: "Salandit",
        "fr": "Salandit",
        "es": "Salandit",
        "it": "Salandite",
        "de": "Salandit",
        "pt-br": "Salandite",
        "zh-tw": "薩蘭迪特"
    },
    description: {
        en: "Salazzle makes its opponents light-headed with\npoisonous gas, then captivates them with alluring\nmovements to turn them into loyal servants.",
        "fr": "Salazzle rend ses adversaires étourdis avec\ngaz toxique, puis les captive avec des gaz séduisants\nmouvements pour en faire des serviteurs fidèles.",
        "es": "Salazzle marea a sus oponentes con\ngas venenoso, luego los cautiva con seductores\nmovimientos para convertirlos en servidores leales.",
        "it": "Salazzle fa girare la testa ai suoi avversari\ngas velenoso, poi li affascina con la sua seduzione\nmovimenti per trasformarli in servitori fedeli.",
        "de": "Salazzle macht seine Gegner benommen\ngiftiges Gas und fesselt sie dann mit Verlockung\nBewegungen, um sie zu treuen Dienern zu machen.",
        "pt-br": "Salazzle deixa seus oponentes tontos com\ngás venenoso, então os cativa com sedutores\nmovimentos para transformá-los em servidores leais.",
        "zh-tw": "薩拉澤 (Salazzle) 讓對手頭暈目眩\n有毒氣體，然後用誘惑迷惑他們\n將他們變成忠誠的僕人的運動。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Combustion",
                "fr": "Combustion",
                "es": "Combustión",
                "it": "Combustione",
                "de": "Verbrennung",
                "pt-br": "Combustão",
                "zh-tw": "燃燒"
            },
            damage: 40,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 0
};
export default card;
