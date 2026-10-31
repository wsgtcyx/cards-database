import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/019",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/019",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/019"
    },
    name: {
        en: "Volcanion",
        fr: "Volcanion",
        es: "Volcanion",
        "pt-br": "Volcanion",
        "zh-tw": "波爾凱尼恩",
        ja: "ボルケニオン",
        ko: "볼케니온",
        it: "Volcanion",
        de: "Volcanion"
    },
    illustrator: "Satoshi Shirai",
    rarity: "Three Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 120,
    types: [
        "Fire"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Dynamite Steam",
                fr: "Vapeur Explosive",
                es: "Vapor Dinamita",
                it: "Vapordinamite",
                de: "Dynamitdampf",
                "pt-br": "Vapor de Dinamite",
                "zh-tw": "炸藥蒸汽",
                ja: "ダイナマイトスチーム",
                ko: "Dynamite Steam"
            },
            cost: [
                "Colorless",
                "Fire",
                "Fire",
                "Fire"
            ],
            damage: "110x",
            effect: {
                en: "Flip 2 coins. This attack does 110 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 110 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 110 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 110 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 110 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 110 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×110點傷害。",
                ja: "コインを2回投げ、オモテの数×110ダメージ。",
                ko: "Flip 2 coins. This attack does 110 damage for each heads."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It lets out billows of steam and disappears into the dense fog. It's said to live in mountains where humans do not tread.",
        fr: "Il est capable de générer un nuage de vapeur pour se cacher. Il vit dans des montagnes inhabitées.",
        es: "Expulsa vapor y desaparece entre la densa niebla. Dicen que habita en montañas solitarias.",
        it: "Si nasconde emettendo spesse nubi di vapore attorno a sé. Si dice che viva su montagne non frequentate dall'uomo.",
        de: "Es stößt Wasserdampf aus und versteckt sich im dadurch entstehenden dichten Nebel. Es lebt in Bergen, die von Menschen gemieden werden.",
        "pt-br": "Solta vapor intenso e desaparece na névoa densa. Dizem que vive nas montanhas onde pessoas não andam.",
        "zh-tw": "噴出水蒸氣，用濃霧隱蔽自己。據說住在沒有人煙的山裡。",
        ja: "水蒸気を 噴き出して 自分の 姿を 濃霧で 隠す。人の 立ち入らない 山に 住むという。",
        ko: "It lets out billows of steam and disappears into the dense fog. It's said to live in mountains where humans do not tread."
    }
};

export default card;
