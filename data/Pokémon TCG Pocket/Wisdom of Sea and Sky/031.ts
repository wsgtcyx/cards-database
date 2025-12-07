import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
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
    illustrator: "Shigenori Negishi",
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
                en: "Spurt Fire",
                "fr": "Poussée de feu",
                "es": "Fuego a chorros",
                "it": "Fuoco a getto",
                "de": "Feuerstoß",
                "pt-br": "Jato de fogo",
                "zh-tw": "噴火"
            },
            cost: ["Fire", "Colorless"],
            effect: {
                en: "1 other Pokémon (either yours or your opponent's) is chosen at random 3 times. For each time a Pokémon was chosen, do 50 damage to it.",
                "fr": "1 autre Pokémon (le vôtre ou celui de votre adversaire) est choisi au hasard 3 fois. À chaque fois qu'un Pokémon est choisi, infligez-lui 50 dégâts.",
                "es": "Se elige 1 Pokémon más (ya sea tuyo o de tu oponente) al azar 3 veces. Por cada vez que se elija un Pokémon, hazle 50 daños.",
                "it": "1 altro Pokémon (tuo o del tuo avversario) viene scelto a caso 3 volte. Per ogni volta che viene scelto un Pokémon, infliggigli 50 danni.",
                "de": "1 anderes Pokémon (entweder deins oder das deines Gegners) wird dreimal zufällig ausgewählt. Füge ihm jedes Mal, wenn ein Pokémon ausgewählt wurde, 50 Schadenspunkte zu.",
                "pt-br": "1 outro Pokémon (seu ou do seu oponente) é escolhido aleatoriamente 3 vezes. Para cada vez que um Pokémon for escolhido, cause 50 de dano a ele.",
                "zh-tw": "隨機選擇 1 個其他神奇寶貝（無論是你的還是你對手的）3 次。每次選擇一隻神奇寶貝，對其造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
