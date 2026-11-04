import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/010/2992a86466d8411a",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/010/2992a86466d8411a",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/010/2992a86466d8411a",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/010/2992a86466d8411a",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/010/2992a86466d8411a",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/010/2992a86466d8411a",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/010/2992a86466d8411a",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/010/2992a86466d8411a",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/010/2992a86466d8411a"
    },
    name: {
        en: "Drifblim",
        fr: "Grodrive",
        es: "Drifblim",
        it: "Drifblim",
        de: "Drifzepeli",
        "pt-br": "Drifblim",
        "zh-tw": "隨風球",
        ko: "둥실라이드",
        ja: "フワライド"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    dexId: [426],
    evolveFrom: {
        en: "Drifloon",
        fr: "Baudrive",
        es: "Drifloon",
        it: "Drifloon",
        de: "Driftlon",
        "pt-br": "Drifloon",
        "zh-tw": "飄飄球",
        ko: "흔들풍손",
        ja: "フワンテ"
    },
    stage: "Stage1",
    description: {
        en: "They carry people and Pokémon, but the wind can catch them, so there can’t be a fixed destination.",
        fr: "Il aime servir de moyen de transport. Le seul inconvénient est qu'il ne va que dans la direction du vent.",
        es: "Pueden transportar a gente y Pokémon. Sin embargo, por culpa de las corrientes de aire, no pueden fijar un destino.",
        it: "Trasporta Pokémon e persone, ma poiché si lascia trascinare dal vento, non sa mai dove andrà a finire.",
        de: "Es transportiert Menschen und Pokémon. Wohin sie fliegen, bestimmt jedoch ganz alleine die Windrichtung.",
        "pt-br": "Carregam pessoas e Pokémon, mas o vento pode os capturar, então não pode haver um destino fixo.",
        "zh-tw": "會載運人和寶可夢。但由於牠只能隨風漂流，因此無法自行決定目的地。",
        ja: "人や ポケモンを 運ぶ。 ただし 風に 流されてしまうので 行き先を 決められない。",
        ko: "사람이나 포켓몬을 운반한다.\n단, 바람에 의해 날려가 버리기 때문에\n목적지를 정할 수 없다."
    },
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Balloon Barrage",
                fr: "Barrage de Ballons",
                es: "Bombardeo de Globos",
                it: "Pioggiapalloni",
                de: "Ballonbeschuss",
                "pt-br": "Barricada de Balões",
                "zh-tw": "氣球爆擊",
                ja: "バルーンボンバー",
                ko: "벌룬봄버"
            },
            effect: {
                en: "This attack does 20 more damage for each Energy attached to this Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon.",
                es: "Este ataque hace 20 puntos de daño más por cada Energía unida a este Pokémon.",
                it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata a questo Pokémon.",
                de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a este Pokémon.",
                "zh-tw": "增加這隻寶可夢身上的能量的數量×20點傷害。",
                ja: "このポケモンのエネルギーの数×20ダメージ追加。",
                ko: "이 포켓몬의 에너지의 개수 × 20데미지를 추가한다."
            },
            damage: "20+"
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: []
};

export default card;
