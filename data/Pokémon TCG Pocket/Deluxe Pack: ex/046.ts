import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Pheromosa",
        "fr": "Phéromosa",
        "es": "feromosa",
        "it": "Feromosa",
        "de": "Pheromosa",
        "pt-br": "Feromosa",
        "zh-tw": "費洛美螂",
    },
    illustrator: "Shin Nagasawa",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Grass"],
    description: {
        en: "A life-form that lives in another world, its body\nis thin and supple, but it also possesses\ngreat power.",
        "fr": "Une forme de vie qui vit dans un autre monde, son corps\nest fin et souple, mais il possède aussi\ngrande puissance.",
        "es": "Una forma de vida que vive en otro mundo, su cuerpo.\nes delgado y flexible, pero también posee\ngran poder.",
        "it": "Una forma di vita che vive in un altro mondo, il suo corpo\nè sottile ed elastica, ma possiede anche\ngrande potere.",
        "de": "Eine Lebensform, die in einer anderen Welt lebt, ihrem Körper\nist dünn und geschmeidig, besitzt aber auch\ngroße Macht.",
        "pt-br": "Uma forma de vida que vive em outro mundo, seu corpo\né fino e flexível, mas também possui\ngrande poder.",
        "zh-tw": "生活在異世界的生命體，其身體\n薄而柔軟，但它還具有\n偉大的力量。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Jump Blues",
                "fr": "Sauter le blues",
                "es": "Saltar blues",
                "it": "Salta il blues",
                "de": "Jump Blues",
                "pt-br": "Salto Azul",
                "zh-tw": "跳躍藍調"
            },
            damage: 20,
            cost: ["Grass"],
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige également 20 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
