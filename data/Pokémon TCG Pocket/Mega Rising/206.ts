import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Furfrou",
        "fr": "Furfrou",
        "es": "Furfrou",
        "it": "Furfrou",
        "de": "Furfrou",
        "pt-br": "Furfrou",
        "zh-tw": "弗弗魯"
    },
    illustrator: "Teeziro",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Colorless"],
    description: {
        en: "Left alone, its fur will grow longer and longer,\nbut it will only allow someone it trusts to cut it.",
        "fr": "Laissé seul, sa fourrure deviendra de plus en plus longue,\nmais cela permettra seulement à quelqu'un en qui il a confiance de le couper.",
        "es": "Si se deja solo, su pelaje crecerá cada vez más,\npero sólo permitirá que alguien en quien confíe lo corte.",
        "it": "Lasciato solo, la sua pelliccia crescerà sempre più a lungo,\nma consentirà solo a qualcuno di cui si fida di tagliarlo.",
        "de": "Wenn man es in Ruhe lässt, wird sein Fell immer länger,\nAber es erlaubt nur jemandem, dem es vertraut, es zu schneiden.",
        "pt-br": "Deixado sozinho, seu pelo crescerá cada vez mais,\nmas só permitirá que alguém em quem confie o corte.",
        "zh-tw": "放任不管，它的皮毛會越來越長，\n但它只允許它信任的人來切割它。"
    },
    stage: "Basic",
    abilities: [{
            type: "Ability",
            name: {
                en: "Fur Coat",
                "fr": "Manteau de fourrure",
                "es": "abrigo de piel",
                "it": "Cappotto di pelliccia",
                "de": "Pelzmantel",
                "pt-br": "Casaco de pele",
                "zh-tw": "毛皮大衣"
            },
            effect: {
                en: "This Pokémon takes −20 damage from attacks.",
                "fr": "Ce Pokémon subit -20 dégâts des attaques.",
                "es": "Este Pokémon recibe −20 de daño por ataques.",
                "it": "Questo Pokémon subisce -20 danni dagli attacchi.",
                "de": "Dieses Pokémon erleidet −20 Schaden durch Angriffe.",
                "pt-br": "Este Pokémon sofre -20 de dano de ataques.",
                "zh-tw": "這只神奇寶貝受到的攻擊傷害為 -20。"
            }
        }],
    attacks: [{
            name: {
                en: "Sharp Fang",
                "fr": "Croc acéré",
                "es": "Colmillo afilado",
                "it": "Zanna affilata",
                "de": "Scharfer Fangzahn",
                "pt-br": "Presa Afiada",
                "zh-tw": "尖牙"
            },
            damage: 50,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
