import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/086",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/086",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/086",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/086",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/086",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/086",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/086"
    },
    name: {
        en: "Magnezone ex",
        fr: "Magnézone-ex",
        es: "Magnezone ex",
        it: "Magnezone-ex",
        de: "Magnezone-ex",
        "pt-br": "Magnezone ex",
        "zh-tw": "自爆磁怪ex",
        ja: "ジバコイルex",
        ko: "자포코일 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: [
        "Lightning"
    ],
    dexId: [
        462
    ],
    evolveFrom: {
        en: "Magneton",
        fr: "Magnéton",
        es: "Magneton",
        it: "Magneton",
        de: "Magneton",
        "pt-br": "Magneton",
        "zh-tw": "三合一磁怪",
        ja: "Magneton",
        ko: "Magneton"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: [
                "Lightning",
                "Lightning",
                "Lightning"
            ],
            name: {
                en: "Storm Blade",
                fr: "Lame Orageuse",
                es: "Tormenta Cuchilla",
                it: "Tempesta Tagliente",
                de: "Sturmklinge",
                "pt-br": "Lâmina Tempestuosa",
                "zh-tw": "雷霆利刃",
                ja: "Storm Blade",
                ko: "Storm Blade"
            },
            effect: {
                en: "Discard a {L} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {L} de ce Pokémon.",
                es: "Descarta 1 Energía {L} de este Pokémon.",
                it: "Rimuovi un'Energia {L} da questo Pokémon.",
                de: "Lege 1 {L}-Energie von diesem Pokémon ab.",
                "pt-br": "Descarte 1 Energia {L} deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的1個{L}能量丟棄。",
                ja: "Discard a {L} Energy from this Pokémon.",
                ko: "Discard a {L} Energy from this Pokémon."
            },
            damage: 130
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
