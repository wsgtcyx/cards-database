import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/040/4999e017cfe1710f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/040/4999e017cfe1710f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/040/4999e017cfe1710f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/040/4999e017cfe1710f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/040/4999e017cfe1710f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/040/4999e017cfe1710f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/040/4999e017cfe1710f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/040/4999e017cfe1710f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/040/4999e017cfe1710f"
    },
    name: {
        en: "Paldean Clodsire",
        fr: "Terraiste de Paldea",
        es: "Clodsire de Paldea",
        it: "Clodsire di Paldea",
        de: "Paldea-Suelord",
        "pt-br": "Clodsire de Paldea",
        "zh-tw": "帕底亞土王",
        ko: "팔데아 토오",
        ja: "パルデアドオー"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [980],
    evolveFrom: {
        en: "Paldean Wooper",
        fr: "Axoloto de Paldea",
        es: "Wooper de Paldea",
        it: "Wooper di Paldea",
        de: "Paldea-Felino",
        "pt-br": "Wooper de Paldea",
        "zh-tw": "帕底亞烏波",
        ko: "팔데아 우파",
        ja: "パルデアウパー"
    },
    stage: "Stage1",
    description: {
        en: "It lives at the bottom of ponds and swamps. It will carry Wooper on its back and ferry them across water from one shore to the other.",
        fr: "Ce Pokémon vit au fond des étangs et des marais. Il porte des Axoloto sur son dos et nage jusqu'à la rive opposée pour les aider à traverser.",
        es: "Vive en el fondo de los estanques y pantanos. Nada con Wooper sobre el lomo para ayudarlos a cruzar de una orilla a otra.",
        it: "Vive sui fondali degli stagni e delle paludi. Si carica i Wooper sulla schiena e li traghetta da una sponda all'altra.",
        de: "Es lebt auf dem Grund von Teichen und Sümpfen. Man kann beobachten, wie es Felino auf seinem Rücken von einem Ufer zum anderen befördert.",
        "pt-br": "Vive no fundo de lagoas e pântanos. Carrega Wooper em suas costas e os transporta pela água de uma margem à outra.",
        "zh-tw": "棲息在池子和沼澤底部。會讓烏波坐在自己背上，從此岸送到對岸去。",
        ja: "池や 沼の 水底で 暮らす。 背中に ウパーを 乗せて 泳ぎ 対岸まで 運んであげる。",
        ko: "연못이나 늪의 밑바닥에서 산다.\n등에 우파를 태우고 헤엄치며\n건너편까지 옮겨다 준다."
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness", "Colorless"],
            name: {
                en: "Muddy Hammer",
                fr: "Marteau Boueux",
                es: "Martillo Lodoso",
                it: "Fangomartello",
                de: "Schlammhammer",
                "pt-br": "Martelo Lamacento",
                "zh-tw": "泥水之錘",
                ja: "どろんこハンマー",
                ko: "흙탕해머"
            },
            effect: {
                en: "Discard the top card of your opponent's deck.",
                fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
                es: "Descarta la primera carta de la baraja de tu rival.",
                it: "Scarta la prima carta del mazzo dell’avversario.",
                de: "Lege die oberste Karte vom Deck deines Gegners ab.",
                "pt-br": "Descarte a carta de cima do baralho do seu oponente.",
                "zh-tw": "將對手的牌庫上方1張卡丟棄。",
                ja: "相手の山札を上から1枚トラッシュ。",
                ko: "상대의 덱을 위에서부터 1장 트래쉬한다."
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: []
};

export default card;
