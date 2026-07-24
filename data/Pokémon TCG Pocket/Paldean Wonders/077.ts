import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Orthworm",
        fr: "Ferdeter",
        es: "Orthworm",
        it: "Orthworm",
        de: "Schlurm",
        "pt-br": "Orthworm",
        "zh-tw": "拖拖蚓",
        pt: "Orthworm"
    },
    illustrator: "Pani Kobayashi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [968],
    description: {
        en: "This Pokémon lives in arid deserts. It maintains its metal body by consuming iron from the soil.",
        "fr": "Ce Pokémon vit dans les déserts arides. Il entretient son corps métallique en consommant le fer du sol.",
        "es": "Este Pokémon vive en desiertos áridos. Mantiene su cuerpo metálico consumiendo hierro del suelo.",
        "it": "Questo Pokémon vive nei deserti aridi. Mantiene il suo corpo metallico consumando il ferro dal suolo.",
        "de": "Dieses Pokémon lebt in trockenen Wüsten. Es behält seinen Metallkörper bei, indem es Eisen aus dem Boden aufnimmt.",
        "pt-br": "Este Pokémon vive em desertos áridos. Ele mantém seu corpo metálico consumindo ferro do solo.",
        "zh-tw": "這隻寶可夢生活在乾旱的沙漠中。它透過消耗土壤中的鐵来维持其金属身体。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Iron Supply",
                "fr": "Approvisionnement en fer",
                "es": "Suministro de hierro",
                "it": "Fornitura di ferro",
                "de": "Eisenversorgung",
                "pt-br": "Fornecimento de Ferro",
                "zh-tw": "鐵供應"
            },
            damage: 10,
            cost: ["Metal"],
            effect: {
                en: "Take a Metal Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Prenez une Énergie Métal de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                "es": "Toma una Energía de Metal de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                "it": "Prendi un'Energia Metal dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                "de": "Nimm eine Metall-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma Energia Metal da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區取出金屬能量並將其附加到你的1隻備戰寶可夢上。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
