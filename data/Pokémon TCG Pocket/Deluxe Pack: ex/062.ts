import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Growlithe",
        "fr": "Growlithe",
        "es": "crecer",
        "it": "Growlithe",
        "de": "Growlithe",
        "pt-br": "Growlithe",
        "zh-tw": "卡蒂狗",
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fire"],
    description: {
        en: "It has a brave and trustworthy nature. It fearlessly\nstands up to bigger and stronger foes.",
        "fr": "Il a une nature courageuse et digne de confiance. C'est sans crainte\nrésiste à des ennemis plus grands et plus forts.",
        "es": "Tiene un carácter valiente y digno de confianza. Sin miedo\nse enfrenta a enemigos más grandes y más fuertes.",
        "it": "Ha una natura coraggiosa e affidabile. Senza paura\nresiste a nemici più grandi e più forti.",
        "de": "Es hat eine mutige und vertrauenswürdige Natur. Es furchtlos\nhält größeren und stärkeren Feinden stand.",
        "pt-br": "Tem uma natureza corajosa e confiável. Sem medo\nenfrenta inimigos maiores e mais fortes.",
        "zh-tw": "它具有勇敢和值得信賴的本性。它無所畏懼\n能夠對抗更大更強的敵人。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
