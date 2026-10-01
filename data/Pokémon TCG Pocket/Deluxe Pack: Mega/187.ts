import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/187",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/187",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/187",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/187",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/187",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/187",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/187"
    },
    name: {
        en: "Buneary",
        fr: "Laporeille",
        es: "Buneary",
        it: "Buneary",
        de: "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳",
        ja: "ミミロル",
        ko: "이어롤"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Colorless"
    ],
    dexId: [
        427
    ],
    stage: "Basic",
    description: {
        en: "Buneary can attack by rolling up their ears and then striking with the force created by unrolling them. This attack becomes stronger with training.",
        fr: "Plus il s'entraîne, plus les coups qu'il assène en déroulant vigoureusement ses oreilles gagnent en puissance.",
        es: "Ataca estirando con un fuerte impulso las orejas enrolladas. Cuanto más entrena esta técnica, con más potencia la ejecuta.",
        it: "Attacca estendendo con impeto l'orecchio arrotolato. Più si allena, più la potenza dei suoi attacchi aumenta.",
        de: "Es greift an, indem es seine Ohren aufrollt und mit viel Schwung wieder entrollt. Durch Training kann Haspiror die Kraft dieser Attacke steigern.",
        "pt-br": "Buneary podem atacar enrolando suas orelhas e desferindo a força criada ao desenrolá-las. Ao treinar, consegue fortalecer ainda mais esse ataque.",
        "zh-tw": "會利用把捲成團的耳朵伸直時的威力來使出攻擊招式。越訓練，招式威力就會越大。",
        ja: "Buneary can attack by rolling up their ears and then striking with the force created by unrolling them. This attack becomes stronger with training.",
        ko: "Buneary can attack by rolling up their ears and then striking with the force created by unrolling them. This attack becomes stronger with training."
    },
    attacks: [
        {
            cost: [
                "Colorless"
            ],
            name: {
                en: "Double Kick",
                fr: "Double Pied",
                es: "Doble Patada",
                it: "Doppiocalcio",
                de: "Doppelkick",
                "pt-br": "Chute Duplo",
                "zh-tw": "二連踢",
                ja: "Double Kick",
                ko: "Double Kick"
            },
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
                "zh-tw": "擲2次硬幣,造成正面出現的次數×20點傷害。",
                ja: "Flip 2 coins. This attack does 20 damage for each heads.",
                ko: "Flip 2 coins. This attack does 20 damage for each heads."
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
