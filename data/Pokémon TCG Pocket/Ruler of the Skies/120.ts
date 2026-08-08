import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/120",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/120",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/120",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/120",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/120",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/120",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/120"
    },
    name: {
        en: "Mega Rayquaza ex",
        fr: "Méga-Rayquaza-ex",
        es: "Mega-Rayquaza ex",
        it: "Mega Rayquaza-ex",
        de: "Mega-Rayquaza-ex",
        "pt-br": "Mega Rayquaza ex",
        "zh-tw": "超級烈空坐ex",
        ko: "메가레쿠쟈 ex",
        ja: "メガレックウザex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Dragon"],
    dexId: [384],
    stage: "Basic",
    attacks: [
        {
            cost: ["Fire", "Lightning"],
            name: {
                en: "Mega Burst",
                fr: "Méga Explosion",
                es: "Megaexplosión",
                "pt-br": "Megaexplosão",
                "zh-tw": "超級爆發",
                "it": "Megascoppio",
                "de": "Mega-Explosion"
            },
            effect: {
                en: "Discard all {R} and {L} Energy from this Pokémon, and this attack does 50 damage for each Energy you discarded in this way.",
                fr: "Défaussez toutes les Énergies {R} et {L} de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque Énergie défaussée de cette façon.",
                es: "Descarta todas las Energías {R} y {L} de este Pokémon. Este ataque hace 50 puntos de daño por cada Energía que hayas descartado de esta manera.",
                "pt-br": "Descarte todas as Energias {R} e {L} deste Pokémon, e este ataque causa 50 pontos de dano para cada Energia descartada desta forma.",
                "zh-tw": "將這隻寶可夢身上的{R}與{L}能量全部丟棄,造成丟棄的能量數量×50點傷害。"
            },
            damage: "50x"
        }
    ],
    retreat: 1
};
export default card;
