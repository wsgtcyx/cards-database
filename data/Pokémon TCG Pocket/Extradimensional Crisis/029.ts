import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Medicham",
        "fr": "Médicham",
        "es": "médico",
        "it": "Medicham",
        "de": "Medicham",
        "pt-br": "Medicham",
        "zh-tw": "恰雷姆",
    },
    illustrator: "Misa Tsutsui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Fighting"],
    evolveFrom: {
        en: "Meditite",
        "fr": "Méditer",
        "es": "meditar",
        "it": "Medita",
        "de": "Meditit",
        "pt-br": "Medite",
        "zh-tw": "瑪沙那",
    },
    description: {
        en: "Through yoga training, it gained the psychic\npower to predict its foe's next move.",
        "fr": "Grâce à une formation de yoga, il a acquis le psychisme\npouvoir de prédire le prochain mouvement de son ennemi.",
        "es": "A través del entrenamiento de yoga, obtuvo el poder psíquico.\npoder para predecir el próximo movimiento de su enemigo.",
        "it": "Attraverso l'allenamento yoga, ha acquisito la sensitività\npotere di prevedere la prossima mossa del suo nemico.",
        "de": "Durch Yoga-Training erlangte es das Hellseher\nMacht, den nächsten Schritt seines Gegners vorherzusagen.",
        "pt-br": "Através do treinamento de yoga, ganhou o psíquico\npoder de prever o próximo movimento de seu inimigo.",
        "zh-tw": "通過瑜伽訓練，獲得了通靈的能力\n擁有預測敵人下一步行動的能力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "High Jump Kick",
                "fr": "Coup de pied de saut en hauteur",
                "es": "Patada de salto alto",
                "it": "Calcio in salto alto",
                "de": "Hochsprung-Kick",
                "pt-br": "Chute de salto em altura",
                "zh-tw": "跳高踢腿"
            },
            damage: 50,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
