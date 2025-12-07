import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Cosmog",
        fr: "Cosmog",
        es: "Cosmog",
        it: "Cosmog",
        de: "Cosmog",
        'pt-br': "Cosmog",
        ko: "코스모그",
        "zh-tw": "科斯莫古",
    },
    illustrator: "Yoko Hishida",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Psychic"],
    description: {
        en: "Even though its helpless, gaseous body can be blown away by the slightest breeze, it doesn't seem to care.",
        fr: "Son corps est composé d'un gaz très instable.\nIl se fait emporter par la moindre brise, mais\nn'a pas l'air de s'en soucier pour autant.",
        es: "Hasta la brisa más leve es capaz de arrastrar\nsu cuerpo, compuesto de una materia gaseosa\ninestable, pero no parece que eso le moleste.",
        it: "Il suo corpo è formato da un gas instabile. Potrebbe volare via\nal minimo soffio di vento, ma non sembra preoccuparsene.",
        de: "Da sein Körper aus Gas besteht, kann es schon\nvon einem leichten Luftzug weggeweht werden.\nAber das scheint ihm nichts auszumachen.",
        'pt-br': "Seu corpo indefeso e gasoso pode ser carregado por\nbrisas leves, mas Cosmog não parece se importar muito.",
        ko: "의지할 곳 없는 가스 상태의 몸은\n약한 바람에도 휩쓸리지만,\n전혀 신경 쓰지 않는 듯하다.",
        "zh-tw": "儘管它無能為力，氣態的身體只要微風一吹就會被吹走，但它卻似乎並不在意。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Teleport",
                fr: "Téléport",
                es: "Teletransporte",
                it: "Teletrasporto",
                de: "Teleport",
                'pt-br': "Teleporte",
                ko: "순간이동",
                "zh-tw": "傳送"
            },
            cost: ["Colorless"],
            effect: {
                en: "Switch this Pokémon with 1 of your Benched Pokémon.",
                fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
                es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
                it: "Scambia questo Pokémon con uno della tua panchina.",
                de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
                'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
                ko: "이 포켓몬을 벤치 포켓몬과 교체한다.",
                "zh-tw": "將此神奇寶貝與你的 1 個替補神奇寶貝交換。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lunala"]
};
export default card;
