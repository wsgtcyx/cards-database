import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4b/256",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4b/256",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4b/256",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4b/256",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4b/256",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4b/256",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4b/256",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A4b/256",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A4b/256"
    },
    name: {
        en: "Excadrill",
        "fr": "Minotaupe",
        "es": "Excadrill",
        "it": "Excadrill",
        "de": "Stalobor",
        "pt-br": "Excadrill",
        "zh-tw": "龍頭地鼠",
        ja: "ドリュウズ",
        ko: "몰드류",
    },
    illustrator: "SATOSHI NAKAI",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 110,
    types: ["Metal"],
    evolveFrom: {
        en: "Drilbur",
        "fr": "Rototaupe",
        "es": "Drilbur",
        "it": "Drilbur",
        "de": "Rotomurf",
        "pt-br": "Drilbur",
        "zh-tw": "螺釘地鼠",
        ja: "モグリュー",
        ko: "두더류",
    },
    description: {
        en: "It's not uncommon for tunnels that appear to\nhave formed naturally to actually be a result\nof Excadrill's rampant digging.",
        "fr": "Il n'est pas rare que des tunnels semblent\nse sont formés naturellement pour être en fait le résultat\ndes fouilles effrénées d'Excadrill.",
        "es": "No es raro que los túneles parezcan\nse han formado naturalmente para ser en realidad un resultado\nde las excavaciones desenfrenadas de Excadrill.",
        "it": "Non è raro che i tunnel sembrino farlo\nsi sono formati naturalmente per essere effettivamente un risultato\ndegli scavi dilaganti di Excadrill.",
        "de": "Es ist nicht ungewöhnlich, dass Tunnel so aussehen\nhaben sich auf natürliche Weise gebildet, um tatsächlich ein Ergebnis zu sein\nvon Excadrills zügellosem Graben.",
        "pt-br": "Não é incomum que túneis que parecem\nse formaram naturalmente para realmente ser um resultado\nda escavação desenfreada de Excadrill.",
        "zh-tw": "隧道的情況並不少見\n自然形成的實際結果\n埃卡德里爾猖獗的挖掘活動",
        ja: "自然の 洞窟に 見えても ドリュウズが 掘り荒らした 跡と いうことも よくある 話だ。",
        ko: "자연적으로 생긴 동굴로 보이지만\n사실은 몰드류가 파낸 흔적인\n경우는 흔히 있는 일이다."
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                "fr": "Sabrer",
                "es": "Barra oblicua",
                "it": "Barra",
                "de": "Schrägstrich",
                "pt-br": "Barra",
                "zh-tw": "削減",
                ja: "きりさく",
                ko: "베어가르기"
            },
            damage: 50,
            cost: ["Metal"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
