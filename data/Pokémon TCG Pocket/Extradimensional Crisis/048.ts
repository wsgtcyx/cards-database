import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Aron",
        "fr": "Aron",
        "es": "aron",
        "it": "Aron",
        "de": "Aron",
        "pt-br": "Arão",
        "zh-tw": "阿倫"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Metal"],
    description: {
        en: "It eats iron ore—and sometimes railroad tracks—\nto build up the steel armor that protects its body.",
        "fr": "Il mange du minerai de fer – et parfois des voies ferrées –\npour construire l'armure d'acier qui protège son corps.",
        "es": "Se alimenta de mineral de hierro (y a veces de vías de ferrocarril).\npara construir la armadura de acero que protege su cuerpo.",
        "it": "Si nutre di minerale di ferro e talvolta di binari ferroviari.\nper costruire l'armatura d'acciaio che protegge il suo corpo.",
        "de": "Es frisst Eisenerz – und manchmal auch Eisenbahnschienen –\num die Stahlpanzerung aufzubauen, die seinen Körper schützt.",
        "pt-br": "Come minério de ferro – e às vezes trilhos de trem –\npara construir a armadura de aço que protege seu corpo.",
        "zh-tw": "牠吃鐵礦石——有時還吃鐵軌——\n打造出保護身體的鋼鐵鎧甲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Headbutt",
                "fr": "Coup de tête",
                "es": "cabezazo",
                "it": "Testata",
                "de": "Kopfstoß",
                "pt-br": "Cabeçada",
                "zh-tw": "頭撞"
            },
            damage: 40,
            cost: ["Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
