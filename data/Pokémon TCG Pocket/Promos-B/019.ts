import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/019",
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/019",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/019",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/019",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/019",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/019"
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
    rarity: "None",
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
        "zh-tw": "會利用把捲成團的耳朵伸直\n時的威力來使出攻擊招式。\n越訓練，招式威力就會越大。"
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
                "zh-tw": "二連踢"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
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
