import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Chewtle",
        "fr": "Mâcher",
        "es": "masticar",
        "it": "Masticare",
        "de": "Chewtle",
        "pt-br": "Mastigar",
        "zh-tw": "咀嚼"
    },
    illustrator: "Nurikabe",
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
                en: "Wave Splash",
                "fr": "Éclaboussure de vague",
                "es": "Salpicadura de onda",
                "it": "Spruzzo dell'onda",
                "de": "Wellenspritzer",
                "pt-br": "Respingo de onda",
                "zh-tw": "波浪飛濺"
            },
            damage: 40,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
