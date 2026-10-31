import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/094",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/094",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/094",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/094",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/094",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/094",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/094",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/094",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/094"
    },
    name: {
        en: "Golduck",
        "fr": "Akwakwak",
        "es": "Golduck",
        "it": "Golduck",
        "de": "Entoron",
        "pt-br": "Golduck",
        "zh-tw": "哥達鴨",
        ja: "ゴルダック",
        ko: "골덕",
    },
    illustrator: "Scav",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Psyduck",
        "fr": "Psykokwak",
        "es": "Psyduck",
        "it": "Psyduck",
        "de": "Enton",
        "pt-br": "Psyduck",
        "zh-tw": "可達鴨",
        ja: "コダック",
        ko: "고라파덕",
    },
    description: {
        en: "When it swims at full speed using its long,\nwebbed limbs, its forehead somehow begins\nto glow.",
        "fr": "Lorsqu'il nage à toute vitesse en utilisant son long,\nmembres palmés, son front commence d'une manière ou d'une autre\nbriller.",
        "es": "Cuando nada a toda velocidad usando su largo,\nmiembros palmeados, su frente de alguna manera comienza\nbrillar.",
        "it": "Quando nuota a tutta velocità usando la sua lunga,\narti palmati, la sua fronte in qualche modo inizia\nbrillare.",
        "de": "Wenn es mit voller Geschwindigkeit schwimmt, nutzt es seine langen,\nGliedmaßen sind mit Schwimmhäuten bedeckt, seine Stirn beginnt irgendwie\nleuchten.",
        "pt-br": "Quando nada a toda velocidade usando seu comprimento,\nmembros palmados, sua testa de alguma forma começa\npara brilhar.",
        "zh-tw": "當它用它的長線全速游泳時，\n有蹼的四肢，它的前額以某種方式開始\n發光。",
        ja: "水かきのついた 長い 手足を 使い 全力で 泳ぎだすと なぜか 額が 光り輝く。",
        ko: "물갈퀴가 달린 긴 손발을 써서\n전력으로 헤엄치면\n왠지 이마에서 빛이 반짝인다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Aqua Edge",
                "fr": "Bord Aqua",
                "es": "Borde acuático",
                "it": "Bordo acquatico",
                "de": "Aqua Edge",
                "pt-br": "Borda Aqua",
                "zh-tw": "水色邊緣",
                ja: "アクアエッジ",
                ko: "아쿠아에지"
            },
            damage: 70,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
