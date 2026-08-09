import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/009",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/009"
    },
    name: {
        en: "Magcargo",
        "fr": "Volcaropod",
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
        "de": "Schneckmag",
        "pt-br": "Slugma",
        "zh-tw": "熔岩蟲",
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
