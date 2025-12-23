import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Burmy",
        "fr": "Cheniti",
        "es": "Burmy",
        "it": "Burmy",
        "de": "Burmy",
        "pt-br": "Burmy",
        "zh-tw": "結草兒"
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "If its cloak is broken in battle, it quickly remakes\nthe cloak with materials nearby.",
        "fr": "Si sa cape est brisée au combat, il se refait rapidement.\nle manteau avec des matériaux à proximité.",
        "es": "Si su capa se rompe en la batalla, rápidamente se rehace.\nla capa con materiales cercanos.",
        "it": "Se il suo mantello si rompe in battaglia, si rifa rapidamente\nil mantello con i materiali nelle vicinanze.",
        "de": "Wenn sein Umhang im Kampf zerbrochen wird, wird er schnell wieder hergestellt\nder Umhang mit Materialien in der Nähe.",
        "pt-br": "Se seu manto for quebrado em batalha, ele rapidamente refaz\na capa com materiais próximos.",
        "zh-tw": "如果它的斗篷在戰鬥中破損，它會迅速重製\n斗篷附近有材料。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Hang Down",
                "fr": "Pendre",
                "es": "Colgar",
                "it": "Aspetta",
                "de": "Herabhängen",
                "pt-br": "Pendure",
                "zh-tw": "垂下"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
