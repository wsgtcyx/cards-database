import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Magneton",
        "fr": "Magnéton",
        "es": "Magneton",
        "it": "Magneton",
        "de": "Magneton",
        "pt-br": "Magneton",
        "zh-tw": "三合一磁怪"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Lightning"],
    evolveFrom: {
        en: "Magnemite",
        "fr": "Magnéti",
        "es": "Magnemite",
        "it": "Magnemite",
        "de": "Magnetilo",
        "pt-br": "Magnemite",
        "zh-tw": "小磁怪"
    },
    description: {
        en: "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close.",
        "fr": "Trois Magnéties sont liées par un fort pouvoir magnétique\nforcer. Des maux d’oreilles surviendront si vous vous approchez trop près.",
        "es": "Tres magnemita están unidas por un fuerte imán.\nfuerza. Se producirán dolores de oído si te acercas demasiado.",
        "it": "Tre Magnemite sono legati da un forte magnetismo\nforza. Se ti avvicini troppo ti verranno mal d'orecchi.",
        "de": "Drei Magnemite sind durch einen starken Magneten verbunden\nKraft. Wenn Sie zu nahe kommen, treten Ohrenschmerzen auf.",
        "pt-br": "Três Magnemite estão ligadas por um forte campo magnético\nforça. Dores de ouvido ocorrerão se você chegar muito perto.",
        "zh-tw": "三個磁鐵礦通過強磁性連接在一起\n力。如果距離太近，就會出現耳痛。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Spark",
                "fr": "Étincelle",
                "es": "Chispa",
                "it": "Scintilla",
                "de": "Funke",
                "pt-br": "Fagulha",
                "zh-tw": "電光"
            },
            damage: 20,
            cost: ["Lightning"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
