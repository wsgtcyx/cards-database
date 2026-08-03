import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/038",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/038",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/038",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/038",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/038",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/038"
    },
    name: {
        en: "Vanillish",
        "fr": "Vanillé",
        "es": "vainilla",
        "it": "Vanillish",
        "de": "Vanillin",
        "pt-br": "Vanilizado",
        "zh-tw": "香草味"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Water"],
    evolveFrom: {
        en: "Vanillite",
        "fr": "Vanillite",
        "es": "vainillita",
        "it": "Vanillite",
        "de": "Vanillit",
        "pt-br": "Vanilita",
        "zh-tw": "香蘭石"
    },
    description: {
        en: "It blasts enemies with cold air reaching −148\ndegrees Fahrenheit, freezing them solid. But it\nspares their lives afterward—it's a kind Pokémon.",
        "fr": "Il souffle sur les ennemis avec de l'air froid atteignant -148.\ndegrés Fahrenheit, les gelant solidement. Mais ça\népargne leur vie par la suite – c'est un gentil Pokémon.",
        "es": "Lanza a los enemigos aire frío que alcanza -148\ngrados Fahrenheit, congelándolos. pero\nLes perdona la vida después: es un Pokémon amable.",
        "it": "Colpisce i nemici con aria fredda che raggiunge -148\ngradi Fahrenheit, congelandoli allo stato solido. Ma quello\nrisparmia loro la vita: è un Pokémon gentile.",
        "de": "Es beschießt Feinde mit kalter Luft und erreicht einen Wert von −148\nGrad Fahrenheit und gefriert sie fest. Aber es\nverschont ihnen danach das Leben – es ist ein freundliches Pokémon.",
        "pt-br": "Ele atinge os inimigos com ar frio atingindo -148\ngraus Fahrenheit, congelando-os. Mas isso\npoupa suas vidas depois - é um Pokémon gentil.",
        "zh-tw": "它用達到-148的冷空氣轟炸敵人\n華氏度，將它們凍結成固體。但它\n之後饒了他們一命——這是一隻善良的神奇寶貝。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Frost Breath",
                "fr": "Souffle Glacé",
                "es": "Vaho Gélido",
                "it": "Alitogelido",
                "de": "Eisesodem",
                "pt-br": "Respiração de Gelo",
                "zh-tw": "冰霜呼吸"
            },
            damage: 40,
            cost: ["Water"]
        }],
    weaknesses: [{
            type: "Metal",
            value: "+20"
        }],
    retreat: 1
};
export default card;
