import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/027",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/027",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/027",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/027",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/027",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/027",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/027",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/027",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/027"
    },
    name: {
        en: "Cherrim",
        "fr": "Ceriflor",
        "es": "Cherrim",
        "it": "Cherrim",
        "de": "Kinoso",
        "pt-br": "Cherrim",
        "zh-tw": "櫻花兒",
        ja: "チェリム",
        ko: "체리꼬",
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Cherubi",
        "fr": "Ceribou",
        "es": "Cherubi",
        "it": "Cherubi",
        "de": "Kikugi",
        "pt-br": "Cherubi",
        "zh-tw": "櫻花寶",
        ja: "チェリンボ",
        ko: "체리버",
    },
    description: {
        en: "After absorbing plenty of sunlight, Cherrim takes\nthis form. It's full of energy while it's like this,\nand its liveliness will go on until sundown.",
        "fr": "Après avoir absorbé beaucoup de soleil, Cherrim prend\ncette forme. C'est plein d'énergie quand c'est comme ça,\net sa vivacité durera jusqu'au coucher du soleil.",
        "es": "Después de absorber mucha luz solar, Cherrim toma\neste formulario. Está lleno de energía mientras está así,\ny su vivacidad durará hasta la puesta del sol.",
        "it": "Dopo aver assorbito molta luce solare, Cherrim prende\nquesto modulo. È pieno di energia mentre è così,\ne la sua vivacità durerà fino al tramonto.",
        "de": "Nachdem Cherrim viel Sonnenlicht absorbiert hat, nimmt er es auf\ndieses Formular. Es ist voller Energie, während es so ist,\nund seine Lebendigkeit wird bis zum Sonnenuntergang anhalten.",
        "pt-br": "Depois de absorver bastante luz solar, Cherrim leva\neste formulário. Está cheio de energia enquanto está assim,\ne sua vivacidade continuará até o pôr do sol.",
        "zh-tw": "吸收充足的陽光後，Cherrim 採取\n這種形式。這樣一來就充滿了能量，\n它的熱鬧將會持續到日落。",
        ja: "太陽の 光を 浴びて 元気いっぱいの 姿。 日暮れまでは 活発だ。",
        ko: "태양의 빛을 받아\n기운이 넘치는 모습.\n해가 지기 전까지는 활발하다."
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
                "zh-tw": "種子炸彈",
                ja: "タネばくだん",
                ko: "씨폭탄"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
