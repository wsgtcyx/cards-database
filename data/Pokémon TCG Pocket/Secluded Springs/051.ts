import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Inkay",
        "fr": "Inkay",
        "es": "tinta",
        "it": "Inkay",
        "de": "Inkay",
        "pt-br": "Inkay",
        "zh-tw": "豪喇花枝",
    },
    illustrator: "miki kudo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It spins while making its luminescent spots flash.\nThese spots allow it to communicate with others\nby using different patterns of light.",
        "fr": "Il tourne en faisant clignoter ses taches luminescentes.\nCes spots lui permettent de communiquer avec les autres\nen utilisant différents modèles de lumière.",
        "es": "Gira mientras hace destellar sus puntos luminiscentes.\nEstos puntos le permiten comunicarse con los demás.\nmediante el uso de diferentes patrones de luz.",
        "it": "Gira facendo lampeggiare i suoi punti luminescenti.\nQuesti punti gli permettono di comunicare con gli altri\nutilizzando diversi modelli di luce.",
        "de": "Es dreht sich und lässt seine Leuchtpunkte blinken.\nDiese Stellen ermöglichen es ihm, mit anderen zu kommunizieren\ndurch die Verwendung verschiedener Lichtmuster.",
        "pt-br": "Ele gira enquanto faz seus pontos luminescentes piscarem.\nEsses pontos permitem que ele se comunique com outras pessoas\nusando diferentes padrões de luz.",
        "zh-tw": "它一邊旋轉，一邊讓發光點閃爍。\n這些點可以讓它與其他人交流\n通過使用不同的光圖案。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
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
