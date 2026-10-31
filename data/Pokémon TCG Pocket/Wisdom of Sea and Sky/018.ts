import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/018",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/018",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/018",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/018",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/018",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/018",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/018",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4/018",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4/018"
    },
    name: {
        en: "Yanma",
        "fr": "Yanma",
        "es": "Yanma",
        "it": "Yanma",
        "de": "Yanma",
        "pt-br": "Yanma",
        "zh-tw": "蜻蜻蜓",
        ja: "ヤンヤンマ",
        ko: "왕자리",
    },
    illustrator: "Tomokazu Komiya",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Grass"],
    description: {
        en: "Its eyes can see 360 degrees without moving its\nhead. It won't miss prey—even those behind it.",
        "fr": "Ses yeux peuvent voir à 360 degrés sans bouger.\ntête. Il ne manquera aucune proie, même celles qui se trouvent derrière lui.",
        "es": "Sus ojos pueden ver 360 grados sin mover sus\ncabeza. No fallará a sus presas, ni siquiera a las que están detrás.",
        "it": "I suoi occhi possono vedere a 360 gradi senza muoverli\ntesta. Non mancherà la preda, nemmeno quelle dietro di lui.",
        "de": "Seine Augen können 360 Grad sehen, ohne ihn zu bewegen\nKopf. Es wird seine Beute nicht verfehlen – auch nicht die hinter ihm.",
        "pt-br": "Seus olhos podem ver 360 graus sem mover os olhos.\ncabeça. Ele não sentirá falta de uma presa, mesmo daqueles que estão por trás dele.",
        "zh-tw": "它的眼睛不用移動就能看到360度\n頭。它不會錯過獵物——甚至是獵物背後的獵物。",
        ja: "顔を 動かさずに ３６０度 すべてを 見渡す 目を 持つので 真後ろの 獲物も 見逃さない。",
        ko: "얼굴을 움직이지 않고 360도 전부\n볼 수 있는 눈을 가지고 있어서\n바로 뒤의 먹이도 놓치지 않는다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "U-turn",
                "fr": "Demi-tour",
                "es": "cambio de sentido",
                "it": "Inversione di marcia",
                "de": "Kehrtwende",
                "pt-br": "Retorno",
                "zh-tw": "調頭",
                ja: "とんぼがえり",
                ko: "유턴"
            },
            damage: 20,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                "fr": "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
                "es": "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                "it": "Scambia questo Pokémon con 1 dei tuoi Pokémon in panchina.",
                "de": "Tausche dieses Pokémon gegen eines deiner Bank-Pokémon aus.",
                "pt-br": "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                "zh-tw": "將此神奇寶貝與你的 1 個替補神奇寶貝交換。",
                ja: "このポケモンをベンチポケモンと入れ替える。",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh", "lugia"]
};
export default card;
