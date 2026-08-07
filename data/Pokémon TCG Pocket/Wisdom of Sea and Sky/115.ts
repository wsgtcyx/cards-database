import { Card } from "../../../interfaces";
import Set from "../Wisdom of Sea and Sky";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A4/115",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A4/115",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A4/115",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A4/115",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A4/115",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A4/115",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A4/115"
    },
    name: {
        en: "Sneasel",
        "fr": "Farfuret",
        "es": "Sneasel",
        "it": "Sneasel",
        "de": "Sniebel",
        "pt-br": "Sneasel",
        "zh-tw": "狃拉",
    },
    illustrator: "yuu",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Darkness"],
    description: {
        en: "This cunning Pokémon hides under the cover of\ndarkness, waiting to attack its prey.",
        "fr": "Ce Pokémon rusé se cache sous le couvert de\nl'obscurité, attendant d'attaquer sa proie.",
        "es": "Este astuto Pokémon se esconde al amparo de\noscuridad, esperando atacar a su presa.",
        "it": "Questo Pokémon astuto si nasconde sotto la copertura di\noscurità, in attesa di attaccare la sua preda.",
        "de": "Dieses schlaue Pokémon versteckt sich unter dem Deckmantel von\nDunkelheit, die darauf wartet, ihre Beute anzugreifen.",
        "pt-br": "Este Pokémon astuto se esconde sob a capa de\nescuridão, esperando para atacar sua presa.",
        "zh-tw": "這個狡猾的神奇寶貝隱藏在\n黑暗，等待著攻擊它的獵物。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Scratch",
                "fr": "Gratter",
                "es": "Rascar",
                "it": "Graffio",
                "de": "Kratzen",
                "pt-br": "Arranhar",
                "zh-tw": "划痕"
            },
            damage: 20,
            cost: ["Darkness"]
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["lugia"]
};
export default card;
