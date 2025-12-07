import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: ex";
const card: Card = {
    set: Set,
    name: {
        en: "Tinkatuff",
        "fr": "Tinkatuff",
        "es": "Tinkatuff",
        "it": "Tinkatuff",
        "de": "Tinkatuff",
        "pt-br": "Tinkatuff",
        "zh-tw": "巧鍛匠",
    },
    illustrator: "miki kudo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Metal"],
    evolveFrom: {
        en: "Tinkatink",
        "fr": "Tinkatink",
        "es": "tinkatink",
        "it": "Tinkatink",
        "de": "Tinkatink",
        "pt-br": "Tinkatink",
        "zh-tw": "丁卡丁克"
    },
    description: {
        en: "This Pokémon will attack groups of Pawniard and\nBisharp, gathering metal from them in order to\ncreate a large and sturdy hammer.",
        "fr": "Ce Pokémon attaquera des groupes de Pawniard et\nBisharp, récupérant du métal afin de\ncréer un marteau gros et robuste.",
        "es": "Este Pokémon atacará a grupos de Pawniard y\nBisharp, recogiendo metal de ellos para\nCrea un martillo grande y resistente.",
        "it": "Questo Pokémon attaccherà gruppi di Pawniard e\nBisharp, raccogliendo metallo da loro per farlo\ncreare un martello grande e robusto.",
        "de": "Dieses Pokémon greift Gruppen von Pawniard und an\nBisharp sammelt Metall von ihnen, um es zu tun\nErstellen Sie einen großen und robusten Hammer.",
        "pt-br": "Este Pokémon atacará grupos de Pawniard e\nBisharp, reunindo metal deles para\ncrie um martelo grande e resistente.",
        "zh-tw": "這只神奇寶貝會攻擊一群Pawniard和\nBisharp，從他們身上收集金屬，以便\n製作一把大而堅固的錘子。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Tenacious Hammer",
                "fr": "Marteau tenace",
                "es": "Martillo tenaz",
                "it": "Martello tenace",
                "de": "Hartnäckiger Hammer",
                "pt-br": "Martelo Tenaz",
                "zh-tw": "頑強之鎚"
            },
            damage: 30,
            cost: ["Metal", "Metal"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                "fr": "Lancez une pièce de monnaie. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
                "es": "Lanza una moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                "it": "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                "de": "Wirf eine Münze. Bei „Kopf“ verursacht dieser Angriff 30 weitere Schadenspunkte.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
