import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/099",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/099",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/099"
    },
    name: {
        en: "Dragonair",
        fr: "Draco",
        es: "Dragonair",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ja: "ハクリュー",
        ko: "신뇽",
        it: "Dragonair",
        de: "Dragonir"
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 100,
    types: [
        "Dragon"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [],
    evolveFrom: {
        en: "Dratini",
        fr: "Minidraco",
        es: "Dratini",
        it: "Dratini",
        de: "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ja: "ミニリュウ",
        ko: "Dratini"
    },
    attacks: [
        {
            name: {
                en: "Beam",
                fr: "Rayon",
                es: "Transmisión",
                it: "Raggio",
                de: "Strahl",
                "pt-br": "Feixe",
                "zh-tw": "光束",
                ja: "ビーム",
                ko: "Beam"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            damage: 60
        }
    ],
    abilities: [],
    description: {
        en: "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
        fr: "On dit que lorsque tout son corps émet une aura, les conditions climatiques se mettent à changer à vue d’œil.",
        es: "Dicen que, cuando su cuerpo desprende un aura, el tiempo empieza a cambiar inmediatamente.",
        it: "Dicono che quando il suo corpo emana un’aura, il tempo cambierà immediatamente.",
        de: "Man sagt, wenn sein ganzer Körper eine Aura ausstrahle, ändere sich augenblicklich das Wetter in seiner Umgebung.",
        "pt-br": "Dizem que, se o seu corpo inteiro emitir uma aura, o clima começará a mudar instantaneamente.",
        "zh-tw": "據說牠全身上下散發出氣場時，周圍的天氣就會在轉眼間為之一變。",
        ja: "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。",
        ko: "They say that if it emits an aura from its whole body, the weather will begin to change instantly."
    }
};

export default card;
