import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/050",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/050",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/050",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/050",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/050",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/050",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/050"
    },
    name: {
        en: "Armarouge ex",
        fr: "Carmadura-ex",
        es: "Armarouge ex",
        it: "Armarouge-ex",
        de: "Crimanzo-ex",
        "pt-br": "Armarouge ex",
        "zh-tw": "紅蓮鎧騎ex",
        ja: "グレンアルマex",
        ko: "카디나르마 ex"
    },
    illustrator: "takuyoa",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: [
        "Fire"
    ],
    dexId: [
        936
    ],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ja: "Charcadet",
        ko: "Charcadet"
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
                "zh-tw": "裝甲",
                ja: "Armor",
                ko: "Armor"
            },
            effect: {
                en: "This Pokémon takes −30 damage from attacks.",
                fr: "Ce Pokémon subit − 30 dégâts provenant des attaques.",
                es: "Los ataques hacen -30 puntos de daño a este Pokémon.",
                it: "Questo Pokémon subisce -30 danni dagli attacchi.",
                de: "Diesem Pokémon werden durch Attacken -30 Schadenspunkte zugefügt.",
                "pt-br": "Este Pokémon recebe −30 pontos de dano de ataques.",
                "zh-tw": "這隻寶可夢受到招式的傷害-30點。",
                ja: "This Pokémon takes −30 damage from attacks.",
                ko: "This Pokémon takes −30 damage from attacks."
            }
        }
    ],
    attacks: [
        {
            cost: [
                "Fire",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Armor Cannon",
                fr: "Canon Blindé",
                es: "Cañón Armadura",
                it: "Corazza Cannone",
                de: "Rüstungskanone",
                "pt-br": "Canhão de Armadura",
                "zh-tw": "鎧農炮",
                ja: "Armor Cannon",
                ko: "Armor Cannon"
            },
            effect: {
                en: "Discard a {R} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {R} de ce Pokémon.",
                es: "Descarta 1 Energía {R} de este Pokémon.",
                it: "Rimuovi un'Energia {R} da questo Pokémon.",
                de: "Lege 1 {R}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {R} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{R}能量丟棄。",
                ja: "Discard a {R} Energy from this Pokémon.",
                ko: "Discard a {R} Energy from this Pokémon."
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
