import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/149",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/149",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/149",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/149",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/149",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/149",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/149",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/149"
    },
    name: {
        en: "Dialga",
        fr: "Dialga",
        es: "Dialga",
        "pt-br": "Dialga",
        "zh-tw": "帝牙盧卡",
        ja: "ディアルガ",
        ko: "디아루가",
        it: "Dialga",
        de: "Dialga"
    },
    illustrator: "YASHIRO Nanaco",
    rarity: "One Star",
    category: "Pokemon",
    boosters: [
        "mega-mewtwo-x"
    ],
    hp: 120,
    types: [
        "Metal"
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
                en: "Roar of Time",
                fr: "Hurle-Temps",
                es: "Distorsión",
                it: "Fragortempo",
                de: "Zeitenlärm",
                "pt-br": "Rugido do Tempo",
                "zh-tw": "時光咆哮",
                ja: "ときのほうこう",
                ko: "Roar of Time"
            },
            cost: [
                "Colorless",
                "Metal",
                "Metal"
            ],
            damage: 70,
            effect: {
                en: "Discard the top card of your opponent's deck.",
                fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
                es: "Descarta la primera carta de la baraja de tu rival.",
                it: "Scarta la prima carta del mazzo dell’avversario.",
                de: "Lege die oberste Karte vom Deck deines Gegners ab.",
                "pt-br": "Descarte a carta de cima do baralho do seu oponente.",
                "zh-tw": "將對手的牌庫上方張卡丟棄。",
                ja: "相手の山札を上から1枚トラッシュ。",
                ko: "Discard the top card of your opponent's deck."
            }
        }
    ],
    abilities: [],
    description: {
        en: "A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.",
        fr: "Selon une légende, le temps se serait mis en mouvement à la naissance de Dialga.",
        es: "Un Pokémon de leyenda. Se dice que el tiempo comenzó a avanzar cuando Dialga nació.",
        it: "Le leggende in cui compare questo Pokémon narrano che la sua nascita sia all’origine dello scorrere del tempo.",
        de: "Ein Pokémon, das in Legenden zu finden ist. Man sagt, als Dialga geboren wurde, begann der Lauf der Zeit.",
        "pt-br": "Um Pokémon mencionado em uma lenda. Dizem que o tempo começou a passar quando Dialga nasceu.",
        "zh-tw": "因為帝牙盧卡的誕生，時間才開始流動，是有著如此傳說的寶可夢。",
        ja: "ディアルガが 生まれたことで 時間が 動き出したという 伝説を 持つ ポケモン。",
        ko: "A Pokémon spoken of in legend. It is said that time began moving when Dialga was born."
    }
};

export default card;
