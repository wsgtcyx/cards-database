import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Nosepass",
        "fr": "Tarinor",
        "es": "Nosepass",
        "it": "Nosepass",
        "de": "Nasgnet",
        "pt-br": "Nosepass",
        "zh-tw": "朝北鼻"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "The magnet in Nosepass's nose provides an\nunerring compass, making it an excellent\npartner for Trainers going on a journey.",
        "fr": "L'aimant dans le nez du Nosepass fournit un\nboussole infaillible, ce qui en fait un excellent\npartenaire des formateurs en voyage.",
        "es": "El imán en la nariz de Nosepass proporciona una\nbrújula infalible, lo que la convierte en una excelente\nsocio para formadores que se van de viaje.",
        "it": "Il magnete nel naso di Nosepass fornisce un\nbussola infallibile, che lo rende un eccellente\npartner per gli Allenatori che intraprendono un viaggio.",
        "de": "Der Magnet in der Nase von Nosepass sorgt für eine\nzielsicherer Kompass, was ihn zu einem hervorragenden Gerät macht\nPartner für Trainer, die auf Reisen gehen.",
        "pt-br": "O ímã no nariz do Nosepass fornece um\nbússola infalível, tornando-a um excelente\nparceiro para treinadores em viagem.",
        "zh-tw": "Nosepass 鼻子中的磁鐵提供了\n準確無誤的指南針，使其成為一個出色的指南針\n培訓師旅途中的合作夥伴。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rising Lunge",
                "fr": "Fente ascendante",
                "es": "Estocada ascendente",
                "it": "Affondo in salita",
                "de": "Steigender Ausfallschritt",
                "pt-br": "Estocada ascendente",
                "zh-tw": "上升弓步"
            },
            damage: 10,
            cost: ["Colorless"],
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
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
