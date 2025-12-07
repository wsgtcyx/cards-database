import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Nuzleaf",
        "fr": "Feuille de Nuz",
        "es": "Nuzleaf",
        "it": "Nuzleaf",
        "de": "Nuzleaf",
        "pt-br": "Nuzleaf",
        "zh-tw": "鼻葉"
    },
    illustrator: "Hajime Kusajima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Seedot",
        "fr": "point de graine",
        "es": "Sedot",
        "it": "Seedot",
        "de": "Seedot",
        "pt-br": "Seedot",
        "zh-tw": "種子點"
    },
    description: {
        en: "They live in holes bored in large trees. The sound\nof Nuzleaf's grass flute fills listeners with dread.",
        "fr": "Ils vivent dans des trous creusés dans les grands arbres. Le son\nde la flûte d'herbe de Nuzleaf remplit les auditeurs d'effroi.",
        "es": "Viven en agujeros perforados en árboles grandes. el sonido\nde la flauta de hierba de Nuzleaf llena de pavor a los oyentes.",
        "it": "Vivono in buche scavate in grandi alberi. Il suono\ndel flauto d'erba di Nuzleaf riempie gli ascoltatori di terrore.",
        "de": "Sie leben in Löchern, die in große Bäume gebohrt sind. Der Klang\nvon Nuzleafs Grasflöte erfüllt die Zuhörer mit Grauen.",
        "pt-br": "Eles vivem em buracos escavados em árvores de grande porte. O som\nda flauta de grama de Nuzleaf enche os ouvintes de pavor.",
        "zh-tw": "它們住在大樹上鑽的洞裡。聲音\nNuzleaf 的草笛曲讓聽眾充滿恐懼。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gentle Slap",
                "fr": "Gifle douce",
                "es": "Bofetada suave",
                "it": "Schiaffo gentile",
                "de": "Sanfter Schlag",
                "pt-br": "Tapa suave",
                "zh-tw": "輕輕一巴掌"
            },
            damage: 40,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
