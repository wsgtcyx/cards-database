import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Torkoal",
        "fr": "Torkoal",
        "es": "Torkoal",
        "it": "Torkoal",
        "de": "Torkoal",
        "pt-br": "Torkoal",
        "zh-tw": "托爾科阿爾"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fire"],
    description: {
        en: "It burns coal inside its shell for energy. It blows\nout black soot if it is endangered.",
        "fr": "Il brûle du charbon à l’intérieur de sa coquille pour produire de l’énergie. Ça souffle\nla suie noire si elle est en danger.",
        "es": "Quema carbón dentro de su caparazón para obtener energía. sopla\neliminar el hollín negro si está en peligro.",
        "it": "Brucia il carbone all'interno del suo guscio per produrre energia. Soffia\nfuori la fuliggine nera se è in pericolo.",
        "de": "Es verbrennt Kohle in seiner Hülle zur Energiegewinnung. Es bläst\nschwarzen Ruß entfernen, wenn dieser gefährdet ist.",
        "pt-br": "Ele queima carvão dentro de sua casca para obter energia. Isso sopra\neliminar fuligem preta se estiver em perigo.",
        "zh-tw": "它在殼內燃燒煤炭來獲取能量。吹起來\n如果它瀕臨滅絕，請清除黑色煙灰。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flamethrower",
                "fr": "Lance-flammes",
                "es": "Echador de llama",
                "it": "Lanciafiamme",
                "de": "Flammenwerfer",
                "pt-br": "Lança-chamas",
                "zh-tw": "噴火器"
            },
            damage: 70,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                "fr": "Défaussez une Énergie {R} de ce Pokémon.",
                "es": "Descarta una Energía {R} de este Pokémon.",
                "it": "Scarta un'Energia {R} da questo Pokémon.",
                "de": "Wirf eine {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
