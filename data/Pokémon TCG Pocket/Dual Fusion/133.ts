import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/133",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/133",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/133",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/133",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/133",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/133",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/133",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/133"
    },
    name: {
        en: "Exeggcute",
        fr: "Noeunoeuf",
        es: "Exeggcute",
        "pt-br": "Exeggcute",
        "zh-tw": "蛋蛋",
        ja: "タマタマ",
        ko: "아라리",
        it: "Exeggcute",
        de: "Owei"
    },
    illustrator: "Whisker",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Nap",
                fr: "Tit'Sieste",
                es: "Siesta",
                it: "Pausa",
                de: "Nickerchen",
                "pt-br": "Soneca",
                "zh-tw": "小憩",
                ja: "ひとやすみ",
                ko: "Nap"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Heal 20 damage from this Pokémon.",
                fr: "Soignez 20 dégâts de ce Pokémon.",
                es: "Cura 20 puntos de daño a este Pokémon.",
                it: "Cura questo Pokémon da 20 danni.",
                de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 20 pontos de dano deste Pokémon.",
                "zh-tw": "將這隻寶可夢恢復20HP。",
                ja: "このポケモンのHPを20回復。",
                ko: "Heal 20 damage from this Pokémon."
            }
        }
    ],
    abilities: [],
    description: {
        en: "If you touch one of Exeggcute’s heads, mistaking it for an egg, the other heads will quickly gather and attack you in a swarm.",
        fr: "Ses têtes sont souvent prises pour des œufs. Si l’on en touche une, les autres se regroupent pour attaquer.",
        es: "Si alguien confunde a una de sus cabezas con un huevo y la toca, se reagrupa con las otras para atacar todas juntas.",
        it: "Se gli si tocca una delle teste scambiandola per un uovo, le altre non esitano ad attaccare in gruppo.",
        de: "Berührt man einen seiner Köpfe, weil man ihn für ein Ei hält, tun die übrigen sich rasch zusammen und gehen zum Angriff über.",
        "pt-br": "Se você tocar uma das cabeças de Exeggcute achando que é um ovo, as outras cabeças se juntarão rapidamente e atacarão como um enxame.",
        "zh-tw": "若以為是蛋而去觸摸，就會被不斷聚集而來的蛋蛋的夥伴襲擊。",
        ja: "タマゴだと 思って 触ると 仲間が どんどん 集まってきて 集団攻撃に あう。",
        ko: "If you touch one of Exeggcute’s heads, mistaking it for an egg, the other heads will quickly gather and attack you in a swarm."
    }
};

export default card;
