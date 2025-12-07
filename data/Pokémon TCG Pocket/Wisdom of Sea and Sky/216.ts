import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    name: {
        en: "Vaporeon",
        "fr": "Vaporéon",
        "es": "vaporeon",
        "it": "Vaporeon",
        "de": "Vaporeon",
        "pt-br": "Vaporeon",
        "zh-tw": "水伊布",
    },
    illustrator: "Souichirou Gunjima",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 130,
    types: ["Water"],
    evolveFrom: {
        en: "Eevee",
        "fr": "Évoli",
        "es": "Eevee",
        "it": "Eevee",
        "de": "Evoli",
        "pt-br": "Eevee",
        "zh-tw": "伊布"
    },
    description: {
        en: "It lives close to water. Its long tail is ridged with\na fin, which is often mistaken for a mermaid's.",
        "fr": "Il vit près de l'eau. Sa longue queue est striée de\nune nageoire, qui est souvent confondue avec celle d'une sirène.",
        "es": "Vive cerca del agua. Su larga cola está surcada por\nuna aleta, que a menudo se confunde con la de una sirena.",
        "it": "Vive vicino all'acqua. La sua lunga coda è increspata\nuna pinna, che spesso viene scambiata per quella di una sirena.",
        "de": "Es lebt in der Nähe von Wasser. Sein langer Schwanz ist gerippt\neine Flosse, die oft mit der einer Meerjungfrau verwechselt wird.",
        "pt-br": "Vive perto da água. Sua longa cauda é estriada\numa barbatana, que muitas vezes é confundida com a de uma sereia.",
        "zh-tw": "它生活在靠近水的地方。它的長尾巴上佈滿了脊狀的\n鰭，經常被誤認為是美人魚的鰭。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Bubble Drain",
                "fr": "Vidange à bulles",
                "es": "Drenaje de burbujas",
                "it": "Drenaggio delle bolle",
                "de": "Blasenablauf",
                "pt-br": "Dreno de bolha",
                "zh-tw": "氣泡排水管"
            },
            damage: 60,
            cost: ["Water", "Colorless", "Colorless"],
            effect: {
                en: "Heal 30 damage from this Pokémon.",
                "fr": "Soignez 30 dégâts de ce Pokémon.",
                "es": "Cura 30 puntos de daño de este Pokémon.",
                "it": "Cura questo Pokémon da 30 danni.",
                "de": "Heile 30 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Cure 30 de dano deste Pokémon.",
                "zh-tw": "治療該神奇寶貝造成的 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Lightning",
            value: "+20"
        }],
    retreat: 2,
    boosters: ["lugia"]
};
export default card;
