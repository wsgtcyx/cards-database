import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/223",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/223",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/223",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/223",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/223",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/223",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/223",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B4/223",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B4/223"
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
    illustrator: "MAHOU",
    rarity: "One Shiny",
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
        "pt-br": "Buneary pode atacar enrolando as orelhas e depois atacando com a força criada ao desenrolá-las. Este ataque fica mais forte com o treinamento.",
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
                it: "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
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
    retreat: 1
};

export default card;
