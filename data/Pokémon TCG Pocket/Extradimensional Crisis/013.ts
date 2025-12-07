import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Shinx",
        "fr": "Shinx",
        "es": "Shinx",
        "it": "Shinx",
        "de": "Shinx",
        "pt-br": "Shinx",
        "zh-tw": "辛克斯"
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "The extension and contraction of its muscles\ngenerates electricity. It glows when in trouble.",
        "fr": "L'extension et la contraction de ses muscles\nproduit de l’électricité. Il brille en cas de problème.",
        "es": "La extensión y contracción de sus músculos.\ngenera electricidad. Brilla cuando está en problemas.",
        "it": "L'estensione e la contrazione dei suoi muscoli\ngenera elettricità. Si illumina quando è nei guai.",
        "de": "Die Dehnung und Kontraktion seiner Muskeln\nerzeugt Strom. Es leuchtet, wenn es in Schwierigkeiten ist.",
        "pt-br": "A extensão e contração de seus músculos\ngera eletricidade. Ele brilha quando está em apuros.",
        "zh-tw": "肌肉的伸展和收縮\n發電。當遇到困難時它會發光。"
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
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
