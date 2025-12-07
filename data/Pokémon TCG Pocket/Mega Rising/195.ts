import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Spinda",
        "fr": "Spinda",
        "es": "Spinda",
        "it": "Spinda",
        "de": "Spinda",
        "pt-br": "Spinda",
        "zh-tw": "晃晃斑",
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    description: {
        en: "Each Spinda's spot pattern is different. With its\nstumbling movements, it evades opponents'\nattacks brilliantly!",
        "fr": "Le motif de taches de chaque Spinda est différent. Avec son\nmouvements trébuchants, il échappe aux adversaires\nattaque avec brio !",
        "es": "El patrón de manchas de cada Spinda es diferente. con su\nmovimientos de tropiezo, evade los ataques de los oponentes.\nataca brillantemente!",
        "it": "Il modello di spot di ogni Spinda è diverso. Con il suo\nmovimenti incerti, elude gli avversari\nattacca brillantemente!",
        "de": "Das Fleckenmuster jedes Spindas ist anders. Mit seinem\nstolpernde Bewegungen, es weicht den Gegnern aus\ngreift brillant an!",
        "pt-br": "O padrão de pontos de cada Spinda é diferente. Com seu\nmovimentos cambaleantes, ele evita os adversários\nataca brilhantemente!",
        "zh-tw": "每個 Spinda 的斑點圖案都不同。以其\n動作跌跌撞撞，躲避對手\n攻擊華麗！"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dizzying Headbutt",
                "fr": "Coup de tête vertigineux",
                "es": "Cabezazo vertiginoso",
                "it": "Testata vertiginosa",
                "de": "Schwindelerregender Kopfstoß",
                "pt-br": "Cabeçada vertiginosa",
                "zh-tw": "令人眼花繚亂的頭撞"
            },
            damage: 30,
            cost: ["Colorless"],
            effect: {
                en: "Both Active Pokémon are now Confused.",
                "fr": "Les deux Pokémon Actifs sont désormais Confus.",
                "es": "Ambos Pokémon Activos ahora están Confundidos.",
                "it": "Entrambi i Pokémon attivi sono ora confusi.",
                "de": "Beide aktiven Pokémon sind jetzt verwirrt.",
                "pt-br": "Ambos os Pokémon ativos agora estão confusos.",
                "zh-tw": "兩隻活躍的神奇寶貝現在都處於混亂狀態。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
