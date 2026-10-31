import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/009",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/009",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/009",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/009"
    },
    name: {
        en: "Nuzleaf",
        "fr": "Pifeuil",
        "es": "Nuzleaf",
        "it": "Nuzleaf",
        "de": "Blanas",
        "pt-br": "Nuzleaf",
        "zh-tw": "長鼻葉",
        ja: "コノハナ",
        ko: "잎새코",
    },
    illustrator: "Hajime Kusajima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Seedot",
        "fr": "Grainipiot",
        "es": "Seedot",
        "it": "Seedot",
        "de": "Samurzel",
        "pt-br": "Seedot",
        "zh-tw": "橡實果",
        ja: "タネボー",
        ko: "도토링",
    },
    description: {
        en: "They live in holes bored in large trees. The sound\nof Nuzleaf's grass flute fills listeners with dread.",
        "fr": "Ils vivent dans des trous creusés dans les grands arbres. Le son\nde la flûte d'herbe de Nuzleaf remplit les auditeurs d'effroi.",
        "es": "Viven en agujeros perforados en árboles grandes. el sonido\nde la flauta de hierba de Nuzleaf llena de pavor a los oyentes.",
        "it": "Vivono in buche scavate in grandi alberi. Il suono\ndel flauto d'erba di Nuzleaf riempie gli ascoltatori di terrore.",
        "de": "Sie leben in Löchern, die in große Bäume gebohrt sind. Der Klang\nvon Nuzleafs Grasflöte erfüllt die Zuhörer mit Grauen.",
        "pt-br": "Eles vivem em buracos escavados em árvores de grande porte. O som\nda flauta de grama de Nuzleaf enche os ouvintes de pavor.",
        "zh-tw": "它們住在大樹上鑽的洞裡。聲音\nNuzleaf 的草笛曲讓聽眾充滿恐懼。",
        ja: "コノハナの 吹く 草笛の 音は 聞いた ものを 不安に させる。 大木に 開いた 穴で 暮らす。",
        ko: "잎새코가 부는 풀피리 소리는\n듣는 이를 불안하게 만든다.\n큰 나무의 비어 있는 구멍에 산다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gentle Slap",
                "fr": "Gifle douce",
                "es": "Bofetada suave",
                "it": "Schiaffo gentile",
                "de": "Sanfter Schlag",
                "pt-br": "Tapa suave",
                "zh-tw": "輕輕一巴掌",
                ja: "ひっぱたく",
                ko: "세게때리기"
            },
            damage: 40,
            cost: ["Grass", "Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
	boosters: [
		"mega-blaziken"
	]
};
export default card;
