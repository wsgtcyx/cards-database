import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Raikou",
        fr: "Raikou",
        es: "Raikou",
        it: "Raikou",
        de: "Raikou",
        "pt-br": "Raikou",
        "zh-tw": "雷公",
        pt: "Raikou",
        'es-mx': "Raikou"
    },
    suffix: "EX",
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    dexId: [243],
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
                en: "Voltaic Bullet",
                fr: "Projectile Voltaïque",
                "es": "Bala voltaica",
                "it": "Proiettile Voltaico",
                "de": "Voltaische Kugel",
                "pt-br": "Bala Voltaica",
                "zh-tw": "伏打子彈"
            },
            damage: 60,
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 10 dégâts à un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 10 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只寶可夢造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2,
};
export default card;
