import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/126",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/126"
    },
    name: {
        en: "Entei",
        fr: "Entei",
        es: "Entei",
        it: "Entei",
        de: "Entei",
        "pt-br": "Entei",
        "zh-tw": "炎帝",
        'es-mx': "Entei",
        pt: "Entei"
    },
    suffix: "EX",
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 140,
    types: ["Fire"],
    dexId: [244],
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
                en: "Blazing Beatdown",
                fr: "Dérouillée Flamboyante",
                "es": "Paliza ardiente",
                "it": "Sconfitta fiammeggiante",
                "de": "Flammender Beatdown",
                "pt-br": "Beatdown ardente",
                "zh-tw": "熾熱的擊敗"
            },
            damage: 60,
            cost: ["Fire", "Fire"],
            effect: {
                en: "If this Pokémon has at least 2 extra {R} Energy attached, this attack does 60 more damage.",
                fr: "Si ce Pokémon a au moins 2 Énergies {R} de plus, cette attaque inflige 60 dégâts supplémentaires.",
                "es": "Si este Pokémon tiene al menos 2 Energías {R} extra unidas, este ataque hace 60 puntos de daño más.",
                "it": "Se questo Pokémon ha almeno due Energie {R} extra assegnate, questo attacco infligge 60 danni in più.",
                "de": "Wenn an dieses Pokémon mindestens 2 zusätzliche {R}-Energien angelegt sind, fügt dieser Angriff 60 Schadenspunkte mehr zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 2 energias {R} extras anexadas, este ataque causará 60 de dano a mais.",
                "zh-tw": "如果這隻寶可夢附加了至少 2 個額外的 {R} 能量，則此攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 2
};
export default card;
