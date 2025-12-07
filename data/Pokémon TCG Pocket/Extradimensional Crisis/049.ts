import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Lairon",
        "fr": "Lairon",
        "es": "Lairón",
        "it": "Lairón",
        "de": "Lairon",
        "pt-br": "Lairón",
        "zh-tw": "可多拉",
    },
    illustrator: "Mizue",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Metal"],
    evolveFrom: {
        en: "Aron",
        "fr": "Aron",
        "es": "aron",
        "it": "Aron",
        "de": "Aron",
        "pt-br": "Arão",
        "zh-tw": "阿倫"
    },
    description: {
        en: "It loves iron ore. Groups of them fight for territory\nby bashing one another with their steel bodies.",
        "fr": "Il adore le minerai de fer. Des groupes d'entre eux se battent pour le territoire\nen se frappant les uns les autres avec leurs corps en acier.",
        "es": "Le encanta el mineral de hierro. Grupos de ellos luchan por el territorio.\ngolpeándose unos a otros con sus cuerpos de acero.",
        "it": "Ama il minerale di ferro. Gruppi di loro combattono per il territorio\ncolpendosi a vicenda con i loro corpi d'acciaio.",
        "de": "Es liebt Eisenerz. Gruppen von ihnen kämpfen um Territorium\nindem sie sich gegenseitig mit ihren Stahlkörpern verprügeln.",
        "pt-br": "Adora minério de ferro. Grupos deles lutam por território\nbatendo uns nos outros com seus corpos de aço.",
        "zh-tw": "牠喜歡鐵礦石。他們成群結隊地爭奪領土\n用他們鋼鐵般的身體互相攻擊。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Lunge Out",
                "fr": "Foncez",
                "es": "estocada",
                "it": "Lanciati fuori",
                "de": "Ausholen",
                "pt-br": "Avançar",
                "zh-tw": "向前衝出"
            },
            damage: 60,
            cost: ["Metal", "Metal", "Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3
};
export default card;
