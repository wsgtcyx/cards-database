import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Lillipup",
        "fr": "Lilipup",
        "es": "lilipup",
        "it": "Lillipup",
        "de": "Lillipup",
        "pt-br": "Lillipup",
        "zh-tw": "小約克",
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "This Pokémon is courageous but also cautious.\nIt uses the soft fur covering its face to collect\ninformation about its surroundings.",
        "fr": "Ce Pokémon est courageux mais aussi prudent.\nIl utilise la douce fourrure qui recouvre son visage pour recueillir\ndes informations sur ses environs.",
        "es": "Este Pokémon es valiente pero también cauteloso.\nUtiliza el suave pelaje que cubre su cara para recolectar\ninformación sobre su entorno.",
        "it": "Questo Pokémon è coraggioso ma anche cauto.\nUtilizza la morbida pelliccia che gli ricopre il viso per collezionare\ninformazioni sui suoi dintorni.",
        "de": "Dieses Pokémon ist mutig, aber auch vorsichtig.\nZum Sammeln nutzt es das weiche Fell, das sein Gesicht bedeckt\nInformationen über die Umgebung.",
        "pt-br": "Este Pokémon é corajoso, mas também cauteloso.\nEle usa o pelo macio que cobre seu rosto para coletar\ninformações sobre seu entorno.",
        "zh-tw": "這只神奇寶貝很勇敢，但也很謹慎。\n它利用覆蓋其面部的柔軟皮毛來收集\n有關其周圍環境的信息。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Tackle",
                "fr": "Tacle",
                "es": "Abordar",
                "it": "Attrezzatura",
                "de": "Tackle",
                "pt-br": "Enfrentar",
                "zh-tw": "處理"
            },
            damage: 20,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
