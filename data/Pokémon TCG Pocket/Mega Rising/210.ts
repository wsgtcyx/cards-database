import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Corvisquire",
        "fr": "Corvisquire",
        "es": "Corvisquire",
        "it": "Corvisquire",
        "de": "Corvisquire",
        "pt-br": "Corvisquire",
        "zh-tw": "藍鴉",
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    evolveFrom: {
        en: "Rookidee",
        "fr": "Rookie",
        "es": "rookidee",
        "it": "Rookidee",
        "de": "Neuling",
        "pt-br": "Rookidee",
        "zh-tw": "稚山雀",
    },
    description: {
        en: "This intelligent Pokémon will quickly learn how to\nuse any tool it can hold in its beak or its talons.",
        "fr": "Ce Pokémon intelligent apprendra rapidement à\nutilisez n’importe quel outil qu’il peut tenir dans son bec ou ses serres.",
        "es": "Este Pokémon inteligente aprenderá rápidamente a\nUtilice cualquier herramienta que pueda sujetar en su pico o en sus garras.",
        "it": "Questo Pokémon intelligente imparerà presto a farlo\nusa qualsiasi strumento che può tenere nel becco o negli artigli.",
        "de": "Dieses intelligente Pokémon wird es schnell lernen\nVerwenden Sie jedes Werkzeug, das es in seinem Schnabel oder seinen Krallen halten kann.",
        "pt-br": "Este Pokémon inteligente aprenderá rapidamente como\nuse qualquer ferramenta que ele possa segurar no bico ou nas garras.",
        "zh-tw": "這個聰明的神奇寶貝會很快學會如何\n使用它的喙或爪子可以握住的任何工具。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Drill Peck",
                "fr": "Forage à pic",
                "es": "Picoteo de taladro",
                "it": "Perforare Peck",
                "de": "Drill Peck",
                "pt-br": "Broca Peck",
                "zh-tw": "鑽啄"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
