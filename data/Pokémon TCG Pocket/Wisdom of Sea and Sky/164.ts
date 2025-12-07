import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Heracross",
        "fr": "Heracross",
        "es": "Heracruz",
        "it": "Heracross",
        "de": "Heracross",
        "pt-br": "Heracross",
        "zh-tw": "赫拉克羅斯"
    },
    illustrator: "GOSSAN",
    rarity: "One Star",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    description: {
        en: "It loves sweet nectar. To keep all the nectar to\nitself, it hurls rivals away with its prized horn.",
        "fr": "Il aime le nectar sucré. Pour garder tout le nectar\nlui-même, il repousse ses rivaux avec sa corne précieuse.",
        "es": "Le encanta el néctar dulce. Para conservar todo el néctar\nmismo, arroja a sus rivales con su preciado cuerno.",
        "it": "Ama il nettare dolce. Per conservare tutto il nettare\nstesso, scaglia via i rivali con il suo prezioso corno.",
        "de": "Es liebt süßen Nektar. Um den ganzen Nektar zu behalten\nselbst, schleudert es Rivalen mit seinem wertvollen Horn weg.",
        "pt-br": "Adora néctar doce. Para manter todo o néctar\npor si só, ele afasta os rivais com seu valioso chifre.",
        "zh-tw": "牠喜歡甜甜的花蜜。為了保留所有的花蜜\n它本身也用它珍貴的角把對手趕走。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Single Lunge",
                "fr": "Fente simple",
                "es": "estocada simple",
                "it": "Affondo singolo",
                "de": "Einzelner Ausfallschritt",
                "pt-br": "Estocada única",
                "zh-tw": "單弓步"
            },
            damage: 40,
            cost: ["Grass", "Grass"],
            effect: {
                en: "If this Pokémon has no damage on it, this attack does 40 more damage.",
                "fr": "Si ce Pokémon ne subit aucun dégât, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si este Pokémon no tiene daño, este ataque hace 40 daños más.",
                "it": "Se questo Pokémon non ha danni su di sé, questo attacco infligge 40 danni in più.",
                "de": "Wenn dieses Pokémon keinen Schaden hat, verursacht dieser Angriff 40 weitere Schadenspunkte.",
                "pt-br": "Se este Pokémon não causar danos, este ataque causará 40 danos a mais.",
                "zh-tw": "如果這只神奇寶貝沒有受到任何傷害，則這次攻擊會造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["ho-oh"]
};
export default card;
