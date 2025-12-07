import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Pidgey",
        "fr": "Piggy",
        "es": "pidgey",
        "it": "Pidgey",
        "de": "Pidgey",
        "pt-br": "Pidgey",
        "zh-tw": "波波",
    },
    illustrator: "Misa Tsutsui",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "A common sight in forests and woods. It flaps\nits wings at ground level to kick up blinding sand.",
        "fr": "Un spectacle courant dans les forêts et les bois. Ça bat\nses ailes au ras du sol pour soulever du sable aveuglant.",
        "es": "Una vista común en bosques y bosques. aletea\nsus alas al nivel del suelo para levantar arena cegadora.",
        "it": "Uno spettacolo comune nelle foreste e nei boschi. Sbatte le ali\nle sue ali a livello del suolo sollevano sabbia accecante.",
        "de": "Ein häufiger Anblick in Wäldern und Wäldern. Es flattert\nSeine Flügel befinden sich auf Bodenhöhe, um blendenden Sand aufzuwirbeln.",
        "pt-br": "Uma visão comum em florestas e bosques. Ele bate\nsuas asas ao nível do solo para levantar areia ofuscante.",
        "zh-tw": "森林和樹林中常見的景象。它拍打著\n它的翅膀在地面上，可以揚起令人眼花繚亂的沙子。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Gust",
                "fr": "Rafale",
                "es": "Ráfaga",
                "it": "Raffica",
                "de": "Böe",
                "pt-br": "Rajada",
                "zh-tw": "陣風"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Shiny"
};
export default card;
