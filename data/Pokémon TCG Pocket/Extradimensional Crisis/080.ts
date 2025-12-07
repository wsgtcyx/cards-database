import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Alolan Dugtrio ex",
        "fr": "Alolan Dugtrio ex",
        "es": "Alola Dugtrio ex",
        "it": "Alolan Dugtrio ex",
        "de": "Alolan Dgtrio ex",
        "pt-br": "Ex-Alolan Dugtrio",
        "zh-tw": "阿羅拉三地鼠 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Metal"],
    evolveFrom: {
        en: "Alolan Diglett",
        "fr": "Alolan Diglett",
        "es": "Diglett de Alola",
        "it": "Diglett di Alola",
        "de": "Alolan Diglett",
        "pt-br": "Alola Diglett",
        "zh-tw": "阿羅蘭·迪格利特"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Triplet Headbutt",
                "fr": "Coup de tête triplet",
                "es": "Cabezazo triplete",
                "it": "Tripletta di testata",
                "de": "Drillinge-Kopfstoß",
                "pt-br": "Cabeçada tripla",
                "zh-tw": "三連發頭撞"
            },
            damage: 60,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "Flip 3 coins. This attack does 60 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 60 de daño por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 60 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 60 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 60 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 60 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
