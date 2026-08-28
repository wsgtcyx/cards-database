import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/098",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/098"
    },
    name: {
        en: "Seaking",
        fr: "Poissoroy",
        es: "Seaking",
        it: "Seaking",
        de: "Golking",
        "pt-br": "Seaking",
        "zh-tw": "金魚王",
        ko: "왕콘치",
        ja: "アズマオウ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    dexId: [119],
    evolveFrom: {
        en: "Goldeen",
        fr: "Poissirène",
        es: "Goldeen",
        it: "Goldeen",
        de: "Goldini",
        "pt-br": "Goldeen",
        "zh-tw": "角金魚",
        ko: "콘치",
        ja: "トサキント"
    },
    stage: "Stage1",
    description: {
        en: "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.",
        fr: "S'il fait des trous dans les rochers avec sa corne pour bâtir son nid, c'est pour éviter que ses Eufs ne soient emportés par les flots.",
        es: "Perfora las piedras del lecho del rio con su cuerno para hacer un nido y que la corriente no arrastre sus huevos.",
        it: "Perfora con il suo corno le rocce sul letto dei fiumi, costruendo tane che proteggono le Uova dalla corrente.",
        de: "Es laicht in Löchern, die es mit seinem Hom in Felsen des Flussbettes gebohrt hat, damit seine Eier nicht vom Wasser fortgespült werden.",
        "pt-br": "Seaking cava buracos nas rochas dos leitos dos rios com seu chifre, criando ninhos que impedem que seus ovos sejam carregados pela corrente.",
        "zh-tw": "金魚王之所以會用角挖穿河底的岩石來築巢，是為了防止產下的卵被水流沖走。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Aqua Bullet",
                fr: "Aquaballe",
                es: "Bala Agua",
                it: "Idrodardo",
                de: "Aquageschoss",
                "pt-br": "Projétil de Água",
                "zh-tw": "水子彈"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
                de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "對手的1隻備戰寶可夢也受到20點傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
