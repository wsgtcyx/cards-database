import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/101/3b5d940a35da98c8",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/101/3b5d940a35da98c8",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/101/3b5d940a35da98c8",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/101/3b5d940a35da98c8",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/101/3b5d940a35da98c8",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/101/3b5d940a35da98c8",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/101/3b5d940a35da98c8",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/101/3b5d940a35da98c8",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/101/3b5d940a35da98c8"
    },
    name: {
        en: "Charmander",
        fr: "Salamèche",
        es: "Charmander",
        it: "Charmander",
        de: "Glumanda",
        "pt-br": "Charmander",
        "zh-tw": "小火龍",
        ko: "파이리",
        ja: "ヒトカゲ"
    },
    illustrator: "Sachiko Adachi",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 70,
    types: [
        "Fire"
    ],
    dexId: [
        4
    ],
    stage: "Basic",
    description: {
        en: "If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won’t go out even if it gets a bit wet.",
        fr: "Quand il est en bonne santé, la flamme au bout de sa queue continue de flamboyer même si elle est légèrement aspergée d’eau.",
        es: "Si está sano, la llama de la punta de su cola arderá vigorosamente, aunque se le moje un poco.",
        it: "Se è in forma, la fiamma che ha sulla punta della coda brucia con forza e non si spegne neanche se la coda si bagna un po’.",
        de: "Ist es gesund, strahlt die Flamme an seiner Schwanzspitze leuchtend hell und erlischt selbst dann nicht, wenn sie ein wenig nass wird.",
        "pt-br": "Se Charmander estiver saudável, a chama na ponta da sua cauda queimará vigorosamente e não apagará mesmo que fique um pouco molhada.",
        "zh-tw": "如果小火龍的活力十足，那麼尾巴前端的火焰即使稍微淋濕也會熊熊燃燒，不會熄滅。",
        ja: "尻尾の 先の 炎は 元気なら 少しくらい 濡れても 消えることなく 燃え盛る。",
        ko: "꼬리 끝의 불꽃은 건강할 때라면 조금 젖어도 꺼지지 않고 활활 타오른다."
    },
    attacks: [
        {
            cost: [
                "Fire",
                "Colorless"
            ],
            name: {
                en: "Flame Tail",
                fr: "Queue de Flammes",
                es: "Cola de Fuego",
                it: "Codafiamma",
                de: "Flammenschweif",
                "pt-br": "Cauda de Chamas",
                "zh-tw": "火之尾",
                ja: "ほのおのしっぽ",
                ko: "불꽃 꼬리"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
