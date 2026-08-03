import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/069",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/069",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/069",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/069",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/069",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/069",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/069"
    },
    name: {
        en: "Hatenna",
        fr: "Bibichut",
        es: "Hatenna",
        it: "Hatenna",
        de: "Brimova",
        "pt-br": "Hatenna",
        "zh-tw": "迷布莉姆",
        ko: "몸지브림",
        ja: "ミブリム"
    },
    illustrator: "Sekio",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    dexId: [856],
    stage: "Basic",
    description: {
        en: "It senses the feelings of other living creatures. Be careful not to expose it to strong emotions for too long, or it will end up exhausted.",
        fr: "Il détecte les sentiments des autres créatures vivantes. Attention à ne pas l’exposer trop longtemps à des émotions fortes, sinon il finira par s’épuiser.",
        es: "Siente los sentimientos de otros seres vivos. Ten cuidado de no exponerlo demasiado tiempo a emociones fuertes o acabará agotado.",
        it: "Percepisce i sentimenti degli altri esseri viventi. Fai attenzione a non esporlo a forti emozioni per troppo tempo, altrimenti finirà per esaurirsi.",
        de: "Es spürt die Gefühle anderer Lebewesen. Achten Sie darauf, es nicht zu lange starken Emotionen auszusetzen, sonst wird es am Ende erschöpft sein.",
        "pt-br": "Ele sente os sentimentos de outras criaturas vivas. Tenha cuidado para não expô-lo a emoções fortes por muito tempo, ou ele acabará exausto.",
        "zh-tw": "它能感知其他生物的感受。注意不要讓它長時間暴露在強烈的情緒中，否則它最終會精疲力盡。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Stampede",
                fr: "Ruée",
                es: "Estampida",
                it: "Fuggi Fuggi",
                de: "Zertrampeln",
                "pt-br": "Estouro",
                "zh-tw": "踩"
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
