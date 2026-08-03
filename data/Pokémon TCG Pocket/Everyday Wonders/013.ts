import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/013",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/013",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/013",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/013",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/013",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/013",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/013"
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
    illustrator: "Shibuzoh.",
    rarity: "Two Diamond",
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
        fr: "S’il fait des trous dans les rochers avec sa corne\npour bâtir son nid, c’est pour éviter que ses Œufs\nne soient emportés par les flots.",
        es: "Perfora las piedras del lecho del río con su\ncuerno para hacer un nido y que la corriente\nno arrastre sus huevos.",
        it: "Perfora con il suo corno le rocce sul letto dei\nfiumi, costruendo tane che proteggono le Uova\ndalla corrente.",
        de: "Es laicht in Löchern, die es mit seinem Horn in\nFelsen des Flussbettes gebohrt hat, damit seine\nEier nicht vom Wasser fortgespült werden.",
        "pt-br": "Usando seu chifre, ele faz buracos nas pedras do leito dos rios, fazendo ninhos para evitar que seus ovos sejam levados pela água.",
        "zh-tw": "金魚王之所以會用角挖穿\n河底的岩石來築巢，是為了\n防止產下的卵被水流沖走。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Aqua Bullet",
                fr: "Aqua Balle",
                es: "Bala acuática",
                it: "Proiettile acquatico",
                de: "Aqua Bullet",
                "pt-br": "Bala Aqua",
                "zh-tw": "水子彈"
            },
            effect: {
                en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
                fr: "Cette attaque inflige également 20 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                it: "Questo attacco infligge anche 20 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                de: "Dieser Angriff fügt außerdem 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
                "pt-br": "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊也會對對手後備的 1 只寶可夢造成 20 點傷害。"
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
