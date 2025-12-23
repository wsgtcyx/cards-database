import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Hariyama",
        "fr": "Hariyama",
        "es": "Hariyama",
        "it": "Hariyama",
        "de": "Hariyama",
        "pt-br": "Hariyama",
        "zh-tw": "鐵掌力士"
    },
    illustrator: "Naoyo Kimura",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    evolveFrom: {
        en: "Makuhita",
        "fr": "Makuhita",
        "es": "Makuhita",
        "it": "Makuhita",
        "de": "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕下力士"
    },
    description: {
        en: "It stomps on the ground to build power.\nIt can send a 10-ton truck flying with a\nstraight-arm punch.",
        "fr": "Il piétine le sol pour construire son pouvoir.\nIl peut envoyer voler un camion de 10 tonnes avec un\ncoup de poing à bras droit.",
        "es": "Pisotea el suelo para generar poder.\nPuede hacer volar un camión de 10 toneladas con un\ngolpe con el brazo recto.",
        "it": "Calpesta il terreno per costruire potere.\nPuò far volare un camion da 10 tonnellate con a\npugno a braccio teso.",
        "de": "Es stampft auf den Boden, um Kraft aufzubauen.\nEs kann einen 10-Tonnen-Lkw mit einem fliegen lassen\nSchlag mit geradem Arm.",
        "pt-br": "Ele pisa no chão para construir poder.\nEle pode enviar um caminhão de 10 toneladas voando com um\nsoco com o braço reto.",
        "zh-tw": "它踩踏地面來產生能量。\n它可以讓一輛10噸重的卡車帶著\n直臂拳。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Megaton Slap Push",
                "fr": "Poussée de claque de mégatonne",
                "es": "Empuje de bofetada de megatón",
                "it": "Spinta di schiaffo di Megaton",
                "de": "Megaton Slap Push",
                "pt-br": "Empurrão de tapa Megaton",
                "zh-tw": "百萬噸級拍擊推"
            },
            damage: 90,
            cost: ["Fighting", "Fighting", "Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 3
};
export default card;
