import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Yanmega",
        "fr": "Yanméga",
        "es": "Yanmega",
        "it": "Yanmega",
        "de": "Yanmega",
        "pt-br": "Yanmega",
        "zh-tw": "梅卡陽瑪",
    },
    illustrator: "Uta",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Yanma",
        "fr": "Yanma",
        "es": "Yanma",
        "it": "Yanma",
        "de": "Yanma",
        "pt-br": "Yanma",
        "zh-tw": "陽陽瑪",
    },
    description: {
        en: "It prefers to battle by biting apart foes' heads\ninstantly while flying by at high speed.",
        "fr": "Il préfère se battre en mordant la tête de ses ennemis\ninstantanément en volant à grande vitesse.",
        "es": "Prefiere luchar mordiendo las cabezas de los enemigos.\ninstantáneamente mientras vuela a alta velocidad.",
        "it": "Preferisce combattere facendo a pezzi le teste dei nemici\nistantaneamente mentre voli ad alta velocità.",
        "de": "Es kämpft lieber, indem es seinen Gegnern die Köpfe auseinanderbeißt\nsofort beim Vorbeifliegen mit hoher Geschwindigkeit.",
        "pt-br": "Ele prefere lutar mordendo a cabeça dos inimigos\ninstantaneamente enquanto voa em alta velocidade.",
        "zh-tw": "它更喜歡通過咬碎敵人的頭來戰鬥\n高速飛行的瞬間。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bug Buzz",
                "fr": "Buzz aux insectes",
                "es": "Zumbido de insectos",
                "it": "Bug Buzz",
                "de": "Bug Buzz",
                "pt-br": "Zumbido de insetos",
                "zh-tw": "錯誤嗡嗡聲"
            },
            damage: 60,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
