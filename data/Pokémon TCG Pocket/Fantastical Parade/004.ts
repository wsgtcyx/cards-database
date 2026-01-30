import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    name: {
        en: "Roselia",
        "fr": "Rosélia",
        "es": "rosalia",
        "it": "Roselia",
        "de": "Roselia",
        "pt-br": "Rosélia",
        "zh-tw": "羅塞利亞"
    },
    illustrator: "Hajime Kusajima",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "It uses the different poisons in each hand\nseparately when it attacks. The stronger its\naroma, the healthier it is.",
        "fr": "Il utilise les différents poisons de chaque main\nséparément quand il attaque. Plus il est fort\narôme, plus il est sain.",
        "es": "Utiliza los diferentes venenos en cada mano.\npor separado cuando ataca. Cuanto más fuerte es\naroma, más saludable es.",
        "it": "Utilizza i diversi veleni in ogni mano\nseparatamente quando attacca. Più è forte\naroma, più è sano.",
        "de": "Es verwendet die unterschiedlichen Gifte in jeder Hand\nseparat, wenn es angreift. Je stärker es ist\nAroma, desto gesünder ist es.",
        "pt-br": "Ele usa os diferentes venenos em cada mão\nseparadamente quando ataca. Quanto mais forte for\naroma, mais saudável ele é.",
        "zh-tw": "每隻手都使用不同的毒藥\n攻擊時分開。其強度越強\n香氣濃郁，越健康。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Trip Over",
                "fr": "Voyage terminé",
                "es": "Tropezar",
                "it": "Inciampare",
                "de": "Stolpern vorbei",
                "pt-br": "Viagem",
                "zh-tw": "絆倒"
            },
            damage: 10,
            cost: ["Grass"],
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
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
