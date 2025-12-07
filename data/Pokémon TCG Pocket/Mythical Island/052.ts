import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    name: {
        en: "Liepard",
        fr: "Léopardus",
        es: "Liepard",
        it: "Liepard",
        de: "Kleoparda",
        'pt-br': "Liepard",
        ko: "레파르다스",
        "zh-tw": "利帕德"
    },
    illustrator: "GIDORA",
    category: "Pokemon",
    hp: 90,
    types: ["Darkness"],
    evolveFrom: {
        en: "Purrloin",
        "fr": "Pourrondi",
        "es": "ronroneo",
        "it": "Purrloin",
        "de": "Schnurren",
        "pt-br": "Purrloin",
        "zh-tw": "珀朗"
    },
    description: {
        en: "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.",
        fr: "On se laisse facilement éblouir par son pelage\nmagnifique et son allure élégante, mais gare\nà son caractère imprévisible et agressif.",
        es: "Bajo su hermoso pelaje y cautivador estilo,\nque puede llevar fácilmente a engaño, se\noculta un carácter imprevisible y agresivo.",
        it: "Pokémon dalla magnifica pelliccia e dalle linee aggraziate,\ndietro cui si nasconde un carattere volubile e feroce.",
        de: "Man wird schnell von seinem schönen Fell und\nseiner Anmut verleitet, aber es ist ein sehr\nlaunisches und gewalttätiges Pokémon.",
        'pt-br': "Não se deixe enganar pela sua pelugem fantástica e figura\nelegante. Este Pokémon é instável e perverso.",
        ko: "아름다운 털과 스타일에\n쉽게 매료되지만 변덕스럽고\n흉포한 포켓몬이다.",
        "zh-tw": "不要被它華麗的皮毛和優雅的身材所迷惑。這是一隻喜怒無常且兇​​惡的神奇寶貝。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                'pt-br': "Talho",
                ko: "베어가르기",
                "zh-tw": "削減"
            },
            damage: 40,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond"
};
export default card;
