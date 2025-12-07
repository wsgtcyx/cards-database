import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Torracat",
        "fr": "Torracat",
        "es": "torracat",
        "it": "Torracat",
        "de": "Torracat",
        "pt-br": "Torracat",
        "zh-tw": "炎熱喵",
    },
    illustrator: "tetsuya koizumi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    evolveFrom: {
        en: "Litten",
        "fr": "Litten",
        "es": "litten",
        "it": "Litten",
        "de": "Litten",
        "pt-br": "Litten",
        "zh-tw": "火斑喵",
    },
    description: {
        en: "Torracat will let its Trainer coddle it once they've\ngrown close, but it's a powerful, sharp-clawed\nPokémon, so its Trainer gets covered in scratches.",
        "fr": "Torracat laissera son entraîneur le dorloter une fois qu'il l'aura\ndevenu proche, mais c'est un puissant, aux griffes acérées\nPokémon, donc son dresseur est couvert de rayures.",
        "es": "Torracat dejará que su entrenador lo mime una vez que lo hayan\nSe ha acercado, pero es un poderoso, con garras afiladas.\nPokémon, por lo que su Entrenador queda cubierto de arañazos.",
        "it": "Torracat lascerà che il suo Allenatore lo coccoli dopo averlo fatto\ncresciuto vicino, ma è potente e dagli artigli affilati\nPokémon, quindi il suo Allenatore si ricopre di graffi.",
        "de": "Torracat lässt sich von seinem Trainer verhätscheln, sobald er es getan hat\nnah herangewachsen, aber es ist ein kräftiger, scharfklauiger Mensch\nPokémon, sodass sein Trainer mit Kratzern übersät ist.",
        "pt-br": "Torracat deixará seu treinador mimá-lo assim que tiver\nse aproximou, mas é um poderoso e com garras afiadas\nPokémon, então seu Treinador fica coberto de arranhões.",
        "zh-tw": "一旦他們完成任務，托拉貓就會讓訓練師寵愛它\n距離很近，但它是一隻強大的、鋒利的爪子\n神奇寶貝，所以它的訓練師佈滿了划痕。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Heat Tackle",
                "fr": "S'attaquer à la chaleur",
                "es": "Abordaje de calor",
                "it": "Affronto di calore",
                "de": "Hitzegerät",
                "pt-br": "Equipamento térmico",
                "zh-tw": "熱力鏟球"
            },
            damage: 40,
            cost: ["Fire"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1
};
export default card;
