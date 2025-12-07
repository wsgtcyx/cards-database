import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Misdreavus",
        "fr": "Misdreavus",
        "es": "Misdreavus",
        "it": "Misdreavus",
        "de": "Misdreavus",
        "pt-br": "Misdreavus",
        "zh-tw": "夢妖",
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    description: {
        en: "This Pokémon startles people in the middle of\nthe night. It gathers fear as its energy.",
        "fr": "Ce Pokémon surprend les gens en plein milieu de\nla nuit. Il rassemble la peur comme énergie.",
        "es": "Este Pokémon asusta a la gente en medio de\nla noche. Reúne el miedo como su energía.",
        "it": "Questo Pokémon spaventa le persone nel mezzo\nla notte. Raccoglie la paura come energia.",
        "de": "Dieses Pokémon erschreckt die Leute mittendrin\ndie Nacht. Es sammelt Angst als seine Energie.",
        "pt-br": "Este Pokémon assusta as pessoas no meio de\na noite. Ele reúne o medo como sua energia.",
        "zh-tw": "這個神奇寶貝在中間嚇到了人們\n那個晚上。它聚集恐懼作為能量。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Infiltrating Inspection",
                "fr": "Inspection infiltrante",
                "es": "Inspección infiltrada",
                "it": "Ispezione infiltrante",
                "de": "Infiltrierende Inspektion",
                "pt-br": "Inspeção de infiltração",
                "zh-tw": "滲透檢查"
            },
            effect: {
                en: "Once during your turn, when you put this Pokémon from your hand onto your Bench, you may have your opponent reveal their hand.",
                "fr": "Une fois pendant votre tour, lorsque vous placez ce Pokémon de votre main sur votre Banc, vous pouvez demander à votre adversaire de révéler sa main.",
                "es": "Una vez durante tu turno, cuando pongas este Pokémon de tu mano en tu Banca, puedes hacer que tu oponente revele su mano.",
                "it": "Una sola volta durante il tuo turno, quando metti questo Pokémon dalla tua mano nella tua panchina, puoi chiedere al tuo avversario di rivelare la sua mano.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand auf deine Bank legst, kannst du deinen Gegner seine Hand aufdecken lassen.",
                "pt-br": "Uma vez durante o seu turno, quando você colocar este Pokémon da sua mão no seu Banco, você poderá fazer com que seu oponente revele a mão dele.",
                "zh-tw": "在你的回合中，當你將這只神奇寶貝從你的手牌放到你的替補席上時，你可能會讓對手亮出他們的手牌。"
            }
        }],
    attacks: [{
            name: {
                en: "Will-O-Wisp",
                "fr": "Feu Follet",
                "es": "Fuego fatuo",
                "it": "Fuoco fatuo",
                "de": "Irrlicht",
                "pt-br": "Will-O-Wisp",
                "zh-tw": "鬼火"
            },
            damage: 20,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
