import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Mantine",
        "fr": "Mantine",
        "es": "mantina",
        "it": "Mantine",
        "de": "Mantine",
        "pt-br": "Mantine",
        "zh-tw": "巨翅飛魚",
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    description: {
        en: "If it builds up enough speed swimming, it\ncan jump out above the waves and glide\nfor over 300 feet.",
        "fr": "S'il développe suffisamment de vitesse en nageant, il\npeut sauter au-dessus des vagues et planer\nsur plus de 300 pieds.",
        "es": "Si consigue suficiente velocidad nadando,\npuede saltar sobre las olas y deslizarse\npor más de 300 pies.",
        "it": "Se accumula abbastanza velocità nel nuoto, lo fa\npuò saltare sopra le onde e planare\nper oltre 300 piedi.",
        "de": "Wenn es beim Schwimmen genügend Geschwindigkeit aufbaut, ist es\nkann über die Wellen springen und gleiten\nfür über 300 Fuß.",
        "pt-br": "Se acumular velocidade suficiente para nadar,\npode saltar acima das ondas e planar\npor mais de 300 pés.",
        "zh-tw": "如果它積累了足夠的游泳速度\n可以跳出海浪並滑翔\n超過 300 英尺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Surf",
                "fr": "Surf",
                "es": "Navegar",
                "it": "Navigare",
                "de": "Surfen",
                "pt-br": "Surfar",
                "zh-tw": "衝浪"
            },
            damage: 50,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
