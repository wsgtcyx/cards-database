import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/010"
    },
    name: {
        en: "Combee",
        fr: "Apitrini",
        es: "Combee",
        it: "Combee",
        de: "Wadribie",
        "pt-br": "Combee",
        "zh-tw": "三蜜蜂",
        ko: "세꿀버리",
        ja: "ミツハニー"
    },
    illustrator: "Yoriyuki Ikegami",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [415],
    stage: "Basic",
    description: {
        en: "The trio is together from birth. It constantly gathers honey from flowers to please VESPIQUEN."
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Reckless Charge",
                fr: "Attaque Imprudente",
                es: "Carga Descuidada",
                it: "Carica Avventata",
                de: "Waghalsiger Sturmangriff",
                "pt-br": "Carga Indomável",
                "zh-tw": "突擊"
            },
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                fr: "Ce Pokémon s'inflige également 10 dégâts.",
                es: "Este Pokémon también se hace 10 daños a sí mismo.",
                it: "Questo Pokémon infligge anche 10 danni a se stesso.",
                de: "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該寶可夢也會對其自身造成 10 點傷害。"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
