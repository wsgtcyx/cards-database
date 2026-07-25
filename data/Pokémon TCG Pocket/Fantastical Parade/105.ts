import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/105",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/105",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/105",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/105",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/105"
    },
    name: {
        en: "Liepard",
        "fr": "Liépard",
        "es": "Liepardo",
        "it": "Liepard",
        "de": "Liepard",
        "pt-br": "Liepard",
        "zh-tw": "利帕德"
    },
    illustrator: "sui",
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
        "zh-tw": "珀朗"
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
                en: "Fasten Claws",
                "fr": "Attacher les griffes",
                "es": "Sujetar las garras",
                "it": "Fissare gli artigli",
                "de": "Krallen befestigen",
                "pt-br": "Aperte as garras",
                "zh-tw": "扣緊爪子"
            },
            damage: 30,
            cost: ["Darkness"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
