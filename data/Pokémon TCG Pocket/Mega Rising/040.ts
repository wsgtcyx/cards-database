import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Darmanitan",
        "fr": "Darmanitan",
        "es": "darmanitano",
        "it": "Darmanitano",
        "de": "Darmanitan",
        "pt-br": "Darmanitano",
        "zh-tw": "達馬尼坦"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fire"],
    evolveFrom: {
        en: "Darumaka",
        "fr": "Darumaka",
        "es": "Darumaka",
        "it": "Darumaka",
        "de": "Darumaka",
        "pt-br": "Darumaka",
        "zh-tw": "達摩卡"
    },
    description: {
        en: "This Pokémon's power level rises along with the\ntemperature of its fire, which can reach 2,500\ndegrees Fahrenheit.",
        "fr": "Le niveau de puissance de ce Pokémon augmente avec le\ntempérature de son feu, qui peut atteindre 2 500\ndegrés Fahrenheit.",
        "es": "El nivel de poder de este Pokémon aumenta junto con el\ntemperatura de su fuego, que puede alcanzar los 2.500\ngrados Fahrenheit.",
        "it": "Il livello di potenza di questo Pokémon aumenta insieme a\ntemperatura del suo fuoco, che può raggiungere i 2.500\ngradi Fahrenheit.",
        "de": "Die Kraftstufe dieses Pokémon steigt mit der Zeit\nDie Temperatur seines Feuers kann 2.500 erreichen\nGrad Fahrenheit.",
        "pt-br": "O nível de poder deste Pokémon aumenta junto com o\ntemperatura do seu fogo, que pode chegar a 2.500\ngraus Fahrenheit.",
        "zh-tw": "該寶可夢的力量等級隨著\n火的溫度可達2,500\n華氏度。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Darmani-Hands",
                "fr": "Darmani-Mains",
                "es": "Darmani-manos",
                "it": "Darmani-Mani",
                "de": "Darmani-Hände",
                "pt-br": "Darmani-Mãos",
                "zh-tw": "達瑪尼手"
            },
            damage: 80,
            cost: ["Fire", "Fire", "Fire", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 30 more damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 30 daños más por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 30 danni in più per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 30 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa mais 30 danos para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。此攻擊對每個頭造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 3
};
export default card;
