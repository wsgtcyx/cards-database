import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/011",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/011",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/011",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/011",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/011",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/011"
    },
    name: {
        en: "Scatterbug",
        "fr": "Lépidonille",
        "es": "Scatterbug",
        "it": "Scatterbug",
        "de": "Purmel",
        "pt-br": "Scatterbug",
        "zh-tw": "粉蝶蟲"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    description: {
        en: "This Pokémon scatters poisonous powder\nto repel enemies. It will eat different plants\ndepending on where it lives.",
        "fr": "Ce Pokémon disperse de la poudre empoisonnée\npour repousser les ennemis. Il mangera différentes plantes\nselon l'endroit où il vit.",
        "es": "Este Pokémon esparce polvo venenoso\npara repeler a los enemigos. Comerá diferentes plantas.\ndependiendo de donde viva.",
        "it": "Questo Pokémon sparge polvere velenosa\nper respingere i nemici. Mangerà piante diverse\na seconda di dove vive.",
        "de": "Dieses Pokémon verstreut giftiges Pulver\num Feinde abzuwehren. Es frisst verschiedene Pflanzen\nje nachdem, wo es lebt.",
        "pt-br": "Este Pokémon espalha pó venenoso\npara repelir os inimigos. Ele comerá plantas diferentes\ndependendo de onde ele mora.",
        "zh-tw": "This Pokémon scatters poisonous powder\n擊退敵人。 It will eat different plants\ndepending on where it lives."
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Bug Bite",
                "fr": "Morsure d'insecte",
                "es": "picadura de insecto",
                "it": "Morso di insetto",
                "de": "Insektenstich",
                "pt-br": "Mordida de inseto",
                "zh-tw": "蟲咬"
            },
            damage: 10,
            cost: ["Colorless"]
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1
};
export default card;
