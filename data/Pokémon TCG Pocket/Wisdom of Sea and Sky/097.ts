import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Piloswine",
        "fr": "Vin de Pilos",
        "es": "Pilosvino",
        "it": "Piloswine",
        "de": "Piloswine",
        "pt-br": "Piloswine",
        "zh-tw": "毛豬"
    },
    illustrator: "Midori Harada",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Fighting"],
    evolveFrom: {
        en: "Swinub",
        "fr": "Swinub",
        "es": "Swinub",
        "it": "Swinub",
        "de": "Swinub",
        "pt-br": "Swinub",
        "zh-tw": "斯威努布"
    },
    description: {
        en: "If it charges at an enemy, the hairs on its back\nstand up straight. It is very sensitive to sound.",
        "fr": "S'il charge un ennemi, les poils sur son dos\ntenez-vous droit. Il est très sensible au son.",
        "es": "Si carga contra un enemigo, los pelos de su espalda\npárate derecho. Es muy sensible al sonido.",
        "it": "Se carica un nemico, i peli sulla sua schiena\nstare dritto. È molto sensibile al suono.",
        "de": "Wenn es auf einen Feind zustürmt, fallen ihm die Haare auf dem Rücken weg\nsteh aufrecht. Es ist sehr geräuschempfindlich.",
        "pt-br": "Se atacar um inimigo, os pelos das costas\nfique em pé. É muito sensível ao som.",
        "zh-tw": "如果它沖向敵人，它背上的毛\n站直。它對聲音非常敏感。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Headbutt Bounce",
                "fr": "Rebond de coup de tête",
                "es": "Rebote de cabezazo",
                "it": "Rimbalzo della testata",
                "de": "Kopfstoß-Abprall",
                "pt-br": "Salto de cabeçada",
                "zh-tw": "頭撞彈跳"
            },
            damage: 70,
            cost: ["Fighting", "Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["ho-oh"]
};
export default card;
