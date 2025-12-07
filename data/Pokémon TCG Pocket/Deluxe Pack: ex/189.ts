import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Machop",
        "fr": "Machop",
        "es": "Machop",
        "it": "Machop",
        "de": "Machop",
        "pt-br": "Machop",
        "zh-tw": "腕力",
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Fighting"],
    description: {
        en: "Its whole body is composed of muscles.\nEven though it's the size of a human child, it can\nhurl 100 grown-ups.",
        "fr": "Tout son corps est composé de muscles.\nMême s'il a la taille d'un enfant humain, il peut\nlancez 100 adultes.",
        "es": "Todo su cuerpo está compuesto de músculos.\nAunque es del tamaño de un niño humano, puede\narrojar a 100 adultos.",
        "it": "Tutto il suo corpo è composto da muscoli.\nAnche se ha le dimensioni di un bambino umano, può farlo\nscagliare 100 adulti.",
        "de": "Sein ganzer Körper besteht aus Muskeln.\nObwohl es die Größe eines menschlichen Kindes hat, kann es\nWirf 100 Erwachsene.",
        "pt-br": "Todo o seu corpo é composto por músculos.\nMesmo sendo do tamanho de uma criança humana, pode\narremessar 100 adultos.",
        "zh-tw": "它的整個身體都是由肌肉組成的。\n儘管它只有人類兒童的大小，但它可以\n投擲 100 個成年人。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Knuckle Punch",
                "fr": "Coup de poing",
                "es": "Golpe de nudillos",
                "it": "Pugno sulle nocche",
                "de": "Knöchelschlag",
                "pt-br": "Soco de Dedo",
                "zh-tw": "指節拳"
            },
            damage: 20,
            cost: ["Fighting"]
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 2
};
export default card;
