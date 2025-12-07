import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Passimian ex",
        "fr": "Ex passimien",
        "es": "ex passimiano",
        "it": "Passimiano ex",
        "de": "Passimian ex",
        "pt-br": "Ex passimiano",
        "zh-tw": "帕西米亞超級"
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Offload Pass",
                "fr": "Passe de déchargement",
                "es": "Pase de descarga",
                "it": "Passaggio di scarico",
                "de": "Offload-Pass",
                "pt-br": "Passe de descarregamento",
                "zh-tw": "卸載通行證"
            },
            effect: {
                en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move all {F} Energy from this Pokémon to 1 of your Benched Pokémon.",
                "fr": "Si ce Pokémon est dans le Point Actif et est mis KO par les dégâts d'une attaque du Pokémon de votre adversaire, déplacez toute l'Énergie {F} de ce Pokémon vers l'un de vos Pokémon de Banc.",
                "es": "Si este Pokémon está en el Punto Activo y queda Fuera de Combate por el daño de un ataque del Pokémon de tu rival, mueve todas las Energías {F} de este Pokémon a 1 de tus Pokémon en Banca.",
                "it": "Se questo Pokémon è in posizione attiva e viene messo KO dai danni di un attacco dei Pokémon del tuo avversario, sposta tutte le Energie {F} da questo Pokémon a 1 dei tuoi Pokémon in panchina.",
                "de": "Wenn sich dieses Pokémon an der aktiven Stelle befindet und durch den Schaden eines Angriffs des Pokémon deines Gegners kampfunfähig gemacht wird, verschiebe alle {F}-Energien von diesem Pokémon auf 1 deiner Pokémon auf der Bank.",
                "pt-br": "Se este Pokémon estiver no Ponto Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, mova todas as Energias {F} deste Pokémon para 1 dos seus Pokémon no Banco.",
                "zh-tw": "如果這只神奇寶貝位於活動位置並因對手神奇寶貝的攻擊而被擊倒，則將該神奇寶貝的所有 {F} 能量移至你後備的 1 只神奇寶貝。"
            }
        }],
    attacks: [{
            name: {
                en: "Seismic Toss",
                "fr": "Lancer sismique",
                "es": "Lanzamiento sísmico",
                "it": "Scossa sismica",
                "de": "Seismischer Wurf",
                "pt-br": "Lançamento Sísmico",
                "zh-tw": "地震拋擲"
            },
            damage: 60,
            cost: ["Fighting", "Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
