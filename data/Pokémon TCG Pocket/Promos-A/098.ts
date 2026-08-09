import { Card } from "../../../interfaces";
import Set from "../Promos-A";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/P-A/098",
        de: "https://game.pokemontcgpocket.app/de/tcgp/P-A/098",
        es: "https://game.pokemontcgpocket.app/es/tcgp/P-A/098",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/P-A/098",
        it: "https://game.pokemontcgpocket.app/it/tcgp/P-A/098",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/P-A/098",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/P-A/098"
    },
    name: {
        en: "Blissey ex",
        "fr": "Leuphorie-ex",
        "es": "Blissey ex",
        "it": "Blissey-ex",
        "de": "Heiteira-ex",
        "pt-br": "Blissey ex",
        "zh-tw": "幸福蛋ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 180,
    types: ["Colorless"],
    evolveFrom: {
        en: "Chansey",
        "fr": "Leveinard",
        "es": "Chansey",
        "it": "Chansey",
        "de": "Chaneira",
        "pt-br": "Chansey",
        "zh-tw": "吉利蛋"
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
