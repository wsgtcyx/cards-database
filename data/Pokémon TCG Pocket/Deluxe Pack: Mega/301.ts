import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/301",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/301",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/301",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/301",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/301",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/301",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/301"
    },
    name: {
        en: "Toxel",
        fr: "Toxizap",
        es: "Toxel",
        it: "Toxel",
        de: "Toxel",
        "pt-br": "Toxel",
        "zh-tw": "毒電嬰",
        ja: "エレズン",
        ko: "일레즌"
    },
    illustrator: "Akira Komayama",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Lightning"
    ],
    description: {
        en: "This selfish, attention-seeking Pokémon stores\npoison and electricity in two different sacs inside\nits body.",
        fr: "Ce Pokémon égoïste aime l'attention. Son corps contient deux poches qui lui permettent d'emmagasiner du poison et de l'électricité.",
        es: "Es egoísta y caprichoso. Almacena veneno y electricidad en dos bolsas internas distintas.",
        it: "È un Pokémon egoista che pensa solo a se stesso. Immagazzina veleno ed elettricità in due sacche distinte all'interno del suo corpo.",
        de: "Dieses selbstsüchtige und verzogene Pokémon speichert Gift und Elektrizität in zwei separaten Säcken in seinem Körper.",
        "pt-br": "Este Pokémon egoísta que adora atenção guarda veneno e eletricidade em duas bolsas diferentes em seu corpo.",
        "zh-tw": "任性且非常愛撒嬌。體內的兩個囊袋分別儲存著毒和電。",
        ja: "This selfish, attention-seeking Pokémon stores\npoison and electricity in two different sacs inside\nits body.",
        ko: "This selfish, attention-seeking Pokémon stores\npoison and electricity in two different sacs inside\nits body."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Static Shock",
                fr: "Choc Statique",
                es: "Impacto Estático",
                it: "Shock Statico",
                de: "Statischer Schock",
                "pt-br": "Choque de Estática",
                "zh-tw": "劈哩啪啦",
                ja: "Static Shock",
                ko: "Static Shock"
            },
            damage: 30,
            cost: [
                "Lightning",
                "Colorless"
            ]
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
