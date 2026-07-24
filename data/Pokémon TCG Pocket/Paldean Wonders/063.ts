import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/063"
    },
    name: {
        en: "Koraidon",
        fr: "Koraidon",
        es: "Koraidon",
        it: "Koraidon",
        de: "Koraidon",
        "pt-br": "Koraidon",
        "zh-tw": "故勒頓",
        pt: "Koraidon"
    },
    illustrator: "Kouki Saitou",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Fighting"],
    dexId: [1007],
    description: {
        en: "This Pokémon resembles Cyclizar, but it is far burlier and more ferocious. Nothing is known about its ecology or other features.",
        "fr": "Ce Pokémon ressemble à Motorizard, mais il est bien plus costaud et féroce. On ne sait rien de son écologie ou d’autres caractéristiques.",
        "es": "Este Pokémon se parece a Cyclizar, pero es mucho más corpulento y feroz. No se sabe nada sobre su ecología u otras características.",
        "it": "Questo Pokémon assomiglia a Cyclizar, ma è molto più corpulento e feroce. Non si sa nulla della sua ecologia o di altre caratteristiche.",
        "de": "Dieses Pokémon ähnelt Mopex, ist aber weitaus kräftiger und wilder. Über seine Ökologie oder andere Merkmale ist nichts bekannt.",
        "pt-br": "Este Pokémon se assemelha ao Cyclizar, mas é muito mais corpulento e feroz. Nada se sabe sobre sua ecologia ou outras características.",
        "zh-tw": "這隻寶可夢類似摩托蜥，但它更魁梧、更兇猛。關於它的生態或其他特徵一無所知。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Rampaging Fang",
                fr: "Croc Furieux",
                es: "Colmillo Furioso",
                it: "Zanna Infuriata",
                de: "Tobende Fänge",
                "pt-br": "Presa Furiosa",
                "zh-tw": "狂暴之牙",
                pt: "Canino Feroz"
            },
            damage: 120,
            cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
            effect: {
                en: "Discard 2 {R} Energy from this Pokémon.",
                fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
                es: "Descarta 2 Energías {R} de este Pokémon.",
                it: "Scarta 2 Energie {R} da questo Pokémon.",
                de: "Lege 2 {R} Energien von diesem Pokémon auf deinen Ablagestapel.",
                "pt-br": "Descarte 2 {R} Energias deste Pokémon.",
                "zh-tw": "丟棄該寶可夢的 2 個 {R} 能量。",
                pt: "Descarte 2 Energias {R} deste Pokémon."
            },
        },
    ],
    weaknesses: [
        {
            type: "Psychic",
            value: "+20",
        },
    ],
    retreat: 2,
};
export default card;
