import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3a/030",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3a/030",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3a/030",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3a/030",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3a/030",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3a/030",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3a/030",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/A3a/030",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/A3a/030"
    },
    name: {
        en: "Baltoy",
        "fr": "Balbuto",
        "es": "Baltoy",
        "it": "Baltoy",
        "de": "Puppance",
        "pt-br": "Baltoy",
        "zh-tw": "天秤偶",
        ja: "ヤジロン",
        ko: "오뚝군",
    },
    illustrator: "Uta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "It moves while spinning around on its single foot.\nSome Baltoy have been seen spinning on\ntheir heads.",
        "fr": "Il se déplace en tournant sur son seul pied.\nCertains Baltoy ont été vus en train de tourner sur\nleurs têtes.",
        "es": "Se mueve mientras gira sobre su único pie.\nSe ha visto a algunos Baltoy girando\nsus cabezas.",
        "it": "Si muove girando su un unico piede.\nAlcuni Baltoy sono stati visti girare\nle loro teste.",
        "de": "Es bewegt sich, während es sich auf seinem einzelnen Fuß dreht.\nEinige Baltoys wurden beim Weiterdrehen gesehen\nihre Köpfe.",
        "pt-br": "Ele se move enquanto gira em um único pé.\nAlguns Baltoy foram vistos girando\nsuas cabeças.",
        "zh-tw": "用單腳一邊旋轉一邊移動。\n有人看到一些 Baltoy 在旋轉\n他們的頭。",
        ja: "一本足で 回転しながら 移動する。 逆さまに なって 回転する ヤジロンも 見かける。",
        ko: "한 다리로 회전하면서\n이동한다. 거꾸로\n회전하는 오뚝군도 발견된다."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Spinning Attack",
                "fr": "Attaque tournoyante",
                "es": "Ataque giratorio",
                "it": "Attacco rotante",
                "de": "Spinnangriff",
                "pt-br": "Ataque giratório",
                "zh-tw": "旋轉攻擊",
                ja: "かいてんアタック",
                ko: "회전어택"
            },
            damage: 30,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
