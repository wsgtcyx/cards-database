import { Card } from "../../../interfaces";
import Set from "../Crimson Blaze";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B1a/053",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B1a/053",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B1a/053",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B1a/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B1a/053",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B1a/053",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B1a/053",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B1a/053",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B1a/053"
    },
    name: {
        en: "Probopass",
        "fr": "Tarinorme",
        "es": "Probopass",
        "it": "Probopass",
        "de": "Voluminas",
        "pt-br": "Probopass",
        "zh-tw": "大朝北鼻",
        ja: "ダイノーズ",
        ko: "대코파스"
    },
    illustrator: "Anesaki Dynamic",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Metal"],
    evolveFrom: {
        en: "Nosepass",
        "fr": "Tarinor",
        "es": "Nosepass",
        "it": "Nosepass",
        "de": "Nasgnet",
        "pt-br": "Nosepass",
        "zh-tw": "朝北鼻",
        ja: "ノズパス",
        ko: "코코파스"
    },
    description: {
        en: "It exudes strong magnetism from all over.\nIt controls three small units called Mini-Noses.",
        "fr": "Il dégage un fort magnétisme de partout.\nIl contrôle trois petites unités appelées Mini-Noses.",
        "es": "Exuda un fuerte magnetismo por todas partes.\nControla tres pequeñas unidades llamadas Mini-Narices.",
        "it": "Emana un forte magnetismo da ogni parte.\nControlla tre piccole unità chiamate Mini-Nasi.",
        "de": "Es strahlt überall starken Magnetismus aus.\nEs steuert drei kleine Einheiten, sogenannte Mini-Nasen.",
        "pt-br": "Ele exala forte magnetismo por toda parte.\nEle controla três pequenas unidades chamadas Mini-Noses.",
        "zh-tw": "渾身上下都散發著強烈的磁性。\n它控制著三個稱為“迷你鼻子”的小單位。",
        ja: "全身から 強い 磁力を 出している。 ３個の チビノーズと 呼ばれる ユニットを 操る。",
        ko: "전신에서 강한 자력을 발산하고 있다.\n꼬마코파스라고 불리는\n3개의 유닛을 조종한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Metallic Turbo",
                "fr": "Turbo métallique",
                "es": "Turbo metálico",
                "it": "Turbo metallizzato",
                "de": "Metallischer Turbo",
                "pt-br": "Turbo Metálico",
                "zh-tw": "金屬渦輪",
                ja: "メタルターボ",
                ko: "메탈터보"
            },
            damage: 40,
            cost: ["Metal", "Metal"],
            effect: {
                en: "Take 2 {M} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.",
                "fr": "Prenez 2 {M} Énergie de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon de Banc.",
                "es": "Toma 2 {M} de Energía de tu Zona de Energía y únelas a 1 de tus Pokémon en Banca.",
                "it": "Prendi 2 Energie {M} dalla tua Zona Energetica e assegnale a 1 dei tuoi Pokémon in panchina.",
                "de": "Nimm 2 {M}-Energie aus deiner Energiezone und lege sie an eines deiner Bank-Pokémon an.",
                "pt-br": "Pegue 2 {M} Energias da sua Zona de Energia e ligue-as a 1 dos seus Pokémon no Banco.",
                "zh-tw": "從你的能量區獲取 2 {M} 能量並將其附加到你的 1 只後備神奇寶貝身上。",
                ja: "自分のエネルギーゾーンから{M}エネルギーを2個出し、ベンチポケモン1匹につける。",
                ko: "자신의 에너지존에서 {M}에너지를 2개 내보내 벤치 포켓몬 1마리에게 붙인다."
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 4
};
export default card;
