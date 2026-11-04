import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/039/fa746abcf4560481",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/039/fa746abcf4560481",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/039/fa746abcf4560481",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/039/fa746abcf4560481",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/039/fa746abcf4560481",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/039/fa746abcf4560481",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/039/fa746abcf4560481",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/039/fa746abcf4560481",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/039/fa746abcf4560481"
    },
    name: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        it: "Pawmi",
        de: "Pamo",
        "pt-br": "Pawmi",
        "zh-tw": "布撥",
        ko: "빠모",
        ja: "パモ"
    },
    illustrator: "sowsow",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [921],
    stage: "Basic",
    description: {
        en: "The pads of its paws are electricity-discharging organs. Pawmi fires electricity from its forepaws while standing unsteadily on its hind legs.",
        fr: "Ses coussinets servent à projeter de l'électricité. Quand il parvient à se tenir sur ses pattes arrière, il envoie des décharges avec ses pattes avant.",
        es: "Sus almohadillas le permiten liberar electricidad. Cuando logra erguirse sobre las patas traseras, usa las palmas para soltar descargas eléctricas.",
        it: "I cuscinetti delle zampe anteriori sono organi che scaricano elettricità. Quando riesce a stare sulle zampe posteriori può lanciare attacchi elettrici.",
        de: "Seine Pfotenballen sind Organe zur elektrischen Entladung. Gelingt es ihm, auf den Hinterbeinen zu stehen, schießt es Strom aus den Vorderpfoten.",
        "pt-br": "As almofadas em suas patas são órgãos que disparam eletricidade. Pawmi lança eletricidade de suas patas dianteiras enquanto tenta se equilibrar em suas patas traseiras.",
        "zh-tw": "手的肉球是放電的器官。會費勁地用後腳站起來，然後從手掌釋放出電擊。",
        ja: "手の 肉球が 放電器官。 後ろ脚で ようやく 立ち上がると 手のひらから 電撃を 放つ。",
        ko: "손의 볼록살이 방전 기관이다.\n뒷발로 겨우 일어선 다음\n손바닥에서 전격을 내보낸다."
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Random Spark",
                fr: "Étincelle Surprise",
                es: "Chispa al Azar",
                it: "Scintilla Casuale",
                de: "Zufälliger Funke",
                "pt-br": "Fagulha Aleatória",
                "zh-tw": "電磁電光",
                ja: "でんじスパーク",
                ko: "전자 스파크"
            },
            effect: {
                en: "This attack does 10 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 10 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到10點傷害。",
                ja: "相手のポケモン1匹に10ダメージ。",
                ko: "상대의 포켓몬 1마리에게 10데미지를 준다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
