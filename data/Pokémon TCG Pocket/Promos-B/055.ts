import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/055",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/055",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/055",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/055",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/055",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/055",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-B/055"
    },
    name: {
        en: "Zygarde ex",
        fr: "Zygarde-ex",
        es: "Zygarde ex",
        it: "Zygarde-ex",
        de: "Zygarde-ex",
        "pt-br": "Zygarde ex",
        "zh-tw": "基格爾德ex",
        ko: "지가르데 ex",
        ja: "ジガルデex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "None",
    category: "Pokemon",
    hp: 170,
    types: ["Fighting"],
    dexId: [718],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fighting", "Fighting", "Fighting"],
            name: {
                en: "Land Laser",
                fr: "Laser Chtonien",
                es: "Láser Telúrico",
                it: "Laser Tellurico",
                de: "Bodenlaser",
                "pt-br": "Laser da Terra",
                "zh-tw": "大地鐳射"
            },
            effect: {
                en: "Flip 2 coins. This attack does 100 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque tête.",
                es: "Lanza 2 monedas. Este ataque hace 100 de daño por cada cabeza.",
                it: "Lancia 2 monete. Questo attacco infligge 100 danni per ogni testa.",
                de: "Wirf 2 Münzen. Dieser Angriff verursacht 100 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 100 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 100 點傷害。"
            },
            damage: "100x"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 4,
    boosters: []
};

export default card;
