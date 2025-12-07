import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Raikou",
        "fr": "Raikou",
        "es": "Raikou",
        "it": "Raikou",
        "de": "Raikou",
        "pt-br": "Raikou",
        "zh-tw": "雷公",
    },
    illustrator: "Kazumasa Yasukuni",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    description: {
        en: "The rain clouds it carries let it fire thunderbolts\nat will. They say that it descended with lightning.",
        "fr": "Les nuages de pluie qu'il transporte lui permettent de déclencher des éclairs\nà volonté. On dit qu'il est tombé avec la foudre.",
        "es": "Las nubes de lluvia que lleva le permiten disparar rayos.\na voluntad. Dicen que descendió con un rayo.",
        "it": "Le nuvole di pioggia che trasporta gli fanno scagliare fulmini\na volontà. Dicono che sia sceso con un fulmine.",
        "de": "Die Regenwolken, die es trägt, lassen es Blitze abfeuern\nnach Belieben. Sie sagen, dass es mit einem Blitz herabkam.",
        "pt-br": "As nuvens de chuva que ele carrega deixam disparar raios\nà vontade. Dizem que desceu com um raio.",
        "zh-tw": "它攜帶的雨雲讓它發射雷霆\n隨意。他們說它是隨著閃電降臨的。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Thunder",
                "fr": "Tonnerre",
                "es": "Trueno",
                "it": "Tuono",
                "de": "Donner",
                "pt-br": "Trovão",
                "zh-tw": "雷"
            },
            damage: 70,
            cost: ["Lightning", "Colorless"],
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
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["ho-oh"]
};
export default card;
