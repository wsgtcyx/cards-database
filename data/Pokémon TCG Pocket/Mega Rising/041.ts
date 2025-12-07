import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Litwick",
        "fr": "Litwick",
        "es": "litwick",
        "it": "Litwick",
        "de": "Litwick",
        "pt-br": "Litwick",
        "zh-tw": "利特威克"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Fire"],
    description: {
        en: "The younger the life this Pokémon absorbs,\nthe brighter and eerier the flame on its\nhead burns.",
        "fr": "Plus la vie que ce Pokémon absorbe est jeune,\nplus la flamme sur son corps est brillante et étrange\ndes brûlures à la tête.",
        "es": "Cuanto más joven es la vida que absorbe este Pokémon,\ncuanto más brillante y misteriosa es la llama en su\nquemaduras en la cabeza.",
        "it": "Più giovane è la vita che questo Pokémon assorbe,\npiù luminosa e inquietante è la fiamma su di esso\nustioni alla testa.",
        "de": "Je jünger das Leben ist, das dieses Pokémon aufnimmt,\ndesto heller und unheimlicher ist die Flamme darauf\nKopf brennt.",
        "pt-br": "Quanto mais jovem for a vida que este Pokémon absorve,\nmais brilhante e misteriosa a chama em seu\nqueimaduras na cabeça.",
        "zh-tw": "該寶可夢吸收的生命越年輕，\n其上的火焰越亮越詭異\n頭燒傷。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flare",
                "fr": "Éclater",
                "es": "Llamarada",
                "it": "Bagliore",
                "de": "Fackel",
                "pt-br": "Sinalizador",
                "zh-tw": "耀斑"
            },
            damage: 20,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
