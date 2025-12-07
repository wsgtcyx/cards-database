import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Remoraid",
        "fr": "Remoraid",
        "es": "Remoraid",
        "it": "Remoraid",
        "de": "Remoraid",
        "pt-br": "Remoraid",
        "zh-tw": "雷莫拉伊德"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "The water they shoot from their mouths can hit\nmoving prey from more than 300 feet away.",
        "fr": "L'eau qu'ils tirent de leur bouche peut frapper\ndéplacer ses proies à plus de 300 pieds de distance.",
        "es": "El agua que disparan por la boca puede alcanzar\nmoviendo presas desde más de 300 pies de distancia.",
        "it": "L'acqua che sparano dalla bocca può colpire\nspostare la preda a più di 300 piedi di distanza.",
        "de": "Das Wasser, das ihnen aus dem Mund spritzt, kann treffen\nBewegen von Beute aus mehr als 300 Fuß Entfernung.",
        "pt-br": "A água que eles expelem da boca pode atingir\nmover presas a mais de 300 pés de distância.",
        "zh-tw": "它們從嘴裡噴出的水可以擊中\n將獵物從 300 英尺以外移動。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
