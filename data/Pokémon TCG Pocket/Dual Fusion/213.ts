import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/213",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/213",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/213",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/213",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/213",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/213",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/213",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/213",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/C1/213"
    },
    name: {
        en: "Hisuian Zoroark ex",
        fr: "Zoroark de Hisui-ex",
        es: "Zoroark de Hisui ex",
        "pt-br": "Zoroark de Hisui ex",
        "zh-tw": "洗翠索羅亞克ex",
        ja: "ヒスイゾロアークex",
        ko: "히스이 조로아크 ex",
        it: "Zoroark di Hisui-ex",
        de: "Hisui-Zoroark-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 150,
    types: [
        "Colorless"
    ],
    stage: "Stage1",
    retreat: 2,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Hisuian Zorua",
        fr: "Zorua de Hisui",
        es: "Zorua de Hisui",
        it: "Zorua di Hisui",
        de: "Hisui-Zorua",
        "pt-br": "Zorua de Hisui",
        "zh-tw": "洗翠索羅亞",
        ja: "ヒスイゾロア",
        ko: "히스이 조로아"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Spiteful Illusion",
                fr: "Illusion de Rancœur",
                es: "Ilusión Malévola",
                it: "Illusione Vendicativa",
                de: "Tückisches Trugbild",
                "pt-br": "Ilusão Rancorosa",
                "zh-tw": "怨恨幻影",
                ja: "うらみのげんえい",
                ko: "원한의환영"
            },
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            damage: "80+",
            effect: {
                en: "This attack does 20 more damage for each Pokémon in your discard pile.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
                es: "Este ataque hace 20 puntos de daño más por cada Pokémon en tu pila de descartes.",
                it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua pila degli scarti.",
                de: "Diese Attacke fügt für jedes Pokémon auf deinem Ablagestapel 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Pokémon na sua pilha de descarte.",
                "zh-tw": "增加自己的棄牌區的寶可夢卡的張數×20點傷害。",
                ja: "自分のトラッシュにあるポケモンの枚数×20ダメージ追加。",
                ko: "자신의 트래쉬에 있는 포켓몬의 장수 × 20데미지를 추가한다."
            }
        }
    ],
    abilities: []
};

export default card;
