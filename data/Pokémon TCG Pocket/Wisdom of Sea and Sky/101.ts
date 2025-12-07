import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Tyrogue",
        "fr": "Tyrogue",
        "es": "tirogo",
        "it": "Tirogue",
        "de": "Tyrogue",
        "pt-br": "Tyrogue",
        "zh-tw": "巴爾郎",
    },
    illustrator: "Mina Nakai",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Fighting"],
    description: {
        en: "It is always bursting with energy. To make itself\nstronger, it keeps on fighting even if it loses.",
        "fr": "C’est toujours débordant d’énergie. Se faire\nplus fort, il continue à se battre même s'il perd.",
        "es": "Siempre está lleno de energía. para hacerse a si mismo\nMás fuerte, sigue luchando incluso si pierde.",
        "it": "È sempre pieno di energia. Per farsi\npiù forte, continua a combattere anche se perde.",
        "de": "Es strotzt immer vor Energie. Sich selbst machen\nstärker, es kämpft weiter, auch wenn es verliert.",
        "pt-br": "Está sempre cheio de energia. Para se fazer\nmais forte, continua lutando mesmo que perca.",
        "zh-tw": "它總是充滿能量。為了讓自己\n越強大，即使輸了，也會繼續戰鬥。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Slappy Knuckle",
                "fr": "Coup de poing giflé",
                "es": "nudillo bofetada",
                "it": "Nocca schiaffeggiante",
                "de": "Slappy Knuckle",
                "pt-br": "Junta tapa",
                "zh-tw": "斯拉皮指關節"
            },
            damage: 20
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["ho-oh"]
};
export default card;
