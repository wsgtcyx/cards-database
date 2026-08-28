import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/001",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/001"
    },
    name: {
        en: "Volbeat",
        fr: "Muciole",
        es: "Volbeat",
        it: "Volbeat",
        de: "Volbeat",
        "pt-br": "Volbeat",
        "zh-tw": "電螢蟲",
        ko: "볼비트",
        ja: "バルビート"
    },
    illustrator: "Kanako Eo",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [313],
    stage: "Basic",
    description: {
        en: "It flashes the light on its rear to communicate with other Volbeat. It loves the sweet aroma given off by Illumise.",
        fr: "Pour communiquer avec ses semblables, ce Pokémon fait clignoter son postérieur. Il adore le doux parfum que dégagent les Lumivole.",
        es: "Se comunica con sus congéneres haciendo parpadear la luz de la cola. Adora el dulce aroma que desprende Illumise.",
        it: "Comunica con i suoi simili grazie alla luce intermittente della coda. Adora il dolce aroma di Illumise.",
        de: "Volbeat kommuniziert mit seinen Artgenossen, indem es mit dem Licht an seinem Hinterteil blinkt. Es liebt den süßen Duft von Illumise.",
        "pt-br": "Pisca a luz em seu traseiro para se comunicar com outros Volbeat. Ama o aroma doce de Illumise.",
        "zh-tw": "會閃爍臀部的光芒來與夥伴交流。最喜歡甜甜螢放出的甜甜香氣。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Tackle",
                fr: "Charge",
                es: "Placaje",
                it: "Azione",
                de: "Tackle",
                "pt-br": "Investida",
                "zh-tw": "撞擊"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
