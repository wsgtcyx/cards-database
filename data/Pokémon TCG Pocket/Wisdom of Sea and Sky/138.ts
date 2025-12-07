import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Sentret",
        "fr": "Sentret",
        "es": "Sentret",
        "it": "Sentret",
        "de": "Sentret",
        "pt-br": "Sentido",
        "zh-tw": "尾立",
    },
    illustrator: "Mina Nakai",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "When acting as a lookout, it warns others of danger\nby screeching and hitting the ground with its tail.",
        "fr": "Lorsqu'il agit comme vigile, il avertit les autres du danger\nen hurlant et en frappant le sol avec sa queue.",
        "es": "Cuando actúa como vigía, advierte a los demás del peligro.\nchirriando y golpeando el suelo con su cola.",
        "it": "Quando funge da vedetta, avverte gli altri del pericolo\nstrillando e colpendo il suolo con la coda.",
        "de": "Als Wachmann warnt er andere vor Gefahren\nindem er kreischte und mit dem Schwanz auf den Boden schlug.",
        "pt-br": "Ao agir como vigia, avisa os outros sobre o perigo\ngritando e batendo no chão com a cauda.",
        "zh-tw": "當充當瞭望員時，它會警告其他人有危險\n通過尖叫並用尾巴撞擊地面。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Scratch",
                "fr": "Gratter",
                "es": "Rascar",
                "it": "Graffio",
                "de": "Kratzen",
                "pt-br": "Arranhar",
                "zh-tw": "划痕"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
