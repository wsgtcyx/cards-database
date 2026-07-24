import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Finizen",
        fr: "Dofin",
        es: "Finizen",
        it: "Finizen",
        de: "Normifin",
        "pt-br": "Finizen",
        "zh-tw": "波普海豚",
        pt: "Finizen"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    dexId: [963],
    description: {
        en: "Its water ring is made from seawater mixed with a sticky fluid that Finizen secretes from its blowhole.",
        "fr": "Son anneau d'eau est composé d'eau de mer mélangée à un fluide collant que Dofin sécrète par son évent.",
        "es": "Su anillo de agua está hecho de agua de mar mezclada con un fluido pegajoso que Finizen secreta por su espiráculo.",
        "it": "Il suo anello d'acqua è costituito da acqua di mare mescolata con un fluido appiccicoso che Finizen secerne dal suo sfiatatoio.",
        "de": "Sein Wasserring besteht aus Meerwasser, gemischt mit einer klebrigen Flüssigkeit, die Normifin aus seinem Blasloch absondert.",
        "pt-br": "Seu anel de água é feito de água do mar misturada com um fluido pegajoso que Finizen secreta de seu respiradouro.",
        "zh-tw": "它的水環是由海水與波普海豚從其氣孔分泌的黏性液體混合而成。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Razor Fin",
                fr: "Aileron-Rasoir",
                es: "Aleta Afilada",
                it: "Pinnalama",
                de: "Rasierflosse",
                'pt-br': "Barbatana Cortante",
                "zh-tw": "刀鰭",
                ko: "지느러미 커터"
            },
            damage: "20",
            cost: ["Water"],
        },
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
