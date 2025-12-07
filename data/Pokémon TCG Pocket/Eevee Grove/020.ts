import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Vanilluxe",
        "fr": "Vanilluxe",
        "es": "vainilla",
        "it": "Vanilluxe",
        "de": "Vanilluxe",
        "pt-br": "Vanilluxo",
        "zh-tw": "香草"
    },
    illustrator: "Ayaka Yoshida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    evolveFrom: {
        en: "Vanillish",
        "fr": "Vanillé",
        "es": "vainilla",
        "it": "Vanillish",
        "de": "Vanillin",
        "pt-br": "Vanilizado",
        "zh-tw": "香草味"
    },
    description: {
        en: "When its anger reaches a breaking point, this\nPokémon unleashes a fierce blizzard that freezes\nevery creature around it, be they friend or foe.",
        "fr": "Quand sa colère atteint un point de rupture,\nPokémon déclenche un violent blizzard qui gèle\ntoutes les créatures qui l'entourent, qu'elles soient amies ou ennemies.",
        "es": "Cuando su ira llega a un punto de ruptura, este\nPokémon desata una feroz tormenta de nieve que congela\ntodas las criaturas que lo rodean, ya sean amigas o enemigas.",
        "it": "Quando la sua rabbia raggiunge un punto di rottura, questo\nI Pokémon scatenano una feroce bufera di neve che congela\nogni creatura attorno ad esso, siano essi amici o nemici.",
        "de": "Wenn seine Wut einen Bruchpunkt erreicht, ist dies der Fall\nPokémon entfesselt einen heftigen Schneesturm, der erstarrt\njedes Lebewesen um ihn herum, ob Freund oder Feind.",
        "pt-br": "Quando sua raiva atinge um ponto de ruptura, este\nPokémon desencadeia uma forte nevasca que congela\ntodas as criaturas ao seu redor, sejam elas amigas ou inimigas.",
        "zh-tw": "當它的憤怒達到臨界點時，\n神奇寶貝釋放出猛烈的冰凍暴風雪\n它周圍的每一個生物，無論是朋友還是敵人。"
    },
    stage: "Stage2",
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
            damage: 80,
            cost: ["Water", "Colorless"],
            effect: {
                en: "Flip 2 coins. This attack does 80 damage for each heads.",
                "fr": "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque tête.",
                "es": "Lanza 2 monedas. Este ataque hace 80 de daño por cada cabeza.",
                "it": "Lancia 2 monete. Questo attacco infligge 80 danni per ogni testa.",
                "de": "Wirf 2 Münzen. Dieser Angriff verursacht 80 Schaden pro Kopf.",
                "pt-br": "Jogue 2 moedas. Este ataque causa 80 de dano para cada cabeça.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 80 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
