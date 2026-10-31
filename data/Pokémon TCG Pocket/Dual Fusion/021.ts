import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/021",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/021",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/021"
    },
    name: {
        en: "Salazzle",
        fr: "Malamandre",
        es: "Salazzle",
        "pt-br": "Salazzle",
        "zh-tw": "焰后蜥",
        ja: "エンニュート",
        ko: "염뉴트",
        it: "Salazzle",
        de: "Amfira"
    },
    illustrator: "aoki",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 90,
    types: [
        "Fire"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Salandit",
        fr: "Tritox",
        es: "Salandit",
        it: "Salandit",
        de: "Molunk",
        "pt-br": "Salandit",
        "zh-tw": "夜盜火蜥",
        ja: "ヤトウモリ",
        ko: "Salandit"
    },
    attacks: [
        {
            name: {
                en: "Heat Blast",
                fr: "Explosion de Chaleur",
                es: "Explosión de Calor",
                it: "Caldobomba",
                de: "Hitzestoß",
                "pt-br": "Raio de Calor",
                "zh-tw": "高溫爆破",
                ja: "ヒートブラスト",
                ko: "Heat Blast"
            },
            cost: [
                "Fire",
                "Fire"
            ],
            damage: 70
        }
    ],
    abilities: [],
    description: {
        en: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
        fr: "Il étourdit ses adversaires avec son gaz toxique, puis il les asservit en exécutant une danse envoûtante.",
        es: "Convierte a sus rivales en devotos súbditos tras marearlos con su gas venenoso y seducirlos con los cautivadores movimientos de su cuerpo.",
        it: "Trasforma gli avversari in seguaci stordendoli con del gas tossico per poi sedurli con movenze ammalianti.",
        de: "Zuerst benebelt es Gegner mit Giftgas, um sie danach mit fesselnden Körperbewegungen zu betören und zu ergebenen Dienern zu machen.",
        "pt-br": "Salazzle deixa os oponentes zonzos com seu gás venenoso, depois os cativa com movimentos fascinantes para transformá-los em servos leais.",
        "zh-tw": "會用妖魅的身姿迷惑獵物的毒瓦斯將獵物薰得神魂顛倒，使其變成自己忠實的僕人。",
        ja: "毒ガスで クラクラにした 相手を 妖艶な 身のこなしで 誘惑し 忠実な しもべに してしまう。",
        ko: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants."
    }
};

export default card;
