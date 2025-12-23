import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Buneary",
        "fr": "Laporeille",
        "es": "Buneary",
        "it": "Buneary",
        "de": "Haspiror",
        "pt-br": "Buneary",
        "zh-tw": "捲捲耳"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Buneary can attack by rolling up their ears and\nthen striking with the force created by unrolling\nthem. This attack becomes stronger with training.",
        "fr": "Buneary peut attaquer en retroussant ses oreilles et\npuis frapper avec la force créée par le déroulement\neux. Cette attaque devient plus forte avec l'entraînement.",
        "es": "Buneary puede atacar enrollando las orejas y\nluego golpeando con la fuerza creada al desenrollar\nellos. Este ataque se vuelve más fuerte con el entrenamiento.",
        "it": "Buneary può attaccare arrotolando le orecchie e\npoi colpendo con la forza creata dallo srotolamento\nloro. Questo attacco diventa più forte con l'allenamento.",
        "de": "Buneary kann angreifen, indem es die Ohren hochkrempelt und\ndann mit der durch das Abrollen erzeugten Kraft zuschlagen\nsie. Dieser Angriff wird mit dem Training stärker.",
        "pt-br": "Buneary pode atacar enrolando as orelhas e\nem seguida, golpeando com a força criada ao desenrolar\neles. Este ataque fica mais forte com o treinamento.",
        "zh-tw": "Bunary可以通過捲起耳朵來攻擊\n然後用展開時產生的力量進行打擊\n他們。這種攻擊隨著訓練而變得更強。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Double Kick",
                "fr": "Double coup de pied",
                "es": "Doble patada",
                "it": "Doppio calcio",
                "de": "Doppelter Tritt",
                "pt-br": "Chute Duplo",
                "zh-tw": "二連踢"
            },
            damage: 20,
            cost: ["Colorless"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
