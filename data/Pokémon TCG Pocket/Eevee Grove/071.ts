import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Flareon",
        "fr": "Flareon",
        "es": "llamarada",
        "it": "Flareone",
        "de": "Flareon",
        "pt-br": "Flareon",
        "zh-tw": "火伊布",
    },
    illustrator: "Teeziro",
    rarity: "One Star",
    category: "Pokemon",
    hp: 110,
    types: ["Fire"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "Inhaled air is carried to its flame sac, heated, and\nexhaled as fire that reaches over 3,000 degrees\nFahrenheit.",
        "fr": "L'air inhalé est transporté vers son sac de flamme, chauffé et\nexhalé sous forme de feu qui atteint plus de 3 000 degrés\nFahrenheit.",
        "es": "El aire inhalado es llevado a su saco de llamas, calentado y\nexhalado como fuego que alcanza más de 3.000 grados\nFahrenheit.",
        "it": "L'aria inalata viene trasportata nella sua sacca di fiamma, riscaldata e\nesalato come fuoco che raggiunge oltre i 3.000 gradi\nFahrenheit.",
        "de": "Die eingeatmete Luft wird zu seinem Flammensack transportiert, erhitzt und\nausgeatmet als Feuer, das über 3.000 Grad erreicht\nFahrenheit.",
        "pt-br": "O ar inalado é transportado para o seu saco de chamas, aquecido e\nexalado como fogo que atinge mais de 3.000 graus\nFahrenheit.",
        "zh-tw": "吸入的空氣被帶到其火焰囊中，被加熱，並\n呼出的火焰溫度高達 3000 度以上\n華氏度。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Assisting Heater",
                "fr": "Chauffage d'assistance",
                "es": "Calentador auxiliar",
                "it": "Assistere il riscaldatore",
                "de": "Unterstützende Heizung",
                "pt-br": "Aquecedor Auxiliar",
                "zh-tw": "輔助加熱器"
            },
            damage: 40,
            cost: ["Fire", "Colorless"],
            effect: {
                en: "Take a {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Prenez une Énergie {R} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                "es": "Toma una Energía {R} de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                "it": "Prendi un'Energia {R} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                "de": "Nimm eine {R}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma Energia {R} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區取出一個{R}能量並將其附加到你的1只後備神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
