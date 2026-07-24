import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    name: {
        en: "Squawkabilly",
        fr: "Tapatoès",
        es: "Squawkabilly",
        it: "Squawkabilly",
        de: "Krawalloro",
        "pt-br": "Squawkabilly",
        "zh-tw": "怒鸚哥",
        pt: "Squawkabilly",
        'es-mx': "Squawkabilly"
    },
    illustrator: "Oswaldo KATO",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Colorless"],
    dexId: [931],
    description: {
        en: "Green-feathered flocks hold the most sway. When they're out searching for food in the mornings and evenings, it gets very noisy.",
        "fr": "Les troupeaux à plumes vertes sont ceux qui ont le plus d'influence. Lorsqu'ils partent à la recherche de nourriture le matin et le soir, cela devient très bruyant.",
        "es": "Las bandadas de plumas verdes son las que tienen mayor influencia. Cuando salen a buscar comida por la mañana y por la noche, se vuelve muy ruidoso.",
        "it": "Gli stormi dalle piume verdi hanno la massima influenza. Quando sono fuori a cercare cibo la mattina e la sera, diventa molto rumoroso.",
        "de": "Grüngefiederte Herden haben den größten Einfluss. Wenn sie morgens und abends auf Futtersuche sind, kann es sehr laut werden.",
        "pt-br": "Os bandos de penas verdes são os que têm maior influência. Quando eles estão procurando comida de manhã e à noite, fica muito barulhento.",
        "zh-tw": "綠羽毛的羊群占主導地位。當他們早上和晚上出去尋找食物時，會變得非常吵鬧。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Quick Attack",
                fr: "Vive-attaque",
                "es": "Ataque rápido",
                "it": "Attacco rapido",
                de: "Quick Attack",
                "pt-br": "Ataque Rápido",
                "zh-tw": "快速攻擊"
            },
            damage: "30+",
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se der cara, este ataque causa 30 de dano a mais.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。",
                'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais."
            },
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
