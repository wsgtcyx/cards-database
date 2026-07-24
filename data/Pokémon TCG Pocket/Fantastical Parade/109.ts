import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/109"
    },
    name: {
        en: "Guzzlord",
        "fr": "Seigneur des gourmandises",
        "es": "Señor devorador",
        "it": "Guzzlord",
        "de": "Guzzlord",
        "pt-br": "Guzzlord",
        "zh-tw": "古茲領主"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    description: {
        en: "An unknown life-form called a UB. It may be\nconstantly hungry—it is certainly always\ndevouring something.",
        "fr": "Une forme de vie inconnue appelée UB. C'est peut-être\nconstamment faim - c'est certainement toujours\ndévorer quelque chose.",
        "es": "Una forma de vida desconocida llamada UB. puede ser\nconstantemente hambriento; ciertamente, siempre hay\ndevorando algo.",
        "it": "Una forma di vita sconosciuta chiamata UB. Potrebbe essere\ncostantemente affamato: certamente lo è sempre\ndivorando qualcosa.",
        "de": "Eine unbekannte Lebensform namens UB. Es kann sein\nständig hungrig – auf jeden Fall ist es immer so\netwas verschlingen.",
        "pt-br": "Uma forma de vida desconhecida chamada UB. Pode ser\nconstantemente com fome - certamente está sempre\ndevorando alguma coisa.",
        "zh-tw": "一種名為 UB 的未知生命體。可能是\n不斷飢餓——當然總是\n吞噬某物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Breakcore",
                "fr": "Breakcore",
                "es": "Breakcore",
                "it": "Breakcore",
                "de": "Breakcore",
                "pt-br": "Breakcore",
                "zh-tw": "突破核心"
            },
            cost: ["Darkness", "Darkness", "Darkness", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, discard your opponent's Active Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, défaussez le Pokémon Actif de votre adversaire.",
                "es": "Lanza una moneda. Si sale cara, descarta el Pokémon Activo de tu rival.",
                "it": "Lancia una moneta. Se esce testa, scarta il Pokémon attivo del tuo avversario.",
                "de": "Wirf eine Münze. Bei „Kopf“ lege das Aktive Pokémon deines Gegners ab.",
                "pt-br": "Jogue uma moeda. Se der cara, descarte o Pokémon Ativo do seu oponente.",
                "zh-tw": "拋一枚硬幣。如果出現正面，則丟棄對手的活躍神奇寶貝。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 4
};
export default card;
