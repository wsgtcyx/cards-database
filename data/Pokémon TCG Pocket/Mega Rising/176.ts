import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Druddigon",
        "fr": "Druddigon",
        "es": "Druddigon",
        "it": "Druddigon",
        "de": "Druddigon",
        "pt-br": "Druddigon",
        "zh-tw": "赤面龍",
    },
    illustrator: "hatachu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Dragon"],
    description: {
        en: "Druddigon are vicious and cunning. They take up\nresidence in nests dug out by other Pokémon,\ntreating the stolen nests as their own lairs.",
        "fr": "Les Druddigo sont vicieux et rusés. Ils reprennent\nrésidence dans des nids creusés par d'autres Pokémon,\ntraitant les nids volés comme leurs propres repaires.",
        "es": "Los Druddigon son crueles y astutos. ellos toman\nresidencia en nidos excavados por otros Pokémon,\ntratando los nidos robados como sus propias guaridas.",
        "it": "I Druddigon sono malvagi e astuti. Prendono\nresidenza in nidi scavati da altri Pokémon,\ntrattando i nidi rubati come le proprie tane.",
        "de": "Druddigon sind bösartig und gerissen. Sie nehmen auf\nAufenthalt in von anderen Pokémon gegrabenen Nestern,\nSie behandeln die gestohlenen Nester wie ihre eigenen Verstecke.",
        "pt-br": "Druddigon são cruéis e astutos. Eles ocupam\nresidência em ninhos escavados por outros Pokémon,\ntratando os ninhos roubados como seus próprios covis.",
        "zh-tw": "德魯迪岡惡毒而狡猾。他們佔用\n居住在其他神奇寶貝挖出的巢穴中，\n把偷來的巢穴當作自己的巢穴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Giga Claw",
                "fr": "Giga-griffe",
                "es": "Giga Garra",
                "it": "Gigaartiglio",
                "de": "Giga-Klaue",
                "pt-br": "Giga Garra",
                "zh-tw": "千兆爪"
            },
            damage: 120,
            cost: ["Fire", "Water", "Colorless", "Colorless"],
            effect: {
                en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
                "fr": "Lancez 2 pièces. Si les deux sont face, cette attaque ne fait rien.",
                "es": "Lanza 2 monedas. Si ambos son cruz, este ataque no hace nada.",
                "it": "Lancia 2 monete. Se entrambi escono croce, questo attacco non ha alcun effetto.",
                "de": "Wirf 2 Münzen. Wenn beide Schwänze sind, hat dieser Angriff keine Wirkung.",
                "pt-br": "Jogue 2 moedas. Se ambos derem coroa, este ataque não fará nada.",
                "zh-tw": "翻轉 2 個硬幣。如果兩者都是反面，則此攻擊不起作用。"
            }
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 2
};
export default card;
