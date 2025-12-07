import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Bergmite",
        "fr": "Bergmite",
        "es": "bergmita",
        "it": "Bergmite",
        "de": "Bergmite",
        "pt-br": "Bergmite",
        "zh-tw": "冰寶",
    },
    illustrator: "Miki Tanaka",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "They live in mountainous regions of frigid cold.\nOn rare occasions, they ride on the back of an\nAvalugg to cross seas and move to new habitats.",
        "fr": "Ils vivent dans des régions montagneuses au froid glacial.\nEn de rares occasions, ils montent à dos d'un\nAvalugg pour traverser les mers et se déplacer vers de nouveaux habitats.",
        "es": "Viven en regiones montañosas de frío glacial.\nEn raras ocasiones, viajan a lomos de un\nAvalugg para cruzar mares y trasladarse a nuevos hábitats.",
        "it": "Vivono in regioni montuose dal freddo gelido.\nIn rare occasioni cavalcano sul dorso di un\nAvalugg attraversa i mari e si sposta verso nuovi habitat.",
        "de": "Sie leben in eiskalten Bergregionen.\nIn seltenen Fällen reiten sie auf dem Rücken eines\nAvalugg soll Meere überqueren und in neue Lebensräume vordringen.",
        "pt-br": "Eles vivem em regiões montanhosas de frio intenso.\nEm raras ocasiões, eles andam nas costas de um\nAvalugg para cruzar mares e mudar para novos habitats.",
        "zh-tw": "他們生活在寒冷的山區。\n在極少數情況下，他們騎在馬背上\nAvalugg 跨越海洋並遷移到新的棲息地。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Icicle",
                "fr": "Stalactite",
                "es": "Carámbano",
                "it": "Ghiacciolo",
                "de": "Eiszapfen",
                "pt-br": "Sincelo",
                "zh-tw": "冰柱"
            },
            damage: 30,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2
};
export default card;
