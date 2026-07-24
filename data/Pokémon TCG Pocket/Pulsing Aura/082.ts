import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/082",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/082"
    },
    name: {
        en: "Croagunk",
        fr: "Cradopaud",
        es: "Croagunk",
        it: "Croagunk",
        de: "Glibunkel",
        "pt-br": "Croagunk",
        "zh-tw": "不良蛙",
        ko: "삐딱구리",
        ja: "グレッグル"
    },
    illustrator: "Shin Nagasawa",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    dexId: [453],
    stage: "Basic",
    description: {
        en: "It rarely fights fairly, but that is strictly to ensure survival. It is popular as a mascot.",
        fr: "Son instinct de survie le pousse à\nne pas se battre dans les règles.\nC’est une mascotte populaire.",
        es: "Rara vez lucha de manera justa, pero lo hace estrictamente para asegurar la supervivencia. Es popular como mascota.",
        it: "Raramente combatte lealmente, ma lo fa esclusivamente per garantire la sopravvivenza. È popolare come mascotte.",
        de: "Es wird selten fair gekämpft, aber das dient ausschließlich der Sicherung des Überlebens. Es ist als Maskottchen beliebt.",
        "pt-br": "Raramente luta de forma justa, mas isso é estritamente para garantir a sobrevivência. É popular como mascote.",
        "zh-tw": "它很少公平地戰鬥，但那是嚴格為了確保生存。它作為吉祥物很受歡迎。"
    },
    attacks: [
        {
            cost: ["Fighting"],
            name: {
                en: "Corkscrew Punch",
                fr: "Poing Tire-Bouchon",
                es: "Puño Tirabuzón",
                it: "Pugno Rotante",
                de: "Korkenzieherhieb",
                "pt-br": "Soco Saca-rolha",
                "zh-tw": "推擊"
            },
            damage: 20
        }
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
