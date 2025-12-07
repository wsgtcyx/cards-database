import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Pancham",
        "fr": "Pancham",
        "es": "Pancham",
        "it": "Pancham",
        "de": "Pancham",
        "pt-br": "Pancham",
        "zh-tw": "潘查姆"
    },
    illustrator: "match",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Fighting"],
    description: {
        en: "Wanting to make sure it's taken seriously,\nPancham's always giving others a glare.\nBut if it's not focusing, it ends up smiling.",
        "fr": "Voulant être sûr que cela soit pris au sérieux,\nPancham jette toujours un regard noir aux autres.\nMais s'il ne se concentre pas, il finit par sourire.",
        "es": "Queriendo asegurarse de que se tome en serio,\nPancham siempre mira fijamente a los demás.\nPero si no se concentra, acaba sonriendo.",
        "it": "Volendo assicurarmi che venga preso sul serio,\nPancham lancia sempre un'occhiataccia agli altri.\nMa se non mette a fuoco, finisce per sorridere.",
        "de": "Ich möchte sicherstellen, dass es ernst genommen wird,\nPancham wirft anderen immer einen bösen Blick zu.\nAber wenn es nicht fokussiert ist, lächelt es am Ende.",
        "pt-br": "Querendo ter certeza de que isso será levado a sério,\nPancham está sempre olhando para os outros.\nMas se não estiver focando, acaba sorrindo.",
        "zh-tw": "想要確保它得到認真對待，\n潘查姆總是瞪別人一眼。\n但如果它不集中註意力，它就會微笑。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Punch",
                "fr": "Punch",
                "es": "Puñetazo",
                "it": "Punch",
                "de": "Stempel",
                "pt-br": "Soco",
                "zh-tw": "沖床"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
