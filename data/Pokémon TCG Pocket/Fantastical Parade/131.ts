import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/131",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/131",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/131",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/131",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/131",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/131",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/131"
    },
    name: {
        en: "Lugia",
        "fr": "Lugia",
        "es": "Lugia",
        "it": "Lugia",
        "de": "Lugia",
        "pt-br": "Lugia",
        "zh-tw": "洛奇亞"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    description: {
        en: "It is said to be the guardian of the seas. It is\nrumored to have been seen on the night of a storm.",
        "fr": "On dit qu'il est le gardien des mers. C'est\nla rumeur aurait été aperçue la nuit d'une tempête.",
        "es": "Se dice que es el guardián de los mares. es\nSe rumorea que fue visto en la noche de una tormenta.",
        "it": "Si dice che sia il guardiano dei mari. Lo è\nsi dice che sia stato visto durante la notte di un temporale.",
        "de": "Es gilt als Wächter der Meere. Es ist\nGerüchten zufolge wurde er in der Nacht eines Sturms gesehen.",
        "pt-br": "Diz-se que é o guardião dos mares. É\nhá rumores de ter sido visto na noite de uma tempestade.",
        "zh-tw": "據說它是海洋的守護者。它是\n據傳在暴風雨之夜有人看到過。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Aeroblast",
                "fr": "Aéroblaste",
                "es": "aeroblasto",
                "it": "Aeroblast",
                "de": "Aeroblast",
                "pt-br": "Aeroblasto",
                "zh-tw": "氣爆"
            },
            damage: 80,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 40 more damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 40 daños más por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 40 danni in più per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 40 weitere Schadenspunkte pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa mais 40 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
