import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/038",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3a/038"
    },
    name: {
        en: "Sneasel",
        fr: "Farfuret",
        es: "Sneasel",
        it: "Sneasel",
        de: "Sniebel",
        "pt-br": "Sneasel",
        "zh-tw": "狃拉",
        ko: "포푸니",
        ja: "ニューラ"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    dexId: [215],
    stage: "Basic",
    description: {
        en: "This is a smart and sneaky Pokémon. A pair may work together to steal eggs by having one lure the parents away.",
        fr: "C'est un Pokémon intelligent et sournois. Un couple peut travailler ensemble pour voler des œufs en attirant les parents.",
        es: "Este es un Pokémon inteligente y astuto. Una pareja puede trabajar junta para robar huevos haciendo que uno atraiga a los padres.",
        it: "Questo è un Pokémon intelligente e subdolo. Una coppia può lavorare insieme per rubare le uova facendo sì che una attiri via i genitori.",
        de: "Dies ist ein kluges und hinterhältiges Pokémon. Ein Paar kann zusammenarbeiten, um Eier zu stehlen, indem eines die Eltern weglockt.",
        "pt-br": "Este é um Pokémon inteligente e sorrateiro. Um par pode trabalhar junto para roubar ovos, fazendo com que um atraia os pais.",
        "zh-tw": "這是一隻聰明又狡猾的寶可夢。一對可能會透過其中一個引誘父母來偷雞蛋。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Quick Attack",
                fr: "Vive-Attaque",
                es: "Ataque Rápido",
                it: "Attacco Rapido",
                de: "Ruckzuckhieb",
                "pt-br": "Ataque Rápido",
                "zh-tw": "電光一閃"
            },
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce de monnaie. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
                es: "Lanza una moneda. Si sale cara, este ataque hace 20 daños más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 20 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
