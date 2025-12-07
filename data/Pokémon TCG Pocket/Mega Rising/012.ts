import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Breloom",
        "fr": "Breloom",
        "es": "Breloom",
        "it": "Breloom",
        "de": "Breloom",
        "pt-br": "Breloom",
        "zh-tw": "布雷盧姆"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Shroomish",
        "fr": "Champignon",
        "es": "hongo",
        "it": "Shroomish",
        "de": "Pilzartig",
        "pt-br": "Cogumelo",
        "zh-tw": "蘑菇狀"
    },
    description: {
        en: "The seeds on its tail are made of toxic spores.\nIt knocks out foes with quick, virtually invisible\npunches.",
        "fr": "Les graines sur sa queue sont constituées de spores toxiques.\nIl assomme les ennemis avec des attaques rapides et pratiquement invisibles.\ncoups de poing.",
        "es": "Las semillas de su cola están hechas de esporas tóxicas.\nNoquea a los enemigos con movimientos rápidos y prácticamente invisibles.\ngolpes.",
        "it": "I semi sulla sua coda sono fatti di spore tossiche.\nMette KO i nemici con rapidità, praticamente invisibile\npugni.",
        "de": "Die Samen an seinem Schwanz bestehen aus giftigen Sporen.\nEs schlägt Feinde schnell und praktisch unsichtbar nieder\nSchläge.",
        "pt-br": "As sementes em sua cauda são feitas de esporos tóxicos.\nEle nocauteia inimigos com golpes rápidos e virtualmente invisíveis\nsocos.",
        "zh-tw": "它尾巴上的種子是由有毒孢子製成的。\n它以幾乎隱形的速度擊倒敵人\n拳頭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Seed Bomb",
                "fr": "Bombe à graines",
                "es": "Bomba de semillas",
                "it": "Bomba di semi",
                "de": "Samenbombe",
                "pt-br": "Bomba de sementes",
                "zh-tw": "種子炸彈"
            },
            damage: 40,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
