import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Bayleef",
        "fr": "Bayleef",
        "es": "Bayleef",
        "it": "Bayleef",
        "de": "Lorbeerblatt",
        "pt-br": "Bayleef",
        "zh-tw": "月桂葉"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Grass"],
    evolveFrom: {
        en: "Chikorita",
        "fr": "Chikorita",
        "es": "Chikorita",
        "it": "Chikorita",
        "de": "Chikorita",
        "pt-br": "Chikorita",
        "zh-tw": "菊苣"
    },
    description: {
        en: "A spicy aroma emanates from around its neck.\nThe aroma acts as a stimulant to restore health.",
        "fr": "Un arôme épicé émane de son cou.\nL'arôme agit comme un stimulant pour restaurer la santé.",
        "es": "Un aroma especiado emana alrededor de su cuello.\nEl aroma actúa como estimulante para restaurar la salud.",
        "it": "Dal collo emana un profumo speziato.\nL'aroma agisce come uno stimolante per ripristinare la salute.",
        "de": "Um seinen Hals strömt ein würziger Duft.\nDas Aroma wirkt als Stimulans zur Wiederherstellung der Gesundheit.",
        "pt-br": "Um aroma picante emana de seu pescoço.\nO aroma atua como estimulante para restaurar a saúde.",
        "zh-tw": "一股辛辣的香氣從它的脖頸處散發出來。\n香氣可以作為恢復健康的興奮劑。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Vine Whip",
                "fr": "Fouet de vigne",
                "es": "Látigo de vid",
                "it": "Frusta di vite",
                "de": "Weinpeitsche",
                "pt-br": "Chicote de videira",
                "zh-tw": "藤鞭"
            },
            damage: 40,
            cost: ["Grass", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
