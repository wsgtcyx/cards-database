import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Hariyama",
        "fr": "Hariyama",
        "es": "hariyama",
        "it": "Hariyama",
        "de": "Hariyama",
        "pt-br": "Hariyama",
        "zh-tw": "超力王",
    },
    illustrator: "Scav",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Makuhita",
        "fr": "Makuhita",
        "es": "makuhita",
        "it": "Makuhita",
        "de": "Makuhita",
        "pt-br": "Makuhita",
        "zh-tw": "幕日田"
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
                en: "Slapping Knockdown",
                "fr": "Gifler le renversement",
                "es": "Derribo de bofetadas",
                "it": "Atterramento con schiaffi",
                "de": "Ohrfeigen Knockdown",
                "pt-br": "Golpe nocauteado",
                "zh-tw": "拍擊擊倒"
            },
            damage: 110,
            cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
            effect: {
                en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
                "fr": "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
                "es": "Antes de hacer daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
                "it": "Prima di infliggere danni, scarta tutti gli Strumenti Pokémon dal Pokémon attivo del tuo avversario.",
                "de": "Bevor du Schaden verursachst, wirf alle Pokémon-Werkzeuge vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
                "zh-tw": "在造成傷害之前，丟棄對手的活躍神奇寶貝中的所有神奇寶貝工具。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 4
};
export default card;
