import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/153",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/153",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/153",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/153",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/153",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/153",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/153",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/153"
    },
    name: {
        en: "Alolan Exeggutor ex",
        fr: "Noadkoko d'Alola-ex",
        es: "Exeggutor de Alola ex",
        "pt-br": "Exeggutor de Alola ex",
        "zh-tw": "阿羅拉椰蛋樹ex",
        ja: "アローラナッシーex",
        ko: "알로라나시 ex",
        it: "Exeggutor di Alola-ex",
        de: "Alola-Kokowei-ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 180,
    types: [
        "Grass"
    ],
    stage: "Stage1",
    retreat: 4,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    evolveFrom: {
        en: "Exeggcute",
        fr: "Noeunoeuf",
        es: "Exeggcute",
        it: "Exeggcute",
        de: "Owei",
        "pt-br": "Exeggcute",
        "zh-tw": "蛋蛋",
        ja: "タマタマ",
        ko: "Exeggcute"
    },
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Long-Neck Hammering",
                fr: "Long Cou Martelleur",
                es: "Martilleo Cuellilargo",
                it: "Martellata Collolungo",
                de: "Langhalshammer",
                "pt-br": "Martelada Pescoçuda",
                "zh-tw": "長頸錘",
                ja: "くびながハンマー",
                ko: "Long-Neck Hammering"
            },
            cost: [
                "Grass",
                "Grass",
                "Grass"
            ],
            damage: 100,
            effect: {
                en: "1 of your opponent's Benched Pokémon is chosen at random. This attack also does 50 damage to it.",
                fr: "Un des Pokémon de Banc de votre adversaire est choisi au hasard. Cette attaque lui inflige aussi 50 dégâts.",
                es: "Se elige a un Pokémon en Banca aleatorio de tu rival. Este ataque también le hace 50 puntos de daño.",
                it: "Viene scelto un Pokémon avversario in panchina a caso. Questo attacco infligge anche 50 danni a quel Pokémon.",
                de: "1 Pokémon von der Bank deines Gegners wird zufällig ausgewählt. Diese Attacke fügt auch diesem Pokémon 50 Schadenspunkte zu.",
                "pt-br": "Um dos Pokémon no Banco do seu oponente é escolhido aleatoriamente. Este ataque também causa 50 pontos de dano a ele.",
                "zh-tw": "對手的備戰寶可夢會隨機被選擇1次,被選擇的寶可夢也受到50點傷害。",
                ja: "相手のベンチポケモンがランダムに1回選ばれ、選ばれたポケモンにも、50ダメージ。",
                ko: "1 of your opponent's Benched Pokémon is chosen at random. This attack also does 50 damage to it."
            }
        }
    ],
    abilities: []
};

export default card;
