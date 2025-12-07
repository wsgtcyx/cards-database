import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Chandelure",
        "fr": "Lustre",
        "es": "candelabro",
        "it": "Lampadario",
        "de": "Kronleuchter",
        "pt-br": "Lustre",
        "zh-tw": "枝形吊燈"
    },
    illustrator: "REND",
    rarity: "One Star",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    evolveFrom: {
        en: "Lampent",
        "fr": "Lampe",
        "es": "lámpara",
        "it": "Lampada",
        "de": "Lampent",
        "pt-br": "Lampente",
        "zh-tw": "燈籠"
    },
    description: {
        en: "In homes illuminated by Chandelure instead of\nlights, funerals were a constant occurrence—\nor so it's said.",
        "fr": "Dans les maisons éclairées par Chandelure au lieu de\nlumières, les funérailles étaient un événement constant -\nou c'est ce qu'on dit.",
        "es": "En hogares iluminados por Chandelure en lugar de\nluces, los funerales eran una ocurrencia constante—\no eso se dice.",
        "it": "Nelle case illuminate da Chandelure invece\nluci, i funerali erano un evento costante...\no almeno così si dice.",
        "de": "In Häusern wird die Beleuchtung durch Kronleuchter ersetzt\nLichter, Beerdigungen waren an der Tagesordnung –\nso heißt es zumindest.",
        "pt-br": "Em casas iluminadas por Chandelure em vez de\nluzes, funerais eram uma ocorrência constante -\nou assim é dito.",
        "zh-tw": "在被枝形吊燈照亮的家中，而不是\n燈光、葬禮時常發生——\n至少是這麼說的。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Slow Sear",
                "fr": "Saisir lentement",
                "es": "Dorar lento",
                "it": "Lenta cottura",
                "de": "Langsam anbraten",
                "pt-br": "Sear Lento",
                "zh-tw": "慢烤"
            },
            effect: {
                en: "Once during your turn, you may discard the top card of your opponent's deck.",
                "fr": "Une fois pendant votre tour, vous pouvez défausser la carte du dessus du deck de votre adversaire.",
                "es": "Una vez durante tu turno, puedes descartar la carta superior del mazo de tu oponente.",
                "it": "Una sola volta durante il tuo turno, puoi scartare la prima carta del mazzo del tuo avversario.",
                "de": "Einmal während deines Zuges darfst du die oberste Karte des Decks deines Gegners abwerfen.",
                "pt-br": "Uma vez durante o seu turno, você pode descartar a carta do topo do baralho do seu oponente.",
                "zh-tw": "在你的回合中，你可以丟棄對手牌組頂牌一次。"
            }
        }],
    attacks: [{
            name: {
                en: "Heat Blast",
                "fr": "Coup de chaleur",
                "es": "Explosión de calor",
                "it": "Colpo di calore",
                "de": "Hitzestoß",
                "pt-br": "Explosão de calor",
                "zh-tw": "熱風"
            },
            damage: 80,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
