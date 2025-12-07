import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    illustrator: "MAHOU",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Colorless"],
    description: {
        en: "Its genetic code is irregular. It may mutate if it is\nexposed to radiation from element stones.",
        "fr": "Son code génétique est irrégulier. Il peut muter si c'est le cas\nexposé au rayonnement des pierres élémentaires.",
        "es": "Su código genético es irregular. Puede mutar si es\nexpuesto a la radiación de las piedras elementales.",
        "it": "Il suo codice genetico è irregolare. Potrebbe mutare se lo è\nesposto alle radiazioni delle pietre elementali.",
        "de": "Sein genetischer Code ist unregelmäßig. Es könnte mutieren, wenn es so wäre\nder Strahlung von Elementsteinen ausgesetzt.",
        "pt-br": "Seu código genético é irregular. Pode sofrer mutação se for\nexposto à radiação das pedras elementares.",
        "zh-tw": "它的遺傳密碼是不規則的。如果是的話它可能會變異\n暴露於元素石的輻射之下。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Boosted Evolution",
                "fr": "Évolution boostée",
                "es": "Evolución impulsada",
                "it": "Evoluzione potenziata",
                "de": "Gesteigerte Evolution",
                "pt-br": "Evolução Impulsionada",
                "zh-tw": "加速進化"
            },
            effect: {
                en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
                "fr": "Tant que ce Pokémon est dans le Spot Actif, il peut évoluer lors de votre premier tour ou du tour où vous le jouez.",
                "es": "Mientras este Pokémon esté en el Punto Activo, puede evolucionar durante tu primer turno o el turno en el que lo juegues.",
                "it": "Finché questo Pokémon è in posizione attiva, può evolversi durante il tuo primo turno o nel turno in cui lo giochi.",
                "de": "Solange sich dieses Pokémon an der aktiven Stelle befindet, kann es sich während Ihres ersten Zuges oder in dem Zug, in dem Sie es spielen, weiterentwickeln.",
                "pt-br": "Enquanto este Pokémon estiver no Active Spot, ele poderá evoluir durante seu primeiro turno ou no turno em que você o jogar.",
                "zh-tw": "只要該神奇寶貝位於活動點，它就可以在你的第一個回合或你玩它的回合中進化。"
            }
        }],
    attacks: [{
            name: {
                en: "Stampede",
                "fr": "Débandade",
                "es": "Estampida",
                "it": "Fuga precipitosa",
                "de": "Ansturm",
                "pt-br": "Debandada",
                "zh-tw": "踩踏"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
