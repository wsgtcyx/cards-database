import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Sableye",
        "fr": "Sableye",
        "es": "Sableye",
        "it": "Sableye",
        "de": "Sableye",
        "pt-br": "Sableye",
        "zh-tw": "勾魂眼",
    },
    illustrator: "Hitoshi Ariga",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    description: {
        en: "Materials from gems it has eaten float to the\nsurface of its body and can form an infinite\nnumber of patterns among individuals.",
        "fr": "Les matériaux provenant des pierres précieuses qu'il a mangées flottent vers le\nsurface de son corps et peut former une infinité\nnombre de modèles parmi les individus.",
        "es": "Los materiales de las gemas que ha comido flotan hacia el\nsuperficie de su cuerpo y puede formar un infinito\nnúmero de patrones entre los individuos.",
        "it": "I materiali delle gemme che ha mangiato galleggiano sul\nsuperficie del suo corpo e può formare un infinito\nnumero di modelli tra gli individui.",
        "de": "Materialien aus Edelsteinen, die es gefressen hat, schweben dorthin\nOberfläche seines Körpers und kann ein Unendliches bilden\nAnzahl der Muster zwischen Individuen.",
        "pt-br": "Os materiais das gemas que ele comeu flutuam para o\nsuperfície de seu corpo e pode formar um infinito\nnúmero de padrões entre os indivíduos.",
        "zh-tw": "牠吃掉的寶石材料會漂浮到\n它的身體表面可以形成無限大的\n個體之間的模式數量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Dirty Throw",
                "fr": "Lancer sale",
                "es": "Tiro sucio",
                "it": "Lancio sporco",
                "de": "Schmutziger Wurf",
                "pt-br": "Arremesso Sujo",
                "zh-tw": "髒亂投擲"
            },
            damage: 70,
            cost: ["Psychic", "Psychic"],
            effect: {
                en: "Discard a card from your hand. If you can't, this attack does nothing.",
                "fr": "Défaussez une carte de votre main. Si vous n’y parvenez pas, cette attaque ne fait rien.",
                "es": "Descarta una carta de tu mano. Si no puedes, este ataque no hace nada.",
                "it": "Scarta una carta dalla tua mano. Se non puoi, questo attacco non ha alcun effetto.",
                "de": "Wirf eine Karte aus deiner Hand ab. Wenn Sie das nicht können, bewirkt dieser Angriff nichts.",
                "pt-br": "Descarte uma carta da sua mão. Se não conseguir, este ataque não fará nada.",
                "zh-tw": "棄掉你手上的一張牌。如果你做不到，那麼這次攻擊就沒有任何作用。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
