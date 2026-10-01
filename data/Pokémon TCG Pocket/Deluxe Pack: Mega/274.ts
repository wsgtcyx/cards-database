import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/274",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/274",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/274",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/274",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/274",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/274",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/274"
    },
    name: {
        en: "Wartortle",
        fr: "Carabaffe",
        es: "Wartortle",
        it: "Wartortle",
        de: "Schillok",
        "pt-br": "Wartortle",
        "zh-tw": "卡咪龜",
        ja: "カメール",
        ko: "어니부기"
    },
    illustrator: "Taiga Kasai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Squirtle",
        fr: "Carapuce",
        es: "Squirtle",
        it: "Squirtle",
        de: "Schiggy",
        "pt-br": "Squirtle",
        "zh-tw": "傑尼龜",
        ja: "Squirtle",
        ko: "Squirtle"
    },
    description: {
        en: "It cleverly controls its furry ears and tail to\nmaintain its balance while swimming.",
        fr: "Il se sert habilement de sa queue et de ses oreilles touffues pour garder son équilibre sous l'eau.",
        es: "Utiliza hábilmente sus peludas orejas y la cola para mantener el equilibrio al nadar.",
        it: "Controlla abilmente le orecchie e la coda coperte di pelo, mantenendo l'assetto mentre nuota.",
        de: "Es balanciert geschickt mit seinen buschigen Ohren und dem Schweif, während es im Wasser schwimmt.",
        "pt-br": "Controla suas orelhas e cauda felpudas com maestria para manter o equilíbrio enquanto nada.",
        "zh-tw": "會靈巧地擺動自己毛茸茸的耳朵和尾巴，藉此在水中保持平衡。",
        ja: "It cleverly controls its furry ears and tail to\nmaintain its balance while swimming.",
        ko: "It cleverly controls its furry ears and tail to\nmaintain its balance while swimming."
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Shell Shield",
                fr: "Carapace",
                es: "Escudo Caparazón",
                it: "Carapace",
                de: "Panzerhülle",
                "pt-br": "Escudo de Concha",
                "zh-tw": "甲殼盾",
                ja: "Shell Shield",
                ko: "Shell Shield"
            },
            effect: {
                en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks.",
                fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par les attaques.",
                es: "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques.",
                it: "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
                de: "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken zugefügt wird.",
                "pt-br": "Enquanto este Pokémon estiver no seu Banco, previna todo o dano causado a este Pokémon por ataques.",
                "zh-tw": "只要這隻寶可夢在備戰區,不會受到招式的傷害。",
                ja: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks.",
                ko: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks."
            }
        }
    ],
    attacks: [
        {
            name: {
                en: "Waterfall",
                fr: "Cascade",
                es: "Cascada",
                it: "Cascata",
                de: "Kaskade",
                "pt-br": "Cachoeira",
                "zh-tw": "攀瀑",
                ja: "Waterfall",
                ko: "Waterfall"
            },
            damage: 60,
            cost: [
                "Water",
                "Water",
                "Colorless"
            ]
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
