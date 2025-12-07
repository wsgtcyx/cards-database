import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Sandslash",
        "fr": "Tranche de sable",
        "es": "barra de arena",
        "it": "Sandslash",
        "de": "Sandhieb",
        "pt-br": "Barra de areia",
        "zh-tw": "穿山王",
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Sandshrew",
        "fr": "Musaraigne des sables",
        "es": "Sandshrew",
        "it": "Sandshrew",
        "de": "Sandspitzmaus",
        "pt-br": "Sandshrew",
        "zh-tw": "山鼠"
    },
    description: {
        en: "It climbs trees by hooking on with its sharp claws.\nSandslash shares the berries it gathers, dropping\nthem down to Sandshrew waiting below the tree.",
        "fr": "Il grimpe aux arbres en s'accrochant avec ses griffes acérées.\nSandslash partage les baies qu'il cueille, les laissant tomber\ndescendez-les à Sandshrew qui les attend sous l'arbre.",
        "es": "Trepa a los árboles enganchándose con sus afiladas garras.\nSandslash comparte las bayas que recoge y las deja caer.\nellos hasta Sandshrew esperando debajo del árbol.",
        "it": "Si arrampica sugli alberi agganciandosi con i suoi artigli affilati.\nSandslash condivide le bacche che raccoglie, lasciandole cadere\nli scesero a Sandshrew aspettando sotto l'albero.",
        "de": "Es klettert auf Bäume, indem es sich mit seinen scharfen Krallen daran festhält.\nSandslash teilt die Beeren, die er sammelt, und lässt sie fallen\nsie hinunter zu Sandshrew, der unter dem Baum wartete.",
        "pt-br": "Ele sobe em árvores prendendo-se com suas garras afiadas.\nSandslash compartilha as frutas que coleta, deixando cair\neles até Sandshrew esperando embaixo da árvore.",
        "zh-tw": "它通過用鋒利的爪子鉤住樹木來爬樹。\nSandslash 分享它收集的漿果，掉落\n他們來到樹下等候的山鼠那裡。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Cut",
                "fr": "Couper",
                "es": "Cortar",
                "it": "Taglio",
                "de": "Schneiden",
                "pt-br": "Corte",
                "zh-tw": "切"
            },
            damage: 50,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
