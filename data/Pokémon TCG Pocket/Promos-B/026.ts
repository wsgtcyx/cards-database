import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/026/88f7e5097af82eaa",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/026/88f7e5097af82eaa",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/026/88f7e5097af82eaa",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/026/88f7e5097af82eaa",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/026/88f7e5097af82eaa",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/026/88f7e5097af82eaa",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/026/88f7e5097af82eaa",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/026/88f7e5097af82eaa",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/026/88f7e5097af82eaa"
    },
    name: {
        en: "Mudkip",
        fr: "Gobou",
        es: "Mudkip",
        it: "Mudkip",
        de: "Hydropi",
        "pt-br": "Mudkip",
        "zh-tw": "水躍魚",
        ko: "물짱이",
        ja: "ミズゴロウ"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [258],
    stage: "Basic",
    description: {
        en: "When it uses its large tail fin, it picks up speed rapidly in the water. It is strong in spite of its small size.",
        fr: "Dans l'eau, les battements de sa grande nageoire caudale le font accélérer de manière fulgurante. Malgré sa petite taille, il est très costaud.",
        es: "Batir su gran aleta caudal en el agua le permite nadar muy rápido. A pesar de su reducido tamaño, tiene mucha fuerza.",
        it: "Può acquisire una straordinaria velocità agitando la grande pinna caudale nell'acqua. È minuto, ma forte.",
        de: "Wenn es seine große Schwanzflosse einsetzt, kann es im Wasser schnell beschleunigen. Es ist überraschend stark für seine geringe Größe.",
        "pt-br": "Ao utilizar sua grande barbatana, ganha velocidade rapidamente na água. É forte, apesar de seu pequeno porte.",
        "zh-tw": "如果用大大的尾鰭划水，速度就會快速提升。身體雖小卻很有力氣。",
        ja: "大きな 尾びれで 水を かけば ぐんぐん スピードが 上がる。 小さい 体でも 力持ち。",
        ko: "커다란 꼬리지느러미로 물을 헤치면\n스피드가 쑥쑥 오른다.\n작은 몸이지만 힘이 장사다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Surprise Attack",
                fr: "Attaque Surprise",
                es: "Ataque Sorpresa",
                it: "Attacco a Sorpresa",
                de: "Überraschungsangriff",
                "pt-br": "Ataque Surpresa",
                "zh-tw": "偷襲",
                ja: "ふいをつく",
                ko: "허찌르기"
            },
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
                es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
                it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
                de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
                "zh-tw": "擲1次硬幣若為反面,則這個招式失敗。",
                ja: "コインを1回投げウラなら、このワザは失敗。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol4"]
};

export default card;
