import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Yamper",
        "fr": "Yamper",
        "es": "Yamper",
        "it": "Yamper",
        "de": "Yamper",
        "pt-br": "Yamper",
        "zh-tw": "來電汪",
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    description: {
        en: "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity.",
        "fr": "Ce Pokémon glouton n'aide les gens qu'avec\nleur travail parce qu'il veut des friandises. Pendant qu'il court,\nça crépite d'électricité.",
        "es": "Este Pokémon glotón sólo ayuda a las personas con\nsu trabajo porque quiere golosinas. Mientras corre,\ncrepita con electricidad.",
        "it": "Questo Pokémon goloso aiuta solo le persone con\nil loro lavoro perché vuole dei dolcetti. Mentre corre,\ncrepita di elettricità.",
        "de": "Dieses gefräßige Pokémon hilft Menschen nur bei\nihre Arbeit, weil sie Leckereien will. Während es läuft,\nes knistert vor Elektrizität.",
        "pt-br": "Este Pokémon guloso só ajuda pessoas com\nseu trabalho porque quer guloseimas. À medida que corre,\nele estala com eletricidade.",
        "zh-tw": "這只貪吃的神奇寶貝只幫助有能力的人\n他們的工作是因為它需要款待。當它運行時，\n它通電時發出劈啪聲。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Zap Kick",
                "fr": "Coup de pied Zap",
                "es": "Patada rápida",
                "it": "Calcio di zap",
                "de": "Zap-Kick",
                "pt-br": "Chute Zap",
                "zh-tw": "電擊踢"
            },
            damage: 20,
            cost: ["Lightning"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
