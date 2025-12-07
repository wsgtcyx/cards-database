import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Houndour",
        "fr": "Chien",
        "es": "Houndour",
        "it": "Houndour",
        "de": "Hundour",
        "pt-br": "Cão de caça",
        "zh-tw": "戴魯比",
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It is smart enough to hunt in packs. It uses a\nvariety of cries for communicating with others.",
        "fr": "Il est assez intelligent pour chasser en meute. Il utilise un\nvariété de cris pour communiquer avec les autres.",
        "es": "Es lo suficientemente inteligente como para cazar en manadas. Utiliza un\nVariedad de gritos para comunicarse con los demás.",
        "it": "È abbastanza intelligente da cacciare in branco. Utilizza a\nvarietà di grida per comunicare con gli altri.",
        "de": "Es ist klug genug, in Rudeln zu jagen. Es verwendet a\nVielzahl von Schreien für die Kommunikation mit anderen.",
        "pt-br": "É inteligente o suficiente para caçar em matilhas. Ele usa um\nvariedade de gritos para se comunicar com outras pessoas.",
        "zh-tw": "它足夠聰明，可以成群狩獵。它使用一個\n與他人交流的各種哭聲。"
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
            damage: 40,
            cost: ["Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
