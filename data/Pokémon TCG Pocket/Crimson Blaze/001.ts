import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Bulbasaur",
        "fr": "Bulbizarre",
        "es": "Bulbasaur",
        "it": "Bulbasaur",
        "de": "Bisasam",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow.",
        "fr": "Lorsqu'il est jeune, il utilise les nutriments disponibles\nstocké dans la graine sur son dos afin de croître.",
        "es": "Mientras es joven, utiliza los nutrientes que están\nalmacenado en la semilla en su espalda para poder crecer.",
        "it": "Mentre è giovane, utilizza le sostanze nutritive che contiene\nimmagazzinato nel seme sul dorso per poter crescere.",
        "de": "Solange es jung ist, nutzt es die vorhandenen Nährstoffe\nim Samen auf seinem Rücken gespeichert, um zu wachsen.",
        "pt-br": "Embora seja jovem, utiliza os nutrientes que são\narmazenado na semente em suas costas para crescer.",
        "zh-tw": "當它還年輕的時候，它會利用\n儲存在其背上的種子中以便生長。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "撞擊"
            },
            damage: 20,
            cost: ["Grass"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
