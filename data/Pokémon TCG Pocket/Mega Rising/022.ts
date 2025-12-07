import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Gogoat",
        "fr": "Gochèvre",
        "es": "cabra cabra",
        "it": "Gogoat",
        "de": "Ziege",
        "pt-br": "Cabra",
        "zh-tw": "戈山羊"
    },
    illustrator: "sowsow",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    evolveFrom: {
        en: "Skiddo",
        "fr": "Skiddo",
        "es": "patinar",
        "it": "Scivola",
        "de": "Skiddo",
        "pt-br": "Skiddo",
        "zh-tw": "斯基多"
    },
    description: {
        en: "These Pokémon live in herds in mountainous\nplaces. The victor in their contests of clashing\nhorns will become the leader of the herd.",
        "fr": "Ces Pokémon vivent en troupeaux dans les zones montagneuses\nlieux. Le vainqueur dans leurs concours d'affrontements\nles cornes deviendront le chef du troupeau.",
        "es": "Estos Pokémon viven en manadas en zonas montañosas.\nlugares. El vencedor en sus contiendas de enfrentamiento.\nLos cuernos se convertirán en el líder de la manada.",
        "it": "Questi Pokémon vivono in branchi nelle zone montuose\nluoghi. Il vincitore nelle loro gare di scontro\nle corna diventeranno il capo del branco.",
        "de": "Diese Pokémon leben in Herden in den Bergen\nOrte. Der Sieger in ihren Auseinandersetzungen\nHörner werden zum Anführer der Herde.",
        "pt-br": "Esses Pokémon vivem em rebanhos em regiões montanhosas\nlugares. O vencedor em suas competições de confronto\nchifres se tornará o líder do rebanho.",
        "zh-tw": "這些神奇寶貝成群生活在山區\n地方。他們衝突比賽中的勝利者\n角將成為牛群的領導者。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Double-Edge",
                "fr": "Double tranchant",
                "es": "Doble filo",
                "it": "Doppio bordo",
                "de": "Doppelte Kante",
                "pt-br": "Borda Dupla",
                "zh-tw": "雙刃"
            },
            damage: 100,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "This Pokémon also does 20 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 20 dégâts.",
                "es": "Este Pokémon también se hace 20 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 20 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 20 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 20 de dano a si mesmo.",
                "zh-tw": "這只神奇寶貝也會對自身造成 20 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
