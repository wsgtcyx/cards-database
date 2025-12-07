import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Luvdisc",
        "fr": "Luvdisque",
        "es": "luvdisc",
        "it": "Luvdisc",
        "de": "Luvdisc",
        "pt-br": "Disco Luv",
        "zh-tw": "盧夫迪斯克"
    },
    illustrator: "sui",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    description: {
        en: "During the spawning season, countless Luvdisc\ncongregate at coral reefs, turning the waters pink.",
        "fr": "Pendant la saison de frai, d'innombrables Luvdisc\nse rassemblent sur les récifs coralliens, rendant les eaux roses.",
        "es": "Durante la temporada de desove, innumerables Luvdisc\nse congregan en los arrecifes de coral, tiñendo las aguas de color rosa.",
        "it": "Durante la stagione riproduttiva, innumerevoli Luvdisc\nsi riuniscono presso le barriere coralline, trasformando le acque in rosa.",
        "de": "Während der Laichzeit entstehen unzählige Luvdisc\nversammeln sich an Korallenriffen und färben das Wasser rosa.",
        "pt-br": "Durante a época de desova, inúmeros Luvdisc\nse reúnem em recifes de corais, tornando as águas rosadas.",
        "zh-tw": "在產卵季節，無數的 Luvdisc\n聚集在珊瑚礁上，使海水變成粉紅色。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Paired Tackle",
                "fr": "Tacle en paire",
                "es": "Tackle emparejado",
                "it": "Contrasto in coppia",
                "de": "Gepaartes Tackle",
                "pt-br": "Equipamento emparelhado",
                "zh-tw": "配對鏟球"
            },
            damage: 30,
            cost: ["Water", "Water"],
            effect: {
                en: "If you have exactly 2, 4, or 6 cards in your hand, this attack does 30 more damage.",
                "fr": "Si vous avez exactement 2, 4 ou 6 cartes en main, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Si tienes exactamente 2, 4 o 6 cartas en tu mano, este ataque hace 30 daños más.",
                "it": "Se hai esattamente 2, 4 o 6 carte in mano, questo attacco infligge 30 danni in più.",
                "de": "Wenn du genau 2, 4 oder 6 Karten auf der Hand hast, fügt dieser Angriff 30 Schadenspunkte mehr zu.",
                "pt-br": "Se você tiver exatamente 2, 4 ou 6 cartas em sua mão, este ataque causa 30 de dano a mais.",
                "zh-tw": "如果你的手牌恰好有 2、4 或 6 張，則此攻擊造成的傷害增加 30 點。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 1
};
export default card;
