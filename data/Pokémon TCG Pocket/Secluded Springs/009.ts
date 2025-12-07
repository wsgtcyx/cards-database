import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Magcargo",
        "fr": "Cargaison",
        "es": "Magcargo",
        "it": "Magcargo",
        "de": "Magcargo",
        "pt-br": "Magcargo",
        "zh-tw": "熔岩蝸牛",
    },
    illustrator: "Eri Yamaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    evolveFrom: {
        en: "Slugma",
        "fr": "Limagma",
        "es": "Slugma",
        "it": "Slugma",
        "de": "Slugma",
        "pt-br": "Slugma",
        "zh-tw": "斯盧格馬"
    },
    description: {
        en: "Its brittle shell occasionally spouts intense flames\nthat circulate throughout its body.",
        "fr": "Sa coquille fragile crache parfois des flammes intenses\nqui circule dans tout son corps.",
        "es": "Su frágil caparazón ocasionalmente arroja intensas llamas.\nque circulan por todo su cuerpo.",
        "it": "Il suo fragile guscio occasionalmente emette fiamme intense\nche circolano in tutto il suo corpo.",
        "de": "Seine spröde Schale stößt gelegentlich heftige Flammen aus\ndie durch seinen Körper zirkulieren.",
        "pt-br": "Sua casca frágil ocasionalmente emite chamas intensas\nque circulam por todo o seu corpo.",
        "zh-tw": "它脆弱的外殼偶爾會噴出強烈的火焰\n並在其全身循環。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風"
            },
            damage: 90,
            cost: ["Fire", "Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
