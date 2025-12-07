import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Raikou ex",
        "fr": "Raikou ex",
        "es": "Raikou ex",
        "it": "Raikou ex",
        "de": "Raikou ex",
        "pt-br": "Ex de Raikou",
        "zh-tw": "賴光超級"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Legendary Pulse",
                "fr": "Impulsion légendaire",
                "es": "Pulso legendario",
                "it": "Impulso leggendario",
                "de": "Legendärer Puls",
                "pt-br": "Pulso Lendário",
                "zh-tw": "傳奇脈搏"
            },
            effect: {
                en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card.",
                "fr": "A la fin de votre tour, si ce Pokémon est dans le Spot Actif, piochez une carte.",
                "es": "Al final de tu turno, si este Pokémon está en el Punto Activo, roba una carta.",
                "it": "Alla fine del tuo turno, se questo Pokémon è in posizione attiva, pesca una carta.",
                "de": "Wenn sich dieses Pokémon am Ende deines Zuges an der aktiven Stelle befindet, ziehe eine Karte.",
                "pt-br": "No final do seu turno, se este Pokémon estiver no Local Ativo, compre um card.",
                "zh-tw": "在你的回合結束時，如果這只神奇寶貝位於活躍位置，抽一張卡。"
            }
        }],
    attacks: [{
            name: {
                en: "Voltaic Bullet",
                "fr": "Balle Voltaïque",
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
                "fr": "Cette attaque inflige également 10 dégâts à 1 des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 10 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 10 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只神奇寶貝造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
