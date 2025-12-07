import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Whiscash",
        "fr": "Whiscash",
        "es": "Whiscash",
        "it": "Whiskey",
        "de": "Whiscash",
        "pt-br": "Whiscash",
        "zh-tw": "威士忌"
    },
    illustrator: "Shinji Kanda",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Fighting"],
    evolveFrom: {
        en: "Barboach",
        "fr": "Barboach",
        "es": "barboach",
        "it": "Barboach",
        "de": "Barboach",
        "pt-br": "Barboach",
        "zh-tw": "巴博阿奇"
    },
    description: {
        en: "It is extremely protective of its territory. If any\nfoe approaches, it attacks using vicious tremors.",
        "fr": "Il est extrêmement protecteur de son territoire. Le cas échéant\nL'ennemi s'approche, il attaque en utilisant des tremblements vicieux.",
        "es": "Es extremadamente protector de su territorio. Si alguno\nEl enemigo se acerca, ataca usando feroces temblores.",
        "it": "È estremamente protettivo nei confronti del suo territorio. Se presente\nil nemico si avvicina, attacca usando tremori feroci.",
        "de": "Es schützt sein Territorium äußerst. Wenn überhaupt\nWenn sich ein Feind nähert, greift er mit heftigen Erschütterungen an.",
        "pt-br": "É extremamente protetor com seu território. Se houver\ninimigo se aproxima, ele ataca usando tremores violentos.",
        "zh-tw": "它非常保護自己的領土。如果有的話\n敵人接近時，它會使用惡毒的震動進行攻擊。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Earthquake",
                "fr": "Tremblement de terre",
                "es": "Terremoto",
                "it": "Terremoto",
                "de": "Erdbeben",
                "pt-br": "Terremoto",
                "zh-tw": "地震"
            },
            damage: 130,
            cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "This attack also does 10 damage to each of your Benched Pokémon.",
                "fr": "Cette attaque inflige également 10 dégâts à chacun de vos Pokémon de Banc.",
                "es": "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca.",
                "it": "Questo attacco infligge anche 10 danni a ciascuno dei tuoi Pokémon in panchina.",
                "de": "Dieser Angriff fügt außerdem jedem Pokémon auf deiner Bank 10 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 10 de dano a cada um dos seus Pokémon no Banco.",
                "zh-tw": "這次攻擊還會對你的每隻後備神奇寶貝造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 3
};
export default card;
