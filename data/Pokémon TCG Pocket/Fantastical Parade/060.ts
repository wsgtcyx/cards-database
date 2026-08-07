import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/060",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/060",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/060",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/060",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/060",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/060",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/060"
    },
    name: {
        en: "Wobbuffet",
        "fr": "Qulbutoké",
        "es": "Wobbuffet",
        "it": "Wobbuffet",
        "de": "Woingenau",
        "pt-br": "Wobbuffet",
        "zh-tw": "果然翁"
    },
    illustrator: "HYOGONOSUKE",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Psychic"],
    description: {
        en: "To keep its pitch-black tail hidden, it lives quietly\nin the darkness. It is never first to attack.",
        "fr": "Pour cacher sa queue noire, il vit tranquillement\ndans l'obscurité. Ce n'est jamais le premier à attaquer.",
        "es": "Para mantener oculta su cola negra como boca de lobo, vive tranquilamente\nen la oscuridad. Nunca es el primero en atacar.",
        "it": "Per tenere nascosta la coda nera come la pece, vive tranquillamente\nnell'oscurità. Non è mai il primo ad attaccare.",
        "de": "Um seinen pechschwarzen Schwanz zu verbergen, lebt er ruhig\nin der Dunkelheit. Es ist nie der Erste, anzugreifen.",
        "pt-br": "Para manter sua cauda preta escondida, ele vive em silêncio\nna escuridão. Nunca é o primeiro a atacar.",
        "zh-tw": "為了隱藏漆黑的尾巴，它安靜地生活著\n在黑暗中。它永遠不會首先進攻。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Flip Over",
                "fr": "Retourner",
                "es": "Voltear",
                "it": "Capovolgi",
                "de": "Umdrehen",
                "pt-br": "Virar",
                "zh-tw": "翻轉"
            },
            damage: 80,
            cost: ["Psychic", "Colorless", "Colorless"],
            effect: {
                en: "This Pokémon also does 10 damage to itself.",
                "fr": "Ce Pokémon s'inflige également 10 dégâts.",
                "es": "Este Pokémon también se hace 10 daños a sí mismo.",
                "it": "Questo Pokémon infligge anche 10 danni a se stesso.",
                "de": "Dieses Pokémon fügt sich selbst außerdem 10 Schadenspunkte zu.",
                "pt-br": "Este Pokémon também causa 10 de dano a si mesmo.",
                "zh-tw": "該神奇寶貝也會對其自身造成 10 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Darkness",
            value: "+20"
        }],
    retreat: 2
};
export default card;
