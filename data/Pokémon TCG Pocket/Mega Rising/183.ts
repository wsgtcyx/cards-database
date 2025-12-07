import { Card } from "../../../interfaces";
import Set from "../Mega Rising";
const card: Card = {
    set: Set,
    name: {
        en: "Tauros ex",
        "fr": "Taureau ex",
        "es": "ex-tauro",
        "it": "Tauros es",
        "de": "Tauros ex",
        "pt-br": "Ex-tauro",
        "zh-tw": "金牛座EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Colorless"],
    stage: "Basic",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Wild Tackle",
                "fr": "Tacle sauvage",
                "es": "Entrada salvaje",
                "it": "Affronto selvaggio",
                "de": "Wildes Tackle",
                "pt-br": "Equipamento Selvagem",
                "zh-tw": "狂野鏟球"
            },
            damage: 90,
            cost: ["Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If tails, this Pokémon also does 30 damage to itself.",
                "fr": "Lancez une pièce de monnaie. Si c'est pile, ce Pokémon s'inflige également 30 dégâts.",
                "es": "Lanza una moneda. Si sale cruz, este Pokémon también se hace 30 puntos de daño a sí mismo.",
                "it": "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni anche a se stesso.",
                "de": "Wirf eine Münze. Bei „Zahl“ fügt sich dieses Pokémon außerdem selbst 30 Schadenspunkte zu.",
                "pt-br": "Jogue uma moeda. Se sair coroa, este Pokémon também causa 30 de dano a si mesmo.",
                "zh-tw": "拋一枚硬幣。如果是反面，這只神奇寶貝也會對自己造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 2
};
export default card;
