import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Frillish",
        "fr": "Fantaisie",
        "es": "volantes",
        "it": "Frizzo",
        "de": "Rüschen",
        "pt-br": "Enfeitado",
        "zh-tw": "輕飄飄",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "It envelops its prey in its veillike arms and draws\nit down to the deeps, five miles below the\nocean's surface.",
        "fr": "Il enveloppe sa proie dans ses bras en forme de voile et attire\njusqu'aux profondeurs, à cinq milles sous le\nla surface de l'océan.",
        "es": "Envuelve a su presa en sus brazos como velos y atrae\nhasta las profundidades, cinco millas por debajo del\nla superficie del océano.",
        "it": "Avvolge la preda tra le sue braccia simili a veli e la attira\ngiù negli abissi, cinque miglia sotto il\nsuperficie dell'oceano.",
        "de": "Es umhüllt seine Beute mit seinen schleierartigen Armen und zieht\nes bis in die Tiefe, fünf Meilen unter dem\nMeeresoberfläche.",
        "pt-br": "Ele envolve sua presa em seus braços semelhantes a véus e puxa\naté as profundezas, cinco milhas abaixo do\nsuperfície do oceano.",
        "zh-tw": "它用面紗般的手臂包圍獵物並吸引\n它一直深入到海底五英里的深處\n海洋表面。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Absorb",
                "fr": "Absorber",
                "es": "Absorber",
                "it": "Assorbire",
                "de": "Absorbieren",
                "pt-br": "Absorver",
                "zh-tw": "吸收"
            },
            damage: 10,
            cost: ["Psychic"],
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                "fr": "Soignez 10 dégâts de ce Pokémon.",
                "es": "Cura 10 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 10 danni.",
                "de": "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
