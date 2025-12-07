import { Card } from "../../../interfaces";
import Set from "../Extradimensional Crisis";
const card: Card = {
    set: Set,
    name: {
        en: "Arcanine ex",
        "fr": "Arcanin ex",
        "es": "ex arcanino",
        "it": "Arcanina es",
        "de": "Arcanine ex",
        "pt-br": "Ex arcanino",
        "zh-tw": "風速狗 ex",
    },
    illustrator: "PLANETA Saito",
    category: "Pokemon",
    hp: 150,
    types: ["Fire"],
    evolveFrom: {
        en: "Growlithe",
        "fr": "Growlithe",
        "es": "crecer",
        "it": "Growlithe",
        "de": "Growlithe",
        "pt-br": "Growlithe",
        "zh-tw": "成長"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Inferno Onrush",
                "fr": "Déferlement infernal",
                "es": "Ataque infernal",
                "it": "L'Inferno Onrush",
                "de": "Inferno-Ansturm",
                "pt-br": "Investida Infernal",
                "zh-tw": "地獄突襲"
            },
            damage: 120,
            cost: ["Fire", "Fire", "Colorless"],
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
            type: "Water",
            value: "+20"
        }],
    retreat: 2,
    rarity: "Two Shiny"
};
export default card;
