import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pansear",
        "fr": "Panséar",
        "es": "Pansear",
        "it": "Pansear",
        "de": "Pansear",
        "pt-br": "Pansear",
        "zh-tw": "爆香猴",
    },
    illustrator: "Jerky",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "This Pokémon lives in caves in volcanoes.\nThe fire within the tuft on its head can reach\n600 degrees Fahrenheit.",
        "fr": "Ce Pokémon vit dans les grottes des volcans.\nLe feu dans la touffe sur sa tête peut atteindre\n600 degrés Fahrenheit.",
        "es": "Este Pokémon vive en cuevas de volcanes.\nEl fuego dentro del mechón de su cabeza puede alcanzar\n600 grados Fahrenheit.",
        "it": "Questo Pokémon vive nelle caverne dei vulcani.\nIl fuoco all'interno del ciuffo sulla sua testa può raggiungere\n600 gradi Fahrenheit.",
        "de": "Dieses Pokémon lebt in Höhlen in Vulkanen.\nDas Feuer im Büschel auf seinem Kopf kann reichen\n600 Grad Fahrenheit.",
        "pt-br": "Este Pokémon vive em cavernas de vulcões.\nO fogo dentro do tufo em sua cabeça pode atingir\n600 graus Fahrenheit.",
        "zh-tw": "這只神奇寶貝生活在火山的洞穴中。\n其頭上毛簇內的火焰可達到\n600 華氏度。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat",
                "fr": "Battre",
                "es": "Derrotar",
                "it": "Colpo",
                "de": "Schlagen",
                "pt-br": "Bater",
                "zh-tw": "打"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
