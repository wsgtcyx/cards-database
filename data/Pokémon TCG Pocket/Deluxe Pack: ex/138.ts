import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Magnezone",
        "fr": "Magnézone",
        "es": "magnezona",
        "it": "Magnezone",
        "de": "Magnezone",
        "pt-br": "Magnezona",
        "zh-tw": "磁區"
    },
    illustrator: "Yoshinobu Saito",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    evolveFrom: {
        en: "Magneton",
        "fr": "Magnéton",
        "es": "Magnetón",
        "it": "Magnetone",
        "de": "Magneton",
        "pt-br": "Magnetão",
        "zh-tw": "磁通"
    },
    description: {
        en: "As it zooms through the sky, this Pokémon seems\nto be receiving signals of unknown origin while\ntransmitting signals of unknown purpose.",
        "fr": "En zoomant dans le ciel, ce Pokémon semble\nrecevoir des signaux d'origine inconnue alors\ntransmettre des signaux à des fins inconnues.",
        "es": "Mientras surca el cielo, este Pokémon parece\nestar recibiendo señales de origen desconocido mientras\ntransmitir señales de propósito desconocido.",
        "it": "Mentre sfreccia nel cielo, appare questo Pokémon\nricevere segnali di origine sconosciuta mentre\ntrasmettere segnali di scopo sconosciuto.",
        "de": "Während es durch den Himmel rast, erscheint dieses Pokémon\nwährenddessen Signale unbekannter Herkunft empfangen\nSenden von Signalen mit unbekanntem Zweck.",
        "pt-br": "À medida que avança pelo céu, este Pokémon parece\nestar recebendo sinais de origem desconhecida enquanto\ntransmitindo sinais de propósito desconhecido.",
        "zh-tw": "當它在天空中疾馳時，這只神奇寶貝似乎\n接收到來歷不明的信號\n傳輸目的不明的信號。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Thunder Blast",
                "fr": "Explosion de tonnerre",
                "es": "Explosión de trueno",
                "it": "Esplosione di tuono",
                "de": "Donnerschlag",
                "pt-br": "Explosão de trovão",
                "zh-tw": "雷霆衝擊"
            },
            damage: 110,
            cost: ["Lightning", "Colorless", "Colorless"],
            effect: {
                en: "Discard a {L} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {L} de ce Pokémon.",
                "es": "Descarta una {L} Energía de este Pokémon.",
                "it": "Scarta un'Energia {L} da questo Pokémon.",
                "de": "Wirf eine {L} Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {L} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {L} 能量。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
