import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Decidueye ex",
        "fr": "Décidueye ex",
        "es": "ex-decidueye",
        "it": "Decidueye es",
        "de": "Decidueye ex",
        "pt-br": "Decidueye ex",
        "zh-tw": "蛻膜眼EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Grass"],
    evolveFrom: {
        en: "Dartrix",
        "fr": "Dartrix",
        "es": "dartrix",
        "it": "Dartrix",
        "de": "Dartrix",
        "pt-br": "Dartrix",
        "zh-tw": "達特里克斯"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Pierce the Pain",
                "fr": "Percer la douleur",
                "es": "Perfora el dolor",
                "it": "Perforare il dolore",
                "de": "Durchbohre den Schmerz",
                "pt-br": "Perfure a dor",
                "zh-tw": "刺穿痛苦"
            },
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "This attack does 100 damage to 1 of your opponent's Pokémon that have damage on them.",
                "fr": "Cette attaque inflige 100 dégâts à 1 des Pokémon de votre adversaire qui subissent des dégâts.",
                "es": "Este ataque hace 100 puntos de daño a 1 de los Pokémon de tu rival que tenga daño.",
                "it": "Questo attacco infligge 100 danni a 1 dei Pokémon del tuo avversario che hanno danni su di sé.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners, auf dem Schaden liegt, 100 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 100 pontos de dano a 1 dos Pokémon do seu oponente que tenham dano.",
                "zh-tw": "這次攻擊對對手的 1 只受到傷害的神奇寶貝造成 100 點傷害。"
            }
        }, {
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 80,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
