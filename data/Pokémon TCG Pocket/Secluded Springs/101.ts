import { Card } from "../../../interfaces";
import Set from "../Secluded Springs";
const card: Card = {
    set: Set,
    name: {
        en: "Infernape ex",
        "fr": "Ex-Nuque Infernale",
        "es": "Infernape ex",
        "it": "Infernape es",
        "de": "Infernape ex",
        "pt-br": "ex infernape",
        "zh-tw": "烈焰猴 ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 170,
    types: ["Fire"],
    evolveFrom: {
        en: "Monferno",
        "fr": "Montferno",
        "es": "Monferno",
        "it": "Monferno",
        "de": "Monferno",
        "pt-br": "Monferno",
        "zh-tw": "猛火猴",
    },
    stage: "Stage2",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Flare Blitz",
                "fr": "Blitz éclair",
                "es": "Bombardeo de bengalas",
                "it": "Blitz di bagliori",
                "de": "Flare Blitz",
                "pt-br": "Blitz Flamejante",
                "zh-tw": "耀斑閃電戰"
            },
            damage: 140,
            cost: ["Fire", "Fire"],
            effect: {
                en: "Discard all {R} Energy from this Pokémon.",
                "fr": "Défaussez toute l'énergie {R} de ce Pokémon.",
                "es": "Descarta toda la Energía {R} de este Pokémon.",
                "it": "Scarta tutte le Energie {R} da questo Pokémon.",
                "de": "Lege alle {R}-Energien von diesem Pokémon ab.",
                "pt-br": "Descarte todas as energias {R} deste Pokémon.",
                "zh-tw": "丟棄該神奇寶貝的所有 {R} 能量。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 0
};
export default card;
