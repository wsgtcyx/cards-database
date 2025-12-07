import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Herdier",
        "fr": "Herdier",
        "es": "herrero",
        "it": "Herdier",
        "de": "Herdier",
        "pt-br": "Pastor",
        "zh-tw": "哈約克",
    },
    illustrator: "sui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Colorless"],
    evolveFrom: {
        en: "Lillipup",
        "fr": "Lilipup",
        "es": "lilipup",
        "it": "Lillipup",
        "de": "Lillipup",
        "pt-br": "Lillipup",
        "zh-tw": "利利普普"
    },
    description: {
        en: "The black fur that covers this Pokémon's body\nis dense and springy. Even sharp fangs bounce\nright off.",
        "fr": "La fourrure noire qui recouvre le corps de ce Pokémon\nest dense et élastique. Même les crocs pointus rebondissent\ntout de suite.",
        "es": "El pelaje negro que cubre el cuerpo de este Pokémon\nes denso y elástico. Incluso los colmillos afilados rebotan\ninmediatamente.",
        "it": "La pelliccia nera che ricopre il corpo di questo Pokémon\nè denso ed elastico. Anche le zanne affilate rimbalzano\nsubito.",
        "de": "Das schwarze Fell, das den Körper dieses Pokémon bedeckt\nist dicht und federnd. Sogar scharfe Reißzähne hüpfen\nsofort los.",
        "pt-br": "O pelo preto que cobre o corpo deste Pokémon\né denso e elástico. Até as presas afiadas saltam\nimediatamente.",
        "zh-tw": "覆蓋這只神奇寶貝身體的黑色皮毛\n緻密且有彈性。即使鋒利的獠牙也會彈跳\n馬上。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Headbutt Bounce",
                "fr": "Rebond de coup de tête",
                "es": "Rebote de cabezazo",
                "it": "Rimbalzo della testata",
                "de": "Kopfstoß-Abprall",
                "pt-br": "Salto de cabeçada",
                "zh-tw": "頭撞彈跳"
            },
            damage: 40,
            cost: ["Colorless", "Colorless"]
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
