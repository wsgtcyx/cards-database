import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Luxray",
        "fr": "Luxray",
        "es": "luxray",
        "it": "Luxray",
        "de": "Luxray",
        "pt-br": "Luxray",
        "zh-tw": "倫琴貓",
    },
    illustrator: "GIDORA",
    rarity: "One Star",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    evolveFrom: {
        en: "Luxio",
        "fr": "Luxio",
        "es": "lucio",
        "it": "Luxio",
        "de": "Luxio",
        "pt-br": "Luxo",
        "zh-tw": "盧西奧"
    },
    description: {
        en: "Luxray's ability to see through objects comes in\nhandy when it's scouting for danger.",
        "fr": "La capacité de Luxray à voir à travers les objets entre en jeu\npratique lorsqu'il recherche un danger.",
        "es": "La capacidad de Luxray para ver a través de objetos entra en juego\nÚtil cuando busca peligro.",
        "it": "Entra in gioco la capacità di Luxray di vedere attraverso gli oggetti\nutile quando cerca il pericolo.",
        "de": "Luxrays Fähigkeit, durch Objekte zu sehen, kommt zum Tragen\npraktisch, wenn es darum geht, nach Gefahren Ausschau zu halten.",
        "pt-br": "A capacidade do Luxray de ver através dos objetos entra em ação\nútil quando está procurando perigo.",
        "zh-tw": "Luxray 具有透視物體的能力\n當它偵察危險時很方便。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Flash Impact",
                "fr": "Impact éclair",
                "es": "Impacto relámpago",
                "it": "Impatto flash",
                "de": "Blitzeinschlag",
                "pt-br": "Impacto Flash",
                "zh-tw": "閃光衝擊"
            },
            damage: 110,
            cost: ["Lightning", "Colorless"],
            effect: {
                en: "This attack also does 20 damage to 1 of your Benched Pokémon.",
                "fr": "Cette attaque inflige également 20 dégâts à 1 de vos Pokémon de Banc.",
                "es": "Este ataque también hace 20 daños a 1 de tus Pokémon en Banca.",
                "it": "Questo attacco infligge anche 20 danni a 1 dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt außerdem 1 deiner Bank-Pokémon 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 de dano a 1 dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你後備的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 0
};
export default card;
