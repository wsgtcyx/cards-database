import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Tapu Koko ex",
        "fr": "Tapu Koko ex",
        "es": "Tapu Koko ex",
        "it": "Tapu Koko ex",
        "de": "Tapu Koko ex",
        "pt-br": "Tapu Koko ex",
        "zh-tw": "塔普科科超級"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Plasma Hurricane",
                "fr": "Ouragan plasmatique",
                "es": "Huracán de plasma",
                "it": "Uragano al plasma",
                "de": "Plasma-Hurrikan",
                "pt-br": "Furacão de Plasma",
                "zh-tw": "等離子颶風"
            },
            damage: 20,
            cost: ["Lightning"],
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "Prenez une Énergie {L} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                "es": "Toma una Energía {L} de tu Zona de Energía y únela a este Pokémon.",
                "it": "Prendi un'Energia {L} dalla tua Zona Energetica e assegnala a questo Pokémon.",
                "de": "Nimm eine {L}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue uma Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{L}能量並將其附加到該神奇寶貝上。"
            }
        }, {
            name: {
                en: "Mach Bolt",
                "fr": "Boulon de Mach",
                "es": "Perno Mach",
                "it": "Mach Bolt",
                "de": "Mach Bolt",
                "pt-br": "Parafuso Mach",
                "zh-tw": "馬赫螺栓"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
