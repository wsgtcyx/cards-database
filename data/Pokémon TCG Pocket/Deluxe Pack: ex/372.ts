import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Arceus ex",
        "fr": "Arceus ex",
        "es": "arceus ex",
        "it": "Arceus es",
        "de": "Arceus ex",
        "pt-br": "Arceus ex",
        "zh-tw": "阿爾宙斯 ex",
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    stage: "Basic",
    suffix: "EX",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fabled Luster",
                "fr": "Lustre légendaire",
                "es": "Brillo legendario",
                "it": "Lucentezza leggendaria",
                "de": "Sagenhafter Glanz",
                "pt-br": "Brilho lendário",
                "zh-tw": "傳說中的光澤"
            },
            effect: {
                en: "This Pokémon can't be affected by any Special Conditions.",
                "fr": "Ce Pokémon ne peut être affecté par aucune condition spéciale.",
                "es": "Este Pokémon no puede verse afectado por ninguna Condición Especial.",
                "it": "Questo Pokémon non può essere influenzato da alcuna condizione speciale.",
                "de": "Dieses Pokémon kann von keinen Sonderzuständen betroffen sein.",
                "pt-br": "Este Pokémon não pode ser afetado por nenhuma condição especial.",
                "zh-tw": "該神奇寶貝不會受到任何特殊條件的影響。"
            }
        }],
    attacks: [{
            name: {
                en: "Ultimate Force",
                "fr": "Force ultime",
                "es": "Fuerza suprema",
                "it": "Forza Ultima",
                "de": "Ultimative Kraft",
                "pt-br": "Força Suprema",
                "zh-tw": "終極力量"
            },
            damage: 70,
            cost: ["Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack does 20 more damage for each of your Benched Pokémon.",
                "fr": "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
                "es": "Este ataque hace 20 daños más por cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge 20 danni in più per ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt jedem Pokémon auf deiner Bank 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 danos a mais para cada um dos seus Pokémon no Banco.",
                "zh-tw": "此攻擊對你的每隻後備神奇寶貝造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
