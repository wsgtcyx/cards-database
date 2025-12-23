import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Porygon-Z",
        "fr": "Porygon-Z",
        "es": "Porygon-Z",
        "it": "Porygon-Z",
        "de": "Porygon-Z",
        "pt-br": "Porygon-Z",
        "zh-tw": "多邊獸Z"
    },
    illustrator: "Shibuzoh.",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    evolveFrom: {
        en: "Porygon2",
        "fr": "Porygon2",
        "es": "Porygon2",
        "it": "Porygon2",
        "de": "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊獸II"
    },
    description: {
        en: "Porygon-Z had a program installed to allow it to\nmove between dimensions, but the program also\ncaused instability in Porygon-Z's behavior.",
        "fr": "Porygon-Z avait un programme installé pour lui permettre de\nse déplacer entre les dimensions, mais le programme aussi\na provoqué une instabilité dans le comportement de Porygon-Z.",
        "es": "Porygon-Z tenía un programa instalado que le permitía\nmoverse entre dimensiones, pero el programa también\ncausó inestabilidad en el comportamiento de Porygon-Z.",
        "it": "Porygon-Z aveva un programma installato che glielo permetteva\nspostarsi tra le dimensioni, ma anche il programma\nha causato instabilità nel comportamento di Porygon-Z.",
        "de": "Porygon-Z hatte ein Programm installiert, um dies zu ermöglichen\nBewegen Sie sich zwischen den Dimensionen, aber auch das Programm\nverursachte Instabilität im Verhalten von Porygon-Z.",
        "pt-br": "Porygon-Z tinha um programa instalado para permitir\nmover-se entre dimensões, mas o programa também\ncausou instabilidade no comportamento de Porygon-Z.",
        "zh-tw": "Porygon-Z 安裝了一個程序，允許它\n在維度之間移動，但程序也\n導致 Porygon-Z 行為不穩定。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Cyberjack",
                "fr": "Cyberjack",
                "es": "ciberjack",
                "it": "Cyberjack",
                "de": "Cyberjack",
                "pt-br": "Cyberjack",
                "zh-tw": "網絡劫持"
            },
            damage: 20,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each Trainer card in your opponent's deck.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Dresseur du deck de votre adversaire.",
                "es": "Este ataque hace 20 daños más por cada carta de Entrenador en el mazo de tu oponente.",
                "it": "Questo attacco infligge 20 danni in più per ogni carta Allenatore nel mazzo del tuo avversario.",
                "de": "Dieser Angriff verursacht 20 weitere Schadenspunkte für jede Trainerkarte im Deck deines Gegners.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada carta de Treinador no baralho do seu oponente.",
                "zh-tw": "此攻擊對對手牌組中的每張訓練家卡造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
