import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Audino",
        es: "Audino",
        "fr": "Audino",
        "it": "Audino",
        "de": "Audino",
        "pt-br": "Audino",
        "zh-tw": "差不多娃娃",
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    description: {
        en: "This Pokémon has a kind heart. By touching with its feelers,\nAudino can gauge other creatures' feelings and physical conditions.",
        es: "Un Pokémon gentil que es capaz de comprender\nlos sentimientos y averiguar el estado de salud\nde todo aquel que toque con sus antenas.",
        "fr": "Ce Pokémon a un bon cœur. En touchant avec ses palpeurs,\nAudino peut évaluer les sentiments et les conditions physiques des autres créatures.",
        "it": "Questo Pokémon ha un cuore gentile. Toccando con le sue antenne,\nAudino può valutare i sentimenti e le condizioni fisiche delle altre creature.",
        "de": "Dieses Pokémon hat ein freundliches Herz. Durch das Berühren mit seinen Fühlern,\nAudino kann die Gefühle und den körperlichen Zustand anderer Lebewesen einschätzen.",
        "pt-br": "Este Pokémon tem um coração bondoso. Ao tocar com seus sensores,\nAudino pode avaliar os sentimentos e condições físicas de outras criaturas.",
        "zh-tw": "這只神奇寶貝有一顆善良的心。通過用觸角觸碰，\n奧迪諾可以測量其他生物的感受和身體狀況。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Drain Slap",
                es: "Absorbebofetón",
                "fr": "Claque de vidange",
                "it": "Drenare lo schiaffo",
                "de": "Drain Slap",
                "pt-br": "Tapa de drenagem",
                "zh-tw": "排水管拍打"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                "fr": "Soignez 10 dégâts de ce Pokémon.",
                "it": "Cura questo Pokémon da 10 danni.",
                "de": "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["vol10"]
};
export default card;
