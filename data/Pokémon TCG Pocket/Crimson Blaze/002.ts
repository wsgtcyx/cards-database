import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Ivysaur",
        "fr": "Herbizarre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草"
    },
    illustrator: "Kanako Eo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Grass"],
    evolveFrom: {
        en: "Bulbasaur",
        "fr": "Bulbizarre",
        "es": "Bulbasaur",
        "it": "Bulbasaur",
        "de": "Bisasam",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子"
    },
    description: {
        en: "The more sunlight Ivysaur bathes in, the more\nstrength wells up within it, allowing the bud\non its back to grow larger.",
        "fr": "Plus Ivysaur baigne dans la lumière du soleil, plus\nla force jaillit en lui, permettant au bourgeon\nsur le dos pour grandir.",
        "es": "Cuanta más luz solar recibe Ivysaur, más\nLa fuerza brota dentro de él, permitiendo que el brote\nen su espalda para crecer.",
        "it": "Più Ivysaur si immerge nella luce del sole, più sarà\nla forza sgorga al suo interno, permettendo il germoglio\nsul dorso per ingrandirsi.",
        "de": "Je mehr Sonnenlicht Ivysaurier einnimmt, desto mehr\nIn ihm strömt Kraft auf, die die Knospe ermöglicht\nauf dem Rücken, um größer zu werden.",
        "pt-br": "Quanto mais luz solar Ivysaur banha, mais\na força brota dentro dele, permitindo que o botão\nde costas para crescer.",
        "zh-tw": "Ivysaur 沐浴的陽光越多，\n力量在裡面湧動，讓花蕾\n在它的背上變大。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Synthesis",
                "fr": "Synthèse",
                "es": "Síntesis",
                "it": "Sintesi",
                "de": "Synthese",
                "pt-br": "Síntese",
                "zh-tw": "光合作用"
            },
            cost: ["Grass"],
            effect: {
                en: "Take 2 {G} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "Prenez 2 {G} Énergie de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                "es": "Toma 2 Energías {G} de tu Zona de Energía y únelas a este Pokémon.",
                "it": "Prendi 2 Energie {G} dalla tua Zona Energetica e assegnale a questo Pokémon.",
                "de": "Nimm 2 {G}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue 2 {G} Energias da sua Zona de Energia e ligue-as a este Pokémon.",
                "zh-tw": "從你的能量區取出 2 個 {G} 能量並將其附加到這只神奇寶貝身上。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
