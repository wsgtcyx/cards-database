import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/197",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/197",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/197",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/197",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/197",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/197"
    },
    name: {
        en: "Mega Swampert ex",
        "fr": "Méga Swampert ex",
        "es": "Mega Swampert ex",
        "it": "Mega Swampert ex",
        "de": "Mega Swampert ex",
        "pt-br": "Ex de Mega Swampert",
        "zh-tw": "巨型沼澤前"
    },
    illustrator: "nagimiso",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 230,
    types: ["Water"],
    evolveFrom: {
        en: "Marshtomp",
        "fr": "Marais",
        "es": "Marshtomp",
        "it": "Marshtomp",
        "de": "Marshtomp",
        "pt-br": "Marshtomp",
        "zh-tw": "馬什托姆普"
    },
    description: {
        en: "Its arms are hard as rock. With one swing, it can\nbreak an enormous boulder into pieces.",
        "fr": "Ses bras sont durs comme de la pierre. D'un seul coup, il peut\nbriser un énorme rocher en morceaux.",
        "es": "Sus brazos son duros como una roca. Con un solo movimiento, puede\nromper en pedazos una enorme roca.",
        "it": "Le sue braccia sono dure come la roccia. Con un solo colpo è possibile\nfare a pezzi un enorme masso.",
        "de": "Seine Arme sind steinhart. Mit einem Schwung gelingt es\nZerbrich einen riesigen Felsbrocken in Stücke.",
        "pt-br": "Seus braços são duros como pedra. Com um golpe, ele pode\nquebrar uma pedra enorme em pedaços.",
        "zh-tw": "它的手臂堅硬如岩石。只需一揮，就可以\n將一塊巨大的巨石打碎。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Strong-Armed Destroyer",
                "fr": "Destructeur armé",
                "es": "Destructor armado fuerte",
                "it": "Distruttore dalle armi potenti",
                "de": "Stark bewaffneter Zerstörer",
                "pt-br": "Destruidor de Armas Fortes",
                "zh-tw": "強力毀滅者"
            },
            damage: 150,
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "Discard 2 random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                "fr": "Défaussez 2 Énergies aléatoires parmi les Énergies attachées à tous les Pokémon (les vôtres et ceux de votre adversaire).",
                "es": "Descarta 2 Energías aleatorias de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).",
                "it": "Scarta 2 Energie casuali tra quelle assegnate a tutti i Pokémon (sia i tuoi che quelli del tuo avversario).",
                "de": "Lege 2 zufällige Energien von der Energie ab, die an alle Pokémon (dein und die deines Gegners) angelegt ist.",
                "pt-br": "Descarte 2 Energias aleatórias dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從所有神奇寶貝（你的和對手的）所附加的能量中隨機丟棄 2 個能量。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
