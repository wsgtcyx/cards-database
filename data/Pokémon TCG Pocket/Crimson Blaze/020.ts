import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Mega Blastoise ex",
        "fr": "Méga-Tortank ex",
        "es": "Mega Blastoise ex",
        "it": "Mega Blastoise ex",
        "de": "Mega-Turtok ex",
        "pt-br": "Mega Blastoise ex",
        "zh-tw": "超級水箭龜 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 230,
    types: ["Water"],
    evolveFrom: {
        en: "Wartortle",
        "fr": "Carabaffe",
        "es": "Wartortle",
        "it": "Wartortle",
        "de": "Schillok",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜"
    },
    description: {
        en: "The cannon on its back is as powerful as a\ntank gun. Its tough legs and back enable it to\nwithstand the recoil from firing the cannon.",
        "fr": "Le canon sur son dos est aussi puissant qu'un\ncanon de char. Ses pattes et son dos robustes lui permettent de\nrésister au recul du tir du canon.",
        "es": "El cañón en su espalda es tan poderoso como un\narma de tanque. Sus patas y espalda duras le permiten\nresistir el retroceso del disparo del cañón.",
        "it": "Il cannone sul dorso è potente quanto un\npistola da carro armato. Le sue gambe robuste e la schiena glielo consentono\nresistere al rinculo dello sparo del cannone.",
        "de": "Die Kanone auf seinem Rücken ist so stark wie ein\nPanzerpistole. Seine robusten Beine und sein robuster Rücken machen es ihm möglich\ndem Rückstoß durch das Abfeuern der Kanone standhalten.",
        "pt-br": "O canhão em suas costas é tão poderoso quanto um\narma de tanque. Suas pernas e costas resistentes permitem-lhe\nresistir ao recuo do disparo do canhão.",
        "zh-tw": "它背上的大砲威力堪比\n坦克炮。它堅韌的腿和背部使它能夠\n承受大砲發射時的後坐力。"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Triple Bombardment",
                "fr": "Triple bombardement",
                "es": "Triple bombardeo",
                "it": "Triplo bombardamento",
                "de": "Dreifaches Bombardement",
                "pt-br": "Bombardeio Triplo",
                "zh-tw": "三重轟炸"
            },
            damage: 130,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "If this Pokémon has at least 3 extra {W} Energy attached, this attack also does 50 damage to 2 of your opponent's Benched Pokémon.",
                "fr": "Si ce Pokémon a au moins 3 Énergies {W} supplémentaires attachées, cette attaque inflige également 50 dégâts à 2 des Pokémon de Banc de votre adversaire.",
                "es": "Si este Pokémon tiene al menos 3 Energías {W} extra unidas, este ataque también hace 50 puntos de daño a 2 de los Pokémon en Banca de tu rival.",
                "it": "Se questo Pokémon ha almeno tre Energie {W} extra assegnate, questo attacco infligge anche 50 danni a 2 dei Pokémon nella panchina del tuo avversario.",
                "de": "Wenn an dieses Pokémon mindestens 3 zusätzliche {W}-Energien angelegt sind, fügt dieser Angriff außerdem 2 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 3 {W} Energias extras ligadas, este ataque também causará 50 de dano a 2 Pokémon no Banco do seu oponente.",
                "zh-tw": "如果這只神奇寶貝附加了至少 3 個額外的 {W} 能量，則此攻擊也會對對手後備的 2 只神奇寶貝造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
