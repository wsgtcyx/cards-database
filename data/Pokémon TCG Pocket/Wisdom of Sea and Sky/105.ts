import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Binacle",
        "fr": "Binacle",
        "es": "Binacle",
        "it": "Binacolo",
        "de": "Binakel",
        "pt-br": "Bináculo",
        "zh-tw": "龜腳腳",
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "After two Binacle find a suitably sized rock, they\nadhere themselves to it and live together.\nThey cooperate to gather food during high tide.",
        "fr": "Après que deux Binacle aient trouvé un rocher de taille appropriée, ils\ns'y adhérer et vivre ensemble.\nIls coopèrent pour récolter de la nourriture à marée haute.",
        "es": "Después de que dos Binacle encuentran una roca del tamaño adecuado,\nadherirse a él y vivir juntos.\nCooperan para recolectar alimentos durante la marea alta.",
        "it": "Dopo che due Binacle trovano una roccia di dimensioni adeguate, loro\naderirvi e vivere insieme.\nCollaborano per raccogliere cibo durante l'alta marea.",
        "de": "Nachdem zwei Binacle einen Stein geeigneter Größe gefunden haben, gehen sie\nhalten sich daran und leben zusammen.\nSie arbeiten zusammen, um bei Flut Nahrung zu sammeln.",
        "pt-br": "Depois que dois Binacle encontram uma pedra de tamanho adequado, eles\naderem a ele e vivem juntos.\nEles cooperam para coletar alimentos durante a maré alta.",
        "zh-tw": "兩隻 Binacle 找到一塊大小合適的岩石後，他們\n堅持下去並生活在一起。\n他們在漲潮時合作收集食物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dual Chop",
                "fr": "Double coupe",
                "es": "Picado doble",
                "it": "Doppio taglio",
                "de": "Dual Chop",
                "pt-br": "Corte duplo",
                "zh-tw": "雙斬"
            },
            damage: 30,
            cost: ["Fighting", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 30 daños por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 30 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 30 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 30 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
