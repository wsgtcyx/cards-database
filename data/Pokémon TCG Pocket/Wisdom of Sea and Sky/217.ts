import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/217",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/217",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/217",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/217",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/217",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/217",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/217",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/217",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/217"
    },
    name: {
        en: "Magnemite",
        "fr": "Magnéti",
        "es": "Magnemite",
        "it": "Magnemite",
        "de": "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪",
        ja: "コイル",
        ko: "코일",
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "The electromagnetic waves emitted by the units\nat the sides of its head expel antigravity, which\nallows it to float.",
        "fr": "Les ondes électromagnétiques émises par les unités\nsur les côtés de sa tête expulsent l'antigravité, qui\nlui permet de flotter.",
        "es": "Las ondas electromagnéticas emitidas por las unidades.\na los lados de su cabeza expulsan antigravedad, que\nle permite flotar.",
        "it": "Le onde elettromagnetiche emesse dalle unità\nai lati della sua testa espellono l'antigravità, che\ngli permette di galleggiare.",
        "de": "Die von den Einheiten ausgesendeten elektromagnetischen Wellen\nan den Seiten seines Kopfes stoßen Antigravitation aus, die\nlässt es schweben.",
        "pt-br": "As ondas eletromagnéticas emitidas pelas unidades\nnas laterais de sua cabeça expelem antigravidade, que\npermite que ele flutue.",
        "zh-tw": "各裝置發射的電磁波\n在其頭部的兩側驅逐反重力，這\n讓它漂浮。",
        ja: "左右にある ユニットから だす 電磁波で 重力を さえぎって 空に 浮かぶのだ。",
        ko: "좌우에 있는 유닛에서 나오는\n전자파를 이용해\n중력을 거슬러 하늘에 떠 있다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Lightning Ball",
                "fr": "Boule de foudre",
                "es": "Bola de relámpago",
                "it": "Palla fulminea",
                "de": "Blitzball",
                "pt-br": "Bola Relâmpago",
                "zh-tw": "閃電球",
                ja: "ピッカリだま",
                ko: "번쩍구슬"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
