import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/081",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/081",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/081",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/081",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/081",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/081"
    },
    name: {
        en: "Tandemaus",
        fr: "Compagnol",
        es: "Tandemaus",
        it: "Tandemaus",
        de: "Zwieps",
        "pt-br": "Tandemaus",
        "zh-tw": "一對鼠",
        pt: "Tandemaus"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 30,
    types: ["Colorless"],
    dexId: [924],
    description: {
        en: "The pair sticks together no matter what. They split any food they find exactly in half and then eat it together.",
        "fr": "Le couple reste soudé quoi qu’il arrive. Ils divisent la nourriture qu’ils trouvent exactement en deux et la mangent ensuite ensemble.",
        "es": "La pareja se mantiene unida pase lo que pase. Dividen cualquier alimento que encuentran exactamente por la mitad y luego lo comen juntos.",
        "it": "La coppia resta unita, qualunque cosa accada. Dividono il cibo che trovano esattamente a metà e poi lo mangiano insieme.",
        "de": "Das Paar hält zusammen, egal was passiert. Sie teilen jedes Futter, das sie finden, genau in zwei Hälften und essen es dann gemeinsam.",
        "pt-br": "O par permanece unido, não importa o que aconteça. Eles dividem qualquer alimento que encontram exatamente pela metade e depois comem juntos.",
        "zh-tw": "無論如何，這一對都會粘在一起。他們把找到的食物精確地分成兩半，然後一起吃。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Double Hit",
                fr: "Coup Double",
                es: "Doble Golpe",
                it: "Doppiosmash",
                de: "Doppelschlag",
                "pt-br": "Golpe Duplo",
                "zh-tw": "雙重打擊",
                pt: "Golpe Duplo"
            },
            damage: "30×",
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
};
export default card;
