import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Sliggoo",
        "fr": "Sliggoo",
        "es": "Sliggoo",
        "it": "Sligoo",
        "de": "Sliggoo",
        "pt-br": "Sliggoo",
        "zh-tw": "斯利古"
    },
    illustrator: "Atsuko Nishida",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Dragon"],
    evolveFrom: {
        en: "Goomy",
        "fr": "Goomy",
        "es": "goomy",
        "it": "Buono",
        "de": "Goomy",
        "pt-br": "Pegajoso",
        "zh-tw": "古米"
    },
    description: {
        en: "When Sliggoo senses danger, the mucus coating\nits entire body becomes more concentrated—\nit'll dissolve anything.",
        "fr": "Lorsque Sliggoo sent un danger, la couche de mucus\nson corps tout entier devient plus concentré—\nça va dissoudre n'importe quoi.",
        "es": "Cuando Sliggoo siente peligro, la capa de moco\ntodo su cuerpo se vuelve más concentrado—\ndisolverá cualquier cosa.",
        "it": "Quando Sliggoo avverte il pericolo, si ricopre di muco\nil suo intero corpo diventa più concentrato—\ndissolverà qualsiasi cosa.",
        "de": "Wenn Sliggoo eine Gefahr spürt, bildet sich eine Schleimschicht\nsein ganzer Körper wird konzentrierter –\nes wird alles auflösen.",
        "pt-br": "Quando Sliggoo sente o perigo, a camada de muco\ntodo o seu corpo fica mais concentrado -\nisso dissolverá qualquer coisa.",
        "zh-tw": "當 Sligoo 感覺到危險時，粘液塗層\n整個身體變得更加集中——\n它會溶解任何東西。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Gentle Slap",
                "fr": "Gifle douce",
                "es": "Bofetada suave",
                "it": "Schiaffo gentile",
                "de": "Sanfter Schlag",
                "pt-br": "Tapa suave",
                "zh-tw": "輕輕一巴掌"
            },
            damage: 60,
            cost: ["Water", "Psychic"]
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 2
};
export default card;
