import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Blastoise",
        "fr": "Tortank",
        "es": "Blastoise",
        "it": "Blastoise",
        "de": "Turtok",
        "pt-br": "Blastoise",
        "zh-tw": "水箭龜"
    },
    illustrator: "Hitoshi Ariga",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
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
        en: "The rocket cannons on its shell fire jets of water\ncapable of punching holes through thick steel.",
        "fr": "Les canons-fusées sur sa coque tirent des jets d'eau\ncapable de percer des trous dans de l'acier épais.",
        "es": "Los cañones de cohetes de su proyectil disparan chorros de agua.\ncapaz de perforar agujeros a través de acero grueso.",
        "it": "I cannoni a razzo sul suo guscio sparano getti d'acqua\nin grado di perforare fori attraverso l'acciaio spesso.",
        "de": "Die Raketenkanonen auf seiner Granate feuern Wasserstrahlen ab\nKann Löcher durch dicken Stahl stanzen.",
        "pt-br": "Os canhões de foguete em seu projétil disparam jatos de água\ncapaz de fazer furos em aço grosso.",
        "zh-tw": "砲彈上的火箭炮噴射水流\n能夠在厚鋼板上打孔。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Double Splash",
                "fr": "Double éclaboussure",
                "es": "Doble Salpicadura",
                "it": "Doppio spruzzo",
                "de": "Doppelter Spritzer",
                "pt-br": "Respingo Duplo",
                "zh-tw": "雙飛濺"
            },
            damage: 90,
            cost: ["Water", "Water", "Colorless"],
            effect: {
                en: "If this Pokémon has at least 2 extra {W} Energy attached, this attack also does 50 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Si ce Pokémon a au moins 2 Énergies {W} supplémentaires attachées, cette attaque inflige également 50 dégâts à 1 des Pokémon de Banc de votre adversaire.",
                "es": "Si este Pokémon tiene al menos 2 Energías {W} extra unidas, este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Se questo Pokémon ha almeno due Energie {W} extra assegnate, questo attacco infligge anche 50 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Wenn an dieses Pokémon mindestens 2 zusätzliche {W}-Energien angelegt sind, fügt dieser Angriff außerdem 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
                "pt-br": "Se este Pokémon tiver pelo menos 2 {W} Energias extras ligadas, este ataque também causará 50 de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "如果這只神奇寶貝附加了至少 2 個額外的 {W} 能量，則此攻擊也會對對手後備的 1 只神奇寶貝造成 50 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 3
};
export default card;
