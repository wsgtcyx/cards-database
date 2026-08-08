import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/113",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/113",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/113",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/113",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/113",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/113",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/113"
    },
    name: {
        en: "Archaludon",
        fr: "Pondralugon",
        es: "Archaludon",
        it: "Archaludon",
        de: "Briduradon",
        "pt-br": "Archaludon",
        "zh-tw": "鋁鋼橋龍",
        ko: "브리두라스",
        ja: "ブリジュラス"
    },
    illustrator: "Takumi Wada",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Metal"],
    dexId: [1018],
    evolveFrom: {
        en: "Duraludon",
        fr: "Duralugon",
        es: "Duraludon",
        it: "Duraludon",
        de: "Duraludon",
        "pt-br": "Duraludon",
        "zh-tw": "鋁鋼龍",
        ko: "두랄루돈",
        ja: "ジュラルドン"
    },
    stage: "Stage1",
    description: {
        en: "It digs holes on mountains, searching for food. It’s so durable that being caught in a cave-in won’t faze it."
    },
    attacks: [
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                en: "Raging Blade",
                fr: "Lame en Furie",
                es: "Tajo Furioso",
                "pt-br": "Lâmina Devastadora",
                "zh-tw": "憤怒之刃"
            },
            effect: {
                en: "If this Pokémon has damage on it, this attack does 80 more damage.",
                fr: "Si ce Pokémon a subi des dégâts, cette attaque inflige 80 dégâts de plus.",
                es: "Si este Pokémon ya tiene daño, este ataque hace 80 puntos de daño más.",
                "pt-br": "Se este Pokémon estiver danificado, este ataque causará 80 pontos de dano a mais.",
                "zh-tw": "若這隻寶可夢有受到傷害,則增加80點傷害。"
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
