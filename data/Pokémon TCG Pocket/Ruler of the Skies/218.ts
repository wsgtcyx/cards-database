import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/218",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/218",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/218",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/218",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/218",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/218",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/218"
    },
    name: {
        en: "Galarian Meowth",
        fr: "Miaouss de Galar",
        es: "Meowth de Galar",
        it: "Meowth di Galar",
        de: "Galar-Mauzi",
        "pt-br": "Meowth de Galar",
        "zh-tw": "伽勒爾喵喵",
        ko: "가라르 나옹",
        ja: "ガラル ニャース"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Metal"],
    stage: "Basic",
    description: {
        en: "These daring Pokémon have coins on their foreheads. Darker coins are harder, and harder coins garner more respect among Meowth."
    },
    attacks: [
        {
            cost: ["Metal"],
            name: {
                en: "Slash",
                fr: "Tranche",
                es: "Cuchillada",
                it: "Lacerazione",
                de: "Schlitzer",
                "pt-br": "Talho",
                "zh-tw": "劈開"
            },
            damage: 20
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
