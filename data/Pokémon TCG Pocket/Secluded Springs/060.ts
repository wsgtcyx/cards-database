import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4a/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4a/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4a/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4a/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4a/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4a/060",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4a/060",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4a/060",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4a/060"
    },
    name: {
        en: "Teddiursa",
        "fr": "Teddiursa",
        "es": "Teddiursa",
        "it": "Teddiursa",
        "de": "Teddiursa",
        "pt-br": "Teddiursa",
        "zh-tw": "熊寶寶",
        ja: "ヒメグマ",
        ko: "깜지곰",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its paws are soaked in oodles of honey. When\nnervous, Teddiursa will lick its paws and soon\nhave a smile back on its face.",
        "fr": "Ses pattes sont trempées dans une gorgée de miel. Quand\nnerveux, Teddiursa va se lécher les pattes et bientôt\nretrouver le sourire.",
        "es": "Sus patas están empapadas en montones de miel. cuando\nnervioso, Teddiursa se lamerá las patas y pronto\ntener una sonrisa nuevamente en su rostro.",
        "it": "Le sue zampe sono inzuppate in una gran quantità di miele. Quando\nnervoso, Teddiursa si leccherà le zampe e presto\navere di nuovo il sorriso sulle labbra.",
        "de": "Seine Pfoten sind in Unmengen Honig getränkt. Wann\nnervös, Teddiursa wird sich bald die Pfoten lecken\nwieder ein Lächeln im Gesicht haben.",
        "pt-br": "Suas patas estão encharcadas de muito mel. Quando\nnervoso, Teddiursa lamberá as patas e logo\ntenha um sorriso de volta no rosto.",
        "zh-tw": "它的爪子浸滿了蜂蜜。當\n緊張時，泰迪烏薩會舔它的爪子，很快\n臉上重新露出笑容。",
        ja: "手のひらに 甘い 蜜が たっぷり 染み込んでいる。 不安なときは 手のひらを 舐めると 笑顔になる。",
        ko: "손바닥에는 달콤한 꿀이\n잔뜩 배어들어 있다.\n불안할 때 손바닥을 핥으면 웃게 된다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Surprise Attack",
                "fr": "Attaque surprise",
                "es": "Ataque sorpresa",
                "it": "Attacco a sorpresa",
                "de": "Überraschungsangriff",
                "pt-br": "Ataque surpresa",
                "zh-tw": "偷襲",
                ja: "ふいをつく",
                ko: "허찌르기"
            },
            damage: 40,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。",
                ja: "コインを1回投げウラなら、このワザは失敗。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
