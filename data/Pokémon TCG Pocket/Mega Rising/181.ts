import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pidgeotto",
        "fr": "Piègeotto",
        "es": "Pidgeotto",
        "it": "Pidgeotto",
        "de": "Pidgeotto",
        "pt-br": "Pidgeotto",
        "zh-tw": "比比鳥"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Pidgey",
        "fr": "Piggy",
        "es": "pidgey",
        "it": "Pidgey",
        "de": "Pidgey",
        "pt-br": "Pidgey",
        "zh-tw": "皮吉"
    },
    description: {
        en: "Very protective of its sprawling territorial area,\nthis Pokémon will fiercely peck at any intruder.",
        "fr": "Très protectrice de son territoire tentaculaire,\nce Pokémon picorera férocement tout intrus.",
        "es": "Muy protectora de su extensa área territorial,\nEste Pokémon picoteará ferozmente a cualquier intruso.",
        "it": "Molto protettivo nei confronti della sua vasta area territoriale,\nquesto Pokémon beccherà ferocemente qualsiasi intruso.",
        "de": "Sehr beschützerisch für sein weitläufiges Territorium,\nDieses Pokémon wird jeden Eindringling heftig angreifen.",
        "pt-br": "Muito protetor da sua extensa área territorial,\neste Pokémon bicará ferozmente qualquer intruso.",
        "zh-tw": "非常保護其廣闊的領土面積，\n這只神奇寶貝會猛烈地啄食任何入侵者。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Speed Wing",
                "fr": "Aile de vitesse",
                "es": "Ala de velocidad",
                "it": "Ala di velocità",
                "de": "Geschwindigkeitsflügel",
                "pt-br": "Asa de velocidade",
                "zh-tw": "速度之翼"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
