import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Mareep",
        "fr": "Mareep",
        "es": "Mareep",
        "it": "Mareep",
        "de": "Mareep",
        "pt-br": "Mareep",
        "zh-tw": "咩利羊",
    },
    illustrator: "0313",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "If static electricity builds in its body, its fleece\ndoubles in volume. Touching it will shock you.",
        "fr": "Si de l'électricité statique s'accumule dans son corps, sa toison\ndouble de volume. Le toucher vous choquera.",
        "es": "Si se acumula electricidad estática en su cuerpo, su vellón\nduplica su volumen. Tocarlo te sorprenderá.",
        "it": "Se l'elettricità statica si accumula nel suo corpo, il suo vello\nraddoppia di volume. Toccarlo ti sconvolgerà.",
        "de": "Wenn sich in seinem Körper statische Elektrizität aufbaut, entsteht ein Fell\nverdoppelt sich das Volumen. Wenn Sie es berühren, werden Sie schockiert sein.",
        "pt-br": "Se a eletricidade estática se acumular em seu corpo, seu velo\ndobra de volume. Tocá-lo irá chocá-lo.",
        "zh-tw": "如果靜電在它的體內積聚，它的羊毛\n體積加倍。觸摸它會讓你震驚。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Static Shock",
                "fr": "Choc statique",
                "es": "Choque estático",
                "it": "Shock statico",
                "de": "Statischer Schock",
                "pt-br": "Choque Estático",
                "zh-tw": "靜電衝擊"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
