import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Gabite",
        "fr": "Gabite",
        "es": "gabita",
        "it": "Gabite",
        "de": "Gabite",
        "pt-br": "Gabite",
        "zh-tw": "加比特"
    },
    illustrator: "Sumiyoshi Kizuki",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    evolveFrom: {
        en: "Gible",
        "fr": "Pignon",
        "es": "gible",
        "it": "Gibile",
        "de": "Gible",
        "pt-br": "Gible",
        "zh-tw": "吉布爾"
    },
    description: {
        en: "In rare cases, it molts and sheds its scales.\nMedicine containing its scales as an ingredient\nwill make a weary body feel invigorated.",
        "fr": "Dans de rares cas, il mue et perd ses écailles.\nMédicament contenant ses écailles comme ingrédient\npermettra à un corps fatigué de se sentir revigoré.",
        "es": "En casos raros, muda y se deshace de sus escamas.\nMedicina que contiene sus escamas como ingrediente.\nhará que un cuerpo cansado se sienta vigorizado.",
        "it": "In rari casi, fa la muta e perde le squame.\nMedicina contenente le sue scaglie come ingrediente\nfarà sentire rinvigorito un corpo stanco.",
        "de": "In seltenen Fällen häutet es sich und wirft seine Schuppen ab.\nArzneimittel, das seine Schuppen als Zutat enthält\nsorgt dafür, dass sich ein müder Körper belebt fühlt.",
        "pt-br": "Em casos raros, ele muda e perde suas escamas.\nMedicamento contendo suas escamas como ingrediente\nfará com que um corpo cansado se sinta revigorado.",
        "zh-tw": "在極少數情況下，它會蛻皮並脫落鱗片。\n以其鱗片為成分的藥物\n會讓疲憊的身體感到充滿活力。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Sharp Scythe",
                "fr": "Faux tranchante",
                "es": "Guadaña afilada",
                "it": "Falce affilata",
                "de": "Scharfe Sense",
                "pt-br": "Foice Afiada",
                "zh-tw": "鋒利的鐮刀"
            },
            damage: 30,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
