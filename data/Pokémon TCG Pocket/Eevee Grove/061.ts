import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Audino",
        "fr": "Audino",
        "es": "Audino",
        "it": "Audino",
        "de": "Audino",
        "pt-br": "Audino",
        "zh-tw": "奧迪諾"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    description: {
        en: "This Pokémon has a kind heart. By touching with its feelers,\nAudino can gauge other creatures' feelings and physical conditions.",
        "fr": "Ce Pokémon a un bon cœur. En touchant avec ses palpeurs,\nAudino peut évaluer les sentiments et les conditions physiques des autres créatures.",
        "es": "Este Pokémon tiene un corazón bondadoso. Al tocar con sus antenas,\nAudino puede medir los sentimientos y las condiciones físicas de otras criaturas.",
        "it": "Questo Pokémon ha un cuore gentile. Toccando con le sue antenne,\nAudino può valutare i sentimenti e le condizioni fisiche delle altre creature.",
        "de": "Dieses Pokémon hat ein freundliches Herz. Durch das Berühren mit seinen Fühlern,\nAudino kann die Gefühle und den körperlichen Zustand anderer Lebewesen einschätzen.",
        "pt-br": "Este Pokémon tem um coração bondoso. Ao tocar com seus sensores,\nAudino pode avaliar os sentimentos e condições físicas de outras criaturas.",
        "zh-tw": "這只神奇寶貝有一顆善良的心。通過用觸角觸碰，\n奧迪諾可以測量其他生物的感受和身體狀況。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Do the Wave",
                "fr": "Faites la vague",
                "es": "hacer la ola",
                "it": "Fai l'Onda",
                "de": "Mach die Welle",
                "pt-br": "Faça a onda",
                "zh-tw": "做波浪"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 damage for each of your Benched Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc.",
                "es": "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge 20 danni per ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt jedem Pokémon auf deiner Bank 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊對你的每隻後備神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
