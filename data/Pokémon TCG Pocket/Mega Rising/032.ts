import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Ho-Oh",
        "fr": "Ho-Oh",
        "es": "ho-oh",
        "it": "Ho-Oh",
        "de": "Ho-Oh",
        "pt-br": "Ho-Oh",
        "zh-tw": "鳳王"
    },
    illustrator: "Ryota Murayama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fire"],
    description: {
        en: "It will reveal itself before a pure-hearted Trainer by\nshining its bright, rainbow-colored wings.",
        "fr": "Il se révélera devant un entraîneur au cœur pur en\nbrillant de ses ailes brillantes aux couleurs de l'arc-en-ciel.",
        "es": "Se revelará ante un Entrenador de corazón puro al\nbrillando sus brillantes alas de colores del arco iris.",
        "it": "Si rivelerà davanti ad un Allenatore dal cuore puro\nsplendendo le sue ali luminose, color arcobaleno.",
        "de": "Es wird sich vor einem reinherzigen Trainer offenbaren\nseine leuchtenden, regenbogenfarbenen Flügel strahlen.",
        "pt-br": "Ele se revelará diante de um Treinador de coração puro ao\nbrilhando suas asas brilhantes da cor do arco-íris.",
        "zh-tw": "它將在純潔的訓練師面前展現自己\n閃耀著明亮的彩虹色翅膀。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Blessed Burn",
                "fr": "Brûlure bénie",
                "es": "Bendita quemadura",
                "it": "Beata Brucia",
                "de": "Gesegneter Brand",
                "pt-br": "Abençoado Queimadura",
                "zh-tw": "祝福燃燒"
            },
            damage: 100,
            cost: ["Fire", "Fire", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from each of your Benched Basic Pokémon.",
                "fr": "Soignez 30 dégâts de chacun de vos Pokémon de base de banc.",
                "es": "Cura 30 puntos de daño de cada uno de tus Pokémon Básicos en Banca.",
                "it": "Cura ciascuno dei tuoi Pokémon Base in panchina da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei jedem deiner Basis-Pokémon auf deiner Bank.",
                "pt-br": "Cure 30 de dano de cada um dos seus Pokémon Básicos no Banco.",
                "zh-tw": "每隻後備基礎神奇寶貝可治療 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
