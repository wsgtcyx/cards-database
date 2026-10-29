import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/108",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/108",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/108",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/108",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/108",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/108",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/108"
    },
    name: {
        en: "Porygon",
        fr: "Porygon",
        es: "Porygon",
        "pt-br": "Porygon",
        "zh-tw": "多邊獸",
        ja: "ポリゴン",
        ko: "폴리곤",
        it: "Porygon",
        de: "Porygon"
    },
    illustrator: "Suwama Chiaki",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 60,
    types: [
        "Colorless"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Powered Ball",
                fr: "Boule Puissante",
                es: "Bola Cargada",
                it: "Palla Potenziata",
                de: "Angetriebener Ball",
                "pt-br": "Bola Energizada",
                "zh-tw": "力量球",
                ja: "Powered Ball",
                ko: "Powered Ball"
            },
            cost: [
                "Colorless"
            ],
            damage: 30,
            effect: {
                en: "Discard a random Energy from this Pokémon.",
                fr: "Défaussez une Énergie au hasard de ce Pokémon.",
                es: "Descarta Energía aleatoria de este Pokémon.",
                it: "Rimuovi un’Energia a caso da questo Pokémon.",
                de: "Lege 1 zufällige Energie von diesem Pokémon ab.",
                "pt-br": "Descarte Energia aleatória deste Pokémon.",
                "zh-tw": "將這隻寶可夢身上的隨機個能量丟棄。",
                ja: "Discard a random Energy from this Pokémon.",
                ko: "Discard a random Energy from this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "It is an artificial Pokémon. Since it doesn’t breathe, people are excited by its potential to be useful in any environment.",
        fr: "Ce Pokémon artificiel ne respire pas. De grands espoirs reposent donc sur sa capacité à s’adapter à tous types d’environnements.",
        es: "Un Pokémon artificial que no respira, por lo que se le supone la capacidad de desenvolverse sin problemas en cualquier entorno.",
        it: "Dato che questo Pokémon artificiale non ha bisogno di respirare, si pensa che sia capace di operare in ogni tipo di ambiente.",
        de: "Dieses künstliche Pokémon atmet nicht. Daher zählt man darauf, dass es in jeder Umgebung eingesetzt werden kann.",
        "pt-br": "É um Pokémon artificial. Como não precisa respirar, as pessoas ficam animadas com seu potencial de ser útil em qualquer ambiente.",
        "zh-tw": "人工創造的寶可夢。沒有呼吸，因此被期待在任何地方都能大展身手。",
        ja: "It is an artificial Pokémon. Since it doesn’t breathe, people are excited by its potential to be useful in any environment.",
        ko: "It is an artificial Pokémon. Since it doesn’t breathe, people are excited by its potential to be useful in any environment."
    }
};

export default card;
