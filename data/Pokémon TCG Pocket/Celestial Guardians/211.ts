import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Ivysaur",
        fr: "Herbizarre",
        es: "Ivysaur",
        it: "Ivysaur",
        de: "Bisaknosp",
        'pt-br': "Ivysaur",
        ko: "이상해풀",
        "zh-tw": "常春藤屬"
    },
    illustrator: "Ryuta Fuse",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Bulbasaur",
        "fr": "Bulbizarre",
        "es": "bulbasaur",
        "it": "Bulbasauro",
        "de": "Bisasam",
        "pt-br": "Bulbasauro",
        "zh-tw": "妙蛙種子"
    },
    description: {
        en: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        fr: "Son bulbe dorsal est devenu si gros qu'il ne peut\nplus se tenir sur ses pattes postérieures.",
        es: "Cuando le crece bastante el bulbo del lomo, pierde\nla capacidad de erguirse sobre las patas traseras.",
        it: "Il bulbo sulla schiena è cresciuto così tanto da\nimpedirgli di alzarsi in piedi sulle zampe posteriori.",
        de: "Sobald die Knospe auf seinem Rücken\ngroß wird, kann Bisaknosp nicht mehr\nauf zwei Beinen stehen.",
        'pt-br': "À medida que o bulbo nas costas deste Pokémon\ncresce, ele parece perder a capacidade de se sustentar\napenas nas pernas de trás.",
        ko: "등에 있는 봉오리가 크게\n자라면 두 다리로\n설 수 없게 되는 듯하다.",
        "zh-tw": "當它背上的球莖變大時，它似乎就失去了後腿站立的能力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                'pt-br': "Folha Navalha",
                ko: "잎날가르기",
                "zh-tw": "剃刀葉"
            },
            damage: 60,
            cost: ["Grass", "Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["solgaleo"]
};
export default card;
