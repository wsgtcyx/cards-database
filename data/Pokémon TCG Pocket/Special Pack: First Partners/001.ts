import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/001",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/001",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/001",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/001",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/001",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/001",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/001",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/SP1/001"
    },
    name: {
        en: "Bulbasaur",
        fr: "Bulbizarre",
        es: "Bulbasaur",
        "pt-br": "Bulbasaur",
        "zh-tw": "妙蛙種子",
        ja: "フシギダネ",
        ko: "이상해씨",
        it: "Bulbasaur",
        de: "Bisasam"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 70,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 2,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Leech Seed",
                fr: "Vampigraine",
                es: "Drenadoras",
                it: "Parassiseme",
                de: "Egelsamen",
                "pt-br": "Semente Sanguessuga",
                "zh-tw": "寄生種子",
                ja: "やどりぎのタネ",
                ko: "Leech Seed"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 30,
            effect: {
                en: "Heal 10 damage from this Pokémon.",
                fr: "Soignez 10 dégâts de ce Pokémon.",
                es: "Cura 10 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 10 danni.",
                de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 10 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復10HP。",
                ja: "このポケモンのHPを10回復。",
                ko: "Heal 10 damage from this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        fr: "Il a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.",
        es: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
        it: "Fin dalla nascita questo Pokémon ha sulla schiena un seme, che cresce lentamente.",
        de: "Dieses Pokémon trägt von Geburt an einen Samen auf dem Rücken, der im Laufe der Zeit keimt und wächst.",
        "pt-br": "Esse Pokémon já nasce com uma semente nas costas. Aos poucos, a semente cresce.",
        "zh-tw": "從出生的時候開始，背上就有一顆植物種子。這顆種子會漸漸長大。",
        ja: "生まれたときから 背中に 植物の タネが あって 少しずつ 大きく 育つ。",
        ko: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    }
};

export default card;
