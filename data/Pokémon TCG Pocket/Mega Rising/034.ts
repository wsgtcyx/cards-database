import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Combusken",
        "fr": "Combusken",
        "es": "Combusken",
        "it": "Combusken",
        "de": "Combusken",
        "pt-br": "Combusken",
        "zh-tw": "力壯雞",
    },
    illustrator: "GOSSAN",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Torchic",
        "fr": "Torchique",
        "es": "Antorcha",
        "it": "Torchic",
        "de": "Torchisch",
        "pt-br": "Tocha",
        "zh-tw": "火稚雞",
    },
    description: {
        en: "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power.",
        "fr": "Durant une bataille, la flamme brûlante dans son corps augmente.\nSes coups de pied ont un pouvoir destructeur exceptionnel.",
        "es": "Durante una batalla, la llama caliente en su cuerpo aumenta.\nSus patadas tienen un poder destructivo excepcional.",
        "it": "Durante una battaglia, la fiamma calda nel suo corpo aumenta.\nI suoi calci hanno un potere distruttivo eccezionale.",
        "de": "Während eines Kampfes verstärkt sich die heiße Flamme in seinem Körper.\nSeine Tritte haben eine herausragende Zerstörungskraft.",
        "pt-br": "Durante uma batalha, a chama quente em seu corpo aumenta.\nSeus chutes têm um poder destrutivo extraordinário.",
        "zh-tw": "戰鬥時，它體內的熾熱火焰會增加。\n其踢腿具有超凡的破壞力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "High Jump Kick",
                "fr": "Coup de pied de saut en hauteur",
                "es": "Patada de salto alto",
                "it": "Calcio in salto alto",
                "de": "Hochsprung-Kick",
                "pt-br": "Chute de salto em altura",
                "zh-tw": "跳高踢腿"
            },
            damage: 50,
            cost: ["Fire", "Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
