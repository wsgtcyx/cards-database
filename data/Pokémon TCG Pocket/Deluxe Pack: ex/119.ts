import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Brionne",
        "fr": "Brionne",
        "es": "brionne",
        "it": "Brionne",
        "de": "Brionne",
        "pt-br": "Brionne",
        "zh-tw": "花漾海獅",
    },
    illustrator: "Atsuko Nishida",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Water"],
    evolveFrom: {
        en: "Popplio",
        "fr": "Popplio",
        "es": "poplio",
        "it": "Popplio",
        "de": "Popplio",
        "pt-br": "Popplio",
        "zh-tw": "波普利奧"
    },
    description: {
        en: "It gets excited when it sees a dance it\ndoesn't know. This hard worker practices\ndiligently until it can learn that dance.",
        "fr": "Il s'excite quand il voit une danse\nne sait pas. Ce travailleur acharné pratique\navec diligence jusqu'à ce qu'il puisse apprendre cette danse.",
        "es": "Se emociona cuando ve un baile.\nno lo sabe. Este trabajador practica\ndiligentemente hasta que pueda aprender ese baile.",
        "it": "Si emoziona quando vede qualcuno ballarlo\nnon lo sa. Questa pratica del gran lavoratore\ndiligentemente finché non possa imparare quella danza.",
        "de": "Es wird aufgeregt, wenn es jemanden tanzen sieht\nweiß es nicht. Dieser harte Arbeiter übt\nfleißig, bis es diesen Tanz lernen kann.",
        "pt-br": "Fica animado quando vê uma dança\nnão sabe. Este trabalhador pratica\ndiligentemente até que possa aprender essa dança.",
        "zh-tw": "當它看到舞蹈時它會興奮\n不知道。這個勤奮的人練習\n勤奮地練習，直到它能學會那種舞蹈。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Water Gun",
                "fr": "Pistolet à eau",
                "es": "Pistola de agua",
                "it": "Pistola ad acqua",
                "de": "Wasserpistole",
                "pt-br": "Pistola de água",
                "zh-tw": "水槍"
            },
            damage: 40,
            cost: ["Water", "Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2
};
export default card;
