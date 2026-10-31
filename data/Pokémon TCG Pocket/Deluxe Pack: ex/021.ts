import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/021",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/021",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/021",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/021"
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
    illustrator: "Eri Yamaki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
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
                en: "Flap",
                "fr": "Rabat",
                "es": "Solapa",
                "it": "Patta",
                "de": "Klappe",
                "pt-br": "Aba",
                "zh-tw": "皮瓣",
                ja: "はばたく",
                ko: "홰치기"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
