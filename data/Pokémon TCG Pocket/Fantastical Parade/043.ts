import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/043"
    },
    name: {
        en: "Chewtle",
        "fr": "Mâcher",
        "es": "masticar",
        "it": "Masticare",
        "de": "Chewtle",
        "pt-br": "Mastigar",
        "zh-tw": "咀嚼"
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    description: {
        en: "A popular game among children is to lift up sticks\nthat Chewtle have bitten onto to see whose\nChewtle can hang on the longest.",
        "fr": "Un jeu populaire parmi les enfants consiste à soulever des bâtons\nque Chewtle a mordu pour voir à qui appartient\nChewtle peut tenir le plus longtemps.",
        "es": "Un juego popular entre los niños es levantar palos.\nque Chewtle ha mordido para ver de quién\nChewtle puede aguantar más tiempo.",
        "it": "Un gioco popolare tra i bambini è sollevare dei bastoncini\na cui Chewtle ha addentato per vedere di chi\nChewtle può resistere più a lungo.",
        "de": "Ein beliebtes Spiel bei Kindern ist das Hochheben von Stöcken\ndass Chewtle gebissen hat, um zu sehen, wessen\nChewtle kann am längsten durchhalten.",
        "pt-br": "Uma brincadeira popular entre as crianças é levantar gravetos\nque Chewtle mordeu para ver de quem\nChewtle pode aguentar por mais tempo.",
        "zh-tw": "孩子們流行的遊戲是舉起棍子\nChewtle已經咬住了，看看是誰的\nChewtle 可以堅持最長的時間。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 50,
            cost: ["Colorless", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
