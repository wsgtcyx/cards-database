import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/020",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/020",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/020",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/020",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/020",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/020",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/020"
    },
    name: {
        en: "Armarouge",
        fr: "Carmadura",
        es: "Armarouge",
        it: "Armarouge",
        de: "Crimanzo",
        "pt-br": "Armarouge",
        "zh-tw": "紅蓮鎧騎",
        pt: "Armarouge"
    },
    suffix: "EX",
    illustrator: "takuyoa",
    rarity: "Four Diamond",
    category: "Pokemon",
    dexId: [936],
    hp: 140,
    types: ["Fire"],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        pt: "Charcadet"
    },
    stage: "Stage1",
    abilities: [
        {
            type: "Ability",
            name: {
                en: "Armor",
                fr: "Cuirasse",
                es: "Armadura",
                it: "Corazza",
                de: "Rüstung",
                "pt-br": "Armadura",
                "zh-tw": "盔甲",
                pt: "Armadura"
            },
            effect: {
                en: "This Pokémon takes –30 damage from attacks.",
                "fr": "Ce Pokémon subit -30 dégâts des attaques.",
                "es": "Este Pokémon recibe -30 de daño por ataques.",
                "it": "Questo Pokémon subisce -30 danni dagli attacchi.",
                "de": "Dieses Pokémon erleidet –30 Schaden durch Angriffe.",
                "pt-br": "Este Pokémon sofre –30 de dano de ataques.",
                "zh-tw": "該寶可夢受到 –30 點攻擊傷害。"
            },
        },
    ],
    attacks: [
        {
            name: {
                en: "Armor Cannon",
                fr: "Canon Armure",
                es: "Cañón Armadura",
                it: "Corazza Cannone",
                de: "Rüstungskanone",
                "pt-br": "Canhão de Armadura",
                "zh-tw": "裝甲砲",
                pt: "Canhão de Armadura"
            },
            damage: "120",
            cost: ["Fire", "Colorless", "Colorless"],
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Scarta un'Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon auf deinen Ablagestapel.",
                "pt-br": "Descarte uma Energia {R} deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 {R} 能量。",
                pt: "Descarte uma Energia {R} deste Pokémon."
            },
        },
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
