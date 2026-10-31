import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A2/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A2/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A2/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A2/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A2/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A2/011",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A2/011",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A2/011",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A2/011"
    },
    name: {
        en: "Grotle",
        fr: "Boskara",
        es: "Grotle",
        it: "Grotle",
        de: "Chelcarain",
        'pt-br': "Grotle",
        ja: "ハヤシガメ",
        ko: "수풀부기",
        "zh-tw": "樹林龜",
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Turtwig",
        "fr": "Tortipouss",
        "es": "Turtwig",
        "it": "Turtwig",
        "de": "Chelast",
        "pt-br": "Turtwig",
        "zh-tw": "草苗龜",
        ja: "ナエトル",
        ko: "모부기",
    },
    description: {
        en: "It lives along water in forests. In the daytime, it leaves the forest to sunbathe its treed shell.",
        fr: "Il vit en forêt près de l'eau. En journée, il la\nquitte pour dorer sa carapace feuillue au soleil.",
        es: "Vive en los bosques cerca del agua. Por el día,\nsale a que les dé el sol a las plantas de su espalda.",
        it: "Vive nelle foreste vicino all'acqua, ma esce di\ngiorno per far prendere sole alle piante sul guscio.",
        de: "Es lebt in der Nähe von Wasser in Wäldern.\nTagsüber verlässt es diese, um ein Sonnenbad\nzu nehmen.",
        'pt-br': "Mora à beira d'água nas florestas. Durante o dia,\ndeixa a mata para seu casco arbóreo tomar sol.",
        ja: "森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。",
        ko: "숲 속의 물가에서 산다.\n낮에는 숲 밖으로 나와서\n등껍질의 나무에 빛을 쬔다.",
        "zh-tw": "它生活在森林裡的水邊。白天，它離開森林去曬樹殼上的日光浴。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                'pt-br': "Folha Navalha",
                ja: "はっぱカッター",
                ko: "잎날가르기",
                "zh-tw": "剃刀葉"
            },
            damage: 60,
            cost: ["Grass", "Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["palkia"]
};
export default card;
