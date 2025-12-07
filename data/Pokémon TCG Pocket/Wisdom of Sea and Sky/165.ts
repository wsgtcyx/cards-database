import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Cyndaquil",
        "fr": "Cyndaquil",
        "es": "cindaquil",
        "it": "Cyndaquil",
        "de": "Cyndaquil",
        "pt-br": "Cindaquil",
        "zh-tw": "辛達奎爾"
    },
    illustrator: "buchi",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "It is timid and always curls itself up in a ball.\nIf attacked, it flares up its back for protection.",
        "fr": "Il est timide et se met toujours en boule.\nS’il est attaqué, il flambe le dos pour se protéger.",
        "es": "Es tímido y siempre se hace un ovillo.\nSi es atacado, ensancha su espalda para protegerse.",
        "it": "È timido e si raggomitola sempre.\nSe attaccato, alza la schiena per proteggersi.",
        "de": "Er ist schüchtern und rollt sich immer zu einer Kugel zusammen.\nWenn es angegriffen wird, breitet es zum Schutz seinen Rücken aus.",
        "pt-br": "É tímido e sempre se enrola como uma bola.\nSe atacado, ele ergue as costas para proteção.",
        "zh-tw": "它膽小，總是把自己蜷縮成一團。\n如果受到攻擊，它會張開背部進行保護。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flare",
                "fr": "Éclater",
                "es": "Llamarada",
                "it": "Bagliore",
                "de": "Fackel",
                "pt-br": "Sinalizador",
                "zh-tw": "耀斑"
            },
            damage: 20,
            cost: ["Fire"]
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
