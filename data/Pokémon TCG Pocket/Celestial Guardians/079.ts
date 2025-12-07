import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Ribombee",
        fr: "Rubombelle",
        es: "Ribombee",
        it: "Ribombee",
        de: "Bandelby",
        'pt-br': "Ribombee",
        ko: "에리본",
        "zh-tw": "核醣體"
    },
    illustrator: "Megumi Mizutani",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Psychic"],
    evolveFrom: {
        en: "Cutiefly",
        "fr": "Mignonne",
        "es": "Cutiefly",
        "it": "Carino",
        "de": "Niedlich",
        "pt-br": "Fofinho",
        "zh-tw": "可愛蠅"
    },
    description: {
        en: "It makes pollen puffs from pollen and nectar. The puffs' effects depend on the type of ingredients and how much of each one is used.",
        fr: "Il mélange du nectar et du pollen pour créer\ndes boules qui ont divers effets, selon\nles quantités et les ingrédients utilisés.",
        es: "Mezcla polen y néctar para elaborar unas bolas cuyo efecto varía\nen función de los ingredientes usados y de sus proporciones.",
        it: "Crea delle sfere di polline e nettare che hanno effetti\ndiversi a seconda degli ingredienti usati e della loro quantità.",
        de: "Es rollt Blütenstaub und Honig zu Kugeln. Je nach\nZutaten und Menge, die es hineinmischt, weisen sie\neine andere Wirkung auf.",
        'pt-br': "Faz bolas de pólen só de pólen e néctar.\nOs efeitos destas bolas dependem do tipo\ne quantidade de ingredientes usados.",
        ko: "꽃가루와 꿀을 섞어서 경단을\n만든다. 조합하는 종류와\n양에 따라 효과가 달라진다.",
        "zh-tw": "它用花粉和花蜜製成花粉泡。泡芙的效果取決於成分的類型以及每種成分的用量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Fairy Wind",
                fr: "Vent Féérique",
                es: "Viento Feérico",
                it: "Vento di Fata",
                de: "Feenbrise",
                'pt-br': "Vento de Fada",
                ko: "요정의바람",
                "zh-tw": "仙風"
            },
            damage: 40,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 0,
    boosters: ["solgaleo"]
};
export default card;
