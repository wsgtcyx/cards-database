import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Froakie",
        "fr": "Froakie",
        "es": "Froakie",
        "it": "Froakie",
        "de": "Froakie",
        "pt-br": "Froakie",
        "zh-tw": "呱呱泡蛙",
    },
    illustrator: "Aya Kusube",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Water"],
    description: {
        en: "It secretes flexible bubbles from its chest and back.\nThe bubbles reduce the damage it would otherwise\ntake when attacked.",
        "fr": "Il sécrète des bulles flexibles depuis sa poitrine et son dos.\nLes bulles réduisent les dégâts qui seraient autrement causés\nprendre en cas d'attaque.",
        "es": "Secreta burbujas flexibles desde su pecho y espalda.\nLas burbujas reducen el daño que de otro modo causaría.\ntomar cuando sea atacado.",
        "it": "Secerne bolle flessibili dal petto e dalla schiena.\nLe bolle riducono il danno che altrimenti farebbe\nprendere quando viene attaccato.",
        "de": "Es sondert flexible Blasen aus Brust und Rücken ab.\nDie Blasen verringern den Schaden, der sonst entstehen würde\nnehmen, wenn angegriffen.",
        "pt-br": "Ele secreta bolhas flexíveis no peito e nas costas.\nAs bolhas reduzem o dano que de outra forma\ntomar quando for atacado.",
        "zh-tw": "它從胸部和背部分泌出靈活的氣泡。\n氣泡減少了原本會造成的損害\n受到攻擊時採取。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flop",
                "fr": "Fiasco",
                "es": "Fracaso",
                "it": "Flop",
                "de": "Flop",
                "pt-br": "Fracasso",
                "zh-tw": "翻牌"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
