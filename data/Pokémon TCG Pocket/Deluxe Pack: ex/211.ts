import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Riolu",
        "fr": "Riolu",
        "es": "Riolu",
        "it": "Riolu",
        "de": "Riolu",
        "pt-br": "Riolu",
        "zh-tw": "利奧盧"
    },
    illustrator: "You Iribi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "They communicate with one another using their\nauras. They are able to run all through the night.",
        "fr": "Ils communiquent entre eux grâce à leur\nauras. Ils sont capables de courir toute la nuit.",
        "es": "Se comunican entre sí usando sus\nauras. Pueden correr toda la noche.",
        "it": "Comunicano tra loro usando il loro\naure. Sono in grado di correre tutta la notte.",
        "de": "Sie kommunizieren miteinander über ihre\nAuren. Sie können die ganze Nacht hindurch laufen.",
        "pt-br": "Eles se comunicam entre si usando seus\nauras. Eles são capazes de correr a noite toda.",
        "zh-tw": "他們使用自己的方式相互交流\n光環。他們能夠整夜奔跑。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床"
            },
            damage: 40,
            cost: ["Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
