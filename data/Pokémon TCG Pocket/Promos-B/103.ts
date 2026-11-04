import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/103/79d6c8766029db89",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/103/79d6c8766029db89",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/103/79d6c8766029db89",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/103/79d6c8766029db89",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/103/79d6c8766029db89",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/103/79d6c8766029db89",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/103/79d6c8766029db89",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/103/79d6c8766029db89",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/103/79d6c8766029db89"
    },
    name: {
        en: "Pikachu ex",
        fr: "Pikachu-ex",
        es: "Pikachu ex",
        it: "Pikachu-ex",
        de: "Pikachu-ex",
        "pt-br": "Pikachu ex",
        ja: "ピカチュウex",
        ko: "피카츄 ex",
        "zh-tw": "皮卡丘ex"
    },
    illustrator: "YOSHIROTTEN",
    rarity: "Three Star",
    category: "Pokemon",
    hp: 120,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Thunderbolt",
                fr: "Tonnerre",
                es: "Rayo",
                it: "Fulmine",
                de: "Donnerblitz",
                "pt-br": "Relâmpago",
                ja: "10まんボルト",
                ko: "10만볼트",
                "zh-tw": "十萬伏特"
            },
            damage: 150,
            cost: [
                "Lightning",
                "Lightning",
                "Lightning"
            ],
            effect: {
                en: "Discard all Energy from this Pokémon.",
                fr: "Défaussez toutes les Énergies de ce Pokémon.",
                es: "Descarta todas las Energías de este Pokémon.",
                it: "Rimuovi tutte le Energie assegnate a questo Pokémon.",
                de: "Lege alle Energien von diesem Pokémon ab.",
                "pt-br": "Descarte todas as Energias deste Pokémon.",
                ja: "このポケモンからエネルギーをすべてトラッシュ。",
                ko: "이 포켓몬에서 에너지를 모두 트래쉬한다.",
                "zh-tw": "將這隻寶可夢身上的能量全部丟棄。"
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: [],
    dexId: [
        25
    ]
};

export default card;
