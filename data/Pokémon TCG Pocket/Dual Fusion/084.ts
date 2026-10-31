import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/084",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/084",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/084",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/084",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/084",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/084",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/084",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/084",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/084"
    },
    name: {
        en: "Umbreon",
        fr: "Noctali",
        es: "Umbreon",
        "pt-br": "Umbreon",
        "zh-tw": "月亮伊布",
        ja: "ブラッキー",
        ko: "블래키",
        it: "Umbreon",
        de: "Nachtara"
    },
    illustrator: "Kouki Saitou",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 90,
    types: [
        "Darkness"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布",
        ja: "イーブイ",
        ko: "이브이"
    },
    attacks: [
        {
            name: {
                en: "Moonlit Raid",
                fr: "Raid Lunaire",
                es: "Incursión de Luz Lunar",
                it: "Raid Ombralunare",
                de: "Überfall im Mondschein",
                "pt-br": "Incursão ao Luar",
                "zh-tw": "月亮突襲",
                ja: "ムーンレイド",
                ko: "문레이드"
            },
            cost: [
                "Darkness"
            ],
            damage: "30+",
            effect: {
                en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 50 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 50 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival es un Pokémon Básicos, este ataque hace 50 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 50 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente for um Pokémon Básicos, este ataque causará 50 pontos de dano a mais.",
                "zh-tw": "若對手的戰鬥寶可夢為基礎寶可夢,則增加50點傷害。",
                ja: "相手のバトルポケモンがたねポケモンなら、50ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 기본 포켓몬이라면 50데미지를 추가한다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "When exposed to the moon's aura, the rings on its body glow faintly and it gains a mysterious power.",
        fr: "Quand il s’expose aux ondes lunaires, ses anneaux brillent légèrement et il acquiert un mystérieux pouvoir.",
        es: "Si se expone al aura de la luna, los anillos de su cuerpo relucen y adquiere un poder misterioso.",
        it: "Quando è esposto alla luce lunare, i cerchi sul suo corpo brillano e acquisisce uno strano potere.",
        de: "Wird es der Aura des Mondes ausgesetzt, glühen die ringförmigen Muster auf seinem Körper leicht und es erhält eine mysteriöse Kraft.",
        "pt-br": "Quando exposto à aura da lua, os anéis em seu corpo brilham intensamente e ele recebe um misterioso poder.",
        "zh-tw": "當身體沐浴了月亮的光輝，圓環便會微微發光，使牠得到神秘力量。",
        ja: "月の 波動を 体に 浴びると 輪っか模様が ほのかに 輝き 不思議な 力に 目覚めるのだ。",
        ko: "달의 파동을 몸에 쬐면\n고리 모양이 희미하게 빛나며\n이상한 힘에 눈을 뜬다."
    }
};

export default card;
