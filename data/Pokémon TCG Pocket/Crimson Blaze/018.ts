import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    name: {
        en: "Wartortle",
        "fr": "Carabaffe",
        "es": "Wartortle",
        "it": "Wartortle",
        "de": "Schillok",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜"
    },
    illustrator: "Taiga Kasai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Squirtle",
        "fr": "Carapuce",
        "es": "Squirtle",
        "it": "Squirtle",
        "de": "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜"
    },
    description: {
        en: "It cleverly controls its furry ears and tail to\nmaintain its balance while swimming.",
        "fr": "Il contrôle intelligemment ses oreilles et sa queue poilues pour\nmaintenir son équilibre en nageant.",
        "es": "Controla hábilmente sus peludas orejas y cola para\nmantener el equilibrio mientras nada.",
        "it": "Controlla abilmente le orecchie e la coda pelose\nmantenere l'equilibrio mentre si nuota.",
        "de": "Es steuert geschickt seine pelzigen Ohren und seinen Schwanz\nHalten Sie beim Schwimmen das Gleichgewicht.",
        "pt-br": "Ele controla habilmente suas orelhas e cauda peludas para\nmanter o equilíbrio enquanto nada.",
        "zh-tw": "它巧妙地控制毛茸茸的耳朵和尾巴\n游泳時保持平衡。"
    },
    stage: "Stage1",
    abilities: [{
            type: "Ability",
            name: {
                en: "Shell Shield",
                "fr": "Bouclier de coquille",
                "es": "Escudo de concha",
                "it": "Scudo a conchiglia",
                "de": "Muschelschild",
                "pt-br": "Escudo de Concha",
                "zh-tw": "殼盾"
            },
            effect: {
                en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks.",
                "fr": "Tant que ce Pokémon est sur votre Banc, prévenez tous les dégâts infligés à ce Pokémon par les attaques.",
                "es": "Mientras este Pokémon esté en tu Banca, evita todo el daño que los ataques le hagan a este Pokémon.",
                "it": "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi.",
                "de": "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere jeglichen Schaden, der diesem Pokémon durch Angriffe zugefügt wird.",
                "pt-br": "Enquanto este Pokémon estiver no seu Banco, evite todos os danos causados ​​a este Pokémon por ataques.",
                "zh-tw": "只要這只神奇寶貝在你的替補席上，就可以防止攻擊對該神奇寶貝造成的所有傷害。"
            }
        }],
    attacks: [{
            name: {
                en: "Waterfall",
                "fr": "Cascade",
                "es": "Cascada",
                "it": "Cascata",
                "de": "Wasserfall",
                "pt-br": "Cachoeira",
                "zh-tw": "瀑布"
            },
            damage: 60,
            cost: ["Water", "Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
