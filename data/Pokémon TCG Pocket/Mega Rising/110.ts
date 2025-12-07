import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Yamask",
        "fr": "Yamask",
        "es": "Yamask",
        "it": "Yamask",
        "de": "Yamask",
        "pt-br": "Yamask",
        "zh-tw": "雅馬斯克"
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Psychic"],
    description: {
        en: "The spirit of a person from a bygone age became\nthis Pokémon. It rambles through ruins, searching\nfor someone who knows its face.",
        "fr": "L'esprit d'une personne d'une époque révolue est devenu\nce Pokémon. Il se promène dans les ruines, cherchant\npour quelqu'un qui connaît son visage.",
        "es": "El espíritu de una persona de una época pasada se convirtió\neste Pokémon. Divaga entre ruinas, buscando\npara alguien que conoce su cara.",
        "it": "Lo spirito di una persona di un'epoca passata divenne\nquesto Pokémon. Vaga tra le rovine, cercando\nper qualcuno che ne conosce il volto.",
        "de": "Der Geist eines Menschen aus einer vergangenen Zeit wurde\ndieses Pokémon. Es streift suchend durch Ruinen\nfür jemanden, der sein Gesicht kennt.",
        "pt-br": "O espírito de uma pessoa de uma época passada tornou-se\neste Pokémon. Ele vagueia pelas ruínas, procurando\npara alguém que conhece seu rosto.",
        "zh-tw": "一個人的精神從過去的時代變成了\n這只神奇寶貝。它在廢墟中漫步，尋找\n對於認識它面孔的人來說。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Mumble",
                "fr": "Marmonner",
                "es": "Mascullar",
                "it": "Mumble",
                "de": "Murmeln",
                "pt-br": "Resmungar",
                "zh-tw": "咕噥"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
