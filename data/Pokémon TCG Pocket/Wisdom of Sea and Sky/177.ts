import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Spinarak",
        "fr": "Spinarak",
        "es": "espinarak",
        "it": "Spinarak",
        "de": "Spinarak",
        "pt-br": "Espinaraque",
        "zh-tw": "線球",
    },
    illustrator: "IKEDA Saki",
    rarity: "One Star",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "It lies still in the same pose for days in its web,\nwaiting for its unsuspecting prey to wander close.",
        "fr": "Il reste dans la même pose pendant des jours dans sa toile,\nattendant que sa proie sans méfiance s'approche.",
        "es": "Sigue en la misma postura durante días en su red,\nesperando que su presa desprevenida se acerque.",
        "it": "Giace ancora per giorni nella stessa posa nella sua rete,\naspettando che la sua ignara preda si avvicini.",
        "de": "Es liegt tagelang still in der gleichen Pose in seinem Netz,\nEr wartet darauf, dass seine ahnungslose Beute näherkommt.",
        "pt-br": "Ele permanece na mesma posição por dias em sua teia,\nesperando que sua presa desavisada se aproxime.",
        "zh-tw": "它在網上好幾天都保持同樣的姿勢，\n等待毫無戒心的獵物靠近。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Pierce",
                "fr": "Percer",
                "es": "Atravesar",
                "it": "Forare",
                "de": "Pierce",
                "pt-br": "Perfurar",
                "zh-tw": "刺穿"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
