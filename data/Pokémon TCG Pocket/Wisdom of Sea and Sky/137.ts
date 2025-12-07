import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Porygon-Z",
        "fr": "Porygon-Z",
        "es": "Porygon-Z",
        "it": "Porygon-Z",
        "de": "Porygon-Z",
        "pt-br": "Porygon-Z",
        "zh-tw": "多邊形-Z"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Colorless"],
    evolveFrom: {
        en: "Porygon2",
        "fr": "Porygon2",
        "es": "Porygon2",
        "it": "Porygon2",
        "de": "Porygon2",
        "pt-br": "Porygon2",
        "zh-tw": "多邊形2"
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
                en: "Slowing Beam",
                "fr": "Faisceau ralentissant",
                "es": "Haz de desaceleración",
                "it": "Fascio rallentante",
                "de": "Verlangsamender Strahl",
                "pt-br": "Feixe lento",
                "zh-tw": "減速光束"
            },
            damage: 70,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more.",
                "fr": "Lors du prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur coûtent 1 {C} de plus.",
                "es": "Durante el próximo turno de tu rival, los ataques utilizados por el Pokémon Defensor cuestan 1 {C} más.",
                "it": "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore costano 1 {C} in più.",
                "de": "Während des nächsten Zuges deines Gegners kosten Angriffe des verteidigenden Pokémon 1 {C} mehr.",
                "pt-br": "Durante o próximo turno do seu oponente, os ataques usados ​​pelo Pokémon Defensor custarão 1 {C} a mais.",
                "zh-tw": "在對手的下一個回合中，防御神奇寶貝使用的攻擊額外花費 1 {C} 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
