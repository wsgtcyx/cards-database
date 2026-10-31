import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/063",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/063",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/063",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/063",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/063",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/063",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/063",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/063"
    },
    name: {
        en: "Koraidon",
        fr: "Koraidon",
        es: "Koraidon",
        it: "Koraidon",
        de: "Koraidon",
        "pt-br": "Koraidon",
        "zh-tw": "故勒頓",
        ja: "コライドン",
        ko: "코라이돈",
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
        "zh-tw": "這隻寶可夢類似摩托蜥，但它更魁梧、更兇猛。關於它的生態或其他特徵一無所知。",
        ja: "モトトカゲと 似た 印象だが はるかに たくましく 凶暴。 生態などは 一切 不明。",
        ko: "모토마를 닮았지만\n그보다 훨씬 튼튼하고 흉포하다.\n생태 등은 밝혀진 것이 전혀 없다."
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
                ja: "ランページファング",
                ko: "램페이지팽",
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
                ja: "このポケモンから{R}エネルギーを2個トラッシュ。",
                ko: "이 포켓몬에서 {F}에너지를 2개 트래쉬한다.",
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
