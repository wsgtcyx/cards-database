import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Rapidash ex",
        "fr": "Rapidash ex",
        "es": "Rapidash ex",
        "it": "Rapidash es",
        "de": "Rapidash ex",
        "pt-br": "ex-rapidash",
        "zh-tw": "快速EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    evolveFrom: {
        en: "Ponyta",
        "fr": "Ponyta",
        "es": "ponyta",
        "it": "Ponyta",
        "de": "Ponyta",
        "pt-br": "Ponyta",
        "zh-tw": "小馬駒"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Sprinting Flare",
                "fr": "Fusée de sprint",
                "es": "Llamarada de carrera",
                "it": "Flare di sprint",
                "de": "Sprintende Fackel",
                "pt-br": "Chama de corrida",
                "zh-tw": "衝刺耀斑"
            },
            damage: 110,
            cost: ["Fire", "Fire", "Fire"],
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige également 20 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
