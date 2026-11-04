import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/073/77ca74f0132e0748",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/073/77ca74f0132e0748",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/073/77ca74f0132e0748",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/073/77ca74f0132e0748",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/073/77ca74f0132e0748",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/073/77ca74f0132e0748",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/073/77ca74f0132e0748",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/073/77ca74f0132e0748",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/073/77ca74f0132e0748"
    },
    name: {
        en: "Froslass",
        fr: "Momartik",
        es: "Froslass",
        it: "Froslass",
        de: "Frosdedje",
        "pt-br": "Froslass",
        "zh-tw": "雪妖女",
        ko: "눈여아",
        ja: "ユキメノコ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [478],
    evolveFrom: {
        en: "Snorunt",
        fr: "Stalgamin",
        es: "Snorunt",
        it: "Snorunt",
        de: "Schneppke",
        "pt-br": "Snorunt",
        "zh-tw": "雪童子",
        ko: "눈꼬마",
        ja: "ユキワラシ"
    },
    stage: "Stage1",
    description: {
        en: "It freezes prey by blowing its -58 degree Fahrenheit breath. It is said to then secretly display its prey.",
        fr: "On dit que Momartik gèle ses proies grâce à son souffle à -50 °C avant de les exposer dans sa tanière.",
        es: "Congela a sus presas con su aliento gélido a -50 °C. Se dice que luego las dispone como decoración en algún lugar secreto.",
        it: "Congela le prede con un alito glaciale a -50 °C. Si dice che poi le metta in mostra in un luogo segreto.",
        de: "Sein −50 °C kalter Atem friert Beute ein. Es soll diese dann an geheimen Orten ausstellen.",
        "pt-br": "Congela a presa assoprando a uma temperatura de -50 °C. Dizem que mostra secretamente sua presa.",
        "zh-tw": "據說會吐出零下50度的氣息凍結獵物，然後帶到秘密的地方裝飾起來。",
        ja: "マイナス50度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。",
        ko: "영하 50도의 숨결을 뿜어서\n얼린 먹이를 비밀 장소에\n장식해 둔다고 전해진다."
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Soul Shot",
                fr: "Tir Spirituel",
                es: "Disparo de Alma",
                it: "Colpospirito",
                de: "Seelenschuss",
                "pt-br": "Disparo da Alma",
                "zh-tw": "靈魂射擊",
                ja: "ソウルシュート",
                ko: "소울슛"
            },
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                fr: "Défaussez une carte de votre main. Si vous ne pouvez pas en défausser, cette attaque ne fait rien.",
                es: "Descarta 1 carta de tu mano. Si no puedes, este ataque no hace nada.",
                it: "Scarta una delle carte che hai in mano. Se non puoi, questo attacco non ha effetto.",
                de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen.",
                "pt-br": "Descarte uma carta da sua mão. Se não puder fazer isso, este ataque não fará nada.",
                "zh-tw": "從自己的手牌抽出1張丟棄。若無法丟棄,則這個招式失敗。",
                ja: "自分の手札を1枚トラッシュ。トラッシュできないなら、このワザは失敗。",
                ko: "자신의 패를 1장 트래쉬한다. 트래쉬할 수 없다면 이 기술은 실패한다."
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Metal",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: ["vol10"]
};

export default card;
