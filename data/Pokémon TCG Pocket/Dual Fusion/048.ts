import { Card } from "../../../interfaces";
import Set from "../Dual Fusion";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/C1/048",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/C1/048",
        es: "https://game.pokemontcgpocket.app/es/tcgp/C1/048",
        it: "https://game.pokemontcgpocket.app/it/tcgp/C1/048",
        de: "https://game.pokemontcgpocket.app/de/tcgp/C1/048",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/C1/048",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/C1/048",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/C1/048"
    },
    name: {
        en: "Pawmi",
        fr: "Pohm",
        es: "Pawmi",
        "pt-br": "Pawmi",
        "zh-tw": "布撥",
        ja: "パモ",
        ko: "빠모",
        it: "Pawmi",
        de: "Pamo"
    },
    illustrator: "Taiga Kayama",
    rarity: "One Diamond",
    category: "Pokemon",
    boosters: [
        "pikachu"
    ],
    hp: 40,
    types: [
        "Lightning"
    ],
    stage: "Basic",
    retreat: 0,
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Zap Kick",
                fr: "Coup de Pied Ravageur",
                es: "Electropatada",
                it: "Dinamocalcio",
                de: "Stromtritt",
                "pt-br": "Chute Zap",
                "zh-tw": "電氣踢",
                ja: "エレキック",
                ko: "Zap Kick"
            },
            cost: [
                "Lightning"
            ],
            damage: 20
        }
    ],
    abilities: [],
    description: {
        en: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
        fr: "Les poches sur ses joues sont peu développées. Elles ne produisent de l’électricité que lorsqu’il les frotte avec ses coussinets.",
        es: "Como las bolsas de sus mejillas están poco desarrolladas, genera electricidad frotándolas con las almohadillas de sus patas delanteras.",
        it: "Le sacche elettriche sulle sue guance non si sono sviluppate del tutto e per generare energia deve sfregarle vigorosamente con le zampe anteriori.",
        de: "Seine elektrischen Backentaschen sind nicht ganz ausgebildet. Um Strom zu erzeugen, muss es mit den Ballen der Vorderpfoten kräftig daran reiben.",
        "pt-br": "Possui bolsas de eletricidade subdesenvolvidas em suas bochechas. Elas só produzem eletricidade se Pawmi esfregá-las furiosamente com as almofadas de suas patas dianteiras.",
        "zh-tw": "臉頰上的電囊尚未發達。必須拚命摩擦前腳的肉球，才能從那裡放出電力。",
        ja: "頬の 電気袋は 未発達。 前脚の 肉球で 懸命に 擦ると ようやく 発電できる。",
        ko: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws."
    }
};

export default card;
