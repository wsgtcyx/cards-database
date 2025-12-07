import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Ekans",
        "fr": "Ékans",
        "es": "Ekans",
        "it": "Ekans",
        "de": "Ekans",
        "pt-br": "Ekans",
        "zh-tw": "阿柏蛇",
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "By dislocating its jaw, it can swallow prey larger\nthan itself. After a meal, it curls up and rests.",
        "fr": "En luxant sa mâchoire, il peut avaler des proies plus grosses\nque lui-même. Après un repas, il se recroqueville et se repose.",
        "es": "Al dislocarse la mandíbula, puede tragar presas más grandes.\nque él mismo. Después de una comida, se acurruca y descansa.",
        "it": "Lussando la mascella può inghiottire prede più grandi\ndi se stesso. Dopo il pasto si rannicchia e riposa.",
        "de": "Durch die Ausrenkung seines Kiefers kann er größere Beutetiere verschlingen\nals sich selbst. Nach dem Essen rollt es sich zusammen und ruht.",
        "pt-br": "Ao deslocar a mandíbula, ele pode engolir presas maiores\ndo que ele mesmo. Depois de uma refeição, ele se enrola e descansa.",
        "zh-tw": "通過使下巴脫臼，它可以吞下更大的獵物\n比它本身。吃完飯後，它會蜷縮起來休息。"
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
                "zh-tw": "咬"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
