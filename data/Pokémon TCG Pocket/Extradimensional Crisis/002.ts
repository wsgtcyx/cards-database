import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Lilligant",
        "fr": "Liligant",
        "es": "liligant",
        "it": "Lilligant",
        "de": "Lilligant",
        "pt-br": "Lilligant",
        "zh-tw": "利利甘特"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Grass"],
    evolveFrom: {
        en: "Petilil",
        "fr": "Pétilil",
        "es": "Petilil",
        "it": "Petilil",
        "de": "Petilil",
        "pt-br": "Petilil",
        "zh-tw": "佩蒂利爾"
    },
    description: {
        en: "The fragrance of the garland on its head has\na relaxing effect, but taking care of it is very\ndifficult.",
        "fr": "Le parfum de la guirlande sur sa tête a\nun effet relaxant, mais en prendre soin est très\ndifficile.",
        "es": "La fragancia de la guirnalda sobre su cabeza ha\nun efecto relajante, pero cuidarlo es muy\ndifícil.",
        "it": "Ha il profumo della ghirlanda sul capo\nun effetto rilassante, ma prendersene cura è molto\ndifficile.",
        "de": "Der Duft der Girlande auf seinem Kopf hat\neine entspannende Wirkung, aber es ist sehr wichtig, sich darum zu kümmern\nschwierig.",
        "pt-br": "A fragrância da guirlanda em sua cabeça tem\num efeito relaxante, mas cuidar dele é muito\ndifícil.",
        "zh-tw": "它頭上的花環有香味\n有放鬆的效果，但是照顧它很重要\n困難。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Cut",
                "fr": "Couper",
                "es": "Cortar",
                "it": "Taglio",
                "de": "Schneiden",
                "pt-br": "Corte",
                "zh-tw": "切"
            },
            damage: 60,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
