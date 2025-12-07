import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Articuno ex",
        "fr": "Articuno ex",
        "es": "Articuno ex",
        "it": "Articuno es",
        "de": "Articuno ex",
        "pt-br": "Articuno ex",
        "zh-tw": "急凍鳥"
    },
    illustrator: "PLANETA Saito",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Ice Wing",
                "fr": "Aile de glace",
                "es": "Ala de hielo",
                "it": "Ala di ghiaccio",
                "de": "Eisflügel",
                "pt-br": "Asa de Gelo",
                "zh-tw": "冰翼"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }, {
            name: {
                en: "Blizzard",
                "fr": "Blizzard",
                "es": "Ventisca",
                "it": "Bufera di neve",
                "de": "Schneesturm",
                "pt-br": "Nevasca",
                "zh-tw": "暴風雪"
            },
            damage: 80,
            cost: ["Water", "Water", "Water"],
            effect: {
                en: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige également 10 dégâts à chacun des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊還會對對手的後備神奇寶貝各造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
