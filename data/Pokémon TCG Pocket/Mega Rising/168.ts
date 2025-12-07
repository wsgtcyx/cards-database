import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Durant",
        "fr": "Durant",
        "es": "durante",
        "it": "Durant",
        "de": "Durant",
        "pt-br": "Durant",
        "zh-tw": "杜蘭特"
    },
    illustrator: "kodama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Metal"],
    description: {
        en: "They lay their eggs deep inside their nests.\nWhen attacked by Heatmor, they retaliate\nusing their massive mandibles.",
        "fr": "Ils pondent leurs œufs au fond de leur nid.\nLorsqu'ils sont attaqués par Heatmor, ils ripostent\nen utilisant leurs mandibules massives.",
        "es": "Ponen sus huevos en lo más profundo de sus nidos.\nCuando son atacados por Heatmor, toman represalias.\nusando sus enormes mandíbulas.",
        "it": "Depongono le uova nelle profondità dei loro nidi.\nQuando vengono attaccati da Heatmor, reagiscono\nusando le loro massicce mandibole.",
        "de": "Sie legen ihre Eier tief in ihre Nester.\nWenn sie von Heatmor angegriffen werden, schlagen sie zurück\nmit ihren massiven Mandibeln.",
        "pt-br": "Eles colocam seus ovos bem no fundo de seus ninhos.\nQuando atacados por Heatmor, eles retaliam\nusando suas enormes mandíbulas.",
        "zh-tw": "它們將卵產在巢穴深處。\n當受到 Heatmor 攻擊時，他們會進行報復\n使用它們巨大的下頜骨。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bite Together",
                "fr": "Mordre ensemble",
                "es": "Morder juntos",
                "it": "Mordere insieme",
                "de": "Aufeinander beißen",
                "pt-br": "Morda Juntos",
                "zh-tw": "一起咬"
            },
            damage: 40,
            cost: ["Metal", "Colorless"],
            effect: {
                en: "If Durant is on your Bench, this attack does 40 more damage.",
                "fr": "Si Durant est sur votre banc, cette attaque inflige 40 dégâts supplémentaires.",
                "es": "Si Durant está en tu Banca, este ataque hace 40 puntos de daño más.",
                "it": "Se Durant è nella tua panchina, questo attacco infligge 40 danni in più.",
                "de": "Wenn Durant auf deiner Bank sitzt, fügt dieser Angriff 40 Schadenspunkte mehr zu.",
                "pt-br": "Se Durant estiver no seu banco, este ataque causará 40 de dano a mais.",
                "zh-tw": "如果杜蘭特在你的替補席上，這次攻擊會造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
