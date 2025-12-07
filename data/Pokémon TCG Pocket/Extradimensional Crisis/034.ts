import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Passimian",
        "fr": "Passimien",
        "es": "Passimiano",
        "it": "Passimiano",
        "de": "Passimian",
        "pt-br": "Passimiano",
        "zh-tw": "帕西米安"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    description: {
        en: "This Pokémon battles by throwing hard berries.\nIt won't obey a Trainer who throws Poké Balls\nwithout skill.",
        "fr": "Ce Pokémon se bat en lançant des baies dures.\nIl n'obéira pas à un dresseur qui lance des Poké Balls\nsans compétence.",
        "es": "Este Pokémon lucha lanzando bayas duras.\nNo obedecerá a un Entrenador que lance Poké Balls.\nsin habilidad.",
        "it": "Questo Pokémon combatte lanciando bacche dure.\nNon obbedirà ad un Allenatore che lancia Poké Ball\nsenza abilità.",
        "de": "Dieses Pokémon kämpft, indem es harte Beeren wirft.\nEs wird einem Trainer nicht gehorchen, der Pokébälle wirft\nohne Geschick.",
        "pt-br": "Este Pokémon luta jogando frutas duras.\nNão obedecerá a um treinador que joga Pokébolas\nsem habilidade.",
        "zh-tw": "這只神奇寶貝通過投擲堅硬的漿果進行戰鬥。\n它不會服從扔精靈球的訓練家\n沒有技巧。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Let's Throw",
                "fr": "Jetons",
                "es": "vamos a tirar",
                "it": "Lanciamo",
                "de": "Lass uns werfen",
                "pt-br": "Vamos jogar",
                "zh-tw": "讓我們扔"
            },
            damage: 40,
            cost: ["Fighting", "Fighting"],
            effect: {
                en: "If Passimian is on your Bench, this attack does 40 more damage.",
                "fr": "Si Passimian est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si Passimian está en tu Banca, este ataque hace 40 puntos de daño más.",
                "it": "Se Passimian è nella tua panchina, questo attacco infligge 40 danni in più.",
                "de": "Wenn Passimian auf deiner Bank sitzt, fügt dieser Angriff 40 Schadenspunkte mehr zu.",
                "pt-br": "Se Passimian estiver no seu banco, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果帕西米安在你的替補席上，這次攻擊會造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
