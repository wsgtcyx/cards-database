import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/101",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/101",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/101",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/101"
    },
    name: {
        en: "Giratina ex",
        fr: "Giratina-ex",
        es: "Giratina ex",
        "pt-br": "Giratina ex",
        "zh-tw": "騎拉帝納ex",
        ja: "ギラティナex",
        ko: "기라티나 ex",
        it: "Giratina-ex",
        de: "Giratina-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 150,
    types: [
        "Dragon"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [],
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開",
                ja: "きりさく",
                ko: "Slash"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: 50
        },
        {
            name: {
                en: "Dragon Impact",
                fr: "Impact du Dragon",
                es: "Impacto Dragón",
                it: "Draghimpatto",
                de: "Dracheneinschlag",
                "pt-br": "Impacto do Dragão",
                "zh-tw": "狂龍衝擊",
                ja: "ドラゴンインパクト",
                ko: "Dragon Impact"
            },
            cost: [
                "Colorless",
                "Grass",
                "Psychic"
            ],
            damage: 140,
            effect: {
                en: "Discard 2 random Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies au hasard de ce Pokémon.",
                es: "Descarta 2 Energías aleatorias de este Pokémon.",
                it: "Rimuovi 2 Energie a caso da questo Pokémon.",
                de: "Lege 2 zufällige Energien von diesem Pokémon ab.",
                "pt-br": "Descarte 2 Energias aleatórias deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的隨機2個能量丟棄。",
                ja: "このポケモンからエネルギーをランダムに2個トラッシュ。",
                ko: "Discard 2 random Energy from this Pokémon."
            }
        }
    ],
    abilities: []
};

export default card;
