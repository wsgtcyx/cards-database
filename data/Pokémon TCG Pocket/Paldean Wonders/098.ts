import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/098",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/098",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/098",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/098"
    },
    name: {
        en: "Orthworm",
        fr: "Ferdeter",
        es: "Orthworm",
        it: "Orthworm",
        de: "Schlurm",
        "pt-br": "Orthworm",
        "zh-tw": "拖拖蚓",
        ja: "ミミズズ",
        ko: "꿈트렁",
        pt: "Orthworm"
    },
    illustrator: "OKACHEKE",
    rarity: "One Star",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    dexId: [968],
    description: {
        en: "This Pokémon lives in arid deserts. It maintains its metal body by consuming iron from the soil.",
        "fr": "Ce Pokémon vit dans les déserts arides. Il entretient son corps métallique en consommant le fer du sol.",
        "es": "Este Pokémon vive en desiertos áridos. Mantiene su cuerpo metálico consumiendo hierro del suelo.",
        "it": "Questo Pokémon vive nei deserti aridi. Mantiene il suo corpo metallico consumando il ferro dal suolo.",
        "de": "Dieses Pokémon lebt in trockenen Wüsten. Es behält seinen Metallkörper bei, indem es Eisen aus dem Boden aufnimmt.",
        "pt-br": "Este Pokémon vive em desertos áridos. Ele mantém seu corpo metálico consumindo ferro do solo.",
        "zh-tw": "這隻寶可夢生活在乾旱的沙漠中。它透過消耗土壤中的鐵来维持其金属身体。",
        ja: "乾燥した 砂地に 棲んでいる。 土の中の 鉄分を 食べて 金属の 体を 保っている。",
        ko: "건조한 사막에 산다.\n땅속의 철분을 먹으며\n금속으로 된 몸을 유지하고 있다."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Iron Supply",
                "fr": "Approvisionnement en fer",
                "es": "Suministro de hierro",
                "it": "Fornitura di ferro",
                "de": "Eisenversorgung",
                "pt-br": "Fornecimento de Ferro",
                "zh-tw": "鐵供應",
                ja: "てつぶんサプライ",
                ko: "철분서플라이"
            },
            damage: 10,
            cost: ["Metal"],
            effect: {
                en: "Take a Metal Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Prenez une Énergie Métal de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                "es": "Toma una Energía de Metal de tu Zona de Energía y únela a 1 de tus Pokémon en Banca.",
                "it": "Prendi un'Energia Metal dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon in panchina.",
                "de": "Nimm eine Metall-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue uma Energia Metal da sua Zona de Energia e ligue-a a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區取出金屬能量並將其附加到你的1隻備戰寶可夢上。",
                ja: "自分のエネルギーゾーンから{M}エネルギーを1個出し、ベンチポケモンにつける。",
                ko: "자신의 에너지존에서 {M}에너지를 1개 내보내 벤치 포켓몬에게 붙인다."
            },
        },
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
