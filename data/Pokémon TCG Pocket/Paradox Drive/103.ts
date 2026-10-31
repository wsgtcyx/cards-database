import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/103",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/103",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/103",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/103",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/103",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/103",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/103",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B3a/103",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B3a/103"
    },
    name: {
        en: "Altaria",
        fr: "Altaria",
        es: "Altaria",
        it: "Altaria",
        de: "Altaria",
        "pt-br": "Altaria",
        "zh-tw": "七夕青鳥",
        ko: "파비코리",
        ja: "チルタリス"
    },
    illustrator: "whomor Inc.",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 100,
    types: ["Colorless"],
    dexId: [334],
    evolveFrom: {
        en: "Swablu",
        fr: "Tylton",
        es: "Swablu",
        it: "Swablu",
        de: "Wablu",
        "pt-br": "Swablu",
        "zh-tw": "青綿鳥",
        ko: "파비코",
        ja: "チルット"
    },
    stage: "Stage1",
    description: {
        en: "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
        fr: "Il vole librement en se cachant dans les nuages.\nSon chant est digne de celui de la plus douée des\nsopranos.",
        es: "En días soleados, le gusta mezclarse con las nubes\ny disfrutar de la libertad del cielo mientras trina con\nvoz de soprano.",
        it: "Nelle belle giornate, ama confondersi con le poche\nnuvole in cielo e cantare con una bellissima voce di\nsoprano.",
        de: "Bei gutem Wetter mischt es sich unter die Wolken\nund genießt die Freiheit. Es hat eine entzückende\nSopranstimme.",
        "pt-br": "Em dias ensolarados, ele voa livremente pelo céu e se mistura às nuvens. Canta em um lindo soprano.",
        "zh-tw": "陽光明媚的日子，它自由自在地飛過天空，融入雲彩之中。它以美麗的女高音歌唱。",
        ja: "晴れた日 綿雲に まぎれながら 大空を 自由に 飛び回り 美しい ソプラノで 歌う。",
        ko: "맑은 날 뭉게구름에 뒤섞인 채로\n넓은 하늘을 자유롭게 날아다니며\n아름다운 소프라노로 노래한다."
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                en: "Do the Wave",
                fr: "Faites la Vague",
                es: "Hacer la Ola",
                it: "Fare la Ola",
                de: "Wellenreiten",
                "pt-br": "Fazer a \"Ola\"",
                "zh-tw": "朋友之環",
                ja: "ともだちのわ",
                ko: "친구사이"
            },
            effect: {
                en: "This attack does 20 more damage for each of your Benched Pokémon.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
                es: "Este ataque hace 20 daños más por cada uno de tus Pokémon en Banca.",
                it: "Questo attacco infligge 20 danni in più per ciascuno dei tuoi Pokémon in panchina.",
                de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 20 weitere Schadenspunkte zu.",
                "pt-br": "Este ataque causa 20 danos a mais para cada um dos seus Pokémon no Banco.",
                "zh-tw": "此攻擊對你的每隻後備寶可夢造成 20 點額外傷害。",
                ja: "自分のベンチポケモンの数×20ダメージ追加。",
                ko: "자신의 벤치 포켓몬의 수 × 20데미지를 추가한다."
            },
            damage: "20+"
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
