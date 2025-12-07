import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Skrelp",
        "fr": "Skrelp",
        "es": "Skrelp",
        "it": "Skrelp",
        "de": "Skrelp",
        "pt-br": "Skrelp",
        "zh-tw": "垃垃藻",
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Darkness"],
    description: {
        en: "Skrelp evades its enemies by hiding amid\ndrifting seaweed. It eats rotten seaweed to\ncreate its poison.",
        "fr": "Skrelp échappe à ses ennemis en se cachant au milieu\nalgues dérivantes. Il mange des algues pourries pour\ncréer son poison.",
        "es": "Skrelp evade a sus enemigos escondiéndose entre\nalgas a la deriva. Come algas podridas para\ncrear su veneno.",
        "it": "Skrelp sfugge ai suoi nemici nascondendosi in mezzo\nalghe alla deriva. Mangia alghe marce\ncreare il suo veleno.",
        "de": "Skrelp entkommt seinen Feinden, indem er sich inmitten versteckt\ntreibende Algen. Es frisst faule Algen\nerschaffe sein Gift.",
        "pt-br": "Skrelp foge de seus inimigos escondendo-se em meio\nalgas marinhas à deriva. Ele come algas podres para\ncriar seu veneno.",
        "zh-tw": "Skrelp 通過隱藏在其中來躲避敵人\n漂流的海藻。牠吃腐爛的海藻\n創造其毒。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Melt",
                "fr": "Fondre",
                "es": "Derretir",
                "it": "Sciolto",
                "de": "Schmelzen",
                "pt-br": "Derretido",
                "zh-tw": "熔化"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
