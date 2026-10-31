import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/339",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/339",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/339",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/339",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/339",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/339",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/339",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4b/339",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4b/339"
    },
    name: {
        en: "Doublade",
        fr: "Dimoclès",
        es: "Doublade",
        it: "Doublade",
        de: "Duokles",
        "pt-br": "Doublade",
        "zh-tw": "雙劍鞘",
        ja: "ニダンギル",
        ko: "쌍검킬"
    },
    illustrator: "Hajime Kusajima",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Metal"
    ],
    evolveFrom: {
        en: "Honedge",
        fr: "Monorpale",
        es: "Honedge",
        it: "Honedge",
        de: "Gramokles",
        "pt-br": "Honedge",
        "zh-tw": "獨劍鞘",
        ja: "ヒトツキ",
        ko: "단칼빙"
    },
    description: {
        en: "The two swords employ a strategy of rapidly\nalternating between offense and defense to\nbring down their prey.",
        fr: "Ses deux lames abattent leurs proies en enchaînant les attaques et les parades à un rythme effréné.",
        es: "Su táctica para abatir a las presas consiste en alternar ataque y defensa de forma frenética entre ambas espadas.",
        it: "Le due spade abbattono la preda alternando mosse di attacco e di difesa a un ritmo vertiginoso.",
        de: "Seine zwei Schwerter wechseln sich in einer hektischen Aufeinanderfolge von Angriff und Verteidigung ab, um seine Beute zu erlegen.",
        "pt-br": "As duas espadas adotam a estratégia de alternar rapidamente entre ataque e defesa para derrubar suas presas.",
        "zh-tw": "２把劍會用令人眼花撩亂的速度不斷交替攻擊和防禦，藉以制服獵物。",
        ja: "２本の 剣は 攻撃と 防御が 目まぐるしく 入れ替わる 戦法で 獲物を しとめる。",
        ko: "2자루의 검이 공격과 방어를\n어지러울 정도로 빠르게 바꾸는\n전법으로 먹이의 숨통을 끊는다."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開",
                ja: "きりさく",
                ko: "베어가르기"
            },
            damage: 40,
            cost: [
                "Metal",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
