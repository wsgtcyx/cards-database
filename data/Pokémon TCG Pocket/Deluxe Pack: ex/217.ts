import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Drilbur",
        "fr": "Foreur",
        "es": "taladro",
        "it": "Drilbur",
        "de": "Drilbur",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It brings its claws together and whirls around\nat high speed before rushing toward its prey.",
        "fr": "Il rassemble ses griffes et tournoie\nà grande vitesse avant de se précipiter vers sa proie.",
        "es": "Junta sus garras y gira\na gran velocidad antes de correr hacia su presa.",
        "it": "Unisce gli artigli e gira su se stesso\nad alta velocità prima di lanciarsi verso la preda.",
        "de": "Es bringt seine Krallen zusammen und wirbelt herum\nmit hoher Geschwindigkeit, bevor er auf seine Beute zustürmt.",
        "pt-br": "Ele junta suas garras e gira\nem alta velocidade antes de correr em direção à sua presa.",
        "zh-tw": "它把爪子合攏並旋轉\n以高速沖向獵物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Scratch",
                "fr": "Gratter",
                "es": "Rascar",
                "it": "Graffio",
                "de": "Kratzen",
                "pt-br": "Arranhar",
                "zh-tw": "划痕"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
