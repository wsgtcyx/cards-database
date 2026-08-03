import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/063",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/063",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/063",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/063",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/063",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/063",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/063"
    },
    name: {
        en: "Braviary",
        fr: "Gueriaigle",
        es: "Braviary",
        it: "Braviary",
        de: "Washakwil",
        "pt-br": "Braviary",
        "zh-tw": "勇士雄鷹",
        ko: "워글",
        ja: "ウォーグル"
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Colorless"],
    dexId: [628],
    evolveFrom: {
        en: "Rufflet",
        fr: "Furaiglon",
        es: "Rufflet",
        it: "Rufflet",
        de: "Geronimatz",
        "pt-br": "Rufflet",
        "zh-tw": "毛頭小鷹",
        ko: "수리둥보",
        ja: "ワシボン"
    },
    stage: "Stage1",
    description: {
        en: "For the sake of its friends, this brave warrior of the sky will not stop battling, even if injured.",
        fr: "Un chevalier du ciel, brave et intrépide. Pour les siens,\nil combat au mépris du danger, sans jamais fléchir.",
        es: "Un valiente guerrero del cielo que no duda en luchar por sus\ncompañeros por graves que sean sus heridas.",
        it: "È l’intrepido guerriero del cielo. Per difendere i suoi simili,\nlotta fino all’ultimo senza badare alle ferite.",
        de: "Ein tapferer Krieger der Lüfte, der zum Schutz seiner\nKameraden auch mit Verletzungen immer weiterkämpft.",
        "pt-br": "Pelo bem de seus amigos, este bravo guerreiro do céu não parará de lutar, mesmo que esteja ferido.",
        "zh-tw": "為了朋友，這位勇敢的天空戰士即使受傷也不會停止戰鬥。"
    },
    attacks: [
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                en: "Brave Bird",
                fr: "Rapace",
                es: "Pájaro Osado",
                it: "Baldeali",
                de: "Sturzflug",
                "pt-br": "Pássaro Bravo",
                "zh-tw": "勇鳥猛攻"
            },
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                fr: "Ce Pokémon s'inflige également 20 dégâts.",
                es: "Este Pokémon también se hace 20 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 20 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這隻寶可夢也會對自身造成 20 點傷害。"
            },
            damage: 100
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
