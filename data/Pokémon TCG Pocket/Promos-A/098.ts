import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    name: {
        en: "Blissey ex",
        "fr": "Ex-Blissey",
        "es": "blissey ex",
        "it": "Blissey es",
        "de": "Blissey Ex",
        "pt-br": "Blissey ex",
        "zh-tw": "布利西EX"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    evolveFrom: {
        en: "Chansey",
        "fr": "Chansey",
        "es": "Chansey",
        "it": "Chansey",
        "de": "Chansey",
        "pt-br": "Chansey",
        "zh-tw": "錢西"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Happy Punch",
                "fr": "Joyeux coup de poing",
                "es": "Golpe feliz",
                "it": "Buon pugno",
                "de": "Fröhlicher Schlag",
                "pt-br": "Soco feliz",
                "zh-tw": "快樂沖床"
            },
            damage: 100,
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin. If heads, heal 60 damage from this Pokémon.",
                "fr": "Lancez une pièce de monnaie. Si c'est face, soignez 60 dégâts de ce Pokémon.",
                "es": "Lanza una moneda. Si sale cara, cura 60 puntos de daño a este Pokémon.",
                "it": "Lancia una moneta. Se esce testa, cura questo Pokémon da 60 danni.",
                "de": "Wirf eine Münze. Heile bei „Kopf“ 60 Schadenspunkte bei diesem Pokémon.",
                "pt-br": "Jogue uma moeda. Se der cara, cure 60 de dano deste Pokémon.",
                "zh-tw": "拋一枚硬幣。如果正面，則治療該神奇寶貝 60 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 3
};
export default card;
