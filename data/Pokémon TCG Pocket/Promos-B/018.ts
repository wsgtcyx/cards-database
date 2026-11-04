import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/018/a3215856da9c31f9",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/018/a3215856da9c31f9",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/018/a3215856da9c31f9",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/018/a3215856da9c31f9",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/018/a3215856da9c31f9",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/018/a3215856da9c31f9",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/018/a3215856da9c31f9",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/018/a3215856da9c31f9",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/018/a3215856da9c31f9"
    },
    name: {
        en: "Heliolisk",
        fr: "Iguolta",
        es: "Heliolisk",
        it: "Heliolisk",
        de: "Elezard",
        "pt-br": "Heliolisk",
        "zh-tw": "光電傘蜥",
        ko: "일레도리자드",
        ja: "エレザード"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Lightning"],
    dexId: [695],
    evolveFrom: {
        en: "Helioptile",
        fr: "Galvaran",
        es: "Helioptile",
        it: "Helioptile",
        de: "Eguana",
        "pt-br": "Helioptile",
        "zh-tw": "傘電蜥",
        ko: "목도리키텔",
        ja: "エリキテル"
    },
    stage: "Stage1",
    description: {
        en: "One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.",
        fr: "Lorsqu'il déploie sa collerette pour emmagasiner\nla lumière du soleil, il génère à lui seul assez\nd'électricité pour alimenter une grande ville.",
        es: "Al extender su gorguera y exponerse a la luz\nsolar, genera la energía eléctrica suficiente para\ncubrir el consumo de una metrópoli entera.",
        it: "L'energia prodotta da un Heliolisk quando apre\nil suo collare in un luogo soleggiato è sufficiente\na soddisfare il fabbisogno di una metropoli.",
        de: "Stellt es seine kragenartigen Hautlappen auf und\nabsorbiert damit Sonnenlicht, kann ein Elezard\ngenug Strom für eine Großstadt produzieren.",
        "pt-br": "Um único Heliolisk tomando banho de sol com\nsuas cristas abertas consegue produzir energia\no suficiente para abastecer uma cidade inteira.",
        "zh-tw": "如果展開頸傘沐浴陽光，單憑１隻光電傘蜥就能製造出大城市所需的電力。",
        ja: "襟巻を 広げて 太陽光を 浴びると 大都会で 使われる 電気を １匹で 発電する。",
        ko: "깃을 펼쳐 태양광을 받으면\n대도시에서 사용할 수 있는\n전기를 혼자서 발전한다."
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "Thunderbolt",
                fr: "Tonnerre",
                es: "Rayo",
                it: "Fulmine",
                de: "Donnerblitz",
                "pt-br": "Relâmpago",
                "zh-tw": "十萬伏特",
                ja: "10まんボルト",
                ko: "10만볼트"
            },
            effect: {
                en: "Discard all Energy from this Pokémon.",
                fr: "Défaussez toutes les Énergies de ce Pokémon.",
                es: "Descarta todas las Energías de este Pokémon.",
                it: "Rimuovi tutte le Energie assegnate a questo Pokémon.",
                de: "Lege alle Energien von diesem Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的能量全部丟棄。",
                ja: "このポケモンからエネルギーをすべてトラッシュ。",
                ko: "이 포켓몬에서 에너지를 모두 트래쉬한다."
            },
            damage: 120
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
