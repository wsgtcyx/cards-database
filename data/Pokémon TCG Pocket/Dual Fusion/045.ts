import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/045",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/045",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/045",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/045",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/045",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/045",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/045",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/045",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/045"
    },
    name: {
        en: "Electrode",
        fr: "Électrode",
        es: "Electrode",
        "pt-br": "Electrode",
        "zh-tw": "頑皮雷彈",
        ja: "マルマイン",
        ko: "붐볼",
        it: "Electrode",
        de: "Lektrobal"
    },
    illustrator: "Scav",
    rarity: "Two Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x",
        "pikachu"
    ],
    hp: 90,
    types: [
        "Lightning"
    ],
    stage: "Stage1",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Voltorb",
        fr: "Voltorbe",
        es: "Voltorb",
        it: "Voltorb",
        de: "Voltobal",
        "pt-br": "Voltorb",
        "zh-tw": "霹靂電球",
        ja: "ビリリダマ",
        ko: "찌리리공"
    },
    attacks: [
        {
            name: {
                en: "Self-Destruct",
                fr: "Destruction",
                es: "Autodestrucción",
                it: "Autodistruzione",
                de: "Finale",
                "pt-br": "Autodestruição",
                "zh-tw": "自爆",
                ja: "じばく",
                ko: "자폭"
            },
            cost: [
                "Colorless",
                "Colorless"
            ],
            damage: 90,
            effect: {
                en: "This Pokémon also does 90 damage to itself.",
                fr: "Ce Pokémon s'inflige aussi 90 dégâts.",
                es: "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
                it: "Questo Pokémon infligge anche 90 danni a se stesso.",
                de: "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 90 pontos de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也受到90點傷害。",
                ja: "このポケモンにも90ダメージ。",
                ko: "이 포켓몬에게도 90데미지를 준다."
            }
        }
    ],
    abilities: [],
    description: {
        en: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
        fr: "Plus il accumule de l’énergie de type Électrik, plus il est rapide. Mais il a aussi davantage de chances d’exploser.",
        es: "Cuanta más energía almacena, mayor velocidad alcanza, aunque aumenta también el riesgo de que explote.",
        it: "L’energia Elettro che immagazzina lo fa andare sempre più veloce, ma lo fa anche esplodere più facilmente.",
        de: "Je mehr elektrische Energie es speichert, desto schneller ist es. Allerdings steigt dabei auch das Risiko, dass es explodiert.",
        "pt-br": "Quanto mais energia carrega, mais velocidade ganha. Mas também aumenta a sua probabilidade de explodir.",
        "zh-tw": "蓄積的電能越多，移動的速度也會變得越快，但同時也會變得更容易爆炸。",
        ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
        ko: "전기 에너지를 모을수록\n고속으로 이동할 수 있게 되나\n그만큼 폭발하기도 쉬워진다."
    }
};

export default card;
