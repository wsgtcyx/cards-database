import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/024/0bf48da1def2376b",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/024/0bf48da1def2376b",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/024/0bf48da1def2376b",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/024/0bf48da1def2376b",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/024/0bf48da1def2376b",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/024/0bf48da1def2376b",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/024/0bf48da1def2376b",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/024/0bf48da1def2376b",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/024/0bf48da1def2376b"
    },
    name: {
        en: "Mega Latios ex",
        fr: "Méga-Latios-ex",
        es: "Mega-Latios ex",
        it: "Mega Latios-ex",
        de: "Mega-Latios-ex",
        "pt-br": "Mega Latios ex",
        "zh-tw": "超級拉帝歐斯ex",
        ko: "메가라티오스 ex",
        ja: "メガラティオスex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    dexId: [381],
    stage: "Basic",
    attacks: [
        {
            cost: ["Water", "Water", "Psychic"],
            name: {
                en: "Sonic Impulse",
                fr: "Impulsion Sonique",
                es: "Impulso Sónico",
                it: "Impulso Sonico",
                de: "Überschallimpuls",
                "pt-br": "Impulso Sônico",
                "zh-tw": "音速脈衝",
                ja: "ソニックインパルス",
                ko: "소닉임펄스"
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
            damage: 160
        }
    ],
    retreat: 2,
    boosters: ["vol3"]
};

export default card;
