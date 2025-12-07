import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Granbull",
        "fr": "Granbull",
        "es": "granbull",
        "it": "Granbull",
        "de": "Granbull",
        "pt-br": "Granbull",
        "zh-tw": "布盧皇",
    },
    illustrator: "Suwama Chiaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Psychic"],
    evolveFrom: {
        en: "Snubbull",
        "fr": "Snobbull",
        "es": "desaire",
        "it": "Snubbull",
        "de": "Snubbull",
        "pt-br": "Esnobado",
        "zh-tw": "斯納布爾"
    },
    description: {
        en: "While it has powerful jaws, it doesn't care for\ndisputes, so it rarely has a chance to display\ntheir might.",
        "fr": "Bien qu'il ait des mâchoires puissantes, il ne se soucie pas\ndifférends, il a donc rarement l'occasion d'afficher\nleur puissance.",
        "es": "Si bien tiene poderosas mandíbulas, no le importa\ndisputas, por lo que rara vez tiene la oportunidad de mostrarse\nsu poder.",
        "it": "Sebbene abbia mascelle potenti, non gli importa\ncontroversie, quindi raramente ha la possibilità di essere esposto\nla loro potenza.",
        "de": "Obwohl es kräftige Kiefer hat, ist es ihm egal\nStreitigkeiten, daher hat es selten eine Chance zur Anzeige\nihre Macht.",
        "pt-br": "Embora tenha mandíbulas poderosas, não se importa com\ndisputas, por isso raramente tem a chance de exibir\nseu poder.",
        "zh-tw": "雖然它有強大的下巴，但它並不關心\n爭議，所以很少有機會展示\n他們的力量。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Wild Tackle",
                "fr": "Tacle sauvage",
                "es": "Entrada salvaje",
                "it": "Affronto selvaggio",
                "de": "Wildes Tackle",
                "pt-br": "Equipamento Selvagem",
                "zh-tw": "狂野鏟球"
            },
            damage: 100,
            cost: ["Psychic", "Psychic", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 20 dégâts.",
                "es": "Este Pokémon también se hace 20 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
