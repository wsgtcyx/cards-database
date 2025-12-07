import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Froakie",
        "fr": "Froakie",
        "es": "Froakie",
        "it": "Froakie",
        "de": "Froakie",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
    },
    illustrator: "Sanosuke Sakuma",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It protects its skin by covering its body in\ndelicate bubbles. Beneath its happy-go-lucky air,\nit keeps a watchful eye on its surroundings.",
        "fr": "Il protège sa peau en recouvrant son corps de\nbulles délicates. Sous ses airs joyeux,\nil garde un œil vigilant sur son environnement.",
        "es": "Protege su piel cubriendo su cuerpo con\nburbujas delicadas. Bajo su aire despreocupado,\nvigila atentamente su entorno.",
        "it": "Protegge la sua pelle ricoprendone il corpo\nbollicine delicate. Sotto la sua aria spensierata,\nmantiene un occhio vigile su ciò che lo circonda.",
        "de": "Es schützt seine Haut, indem es seinen Körper damit bedeckt\nzarte Blasen. Unter seiner fröhlichen Atmosphäre,\nEs behält seine Umgebung im Auge.",
        "pt-br": "Ele protege sua pele cobrindo seu corpo com\nbolhas delicadas. Sob seu ar despreocupado,\nele mantém um olhar atento ao seu entorno.",
        "zh-tw": "它通過覆蓋身體來保護皮膚\n細膩的氣泡。在其無憂無慮的氣氛之下，\n它密切關注周圍環境。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Water Drip",
                "fr": "Goutte d'eau",
                "es": "Goteo de agua",
                "it": "Gocciolamento dell'acqua",
                "de": "Wassertropfen",
                "pt-br": "Gotejamento de água",
                "zh-tw": "水滴"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
