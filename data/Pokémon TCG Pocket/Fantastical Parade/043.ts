import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/043",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/043",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/043",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/043",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/043",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/043",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/043"
    },
    name: {
        en: "Chewtle",
        "fr": "Khélocrok",
        "es": "Chewtle",
        "it": "Chewtle",
        "de": "Kamehaps",
        "pt-br": "Chewtle",
        "zh-tw": "咬咬龜"
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
