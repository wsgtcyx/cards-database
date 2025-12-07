import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Hitmontop",
        "fr": "Hitmontop",
        "es": "hitmontop",
        "it": "Hitmontop",
        "de": "Hitmontop",
        "pt-br": "Hitmontop",
        "zh-tw": "柯波朗",
    },
    illustrator: "Hisao Nakamura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "It launches kicks while spinning. If it spins at high\nspeed, it may bore its way into the ground.",
        "fr": "Il lance des coups de pied en tournant. S'il tourne à haute vitesse\nvitesse, il peut s'enfoncer dans le sol.",
        "es": "Lanza patadas mientras gira. Si gira en alto\nvelocidad, puede perforar el suelo.",
        "it": "Lancia i calci mentre gira. Se gira in alto\nvelocità, potrebbe penetrare nel terreno.",
        "de": "Beim Drehen werden Tritte ausgelöst. Wenn es auf Hochtouren läuft\nGeschwindigkeit, kann es sich in den Boden bohren.",
        "pt-br": "Ele lança chutes enquanto gira. Se girar alto\nvelocidade, ele pode penetrar no solo.",
        "zh-tw": "它在旋轉時發射踢腿。如果它高速旋轉\n速度，它可能會鑽入地下。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Piercing Spin",
                "fr": "Rotation perçante",
                "es": "Giro penetrante",
                "it": "Rotazione penetrante",
                "de": "Durchdringender Spin",
                "pt-br": "Giro Perfurante",
                "zh-tw": "刺穿旋轉"
            },
            damage: 20,
            cost: ["Fighting"],
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige également 20 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只神奇寶貝造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh", "lugia"]
};
export default card;
