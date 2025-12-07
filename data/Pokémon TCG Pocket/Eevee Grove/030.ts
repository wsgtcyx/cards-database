import { Card } from "../../../interfaces";
import Set from "../Eevee Grove";
const card: Card = {
    set: Set,
    name: {
        en: "Swoobat",
        "fr": "Swoobat",
        "es": "Swoobat",
        "it": "Swoobat",
        "de": "Swoobat",
        "pt-br": "Swoobat",
        "zh-tw": "心蝙蝠",
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    evolveFrom: {
        en: "Woobat",
        "fr": "Woobat",
        "es": "Woobat",
        "it": "Woobat",
        "de": "Woobat",
        "pt-br": "Uau",
        "zh-tw": "滾滾蝙蝠",
    },
    description: {
        en: "Emitting powerful sound waves tires it out.\nAfterward, it won't be able to fly for a\nlittle while.",
        "fr": "L’émission d’ondes sonores puissantes le fatigue.\nEnsuite, il ne pourra plus voler pendant un certain temps.\npeu de temps.",
        "es": "Emitir ondas sonoras potentes lo cansa.\nDespués, no podrá volar durante un\npoco rato.",
        "it": "L'emissione di potenti onde sonore lo stanca.\nSuccessivamente, non sarà in grado di volare per a\npoco tempo.",
        "de": "Das Aussenden starker Schallwellen ermüdet es.\nDanach wird es für eine Weile nicht mehr fliegen können\neine Weile.",
        "pt-br": "Emitir ondas sonoras poderosas cansa.\nDepois disso, não será capaz de voar por um\npouco tempo.",
        "zh-tw": "發出強大的聲波使其疲憊不堪。\n之後一段時間內將無法飛行\n一會兒。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Psyshot",
                "fr": "Tir psychologique",
                "es": "Psicodisparo",
                "it": "Psicocolpo",
                "de": "Psyshot",
                "pt-br": "Psyshot",
                "zh-tw": "心理射擊"
            },
            damage: 40,
            cost: ["Psychic"]
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 1
};
export default card;
