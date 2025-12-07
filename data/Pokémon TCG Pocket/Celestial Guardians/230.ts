import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Venusaur ex",
        fr: "Florizarre-ex",
        es: "Venusaur ex",
        it: "Venusaur-ex",
        de: "Bisaflor-ex",
        'pt-br': "Venusaur ex",
        ko: "이상해꽃 ex",
        "zh-tw": "妙蛙花 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 190,
    types: ["Grass"],
    evolveFrom: {
        en: "Ivysaur",
        "fr": "Lierre",
        "es": "Ivysaur",
        "it": "Ivysaur",
        "de": "Efeusaurier",
        "pt-br": "Ivysauro",
        "zh-tw": "妙蛙草",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
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
            damage: 60,
            cost: ["Grass", "Colorless", "Colorless"]
        }, {
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
            damage: 100,
            cost: ["Grass", "Grass", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                fr: "Soignez 30 dégâts de ce Pokémon.",
                es: "Cura 30 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 30 danni.",
                de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
                'pt-br': "Cure 30 pontos de dano deste Pokémon.",
                ko: "이 포켓몬의 HP를 30회복.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["solgaleo"]
};
export default card;
