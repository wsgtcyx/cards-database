import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
        "pt-br": "Misdreavus",
        "zh-tw": "誤判"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It loves to bite and yank people's hair from\nbehind without warning, just to see their\nshocked reactions.",
        "fr": "Il adore mordre et arracher les cheveux des gens.\nderrière sans prévenir, juste pour voir leur\nréactions choquées.",
        "es": "Le encanta morder y arrancarle el pelo a la gente.\ndetrás sin previo aviso, sólo para ver sus\nreacciones de sorpresa.",
        "it": "Ama mordere e strappare i capelli alle persone\ndietro senza preavviso, solo per vederli\nreazioni scioccate.",
        "de": "Es liebt es, Menschen in die Haare zu beißen und auszureißen\nohne Vorwarnung zurück, nur um sie zu sehen\nschockierte Reaktionen.",
        "pt-br": "Ele adora morder e arrancar o cabelo das pessoas\natrás sem avisar, só para ver seus\nreações chocadas.",
        "zh-tw": "牠喜歡咬人並拉扯人的頭髮\n毫無徵兆的落後，只是為了看到他們\n震驚的反應。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Double Spin",
                "fr": "Double rotation",
                "es": "Doble giro",
                "it": "Doppio giro",
                "de": "Doppelter Spin",
                "pt-br": "Giro Duplo",
                "zh-tw": "雙旋轉"
            },
            damage: 20,
            cost: ["Psychic"],
            effect: {
                en: "Flip 2 coins. This attack does 20 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 20 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 20 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 20 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 20 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
