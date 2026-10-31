import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/068",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/068",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/068",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/068",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/068",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/068",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/068",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2a/068",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2a/068"
    },
    name: {
        en: "Mabosstiff",
        fr: "Dogrino",
        es: "Mabosstiff",
        it: "Mabosstiff",
        de: "Mastifioso",
        "pt-br": "Mabosstiff",
        "zh-tw": "獒教父",
        ja: "マフィティフ",
        ko: "마피티프",
        pt: "Mabosstiff"
    },
    illustrator: "KIYOTAKA OSHIYAMA",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Darkness"],
    dexId: [943],
    evolveFrom: {
        en: "Maschiff",
        fr: "Grondogue",
        es: "Maschiff",
        it: "Maschiff",
        de: "Mobtiff",
        "pt-br": "Maschiff",
        "zh-tw": "偶叫獒",
        ja: "オラチフ",
        ko: "오라티프",
        pt: "Maschiff"
    },
    description: {
        en: "Mabosstiff loves playing with children. Though usually gentle, it takes on an intimidating look when protecting its family.",
        "fr": "Dogrino adore jouer avec les enfants. Bien que généralement doux, il prend un air intimidant lorsqu'il protège sa famille.",
        "es": "A Mabosstiff le encanta jugar con los niños. Aunque suele ser amable, adquiere un aspecto intimidante cuando protege a su familia.",
        "it": "Mabosstiff ama giocare con i bambini. Anche se solitamente è gentile, assume un aspetto intimidatorio quando protegge la sua famiglia.",
        "de": "Mastifioso liebt es, mit Kindern zu spielen. Obwohl es normalerweise sanftmütig ist, wirkt es einschüchternd, wenn es seine Familie beschützt.",
        "pt-br": "Mabosstiff adora brincar com crianças. Embora geralmente gentil, assume uma aparência intimidadora ao proteger sua família.",
        "zh-tw": "獒教父 喜歡和孩子們一起玩。雖然通常很溫和，但在保護家人時卻顯得令人生畏。",
        ja: "子どもと 遊ぶことが 大好き。 普段は 温厚だが 家族を 守るとき 形相が 変わる。",
        ko: "아이들과 노는 것을 좋아한다.\n평소에는 온화하지만\n가족을 지킬 때는 인상이 바뀐다."
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "Wild Tackle",
                fr: "Tacle Brutal",
                es: "Placaje Salvaje",
                it: "Azionferoce",
                de: "Wilder Tackle",
                "pt-br": "Equipamento Selvagem",
                "zh-tw": "狂野鏟球",
                ja: "ワイルドタックル",
                ko: "와일드태클",
                pt: "Investida Feroz"
            },
            damage: "110",
            cost: ["Darkness", "Darkness", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
                es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 20 點傷害。",
                ja: "このポケモンにも20ダメージ。",
                ko: "이 포켓몬에게도 20데미지를 준다.",
                pt: "Este Pokémon também causa 20 pontos de dano a si mesmo."
            },
        },
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
