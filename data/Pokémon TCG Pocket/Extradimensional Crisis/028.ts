import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Meditite",
        "fr": "Méditer",
        "es": "meditar",
        "it": "Medita",
        "de": "Meditit",
        "pt-br": "Medite",
        "zh-tw": "麥迪泰"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It never skips its daily yoga training. It heightens\nits inner strength through meditation.",
        "fr": "Il ne saute jamais son entraînement quotidien de yoga. Il augmente\nsa force intérieure à travers la méditation.",
        "es": "Nunca falta a su entrenamiento diario de yoga. Se intensifica\nsu fuerza interior a través de la meditación.",
        "it": "Non salta mai il suo allenamento quotidiano di yoga. Si intensifica\nla sua forza interiore attraverso la meditazione.",
        "de": "Es lässt sein tägliches Yoga-Training nie aus. Es steigert sich\nseine innere Stärke durch Meditation.",
        "pt-br": "Ele nunca pula seu treinamento diário de ioga. Isso aumenta\nsua força interior através da meditação.",
        "zh-tw": "它從不跳過日常瑜伽訓練。它提高了\n通過冥想獲得內在的力量。"
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
            cost: ["Fighting"],
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
