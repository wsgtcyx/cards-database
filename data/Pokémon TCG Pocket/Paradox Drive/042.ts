import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/042",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/042"
    },
    name: {
        en: "Bisharp",
        fr: "Scalproie",
        es: "Bisharp",
        it: "Bisharp",
        de: "Caesurio",
        "pt-br": "Bisharp",
        "zh-tw": "劈斬司令",
        ko: "절각참",
        ja: "キリキザン"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    dexId: [625],
    evolveFrom: {
        en: "Pawniard",
        fr: "Scalpion",
        es: "Pawniard",
        it: "Pawniard",
        de: "Gladiantri",
        "pt-br": "Pawniard",
        "zh-tw": "駒刀小兵",
        ko: "자망칼",
        ja: "コマタナ"
    },
    stage: "Stage1",
    description: {
        en: "It’s accompanied by a large retinue of Pawniard. Bisharp keeps a keen eye on its minions, ensuring none of them even think of double-crossing it.",
        fr: "Il dirige des cohortes de Scalpion.\nIl garde constamment ses sous-fifres à l’œil\npour parer à toute velléité de mutinerie.",
        es: "Siempre va acompañado por un nutrido séquito\nde Pawniard, a los que no pierde nunca de vista\npara evitar posibles motines.",
        it: "È sempre accompagnato da molti Pawniard.\nPer evitare che si verifichino ammutinamenti,\nli tiene sempre sotto stretta sorveglianza.",
        de: "Es hat stets ein Gefolge aus mehreren Gladiantri\nund achtet immer streng darauf, dass ihm keiner\nseiner Handlanger in den Rücken fällt.",
        "pt-br": "É acompanhado por uma grande comitiva de Pawniard. Bisharp fica de olho em seus lacaios, garantindo que nenhum deles sequer pense em traí-lo.",
        "zh-tw": "率領著一大群駒刀小兵。\n為了防止手下們背叛自己，\n總是睜大著眼睛監視牠們。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Dark Cutter",
                fr: "Tranch'Obscur",
                es: "Cuchilla Oscura",
                it: "Oscurotaglio",
                de: "Dunkler Zerschneider",
                "pt-br": "Cortador de Escuridão",
                "zh-tw": "暗黑利刃"
            },
            damage: 50
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
