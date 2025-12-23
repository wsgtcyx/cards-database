import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Staravia",
        "fr": "Étourvol",
        "es": "Staravia",
        "it": "Staravia",
        "de": "Staravia",
        "pt-br": "Staravia",
        "zh-tw": "姆克鳥"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Starly",
        "fr": "Étourmi",
        "es": "Starly",
        "it": "Starly",
        "de": "Staralili",
        "pt-br": "Starly",
        "zh-tw": "姆克兒"
    },
    description: {
        en: "They maintain huge flocks, although fierce\nscuffles break out between various flocks.",
        "fr": "Ils entretiennent d'immenses troupeaux, bien que féroces\ndes bagarres éclatent entre différents troupeaux.",
        "es": "Mantienen bandadas enormes, aunque feroces.\nEstallan riñas entre varias bandadas.",
        "it": "Mantengono stormi enormi, anche se feroci\nscoppiano tafferugli tra i vari stormi.",
        "de": "Sie halten riesige Herden, obwohl sie wild sind\nZwischen verschiedenen Herden kommt es zu Handgreiflichkeiten.",
        "pt-br": "Eles mantêm rebanhos enormes, embora ferozes\nbrigas acontecem entre vários rebanhos.",
        "zh-tw": "它們維持著龐大的羊群，儘管兇猛\n不同羊群之間爆發了扭打。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Quick Attack",
                "fr": "Attaque rapide",
                "es": "Ataque rápido",
                "it": "Attacco rapido",
                "de": "Schneller Angriff",
                "pt-br": "Ataque Rápido",
                "zh-tw": "電光一閃"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
