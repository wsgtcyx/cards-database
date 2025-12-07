import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Jumpluff ex",
        "fr": "Jumpluff ex",
        "es": "ex saltador",
        "it": "Jumpluff es",
        "de": "Jumpluff ex",
        "pt-br": "Ex-Jumpluff",
        "zh-tw": "跳躍前"
    },
    illustrator: "takashi shiraishi",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Skiploom",
        "fr": "Skiplum",
        "es": "Skiploom",
        "it": "Skiploom",
        "de": "Skiploom",
        "pt-br": "Skiploom",
        "zh-tw": "斯基普盧姆"
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Breeze-By Attack",
                "fr": "Attaque rapide",
                "es": "Ataque rápido",
                "it": "Attacco Breeze-By",
                "de": "Breeze-By-Angriff",
                "pt-br": "Ataque Breeze-By",
                "zh-tw": "微風攻擊"
            },
            damage: 70,
            cost: ["Colorless"],
            effect: {
                en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
                "fr": "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Puoi scambiare questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Du kannst dieses Pokémon mit einem deiner Bank-Pokémon austauschen.",
                "pt-br": "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "您可以將這只神奇寶貝與您的 1 只後備神奇寶貝交換。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
