import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Garchomp ex",
        "fr": "Garchomp ex",
        "es": "Garchomp ex",
        "it": "Garchomp es",
        "de": "Garchomp ex",
        "pt-br": "Ex-Garchomp",
        "zh-tw": "Garchomp 前"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Fighting"],
    evolveFrom: {
        en: "Gabite",
        "fr": "Gabite",
        "es": "gabita",
        "it": "Gabite",
        "de": "Gabite",
        "pt-br": "Gabite",
        "zh-tw": "加比特"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Linear Attack",
                "fr": "Attaque linéaire",
                "es": "Ataque lineal",
                "it": "Attacco lineare",
                "de": "Linearer Angriff",
                "pt-br": "Ataque Linear",
                "zh-tw": "線性攻擊"
            },
            cost: ["Fighting"],
            effect: {
                en: "This attack does 50 damage to 1 of your opponent's Pokémon.",
                "fr": "Cette attaque inflige 50 dégâts à 1 des Pokémon de votre adversaire.",
                "es": "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.",
                "it": "Questo attacco infligge 50 danni a 1 dei Pokémon del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "這次攻擊對對手的 1 只神奇寶貝造成 50 點傷害。"
            }
        }, {
            name: {
                en: "Dragon Claw",
                "fr": "Griffe de dragon",
                "es": "Garra de dragón",
                "it": "Artiglio del Drago",
                "de": "Drachenklaue",
                "pt-br": "Garra de Dragão",
                "zh-tw": "龍爪"
            },
            damage: 100,
            cost: ["Fighting", "Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
