import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    category: "Pokemon",
    hp: 220,
    types: [
        "Dragon"
    ],
    dexId: [
        445
    ],
    stage: "Stage2",
    suffix: "EX",
    evolveFrom: {
        en: "Gabite",
        fr: "Carmache",
        es: "Gabite",
        it: "Gabite",
        de: "Knarksel",
        "pt-br": "Gabite",
        "zh-tw": "尖牙陸鯊",
        ja: "ガバイト",
        ko: "한바이트"
    },
    attacks: [
        {
            name: {
                en: "Falling Edge",
                fr: "Lame Tombante",
                es: "Fendiente",
                it: "Falci Implacabili",
                de: "Fallende Klinge",
                "pt-br": "Gume Descendente",
                "zh-tw": "劈斬刀鋒",
                ja: "フォーリングエッジ"
            },
            effect: {
                en: "Discard 2 random Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies au hasard de ce Pokémon.",
                es: "Descarta 2 Energías aleatorias de este Pokémon.",
                it: "Rimuovi 2 Energie a caso da questo Pokémon.",
                de: "Lege 2 zufällige Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 Energias aleatórias deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的隨機2個能量丟棄。",
                ja: "このポケモンからエネルギーをランダムに2個トラッシュ。"
            },
            damage: 190,
            cost: [
                "Water",
                "Fighting",
                "Colorless"
            ]
        }
    ],
    retreat: 2,
    name: {
        en: "Mega Garchomp ex",
        fr: "Méga-Carchacrok-ex",
        es: "Mega-Garchomp ex",
        it: "Mega Garchomp-ex",
        de: "Mega-Knakrack-ex",
        "pt-br": "Mega Garchomp ex",
        "zh-tw": "超級烈咬陸鯊ex",
        ja: "メガガブリアスex",
        ko: "메가한카리아스 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-B/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-B/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-B/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-B/099",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-B/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/099",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/P-B/099"
    },
    boosters: [
        "vol13"
    ],
    weaknesses: []
};

export default card;
