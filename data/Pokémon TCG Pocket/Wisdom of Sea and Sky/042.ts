import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Seadra",
        "fr": "Seadra",
        "es": "Seadra",
        "it": "Seadra",
        "de": "Seadra",
        "pt-br": "Seadra",
        "zh-tw": "西德拉"
    },
    illustrator: "sui",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Horsea",
        "fr": "Horée",
        "es": "caballoa",
        "it": "Horsea",
        "de": "Horsea",
        "pt-br": "cavalo",
        "zh-tw": "霍塞亞"
    },
    description: {
        en: "It's the males that raise the offspring. While\nSeadra are raising young, the spines on their\nbacks secrete thicker and stronger poison.",
        "fr": "Ce sont les mâles qui élèvent la progéniture. Tandis que\nSeadra élève des petits, les épines sur leurs\nle dos sécrète un poison plus épais et plus fort.",
        "es": "Son los machos los que crían a la descendencia. mientras\nSeadra está criando crías, las espinas en sus\nLa espalda secreta un veneno más espeso y fuerte.",
        "it": "Sono i maschi che allevano la prole. Mentre\nI Seadra stanno crescendo piccoli, con le spine sulle loro\ni dorsi secernono un veleno più denso e più forte.",
        "de": "Es sind die Männchen, die den Nachwuchs großziehen. Während\nSeadra ziehen junge Tiere mit Stacheln auf\nRücken scheiden dickeres und stärkeres Gift aus.",
        "pt-br": "São os machos que criam a prole. Enquanto\nSeadra está criando jovens, os espinhos em seus\ncostas secretam um veneno mais espesso e mais forte.",
        "zh-tw": "養育後代的是雄性。同時\nSeadra 正在養育幼崽，它們身上的刺\n背部分泌出更濃烈的毒液。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Razor Fin",
                "fr": "Aileron de rasoir",
                "es": "Aleta de afeitar",
                "it": "Pinna di rasoio",
                "de": "Rasiermesserflosse",
                "pt-br": "Barbatana Navalha",
                "zh-tw": "刀鰭"
            },
            damage: 50,
            cost: ["Water", "Water"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
