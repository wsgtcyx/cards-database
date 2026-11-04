import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/046/78b317f01fe6e9e5",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/046/78b317f01fe6e9e5",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/046/78b317f01fe6e9e5",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/046/78b317f01fe6e9e5",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/046/78b317f01fe6e9e5",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/046/78b317f01fe6e9e5",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/046/78b317f01fe6e9e5",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/046/78b317f01fe6e9e5",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/046/78b317f01fe6e9e5"
    },
    name: {
        en: "Chatot",
        fr: "Pijako",
        es: "Chatot",
        it: "Chatot",
        de: "Plaudagei",
        "pt-br": "Chatot",
        "zh-tw": "聒噪鳥",
        ko: "페라페",
        ja: "ペラップ"
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [441],
    stage: "Basic",
    description: {
        en: "It can learn and speak human words. If they gather, they all learn the same saying.",
        fr: "On peut lui enseigner quelques mots. S’il s’agit d’un groupe,\nils retiendront les mêmes phrases.",
        es: "Puede imitar el lenguaje humano. Si se juntan varios, todos\naprenden las mismas palabras.",
        it: "Può imparare il linguaggio umano. Se un gruppo si raduna,\ntutti imparano le stesse parole.",
        de: "Es kann die menschliche Sprache nachahmen.\nVersammeln sie sich, bringen sich alle dasselbe bei.",
        "pt-br": "Pode aprender e pronunciar palavras humanas. Quando se juntam, todos aprendem as mesmas palavras.",
        "zh-tw": "學習人類的語言來鳴叫。當夥伴們聚集在同一個地方時，大家就會學會同樣的詞語。",
        ja: "人の 言葉を 覚えて 鳴く。 仲間が 一か所に 集まると みんな 同じ 言葉を 覚える。",
        ko: "사람의 말을 기억해서 운다.\n동료가 한 장소에 모이면\n모두 똑같은 말을 기억한다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Spinning Draw",
                fr: "Pioche Tournante",
                es: "Robo Giratorio",
                it: "Pesca Rotante",
                de: "Drehender Zug",
                "pt-br": "Compra Giratória",
                "zh-tw": "迴轉抽出",
                ja: "かいてんドロー",
                ko: "회전드로"
            },
            effect: {
                en: "Draw a card.",
                fr: "Piochez une carte.",
                es: "Roba 1 carta.",
                it: "Pesca una carta.",
                de: "Ziehe 1 Karte.",
                "pt-br": "Compre 1 carta.",
                "zh-tw": "從自己的牌庫抽出1張卡。",
                ja: "自分の山札を1枚引く。",
                ko: "자신의 덱을 1장 뽑는다."
            },
            damage: 10
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol6"]
};

export default card;
