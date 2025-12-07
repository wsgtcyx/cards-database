import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Dratini",
        "fr": "Dratini",
        "es": "Dratini",
        "it": "Dratini",
        "de": "Dratini",
        "pt-br": "Dratini",
        "zh-tw": "德拉蒂尼"
    },
    illustrator: "Naoyo Kimura",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Dragon"],
    description: {
        en: "It sheds many layers of skin as it grows larger.\nDuring this process, it is protected by a rapid\nwaterfall.",
        "fr": "Il perd de nombreuses couches de peau à mesure qu’il grandit.\nDurant ce processus, il est protégé par un mouvement rapide\ncascade.",
        "es": "Elimina muchas capas de piel a medida que crece.\nDurante este proceso, está protegido por un rápido\ncascada.",
        "it": "Perde molti strati di pelle man mano che diventa più grande.\nDurante questo processo, è protetto da una rapida\ncascata.",
        "de": "Mit zunehmender Größe wirft es viele Hautschichten ab.\nWährend dieses Vorgangs wird es durch einen Schnellverschluss geschützt\nWasserfall.",
        "pt-br": "Ele perde muitas camadas de pele à medida que cresce.\nDurante este processo, é protegido por uma rápida\ncachoeira.",
        "zh-tw": "隨著它變大，它會脫落多層皮膚。\n在此過程中，它受到快速保護\n瀑布。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Beat",
                "fr": "Battre",
                "es": "Derrotar",
                "it": "Colpo",
                "de": "Schlagen",
                "pt-br": "Bater",
                "zh-tw": "打"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Colorless",
            value: "+20"
        }],
    retreat: 1
};
export default card;
