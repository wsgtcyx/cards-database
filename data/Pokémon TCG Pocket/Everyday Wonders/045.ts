import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/045",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/045"
    },
    name: {
        en: "Scrafty",
        fr: "Baggaïd",
        es: "Scrafty",
        it: "Scrafty",
        de: "Irokex",
        "pt-br": "Scrafty",
        "zh-tw": "頭巾混混",
        ko: "곤율거니",
        ja: "ズルズキン"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Darkness"],
    dexId: [560],
    evolveFrom: {
        en: "Scraggy",
        fr: "Baggiguane",
        es: "Scraggy",
        it: "Scraggy",
        de: "Zurrokex",
        "pt-br": "Scraggy",
        "zh-tw": "滑滑小子",
        ko: "곤율랭",
        ja: "ズルッグ"
    },
    stage: "Stage1",
    description: {
        en: "This Pokémon may be rude, but it takes very good care of its family, its friends, and its turf.",
        fr: "Ses airs de gros dur cachent en fait un grand\ncœur dévoué à sa famille, sa bande et\nson territoire.",
        es: "A pesar de su apariencia chulesca, se preocupa\nmucho por los miembros de su familia, el resto\ndel grupo y su territorio.",
        it: "È un Pokémon violento, ma al tempo stesso\nmolto dedito alla famiglia, ai membri del proprio\ngruppo e al suo territorio.",
        de: "Diesem ungestümen Pokémon liegen Freunde,\nFamilie und Revier sehr am Herzen.",
        "pt-br": "Este Pokémon pode ser rude, mas cuida muito bem de sua família, de seus amigos e de seu território.",
        "zh-tw": "性情很粗暴，但牠是一種\n對自己的家族、群體的夥伴\n以及地盤十分重視的寶可夢。"
    },
    attacks: [
        {
            cost: ["Darkness", "Darkness"],
            name: {
                en: "High Jump Kick",
                fr: "Pied Voltige",
                es: "Patada Salto Alta",
                it: "Calcinvolo",
                de: "Turmkick",
                "pt-br": "Chute de Pulo Alto",
                "zh-tw": "飛膝踢"
            },
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
