import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Dusknoir",
        "fr": "Crépuscule",
        "es": "anochecer",
        "it": "Dusknoir",
        "de": "Dusknoir",
        "pt-br": "Anoitecer",
        "zh-tw": "夜黑魔人",
    },
    illustrator: "nagimiso",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Psychic"],
    evolveFrom: {
        en: "Dusclops",
        "fr": "Dusclops",
        "es": "Dusclops",
        "it": "Dusclops",
        "de": "Dusclops",
        "pt-br": "Dusclops",
        "zh-tw": "杜克洛普斯"
    },
    description: {
        en: "With the mouth on its belly, Dusknoir swallows its\ntarget whole. The soul is the only thing eaten—\nDusknoir disgorges the body before departing.",
        "fr": "La bouche sur le ventre, Dusknoir avale son\ncibler l'ensemble. L'âme est la seule chose mangée—\nDusknoir dégorge le corps avant de partir.",
        "es": "Con la boca sobre su vientre, Dusknoir se traga su\nobjetivo completo. El alma es lo único que se come.\nDusknoir arroja el cuerpo antes de partir.",
        "it": "Con la bocca sulla pancia, Dusknoir lo ingoia\nobiettivo intero. L'anima è l'unica cosa che si mangia—\nDusknoir vomita il corpo prima di partire.",
        "de": "Mit dem Mund auf dem Bauch schluckt Dusknoir es\nZiel ganz. Die Seele ist das Einzige, was gegessen wird –\nDusknoir spuckt den Körper aus, bevor er geht.",
        "pt-br": "Com a boca na barriga, Dusknoir engole\nalvo inteiro. A alma é a única coisa comida -\nDusknoir despeja o corpo antes de partir.",
        "zh-tw": "黑夜將嘴放在腹部，將其吞下\n目標整體。靈魂是唯一被吃掉的東西——\n暮色在離開前吐出了屍體。"
    },
    stage: "Stage2",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fade into Darkness",
                "fr": "Fondu dans les ténèbres",
                "es": "Desvanecerse en la oscuridad",
                "it": "Dissolvenza nell'oscurità",
                "de": "In die Dunkelheit verblassen",
                "pt-br": "Desaparecer na escuridão",
                "zh-tw": "漸入黑暗"
            },
            effect: {
                en: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't get any points for it.",
                "fr": "Lorsque ce Pokémon est mis KO, lancez une pièce. Si c'est face, votre adversaire ne peut obtenir aucun point.",
                "es": "Cuando este Pokémon quede fuera de combate, lanza una moneda. Si sale cara, tu oponente no podrá obtener ningún punto por ello.",
                "it": "Quando questo Pokémon viene messo KO, lancia una moneta. Se esce testa, il tuo avversario non potrà ottenere alcun punto.",
                "de": "Wenn dieses Pokémon kampfunfähig ist, wirf eine Münze. Bei „Kopf“ kann Ihr Gegner dafür keine Punkte bekommen.",
                "pt-br": "Quando este Pokémon for nocauteado, jogue uma moeda. Se der cara, seu oponente não poderá ganhar nenhum ponto por isso.",
                "zh-tw": "當這只神奇寶貝被擊倒時，擲硬幣。如果出現正面，您的對手將無法獲得任何分數。"
            }
        }],
    attacks: [{
            name: {
                en: "Hammer In",
                "fr": "Marteler",
                "es": "Martillo adentro",
                "it": "Martella dentro",
                "de": "Einschlagen",
                "pt-br": "Martelo",
                "zh-tw": "錘入"
            },
            damage: 80,
            cost: ["Psychic", "Colorless"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
