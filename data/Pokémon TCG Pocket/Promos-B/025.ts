import { Card } from "../../../interfaces";
import Set from "../Promos-B";

const card: Card = {
    set: Set,
    image: {
        "en": "https://game.pokemontcgpocket.app/en/tcgp/P-B/025/7aea97aa64bb7ba8",
        "fr": "https://game.pokemontcgpocket.app/fr/tcgp/P-B/025/7aea97aa64bb7ba8",
        "es": "https://game.pokemontcgpocket.app/es/tcgp/P-B/025/7aea97aa64bb7ba8",
        "it": "https://game.pokemontcgpocket.app/it/tcgp/P-B/025/7aea97aa64bb7ba8",
        "de": "https://game.pokemontcgpocket.app/de/tcgp/P-B/025/7aea97aa64bb7ba8",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/P-B/025/7aea97aa64bb7ba8",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-B/025/7aea97aa64bb7ba8",
        "ja": "https://game.pokemontcgpocket.app/ja/tcgp/P-B/025/7aea97aa64bb7ba8",
        "ko": "https://game.pokemontcgpocket.app/ko/tcgp/P-B/025/7aea97aa64bb7ba8"
    },
    name: {
        en: "Jirachi",
        fr: "Jirachi",
        es: "Jirachi",
        it: "Jirachi",
        de: "Jirachi",
        "pt-br": "Jirachi",
        "zh-tw": "基拉祈",
        ko: "지라치",
        ja: "ジラーチ"
    },
    illustrator: "Rond",
    rarity: "One Star",
    category: "Pokemon",
    hp: 50,
    types: ["Psychic"],
    dexId: [385],
    stage: "Basic",
    description: {
        en: "It is said to have the ability to grant any wish for just one week every thousand years.",
        fr: "On raconte qu’une fois tous les 1 000 ans, il a la\ncapacité d’exaucer tous les vœux durant une semaine.",
        es: "Se dice que puede otorgar cualquier deseo durante\nuna semana cada 1000 años.",
        it: "Ha l'abilità di realizzare ogni desiderio, ma soltanto per una settimana ogni 1.000 anni.",
        de: "Man sagt, es kann alle 1 000 Jahre für eine Woche\njeden Wunsch erfüllen.",
        "pt-br": "Diz-se que tem a capacidade de realizar qualquer desejo por apenas uma semana a cada mil anos.",
        "zh-tw": "據說牠在1000年之中只有7天的時間會醒來，使用能實現任何願望的力量。",
        ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
        ko: "1000년 중 7일 동안만 깨어나\n모든 소원을 이루어 주는\n능력을 발휘한다고 한다."
    },
    attacks: [
        {
            cost: ["Psychic"],
            name: {
                en: "Star Drop",
                fr: "Chute d'Étoiles",
                es: "Caída Sideral",
                it: "Caduta Astrale",
                de: "Sternensturz",
                "pt-br": "Queda de Estrela",
                "zh-tw": "星墜",
                ja: "ほしおとし",
                ko: "별떨구기"
            },
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Pokémon.",
                fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire.",
                es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.",
                it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario.",
                de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente.",
                "zh-tw": "對手的1隻寶可夢受到30點傷害。",
                ja: "相手のポケモン1匹に30ダメージ。",
                ko: "상대의 포켓몬 1마리에게 30데미지를 준다."
            }
        }
    ],
    weaknesses: [
        {
            type: "Darkness",
            value: "+20"
        }
    ],
    retreat: 1,
    boosters: []
};

export default card;
