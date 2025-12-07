import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Milotic",
        "fr": "Milotique",
        "es": "milótico",
        "it": "Milotico",
        "de": "Milotic",
        "pt-br": "Milótico",
        "zh-tw": "美納斯",
    },
    illustrator: "AKIRA EGAWA",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Water"],
    evolveFrom: {
        en: "Feebas",
        "fr": "Frais",
        "es": "Feebas",
        "it": "Feebas",
        "de": "Feebas",
        "pt-br": "Feebas",
        "zh-tw": "費巴斯"
    },
    description: {
        en: "Milotic has provided inspiration to many artists.\nIt has even been referred to as the most\nbeautiful Pokémon of all.",
        "fr": "Milotic a inspiré de nombreux artistes.\nIl a même été qualifié de plus\nbeau Pokémon de tous.",
        "es": "Milotic ha servido de inspiración a muchos artistas.\nIncluso se le ha denominado el más\nHermoso Pokémon de todos.",
        "it": "Milotic ha fornito ispirazione a molti artisti.\nÈ stato anche definito il più\nbellissimi Pokémon in assoluto.",
        "de": "Milotic hat viele Künstler inspiriert.\nEs wurde sogar als das meiste bezeichnet\nwunderschönes Pokémon von allen.",
        "pt-br": "Milotic inspirou muitos artistas.\nFoi até referido como o mais\nlindo Pokémon de todos.",
        "zh-tw": "米洛蒂奇為許多藝術家提供了靈感。\n甚至被稱為最\n美麗的神奇寶貝。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Healing Ripples",
                "fr": "Ondulations de guérison",
                "es": "Ondas curativas",
                "it": "Increspature curative",
                "de": "Heilende Wellen",
                "pt-br": "Ondulações de Cura",
                "zh-tw": "療愈漣漪"
            },
            effect: {
                en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may heal 60 damage from 1 of your {W} Pokémon.",
                "fr": "Une fois pendant votre tour, lorsque vous jouez ce Pokémon depuis votre main pour faire évoluer 1 de vos Pokémon, vous pouvez soigner 60 dégâts d'1 de vos Pokémon {W}.",
                "es": "Una vez durante tu turno, cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, podrás curar 60 puntos de daño de 1 de tus Pokémon {W}.",
                "it": "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere 1 dei tuoi Pokémon, puoi curare 60 danni da 1 dei tuoi Pokémon {W}.",
                "de": "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 60 Schadenspunkte von 1 deiner {W} Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá curar 60 de dano de 1 dos seus {W} Pokémon.",
                "zh-tw": "在你的回合中，當你從手牌中使用這只神奇寶貝來進化你的 1 只神奇寶貝時，你可以從你的 1 只 {W} 神奇寶貝那裡治療 60 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Aqua Edge",
                "fr": "Bord Aqua",
                "es": "Borde acuático",
                "it": "Bordo acquatico",
                "de": "Aqua Edge",
                "pt-br": "Borda Aqua",
                "zh-tw": "水色邊緣"
            },
            damage: 60,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
