import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/019",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/019",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/019",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/019",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/019"
    },
    name: {
        en: "Yanmega",
        "fr": "Yanmega",
        "es": "Yanmega",
        "it": "Yanmega",
        "de": "Yanmega",
        "pt-br": "Yanmega",
        "zh-tw": "遠古巨蜓",
        ja: "メガヤンマ",
        ko: "메가자리",
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
        "zh-tw": "蜻蜻蜓",
        ja: "ヤンヤンマ",
        ko: "왕자리",
    },
    description: {
        en: "It prefers to battle by biting apart foes' heads\ninstantly while flying by at high speed.",
        "fr": "Il préfère se battre en mordant la tête de ses ennemis\ninstantanément en volant à grande vitesse.",
        "es": "Prefiere luchar mordiendo las cabezas de los enemigos.\ninstantáneamente mientras vuela a alta velocidad.",
        "it": "Preferisce combattere facendo a pezzi le teste dei nemici\nistantaneamente mentre voli ad alta velocità.",
        "de": "Es kämpft lieber, indem es seinen Gegnern die Köpfe auseinanderbeißt\nsofort beim Vorbeifliegen mit hoher Geschwindigkeit.",
        "pt-br": "Ele prefere lutar mordendo a cabeça dos inimigos\ninstantaneamente enquanto voa em alta velocidade.",
        "zh-tw": "它更喜歡通過咬碎敵人的頭來戰鬥\n高速飛行的瞬間。",
        ja: "高速で 飛んで すれ違った 相手の 首を 一瞬で かみちぎる 戦い方を 好む。",
        ko: "고속으로 날아서 스친\n상대의 목을 한순간에\n물어뜯는 싸움법을 선호한다."
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
                "zh-tw": "錯誤嗡嗡聲",
                ja: "むしのさざめき",
                ko: "벌레의야단법석"
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
