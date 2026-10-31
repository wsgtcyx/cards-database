import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/023",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/023",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/023",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/023",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/023",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/023",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/023",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/023",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/023"
    },
    name: {
        en: "Quaxwell",
        fr: "Canarbello",
        es: "Quaxwell",
        it: "Quaxwell",
        de: "Fuentente",
        "pt-br": "Quaxwell",
        "zh-tw": "湧躍鴨",
        ja: "ウェルカモ",
        ko: "아꾸왁",
        pt: "Quaxwell"
    },
    illustrator: "kirisAki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    dexId: [913],
    evolveFrom: {
        en: "Quaxly",
        fr: "Coiffeton",
        es: "Quaxly",
        it: "Quaxly",
        de: "Kwaks",
        "pt-br": "Quaxly",
        "zh-tw": "潤水鴨",
        ja: "クワッス",
        ko: "꾸왁스",
        pt: "Quaxly"
    },
    description: {
        en: "The hardworking Quaxwell observes people and Pokémon from various regions and incorporates their movements into its own dance routines.",
        "fr": "Le travailleur acharné Canarbello observe les gens et les Pokémon de diverses régions et intègre leurs mouvements dans ses propres routines de danse.",
        "es": "El trabajador Quaxwell observa personas y Pokémon de varias regiones e incorpora sus movimientos en sus propias rutinas de baile.",
        "it": "Il laborioso Quaxwell osserva persone e Pokémon provenienti da varie regioni e incorpora i loro movimenti nelle sue coreografie.",
        "de": "Der fleißige Fuentente beobachtet Menschen und Pokémon aus verschiedenen Regionen und integriert deren Bewegungen in seine eigenen Tanzroutinen.",
        "pt-br": "O trabalhador Quaxwell observa pessoas e Pokémon de várias regiões e incorpora seus movimentos em suas próprias rotinas de dança.",
        "zh-tw": "勤奮的湧躍鴨觀察來自不同地區的人和寶可夢，並將他們的動作融入自己的舞蹈動作中。",
        ja: "様々な 地方の ポケモンや 人の 動きを 見て 自らの 踊りに 取り入れる 努力家。",
        ko: "다양한 지방의 포켓몬과\n사람의 움직임을 보고\n자신의 춤으로 승화시키는 노력가."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Splashing Turn",
                fr: "Tour Éclaboussant",
                es: "Giro Chapoteante",
                it: "Girata Inondante",
                de: "Platschende Drehung",
                "pt-br": "Salpicos de volta",
                "zh-tw": "濺水轉彎",
                ja: "スプラッシュターン",
                ko: "스플래시턴",
                pt: "Giro Borrifante"
            },
            damage: "40",
            cost: ["Water", "Water"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此寶可夢與你的 1 個備戰寶可夢交換。",
                ja: "このポケモンをベンチポケモンと入れ替える。",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다.",
                pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
            },
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
