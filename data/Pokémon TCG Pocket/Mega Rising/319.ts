import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Palkia ex",
        "fr": "Palkia ex",
        "es": "palkia ex",
        "it": "Palkia ex",
        "de": "Palkia ex",
        "pt-br": "Ex de Palkia",
        "zh-tw": "帕路奇亞超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 150,
    types: ["Water"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減"
            },
            damage: 30,
            cost: ["Water"]
        }, {
            name: {
                en: "Dimensional Storm",
                "fr": "Tempête dimensionnelle",
                "es": "Tormenta dimensional",
                "it": "Tempesta dimensionale",
                "de": "Dimensionssturm",
                "pt-br": "Tempestade Dimensional",
                "zh-tw": "次元風暴"
            },
            damage: 150,
            cost: ["Water", "Water", "Water", "Colorless"],
            effect: {
                en: "Discard 3 {W} Energy from this Pokémon. This attack also does 20 damage to each of your opponent's Benched Pokémon.",
                "fr": "Défaussez 3 {W} Énergie de ce Pokémon. Cette attaque inflige également 20 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                "es": "Descarta 3 Energías {W} de este Pokémon. Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                "it": "Scarta 3 Energie {W} da questo Pokémon. Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                "de": "Lege 3 {W}-Energien von diesem Pokémon ab. Dieser Angriff fügt außerdem jedem Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Descarte 3 {W} Energias deste Pokémon. Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "丟棄該神奇寶貝的 3 個 {W} 能量。這次攻擊還會對對手的後備神奇寶貝各造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
