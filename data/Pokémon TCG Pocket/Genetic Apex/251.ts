import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A1/251",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A1/251",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A1/251",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A1/251",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A1/251",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A1/251",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A1/251"
    },
    name: {
        en: "Venusaur ex",
        fr: "Florizarre-ex",
        es: "Venusaur ex",
        it: "Venusaur-ex",
        de: "Bisaflor-ex",
        'pt-br': "Venusaur ex",
        ko: "이상해꽃 ex",
        "zh-tw": "妙蛙花ex",
    },
    illustrator: "PLANETA CG Works",
    category: "Pokemon",
    hp: 190,
    types: ["Grass"],
    stage: "Stage2",
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Herbizarre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Bisaknosp",
        "pt-br": "Ivysaur",
        "zh-tw": "妙蛙草"
    },
    suffix: "EX",
    attacks: [{
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                'pt-br': "Folha Navalha",
                ko: "잎날가르기",
                "zh-tw": "剃刀葉"
            },
            damage: "60"
        }, {
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            name: {
                en: "Giant Bloom",
                fr: "Pousse Géante",
                es: "Floración Gigante",
                it: "Gigafioritura",
                de: "Riesenblüte",
                'pt-br': "Florescimento Gigante",
                ko: "자이언트 블룸",
                "zh-tw": "巨型綻放"
            },
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                fr: "Soignez 30 dégâts de ce Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 30 danni.",
                de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
                'pt-br': "Cure 30 pontos de dano deste Pokémon.",
                ko: "이 포켓몬의 HP를 30회복.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            },
            damage: "100"
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    rarity: "Two Star",
    boosters: ["mewtwo"]
};
export default card;
