import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Suicune",
        fr: "Suicune",
        es: "Suicune",
        it: "Suicune",
        de: "Suicune",
        "pt-br": "Suicune",
        "zh-tw": "水君",
        pt: "Suicune"
    },
    suffix: "EX",
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Water"],
    dexId: [245],
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Legendary Pulse",
                fr: "Battement Légendaire",
                "es": "Pulso legendario",
                "it": "Impulso leggendario",
                "de": "Legendärer Puls",
                "pt-br": "Pulso Lendário",
                "zh-tw": "傳奇脈搏"
            },
            effect: {
                en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card.",
                fr: "À la fin de votre tour, si ce Pokémon est sur le Poste Actif, piochez une carte.",
                "es": "Al final de tu turno, si este Pokémon está en el Punto Activo, roba una carta.",
                "it": "Alla fine del tuo turno, se questo Pokémon è in posizione attiva, pesca una carta.",
                "de": "Wenn sich dieses Pokémon am Ende deines Zuges an der aktiven Stelle befindet, ziehe eine Karte.",
                "pt-br": "No final do seu turno, se este Pokémon estiver no Local Ativo, compre um card.",
                "zh-tw": "在你的回合結束時，如果這隻寶可夢位於戰鬥場，抽一張卡。"
            }
        }],
    attacks: [{
            name: {
                en: "Crystal Waltz",
                fr: "Valse de Cristal",
                "es": "Vals de cristal",
                "it": "Valzer di cristallo",
                "de": "Kristallwalzer",
                "pt-br": "Valsa Cristal",
                "zh-tw": "水晶華爾茲"
            },
            damage: 20,
            cost: ["Water", "Water"],
            effect: {
                en: "This attack does 20 damage for each Benched Pokémon (both yours and your opponent's).",
                fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
                "es": "Este ataque hace 20 puntos de daño por cada Pokémon en Banca (tanto tuyo como de tu rival).",
                "it": "Questo attacco infligge 20 danni per ogni Pokémon in panchina (sia il tuo che quello del tuo avversario).",
                "de": "Dieser Angriff fügt jedem Pokémon auf der Bank (sowohl deinem als auch dem deines Gegners) 20 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 de dano para cada Pokémon no Banco (seu e do seu oponente).",
                "zh-tw": "此攻擊對每個備戰寶可夢（包括你的和你對手的）造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
