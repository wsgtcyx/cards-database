import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Aipom",
        "fr": "Aipom",
        "es": "Aipom",
        "it": "Aipom",
        "de": "Aipom",
        "pt-br": "Aipom",
        "zh-tw": "長尾怪手",
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "It searches for prey from the tops of trees.\nWhen it spots its favorite food, Bounsweet,\nAipom gets excited and pounces.",
        "fr": "Il recherche ses proies à la cime des arbres.\nLorsqu'il repère son aliment préféré, le Bounsweet,\nAipom s'excite et bondit.",
        "es": "Busca presas en las copas de los árboles.\nCuando ve su comida favorita, Bounsweet,\nAipom se emociona y salta.",
        "it": "Cerca la preda dalle cime degli alberi.\nQuando individua il suo cibo preferito, Bounsweet,\nAipom si eccita e si avventa.",
        "de": "Es sucht in den Baumwipfeln nach Beute.\nWenn es sein Lieblingsessen, Bounsweet, entdeckt,\nAipom wird aufgeregt und stürzt sich.",
        "pt-br": "Ele procura presas no topo das árvores.\nQuando avista sua comida favorita, Bounsweet,\nAipom fica animado e ataca.",
        "zh-tw": "它從樹頂尋找獵物。\n當它發現它最喜歡的食物 Bounsweet 時，\nAipom 興奮起來並猛撲過去。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tail Smash",
                "fr": "Fracas de queue",
                "es": "Golpe de cola",
                "it": "Colpo di coda",
                "de": "Schwanzschlag",
                "pt-br": "Quebra de cauda",
                "zh-tw": "尾部粉碎"
            },
            damage: 40,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin. If tails, this attack does nothing.",
                "fr": "Lancez une pièce de monnaie. Si c’est pile, cette attaque ne fait rien.",
                "es": "Lanza una moneda. Si sale cruz, este ataque no hace nada.",
                "it": "Lancia una moneta. Se esce croce, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Münze. Bei „Zahl“ bewirkt dieser Angriff nichts.",
                "pt-br": "Jogue uma moeda. Se der coroa, este ataque não faz nada.",
                "zh-tw": "拋一枚硬幣。如果是反面，則此攻擊不會執行任何操作。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
