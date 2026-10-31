import { Card } from "../../../interfaces";
import Set from "../Special Pack: First Partners";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/SP1/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/SP1/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/SP1/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/SP1/004",
        de: "https://game.pokemontcgpocket.app/de/tcgp/SP1/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/SP1/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/SP1/004"
    },
    name: {
        en: "Chikorita",
        fr: "Germignon",
        es: "Chikorita",
        "pt-br": "Chikorita",
        "zh-tw": "菊草葉",
        ja: "チコリータ",
        ko: "치코리타",
        it: "Chikorita",
        de: "Endivie"
    },
    illustrator: "Saboteri",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    stage: "Basic",
    retreat: 1,
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    attacks: [
        {
            name: {
                en: "Razor Leaf",
                fr: "Tranch'Herbe",
                es: "Hoja Afilada",
                it: "Foglielama",
                de: "Rasierblatt",
                "pt-br": "Folha Navalha",
                "zh-tw": "飛葉快刀",
                ja: "Razor Leaf",
                ko: "Razor Leaf"
            },
            cost: [
                "Colorless",
                "Grass"
            ],
            damage: 40
        }
    ],
    abilities: [],
    description: {
        en: "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sun rays.",
        fr: "Un doux parfum émane de la feuille placée sur sa tête. Il est très gentil et aime dormir au soleil.",
        es: "Un dulce aroma se desprende de la hoja de su cabeza. Es dócil y le encanta absorber los rayos de sol.",
        it: "Un dolce profumo si diffonde dalla sua testa. È docile e ama scaldarsi al sole.",
        de: "Ein süßer Duft geht von dem Blatt auf seinem Kopf aus. Es ist sanftmütig und liegt gerne in der Sonne.",
        "pt-br": "Um aroma doce é liberado gentilmente da folha em sua cabeça. Ele é dócil e adora tomar banho de sol.",
        "zh-tw": "從頭上的葉子飄散出淡淡的甜甜香氣。性情溫和，喜歡待在陽光下。",
        ja: "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sun rays.",
        ko: "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sun rays."
    }
};

export default card;
