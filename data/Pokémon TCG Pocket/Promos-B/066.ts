import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/066/063c079ea4cdf76c",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/066/063c079ea4cdf76c",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/066/063c079ea4cdf76c",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/066/063c079ea4cdf76c",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/066/063c079ea4cdf76c",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/066/063c079ea4cdf76c",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/066/063c079ea4cdf76c",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/066/063c079ea4cdf76c",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/066/063c079ea4cdf76c"
    },
    name: {
        en: "Ceruledge ex",
        fr: "Malvalame-ex",
        es: "Ceruledge ex",
        it: "Ceruledge-ex",
        de: "Azugladis-ex",
        "pt-br": "Ceruledge ex",
        "zh-tw": "蒼炎刃鬼ex",
        ko: "파라블레이즈 ex",
        ja: "ソウブレイズex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Psychic"],
    dexId: [937],
    evolveFrom: {
        en: "Charcadet",
        fr: "Charbambin",
        es: "Charcadet",
        it: "Charcadet",
        de: "Knarbon",
        "pt-br": "Charcadet",
        "zh-tw": "炭小侍",
        ko: "카르본",
        ja: "カルボウ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                en: "Shimmering Slash",
                fr: "Lame Chatoyante",
                es: "Corte Destello",
                it: "Fendente Spettrale",
                de: "Schimmernder Schlitz",
                "pt-br": "Talho Brilhante",
                "zh-tw": "陽炎斬",
                ja: "かげろうぎり",
                ko: "아지랑이베기"
            },
            effect: {
                en: "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
                fr: "Défaussez une Énergie au hasard parmi celles attachées à tous les Pokémon en jeu (les vôtres et ceux de votre adversaire).",
                es: "Descarta 1 Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).",
                it: "Rimuovi un’Energia a caso fra quelle assegnate a tutti i Pokémon, sia tuoi che del tuo avversario.",
                de: "Lege 1 zufällige Energie von allen Energien, die an alle Pokémon (deine und die deines Gegners) angelegt sind, ab.",
                "pt-br": "Descarte 1 Energia aleatória dentre as Energias ligadas a todos os Pokémon (seus e do seu oponente).",
                "zh-tw": "從雙方的所有寶可夢身上附加的能量中隨機丟棄1個能量。",
                ja: "おたがいのポケモン全員についているエネルギーからランダムに1個トラッシュ。",
                ko: "서로의 포켓몬 전원에게 붙어 있는 에너지에서 랜덤으로 1개 트래쉬한다."
            },
            damage: 80
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 2,
    boosters: ["vol9"]
};

export default card;
