import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/099",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/099"
    },
    name: {
        en: "Galarian Linoone",
        "fr": "Linéon de Galar",
        "es": "Linoone de Galar",
        "it": "Linoone di Galar",
        "de": "Galar-Geradaks",
        "pt-br": "Linoone de Galar",
        "zh-tw": "伽勒爾直衝熊"
    },
    illustrator: "nagimiso",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Darkness"],
    evolveFrom: {
        en: "Galarian Zigzagoon",
        "fr": "Zigzaton de Galar",
        "es": "Zigzagoon de Galar",
        "it": "Zigzagoon di Galar",
        "de": "Galar-Zigzachs",
        "pt-br": "Zigzagoon de Galar",
        "zh-tw": "伽勒爾蛇紋熊"
    },
    description: {
        en: "This very aggressive Pokémon will recklessly\nchallenge opponents stronger than itself.",
        "fr": "Ce Pokémon très agressif va imprudemment\ndéfier des adversaires plus forts que lui.",
        "es": "Este Pokémon muy agresivo atacará imprudentemente\ndesafiar a oponentes más fuertes que él mismo.",
        "it": "Questo Pokémon molto aggressivo lo farà incautamente\nsfidare avversari più forti di lui.",
        "de": "Dieses sehr aggressive Pokémon wird rücksichtslos sein\nFordern Sie Gegner heraus, die stärker sind als Sie selbst.",
        "pt-br": "Este Pokémon muito agressivo irá imprudentemente\ndesafiar adversários mais fortes do que ele.",
        "zh-tw": "這種非常具有攻擊性的神奇寶貝會魯莽地\n挑戰比自己更強的對手。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Rear Kick",
                "fr": "Coup de pied arrière",
                "es": "Patada trasera",
                "it": "Calcio posteriore",
                "de": "Hinterer Tritt",
                "pt-br": "Chute traseiro",
                "zh-tw": "後踢"
            },
            damage: 40,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1
};
export default card;
