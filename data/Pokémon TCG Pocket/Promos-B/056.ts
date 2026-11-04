import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/056/1ed1ecb6f2238abe",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/056/1ed1ecb6f2238abe",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/056/1ed1ecb6f2238abe",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/056/1ed1ecb6f2238abe",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/056/1ed1ecb6f2238abe",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/056/1ed1ecb6f2238abe",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/056/1ed1ecb6f2238abe",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/056/1ed1ecb6f2238abe",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/056/1ed1ecb6f2238abe"
    },
    name: {
        en: "Mega Heracross ex",
        fr: "Méga-Scarhino-ex",
        es: "Mega-Heracross ex",
        it: "Mega Heracross-ex",
        de: "Mega-Skaraborn-ex",
        "pt-br": "Mega Heracross ex",
        "zh-tw": "超級赫拉克羅斯ex",
        ko: "메가헤라크로스 ex",
        ja: "メガヘラクロスex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Grass"],
    dexId: [214],
    stage: "Basic",
    attacks: [
        {
            cost: ["Grass", "Grass", "Grass", "Colorless"],
            name: {
                en: "Dynamic Horn",
                fr: "Corne Dynamique",
                es: "Cornada Dinámica",
                it: "Cornata Dinamica",
                de: "Dynamisches Horn",
                "pt-br": "Chifre Dinâmico",
                "zh-tw": "強力角擊",
                ja: "ダイナミックホーン",
                ko: "다이내믹혼"
            },
            effect: {
                en: "Flip a coin. If tails, this Pokémon also does 60 damage to itself.",
                fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 60 dégâts.",
                es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 60 puntos de daño a sí mismo.",
                it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 60 danni a se stesso.",
                de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 60 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este Pokémon também causará 60 pontos de dano a si mesmo.",
                "zh-tw": "擲1次硬幣若為反面,則這隻寶可夢也受到60點傷害。",
                ja: "コインを1回投げウラなら、このポケモンにも60ダメージ。",
                ko: "동전을 1번 던져서 뒷면이 나오면 이 포켓몬에게도 60데미지를 준다."
            },
            damage: 170
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 3,
    boosters: ["vol8"]
};

export default card;
