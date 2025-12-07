import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Simisage",
        "fr": "Simisage",
        "es": "Simulación",
        "it": "Simisage",
        "de": "Simisage",
        "pt-br": "Simulação",
        "zh-tw": "西米薩吉"
    },
    illustrator: "tetsuya koizumi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Pansage",
        "fr": "Pansage",
        "es": "Pansage",
        "it": "Pansage",
        "de": "Pansage",
        "pt-br": "Pansagem",
        "zh-tw": "潘薩吉"
    },
    description: {
        en: "Ill tempered, it fights by swinging its barbed tail\naround wildly. The leaf growing on its head is\nvery bitter.",
        "fr": "De mauvaise humeur, il se bat en balançant sa queue barbelée\nautour sauvagement. La feuille qui pousse sur sa tête est\ntrès amer.",
        "es": "De mal genio, lucha moviendo su cola con púas.\nalrededor salvajemente. La hoja que crece en su cabeza es\nmuy amargo.",
        "it": "Di cattivo umore, combatte agitando la coda uncinata\nin giro selvaggiamente. La foglia che cresce sulla sua testa lo è\nmolto amaro.",
        "de": "Es ist schlecht gelaunt und kämpft, indem es seinen stacheligen Schwanz schwingt\nwild umher. Das auf seinem Kopf wachsende Blatt ist\nsehr bitter.",
        "pt-br": "Mal humorado, ele luta balançando sua cauda farpada\nao redor descontroladamente. A folha que cresce em sua cabeça é\nmuito amargo.",
        "zh-tw": "脾氣暴躁，會擺動帶刺的尾巴來戰鬥\n瘋狂地四處走動。它頭上長的葉子是\n很苦。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fury Swipes",
                "fr": "Coups de fureur",
                "es": "Golpes de furia",
                "it": "Colpi di furia",
                "de": "Wut-Swipes",
                "pt-br": "Golpes de Fúria",
                "zh-tw": "狂怒橫掃"
            },
            damage: 40,
            cost: ["Grass", "Colorless"],
            effect: {
                en: "Flip 3 coins. This attack does 40 damage for each heads.",
                "fr": "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque tête.",
                "es": "Lanza 3 monedas. Este ataque hace 40 daños por cada cabeza.",
                "it": "Lancia 3 monete. Questo attacco infligge 40 danni per ogni testa.",
                "de": "Wirf 3 Münzen. Dieser Angriff verursacht 40 Schaden pro Kopf.",
                "pt-br": "Jogue 3 moedas. Este ataque causa 40 de dano para cada cabeça.",
                "zh-tw": "翻轉 3 個硬幣。這次攻擊對每個頭造成 40 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
