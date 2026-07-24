import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/197",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/197"
    },
    name: {
        en: "Magnezone ex",
        fr: "Magnézone-ex",
        es: "Magnezone ex",
        it: "Magnezone-ex",
        de: "Magnezone-ex",
        "pt-br": "Magnezone ex",
        "zh-tw": "自爆磁怪ex",
        ko: "자포코일 ex",
        ja: "ジバコイルex"
    },
    illustrator: "osare",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 180,
    types: ["Lightning"],
    dexId: [462],
    evolveFrom: {
        en: "Magneton",
        fr: "Magnéton",
        es: "Magneton",
        it: "Magneton",
        de: "Magneton",
        "pt-br": "Magneton",
        "zh-tw": "三合一磁怪",
        ko: "레어코일",
        ja: "レアコイル"
    },
    stage: "Stage2",
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Lightning"],
            name: {
                en: "Storm Blade",
                fr: "Lame Orageuse",
                es: "Tormenta Cuchilla",
                it: "Tempesta Tagliente",
                de: "Sturmklinge",
                "pt-br": "Lâmina Tempestuosa",
                "zh-tw": "雷霆利刃"
            },
            effect: {
                en: "Discard a {L} Energy from this Pokémon.",
                fr: "Défaussez une Énergie {L} de ce Pokémon.",
                es: "Descarta una {L} Energía de este Pokémon.",
                it: "Scarta un'Energia {L} da questo Pokémon.",
                de: "Wirf eine {L} Energie von diesem Pokémon ab.",
                "pt-br": "Descarte uma Energia {L} deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 {L} 能量。"
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
