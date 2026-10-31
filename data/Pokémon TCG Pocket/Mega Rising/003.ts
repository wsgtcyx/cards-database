import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1/003",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1/003",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1/003",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1/003",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1/003",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1/003",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1/003",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1/003",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1/003"
    },
    name: {
        en: "Wurmple",
        "fr": "Chenipotte",
        "es": "Wurmple",
        "it": "Wurmple",
        "de": "Waumpel",
        "pt-br": "Wurmple",
        "zh-tw": "刺尾蟲",
        ja: "ケムッソ",
        ko: "개무소",
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "It lives among the tall grass and in forests. It repels\nattacks by raising up the spikes on its rear.",
        "fr": "Il vit parmi les herbes hautes et dans les forêts. Il repousse\nattaque en soulevant les pointes sur son arrière.",
        "es": "Vive entre la hierba alta y en los bosques. repele\nataca levantando las púas en su parte trasera.",
        "it": "Vive tra l'erba alta e nelle foreste. Respinge\nattacca sollevando gli spuntoni sul retro.",
        "de": "Er lebt im hohen Gras und in Wäldern. Es stößt ab\nEr greift an, indem er die Stacheln an seinem Rücken anhebt.",
        "pt-br": "Vive entre a grama alta e nas florestas. Isso repele\nataca levantando os espinhos em sua parte traseira.",
        "zh-tw": "它生活在高高的草叢和森林中。它排斥\n通過抬起背部的尖刺進行攻擊。",
        ja: "森や 草むらに 生息。 敵に 襲われた ときは お尻の 毒の トゲで 対抗する。",
        ko: "숲과 수풀에 서식한다.\n적에게 습격당했을 때는 엉덩이의\n독가시로 대항한다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Ram",
                "fr": "Bélier",
                "es": "RAM",
                "it": "Ram",
                "de": "RAM",
                "pt-br": "Bater",
                "zh-tw": "內存",
                ja: "ぶつかる",
                ko: "부딪치기"
            },
            damage: 20,
            cost: ["Grass"]
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
