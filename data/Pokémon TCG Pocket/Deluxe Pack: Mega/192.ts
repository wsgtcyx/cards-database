import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/192",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/192",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/192",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/192",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/192",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/192",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/192"
    },
    name: {
        en: "Hisuian Zoroark ex",
        fr: "Zoroark de Hisui-ex",
        es: "Zoroark de Hisui ex",
        it: "Zoroark di Hisui-ex",
        de: "Hisui-Zoroark-ex",
        "pt-br": "Zoroark de Hisui ex",
        "zh-tw": "洗翠索羅亞克ex",
        ja: "ヒスイゾロアークex",
        ko: "히스이조로아크 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Colorless"
    ],
    dexId: [
        571
    ],
    evolveFrom: {
        en: "Hisuian Zorua",
        fr: "Zorua de Hisui",
        es: "Zorua de Hisui",
        it: "Zorua di Hisui",
        de: "Hisui-Zorua",
        "pt-br": "Zorua de Hisui",
        "zh-tw": "洗翠索羅亞",
        ja: "Hisuian Zorua",
        ko: "Hisuian Zorua"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Spiteful Illusion",
                fr: "Illusion de Rancœur",
                es: "Ilusión Malévola",
                it: "Illusione Vendicativa",
                de: "Tückisches Trugbild",
                "pt-br": "Ilusão Rancorosa",
                "zh-tw": "怨恨幻影",
                ja: "Spiteful Illusion",
                ko: "Spiteful Illusion"
            },
            effect: {
                en: "This attack does 20 more damage for each Pokémon in your discard pile.",
                fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
                es: "Este ataque hace 20 puntos de daño más por cada Pokémon en tu pila de descartes.",
                it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua pila degli scarti.",
                de: "Diese Attacke fügt für jedes Pokémon auf deinem Ablagestapel 20 Schadenspunkte mehr zu.",
                "pt-br": "Este ataque causa 20 pontos de dano a mais para cada Pokémon na sua pilha de descarte.",
                "zh-tw": "增加自己的棄牌區的寶可夢卡的張數×20點傷害。",
                ja: "This attack does 20 more damage for each Pokémon in your discard pile.",
                ko: "This attack does 20 more damage for each Pokémon in your discard pile."
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
