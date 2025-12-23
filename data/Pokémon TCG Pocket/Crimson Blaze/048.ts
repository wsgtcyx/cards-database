import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Liepard",
        "fr": "Léopardus",
        "es": "Liepard",
        "it": "Liepard",
        "de": "Kleoparda",
        "pt-br": "Liepard",
        "zh-tw": "酷豹"
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Purrloin",
        "fr": "Chacripan",
        "es": "Purrloin",
        "it": "Purrloin",
        "de": "Felilou",
        "pt-br": "Purrloin",
        "zh-tw": "扒手貓"
    },
    description: {
        en: "Don't be fooled by its gorgeous fur and elegant\nfigure. This is a moody and vicious Pokémon.",
        "fr": "Ne vous laissez pas berner par sa magnifique fourrure et son élégance\nchiffre. C'est un Pokémon maussade et vicieux.",
        "es": "No te dejes engañar por su precioso pelaje y su elegante\nfigura. Este es un Pokémon malhumorado y vicioso.",
        "it": "Non lasciarti ingannare dalla sua pelliccia splendida ed elegante\nfigura. Questo è un Pokémon lunatico e feroce.",
        "de": "Lassen Sie sich nicht von seinem wunderschönen Fell und seiner Eleganz täuschen\nFigur. Dies ist ein launisches und bösartiges Pokémon.",
        "pt-br": "Não se deixe enganar pelo seu pelo lindo e elegante\nfigura. Este é um Pokémon temperamental e cruel.",
        "zh-tw": "不要被它華麗的皮毛和優雅所迷惑\n圖。這是一隻喜怒無常且兇​​惡的神奇寶貝。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Snatch and Flee",
                "fr": "Arracher et fuir",
                "es": "Arrebatar y huir",
                "it": "Ruba e fuggi",
                "de": "Schnappen und fliehen",
                "pt-br": "Arrebatar e Fugir",
                "zh-tw": "搶奪與逃跑"
            },
            damage: 60,
            cost: ["Darkness"],
            effect: {
                en: "Your opponent reveals a random card from their hand and shuffles it into their deck. Shuffle this Pokémon into your deck.",
                "fr": "Votre adversaire révèle une carte aléatoire de sa main et la mélange dans son deck. Mélangez ce Pokémon dans votre deck.",
                "es": "Tu oponente revela una carta aleatoria de su mano y la baraja en su mazo. Mezcla este Pokémon en tu mazo.",
                "it": "Il tuo avversario rivela una carta casuale dalla sua mano e la mescola nel suo mazzo. Rimischia questo Pokémon nel tuo mazzo.",
                "de": "Dein Gegner deckt eine zufällige Karte aus seiner Hand auf und mischt sie in sein Deck. Mische dieses Pokémon in dein Deck.",
                "pt-br": "Seu oponente revela uma carta aleatória de sua mão e a embaralha em seu baralho. Embaralhe este Pokémon no seu baralho.",
                "zh-tw": "你的對手從手中隨機展示一張牌並將其洗入牌庫。將這只神奇寶貝洗入你的牌庫。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
