import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Charmander",
        "fr": "Salamèche",
        "es": "Charmander",
        "it": "Charmander",
        "de": "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍"
    },
    illustrator: "DOM",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "From the time it is born, a flame burns at the tip\nof its tail. Its life would end if the flame were to\ngo out.",
        "fr": "Dès sa naissance, une flamme brûle à la pointe\nde sa queue. Sa vie prendrait fin si la flamme venait à\nsortir.",
        "es": "Desde que nace, una llama arde en la punta.\nde su cola. Su vida terminaría si la llama se apagara.\nsalir.",
        "it": "Dal momento in cui nasce, una fiamma arde sulla punta\ndella sua coda. La sua vita finirebbe se la fiamma lo facesse\nuscire.",
        "de": "Von der Geburt an brennt an der Spitze eine Flamme\nseines Schwanzes. Sein Leben würde enden, wenn die Flamme es tun würde\ngeh raus.",
        "pt-br": "Desde que nasce, uma chama arde na ponta\nde sua cauda. Sua vida terminaria se a chama\nsair.",
        "zh-tw": "從誕生之日起，尖端就燃燒著火焰\n它的尾巴。如果火焰熄滅，它的生命就會結束\n出去。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬住"
            },
            damage: 40,
            cost: ["Fire", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
