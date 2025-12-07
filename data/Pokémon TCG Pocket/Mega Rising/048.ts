import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Psyduck",
        "fr": "Psycanard",
        "es": "Psyduck",
        "it": "Psyduck",
        "de": "Psyduck",
        "pt-br": "Psicoduck",
        "zh-tw": "迷幻鴨"
    },
    illustrator: "nagimiso",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "If its chronic headache peaks, it may exhibit\nodd powers. It seems unable to recall such an\nepisode.",
        "fr": "Si ses maux de tête chroniques culminent, ils peuvent présenter\ndes pouvoirs étranges. Il semble incapable de se souvenir d'un tel\népisode.",
        "es": "Si su dolor de cabeza crónico alcanza su punto máximo, puede presentar\npoderes extraños. Parece incapaz de recordar tal\nepisodio.",
        "it": "Se il suo mal di testa cronico raggiunge il picco, può manifestarsi\npoteri strani. Sembra incapace di ricordare un simile\nepisodio.",
        "de": "Wenn der chronische Kopfschmerz seinen Höhepunkt erreicht, kann er auftreten\nseltsame Kräfte. Es scheint nicht in der Lage zu sein, sich an so etwas zu erinnern\nFolge.",
        "pt-br": "Se a dor de cabeça crônica atingir o pico, pode apresentar\npoderes estranhos. Parece incapaz de lembrar tal\nepisódio.",
        "zh-tw": "如果慢性頭痛達到頂峰，可能會表現出\n奇怪的權力。似乎無法回憶起這樣的事情\n情節。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Rain Splash",
                "fr": "Éclaboussure de pluie",
                "es": "Salpicaduras de lluvia",
                "it": "Spruzzi di pioggia",
                "de": "Regenspritzer",
                "pt-br": "Respingo de chuva",
                "zh-tw": "雨濺"
            },
            damage: 20,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
