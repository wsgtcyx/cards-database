import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Baltoy",
        "fr": "Baltoy",
        "es": "baltoy",
        "it": "Baltoy",
        "de": "Baltoy",
        "pt-br": "Baltoy",
        "zh-tw": "巴爾托伊"
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
        "zh-tw": "用單腳一邊旋轉一邊移動。\n有人看到一些 Baltoy 在旋轉\n他們的頭。"
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
                "zh-tw": "旋轉攻擊"
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
