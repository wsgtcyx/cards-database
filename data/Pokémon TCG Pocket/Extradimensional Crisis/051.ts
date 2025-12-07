import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Ferroseed",
        "fr": "Graine de fer",
        "es": "Ferrosa",
        "it": "Ferroseme",
        "de": "Ferroseed",
        "pt-br": "Ferrosemente",
        "zh-tw": "種子鐵球",
    },
    illustrator: "Midori Harada",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    description: {
        en: "It absorbs the iron it finds in the rock while clinging\nto the ceiling. It shoots spikes when in danger.",
        "fr": "Il absorbe le fer qu'il trouve dans la roche en s'accrochant\nau plafond. Il tire des pointes lorsqu'il est en danger.",
        "es": "Absorbe el hierro que encuentra en la roca mientras se aferra.\nhasta el techo. Dispara púas cuando está en peligro.",
        "it": "Assorbe il ferro che trova nella roccia aggrappandosi\nal soffitto. Spara punte quando è in pericolo.",
        "de": "Beim Anhaften nimmt es das Eisen auf, das es im Gestein findet\nbis zur Decke. Bei Gefahr schießt es Stacheln ab.",
        "pt-br": "Absorve o ferro que encontra na rocha enquanto se agarra\npara o teto. Ele atira espinhos quando está em perigo.",
        "zh-tw": "它在粘附時吸收岩石中發現的鐵\n到天花板。當遇到危險時它會射出尖刺。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Spike Sting",
                "fr": "Piqûre de pointe",
                "es": "Picadura de pico",
                "it": "Spike Puntura",
                "de": "Spike Sting",
                "pt-br": "Picada de Espigão",
                "zh-tw": "尖刺刺痛"
            },
            damage: 40,
            cost: ["Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
