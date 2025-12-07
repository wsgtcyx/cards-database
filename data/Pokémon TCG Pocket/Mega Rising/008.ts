import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Seedot",
        "fr": "point de graine",
        "es": "Sedot",
        "it": "Seedot",
        "de": "Seedot",
        "pt-br": "Seedot",
        "zh-tw": "種子點"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "It attaches itself to a tree branch using the top of\nits head. Strong winds can sometimes make it fall.",
        "fr": "Il s'attache à une branche d'arbre en utilisant le sommet de\nsa tête. Des vents violents peuvent parfois le faire tomber.",
        "es": "Se adhiere a la rama de un árbol usando la parte superior de\nsu cabeza. A veces, los fuertes vientos pueden provocar su caída.",
        "it": "Si attacca al ramo di un albero utilizzando la parte superiore\nla sua testa. I forti venti a volte possono farlo cadere.",
        "de": "Es befestigt sich mit der Spitze an einem Ast\nsein Kopf. Starke Winde können manchmal zum Absturz führen.",
        "pt-br": "Ele se prende a um galho de árvore usando a parte superior\nsua cabeça. Ventos fortes às vezes podem fazê-lo cair.",
        "zh-tw": "它利用頂部將自己附著在樹枝上\n它的頭。強風有時會使其掉落。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rollout",
                "fr": "Dérouler",
                "es": "Lanzamiento",
                "it": "Lancio",
                "de": "Ausrollen",
                "pt-br": "Sair da cama",
                "zh-tw": "推出"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
