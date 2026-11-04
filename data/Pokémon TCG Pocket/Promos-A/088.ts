import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-A/088/f82d1fa9cd35aa1f",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-A/088/f82d1fa9cd35aa1f"
    },
    name: {
        en: "Dragonair",
        es: "Dragonair",
        "fr": "Draco",
        "it": "Dragonair",
        "de": "Dragonir",
        "pt-br": "Dragonair",
        "zh-tw": "哈克龍",
        ja: "ハクリュー",
        ko: "신뇽",
    },
    illustrator: "Shinya Komatsu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Dragon"],
    evolveFrom: {
        en: "Dratini",
        es: "Dratini",
        "fr": "Minidraco",
        "it": "Dratini",
        "de": "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "迷你龍",
        ja: "ミニリュウ",
        ko: "미뇽"
    },
    description: {
        en: "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
        es: "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente.",
        "fr": "On dit que lorsque tout son corps émet une aura, les conditions climatiques se mettent à changer à vue d'œil.",
        "it": "Dicono che quando il suo corpo emana un'aura, il tempo cambierà immediatamente.",
        "de": "Man sagt, wenn sein ganzer Körper eine Aura ausstrahle, ändere sich augenblicklich das Wetter in seiner Umgebung.",
        "pt-br": "Dizem que, se o seu corpo inteiro emitir uma aura, o clima começará a mudar instantaneamente.",
        "zh-tw": "據說牠全身上下散發出氣場時，周圍的天氣就會在轉眼間為之一變。",
        ja: "全身から オーラが 出されると あたりの 天候が みるみるうちに 変わっていく という。",
        ko: "전신에서 오라를 발산하면\n주변 날씨가 순식간에\n변한다고 한다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Shed Skin",
                es: "Mudar",
                "fr": "Mue",
                "it": "Muta",
                "de": "Expidermis",
                "pt-br": "Pele Vertente",
                "zh-tw": "蛻皮",
                ja: "だっぴ",
                ko: "탈피"
            },
            cost: ["Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復30HP。",
                ja: "このポケモンのHPを30回復。",
                ko: "이 포켓몬의 HP를 30회복."
            }
        }],
    retreat: 2,
    boosters: ["vol10"]
};
export default card;
