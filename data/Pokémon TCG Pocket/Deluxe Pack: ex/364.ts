import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Pikachu ex",
        "fr": "Pikachu ex",
        "es": "ex-pikachu",
        "it": "Pikachu ex",
        "de": "Pikachu ex",
        "pt-br": "Ex-Pikachu",
        "zh-tw": "皮卡丘超級"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 120,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Circle Circuit",
                "fr": "Circuit circulaire",
                "es": "Circuito circular",
                "it": "Circuito circolare",
                "de": "Kreisschaltung",
                "pt-br": "Circuito Círculo",
                "zh-tw": "環形電路"
            },
            damage: 30,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "This attack does 30 damage for each of your Benched {L} Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc {L}.",
                "es": "Este ataque hace 30 daños por cada uno de tus Pokémon {L} en Banca.",
                "it": "Questo attacco infligge 30 danni per ciascuno dei tuoi Pokémon {L} in panchina.",
                "de": "Dieser Angriff fügt jedem {L}-Pokémon auf deiner Bank 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon {L} no Banco.",
                "zh-tw": "此攻擊對你的每個後備 {L} 神奇寶貝造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
