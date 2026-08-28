import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/099",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/099",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/099",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/099",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/099",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/099",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/099"
    },
    name: {
        en: "Toxel",
        fr: "Toxizap",
        es: "Toxel",
        it: "Toxel",
        de: "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "毒電嬰",
        ko: "일레즌",
        ja: "エレズン"
    },
    illustrator: "MAHOU",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [848],
    stage: "Basic",
    description: {
        en: "This selfish, attention-seeking Pokémon stores poison and electricity in two different sacs inside its body.",
        fr: "Ce Pokémon égoîste aime l'attention. Son corps contient deux poches qui lui permettent d'emmagasiner du poison et de l'électricité.",
        es: "Es egoísta y caprichoso. Almacena veneno y electricidad en dos bolsas internas distintas.",
        it: "È un Pokémon egoista che pensa solo a se stesso. Immagazzina veleno ed elettricità in due sacche distinte all'interno del suo corpo.",
        de: "Dieses selbstsüchtige und verzogene Pokémon speichert Gift und Elektrizität in zwei separaten Säcken in seinem Körper.",
        "pt-br": "Este Pokémon egoista que adora atenção guarda veneno e eletricidade em duas bolsas diferentes em seu corpo.",
        "zh-tw": "任性且非常愛撒嬌。體內的兩個囊袋分別儲存著毒和電。"
    },
    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                en: "Static Shock",
                fr: "Choc Statique",
                es: "Impacto Estático",
                it: "Shock Statico",
                de: "Statischer Schock",
                "pt-br": "Choque de Estática",
                "zh-tw": "劈哩啪啦"
            },
            damage: 30
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
