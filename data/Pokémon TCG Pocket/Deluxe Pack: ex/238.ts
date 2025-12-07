import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Paldean Clodsire ex",
        "fr": "Paldéen Clodsire ex",
        "es": "Paldean Clodsire ex",
        "it": "Paldean Clodsire ex",
        "de": "Paldean Clodsire ex",
        "pt-br": "Ex de Paldean Clodsire",
        "zh-tw": "Paldean Clodsire EX"
    },
    illustrator: "PLANETA Mochizuki",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Darkness"],
    evolveFrom: {
        en: "Paldean Wooper",
        "fr": "Wooper paldéen",
        "es": "Wooper paldeano",
        "it": "Wooper Paldeano",
        "de": "Paldean Wooper",
        "pt-br": "Paldeano Wooper",
        "zh-tw": "帕丁·伍珀"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Venoshock",
                "fr": "Venochoc",
                "es": "Venoshock",
                "it": "Venoshock",
                "de": "Venoshock",
                "pt-br": "Venoshock",
                "zh-tw": "靜脈休克"
            },
            damage: 60,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 60 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 60 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢中毒，則這次攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
