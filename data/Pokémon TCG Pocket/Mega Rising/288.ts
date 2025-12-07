import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Weepinbell",
        "fr": "Clochette pleureuse",
        "es": "Campanilla llorona",
        "it": "Weepinbell",
        "de": "Weepinbell",
        "pt-br": "Campainha chorando",
        "zh-tw": "威平貝爾"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Bellsprout",
        "fr": "Pousse de Bell",
        "es": "brote de campana",
        "it": "Bellsprout",
        "de": "Glockensprossen",
        "pt-br": "Broto de sino",
        "zh-tw": "喇叭芽"
    },
    description: {
        en: "The leafy parts act as cutters for slashing foes.\nIt spits a fluid that dissolves everything.",
        "fr": "Les parties feuillues agissent comme des couteaux pour trancher les ennemis.\nIl crache un fluide qui dissout tout.",
        "es": "Las partes frondosas actúan como cortadores para atacar a los enemigos.\nEscupe un fluido que lo disuelve todo.",
        "it": "Le parti frondose fungono da taglienti per squarciare i nemici.\nSputa un fluido che scioglie tutto.",
        "de": "Die Blattteile dienen als Messer zum Aufschlitzen von Feinden.\nEs spuckt eine Flüssigkeit aus, die alles auflöst.",
        "pt-br": "As partes folhosas atuam como cortadores para cortar os inimigos.\nCospe um fluido que dissolve tudo.",
        "zh-tw": "葉狀部分充當切割敵人的刀具。\n它噴出一種可以溶解一切的液體。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Leaf",
                "fr": "Feuille de rasoir",
                "es": "Hoja de afeitar",
                "it": "Foglia di rasoio",
                "de": "Rasiermesserblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "剃刀葉"
            },
            damage: 40,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
