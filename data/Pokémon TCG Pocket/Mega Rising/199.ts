import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Patrat",
        "fr": "Patrat",
        "es": "patrat",
        "it": "Patrat",
        "de": "Patrat",
        "pt-br": "Patrat",
        "zh-tw": "帕特拉特"
    },
    illustrator: "Kyoko Umemoto",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Extremely cautious, one of them will always be on\nthe lookout, but it won't notice a foe coming\nfrom behind.",
        "fr": "Extrêmement prudent, l'un d'eux sera toujours allumé\nle guetteur, mais il ne remarquera pas l'arrivée d'un ennemi\npar derrière.",
        "es": "Extremadamente cauteloso, uno de ellos siempre estará encendido.\nEl vigía, pero no notará que viene un enemigo.\ndesde atrás.",
        "it": "Estremamente cauto, uno di loro sarà sempre attivo\nla vedetta, ma non si accorgerà dell'arrivo del nemico\nda dietro.",
        "de": "Äußerst vorsichtig, einer von ihnen wird immer eingeschaltet sein\nder Ausguck, aber er wird nicht bemerken, dass ein Feind kommt\nvon hinten.",
        "pt-br": "Extremamente cauteloso, um deles estará sempre ligado\no vigia, mas não notará um inimigo chegando\npor trás.",
        "zh-tw": "極其謹慎，其中之一將始終處於開啟狀態\n瞭望者，但它不會注意到敵人的到來\n從後面。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite",
                "fr": "Mordre",
                "es": "Morder",
                "it": "Morso",
                "de": "Beißen",
                "pt-br": "Morder",
                "zh-tw": "咬"
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
