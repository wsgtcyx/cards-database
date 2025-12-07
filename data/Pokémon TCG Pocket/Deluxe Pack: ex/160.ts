import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Espeon ex",
        "fr": "Espeon ex",
        "es": "Espeon ex",
        "it": "Espeon es",
        "de": "Espeon ex",
        "pt-br": "Espeon ex",
        "zh-tw": "埃斯彭前"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Psychic"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    stage: "Stage1",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Psychic Healing",
                "fr": "Guérison psychique",
                "es": "Sanación Psíquica",
                "it": "Guarigione psichica",
                "de": "Psychische Heilung",
                "pt-br": "Cura Psíquica",
                "zh-tw": "心靈治療"
            },
            effect: {
                en: "Once during your turn, if this Pokémon is in the Active Spot, you may heal 30 damage from 1 of your Pokémon.",
                "fr": "Une fois pendant votre tour, si ce Pokémon est dans le Point Actif, vous pouvez soigner 30 dégâts d'un de vos Pokémon.",
                "es": "Una vez durante tu turno, si este Pokémon está en el Punto Activo, puedes curar 30 puntos de daño a 1 de tus Pokémon.",
                "it": "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi curare 1 dei tuoi Pokémon da 30 danni.",
                "de": "Einmal während deines Zuges kannst du, wenn sich dieses Pokémon an der aktiven Stelle befindet, 30 Schadenspunkte bei einem deiner Pokémon heilen.",
                "pt-br": "Uma vez durante o seu turno, se este Pokémon estiver no Ponto Ativo, você poderá curar 30 pontos de dano de 1 dos seus Pokémon.",
                "zh-tw": "在你的回合中，如果這只神奇寶貝位於活躍位置，你可以治療你的 1 只神奇寶貝造成的 30 點傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Super Psy Bolt",
                "fr": "Super Boulon Psi",
                "es": "Perno súper psi",
                "it": "Super Dardo Psico",
                "de": "Super Psy Bolt",
                "pt-br": "Raio Super Psíquico",
                "zh-tw": "超級心靈螺栓"
            },
            damage: 80,
            cost: ["Psychic", "Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
