import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Incineroar ex",
        "fr": "Ex-Incineroar",
        "es": "Incineroar ex",
        "it": "Incineroar ex",
        "de": "Incineroar ex",
        "pt-br": "Incineroar ex",
        "zh-tw": "熾焰咆哮虎 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Fire"],
    evolveFrom: {
        en: "Torracat",
        "fr": "Torracat",
        "es": "torracat",
        "it": "Torracat",
        "de": "Torracat",
        "pt-br": "Torracat",
        "zh-tw": "托拉卡特"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Fire Fang",
                "fr": "Croc de Feu",
                "es": "colmillo de fuego",
                "it": "Zanna di fuoco",
                "de": "Feuerzahn",
                "pt-br": "Presa de Fogo",
                "zh-tw": "火牙"
            },
            damage: 30,
            cost: ["Fire"],
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                "fr": "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                "es": "El Pokémon Activo de tu rival ahora está Quemado.",
                "it": "Il Pokémon attivo del tuo avversario è ora bruciato.",
                "de": "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍神奇寶貝現在被燒毀了。"
            }
        }, {
            name: {
                en: "Scar-Charged Smash",
                "fr": "Smash chargé de cicatrices",
                "es": "Smash cargado de cicatrices",
                "it": "Smash carico di cicatrici",
                "de": "Narbengeladener Schlag",
                "pt-br": "Smash carregado de cicatriz",
                "zh-tw": "傷痕重擊"
            },
            damage: 80,
            cost: ["Fire", "Fire", "Colorless"],
            effect: {
                en: "If this Pokémon has damage on it, this attack does 60 more damage.",
                "fr": "Si ce Pokémon subit des dégâts, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene daño, este ataque hace 60 puntos de daño más.",
                "it": "Se questo Pokémon ha dei danni su di sé, questo attacco infligge 60 danni in più.",
                "de": "Wenn dieses Pokémon Schaden hat, fügt dieser Angriff 60 weitere Schadenspunkte zu.",
                "pt-br": "Se este Pokémon sofrer dano, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這只神奇寶貝受到傷害，則這次攻擊會造成額外 60 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
