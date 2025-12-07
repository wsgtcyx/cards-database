import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Liepard",
        "fr": "Liépard",
        "es": "Liepardo",
        "it": "Liepard",
        "de": "Liepard",
        "pt-br": "Liepard",
        "zh-tw": "酷豹",
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Purrloin",
        "fr": "Pourrondi",
        "es": "ronroneo",
        "it": "Purrloin",
        "de": "Schnurren",
        "pt-br": "Purrloin",
        "zh-tw": "扒手貓",
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
                en: "Slashing Claw",
                "fr": "Griffe tranchante",
                "es": "Garra cortante",
                "it": "Artiglio Tagliente",
                "de": "Schlagklaue",
                "pt-br": "Garra Cortante",
                "zh-tw": "斬擊利爪"
            },
            damage: 70,
            cost: ["Darkness", "Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
