import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/108",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/108",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/108",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/108",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/108",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/108",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/108"
    },
    name: {
        en: "Metagross",
        fr: "Métalosse",
        es: "Metagross",
        it: "Metagross",
        de: "Metagross",
        "pt-br": "Metagross",
        "zh-tw": "巨金怪",
        ko: "메타그로스",
        ja: "メタグロス"
    },
    illustrator: "kawayoo",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Metal"],
    dexId: [376],
    evolveFrom: {
        en: "Metang",
        fr: "Métang",
        es: "Metang",
        it: "Metang",
        de: "Metang",
        "pt-br": "Metang",
        "zh-tw": "金屬怪",
        ko: "메탕구",
        ja: "メタング"
    },
    stage: "Stage2",
    description: {
        en: "It firmly pins its prey using its four claws and large body. Then the teeth in the mouth on its stomach chew the prey to bits.",
        fr: "Avec ses quatre groupes de griffes et son\ncorps imposant, il immobilise ses victimes\npour ensuite mieux les dévorer.",
        es: "Con sus cuatro garras y su descomunal cuerpo\naprisiona a sus presas para luego devorarlas\ncon sus dientes.",
        it: "Blocca la preda al suolo con le quattro zampe\nartigliate e il corpo massiccio, poi la divora con i\ndenti sulla pancia.",
        de: "Mit seinen spitzen Beinkrallen und dem massigen\nKörper drückt es seine Beute zu Boden und\nzerkaut sie dann mit seinen Zähnen am Bauch.",
        "zh-tw": "用４隻爪子和龐大的身體\n牢牢地按住獵物後，\n用腹部的牙齒嚼食。"
    },
    attacks: [
        {
            cost: ["Metal", "Colorless", "Colorless"],
            name: {
                en: "Squared Attack",
                fr: "Attaque Carrée",
                es: "Ataque al Cuadrado",
                "pt-br": "Ataque Alinhado",
                "zh-tw": "宏偉十字擊"
            },
            effect: {
                en: "Flip 4 coins. This attack does 50 damage for each heads.",
                fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
                es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
                it: "Lancia 4 monete. Questo attacco infligge 50 danni per ogni testa.",
                de: "Wirf 4 Münzen. Dieser Angriff verursacht 50 Schaden pro Kopf.",
                "pt-br": "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
                "zh-tw": "擲4次硬幣,造成正面出現的次數×50點傷害。"
            },
            damage: "50x"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
