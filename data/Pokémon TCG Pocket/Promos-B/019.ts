import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/019/f3f6e27d02afefed",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/019/f3f6e27d02afefed",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/019/f3f6e27d02afefed",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/019/f3f6e27d02afefed",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/019/f3f6e27d02afefed",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/019/f3f6e27d02afefed",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/019/f3f6e27d02afefed",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/019/f3f6e27d02afefed",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/019/f3f6e27d02afefed"
    },
    name: {
        en: "Buneary",
        fr: "Laporeille",
        es: "Buneary",
        it: "Buneary",
        de: "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ko: "이어롤",
        ja: "ミミロル"
    },
    illustrator: "saino misaki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    dexId: [427],
    stage: "Basic",
    description: {
        en: "Buneary can attack by rolling up their ears and then striking with the force created by unrolling them. This attack becomes stronger with training.",
        fr: "Plus il s’entraîne, plus les coups qu’il assène\nen déroulant vigoureusement ses oreilles\ngagnent en puissance.",
        es: "Ataca estirando con un fuerte impulso las\norejas enrolladas. Cuanto más entrena esta\ntécnica, con más potencia la ejecuta.",
        it: "Attacca estendendo con impeto l’orecchio\narrotolato. Più si allena, più la potenza\ndei suoi attacchi aumenta.",
        de: "Es greift an, indem es seine Ohren aufrollt und\nmit viel Schwung wieder entrollt. Durch Training\nkann Haspiror die Kraft dieser Attacke steigern.",
        "pt-br": "Buneary podem atacar enrolando suas orelhas e desferindo a força criada ao desenrolá-las. Ao treinar, consegue fortalecer ainda mais esse ataque.",
        "zh-tw": "會利用把捲成團的耳朵伸直\n時的威力來使出攻擊招式。\n越訓練，招式威力就會越大。",
        ja: "まるめた 耳を 伸ばす 勢いで 攻撃する 技は トレーニングを するほど 威力が 増していく。",
        ko: "말고 있던 귀를 뻗는 힘으로\n공격하는 기술은 트레이닝을\n할수록 위력이 커진다."
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Double Kick",
                fr: "Double Pied",
                es: "Doble Patada",
                it: "Doppiocalcio",
                de: "Doppelkick",
                "pt-br": "Chute Duplo",
                "zh-tw": "二連踢",
                ja: "にどげり",
                ko: "두번차기"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。",
                ja: "コインを2回投げ、オモテの数×20ダメージ。",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 준다."
            },
            damage: "20x"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
