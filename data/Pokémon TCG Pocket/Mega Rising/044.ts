import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Heatmor",
        "fr": "Chaleur",
        "es": "calormor",
        "it": "Morore di calore",
        "de": "Heatmor",
        "pt-br": "Calormor",
        "zh-tw": "食蟻爐",
    },
    illustrator: "Satoshi Shirai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    description: {
        en: "A flame serves as its tongue, melting through the\nhard shell of Durant so that Heatmor can devour\ntheir insides.",
        "fr": "Une flamme lui sert de langue, fondant à travers le\ncoquille dure de Durant pour que Heatmor puisse dévorer\nleurs entrailles.",
        "es": "Una llama le sirve de lengua, derritiéndose a través del\ncáscara dura de Durant para que Heatmor pueda devorar\nsus entrañas.",
        "it": "Una fiamma funge da lingua, sciogliendosi attraverso il\nduro guscio di Durant in modo che Heatmor possa divorarlo\nle loro viscere.",
        "de": "Eine Flamme dient als seine Zunge und schmilzt durch die Flamme\nharte Schale von Durant, damit Heatmor es verschlingen kann\nihr Inneres.",
        "pt-br": "Uma chama serve como sua língua, derretendo através do\ncasca dura de Durant para que Heatmor possa devorar\nsuas entranhas.",
        "zh-tw": "火焰作為它的舌頭，融化在\n杜蘭特的硬殼，以便 Heatmor 可以吞噬\n他們的內心。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tongue Whip",
                "fr": "Fouet à langue",
                "es": "Látigo de lengua",
                "it": "Frusta della lingua",
                "de": "Zungenpeitsche",
                "pt-br": "Chicote de língua",
                "zh-tw": "舌鞭"
            },
            cost: ["Fire"],
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 30 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
