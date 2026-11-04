import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    boosters: [],
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/084/a0bb8862b8eb3ea4",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/084/a0bb8862b8eb3ea4"
    },
    name: {
        en: "Tapu Koko ex",
        es: "Tapu Koko ex",
        "fr": "Tokorico-ex",
        "it": "Tapu Koko-ex",
        "de": "Kapu-Riki-ex",
        "pt-br": "Tapu Koko ex",
        "zh-tw": "卡璞・鳴鳴ex",
        ja: "カプ・コケコex",
        ko: "카푸꼬꼬꼭 ex",
    },
    illustrator: "PLANETA Tsuji",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 130,
    types: ["Lightning"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Plasma Hurricane",
                es: "Huracán Plasma",
                "fr": "Ouragan Plasma",
                "it": "Plasmauragano",
                "de": "Plasmaorkan",
                "pt-br": "Furacão de Plasma",
                "zh-tw": "等離子颶風",
                ja: "プラズマハリケーン",
                ko: "플라스마 허리케인"
            },
            damage: 20,
            cost: ["Lightning"],
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                es: "Une 1 Energía {L} de tu área de Energía a este Pokémon.",
                "fr": "Prenez une Énergie {L} de votre zone Énergie et attachez-la à ce Pokémon.",
                "it": "Prendi un’Energia {L} dalla tua Zona Energia e assegnala a questo Pokémon.",
                "de": "Lege 1 {L}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 1 Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從自己的能量區抽出1個{L}能量,附於這隻寶可夢身上。",
                ja: "自分のエネルギーゾーンから{L}エネルギーを1個出し、このポケモンにつける。",
                ko: "자신의 에너지존에서 {L}에너지를 1개 내보내 이 포켓몬에게 붙인다."
            }
        },
        {
            name: {
                en: "Mach Bolt",
                es: "Rayo Mach",
                "fr": "Éclair Fulgurant",
                "it": "Fulmine Mach",
                "de": "Flotter Sprung",
                "pt-br": "Raio Supersônico",
                "zh-tw": "音速伏特",
                ja: "マッハボルト",
                ko: "마하볼트"
            },
            damage: 90,
            cost: ["Lightning", "Lightning", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
