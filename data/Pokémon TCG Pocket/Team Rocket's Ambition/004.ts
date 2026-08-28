import { Card } from "../../../interfaces";
import Set from "../Team Rocket's Ambition";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4a/004",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4a/004",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4a/004",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4a/004",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4a/004",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4a/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4a/004"
    },
    name: {
        en: "Servine",
        fr: "Lianaja",
        es: "Servine",
        it: "Servine",
        de: "Efoserp",
        "pt-br": "Servine",
        "zh-tw": "青藤蛇",
        ko: "샤비",
        ja: "ジャノビー"
    },
    illustrator: "Kagemaru Himeno",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [496],
    evolveFrom: {
        en: "Snivy",
        fr: "Vipélierre",
        es: "Snivy",
        it: "Snivy",
        de: "Serpifeu",
        "pt-br": "Snivy",
        "zh-tw": "藤藤蛇",
        ko: "주리비얀",
        ja: "ツタージャ"
    },
    stage: "Stage1",
    description: {
        en: "Servine's one weakness is its inflated sense of pride. It takes a while for Servine to be able to cooperate with other Pokémon.",
        fr: "Son seul défaut est son orgueil démesuré. Il lui faut beaucoup de temps pour accepter de coopérer avec d’autres Pokémon.",
        es: "Su único defecto es el orgullo excesivo del que hace gala. Le lleva algo de tiempo aprender a cooperar con otros Pokémon.",
        it: "Il suo unico difetto è l'essere molto orgoglioso. Gli ci vuole tempo per imparare a collaborare con altri Pokémon.",
        de: "Sein übermäßiger Stolz ist sein einziger Makel. Es braucht Zeit, bis es mit anderen Pokémon zusammenarbeiten kann.",
        "pt-br": "A única fraqueza de Servine é seu orgulho inflado. Leva um tempo para conseguir cooperar com outros Pokémon.",
        "zh-tw": "小缺點是自尊心過高。需要不少時間才能與其他寶可夢合作。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Leaf Step",
                fr: "Enjambée de Feuillage",
                es: "Paso Hoja",
                it: "Passofoglia",
                de: "Blattschritt",
                "pt-br": "Passo de Folha",
                "zh-tw": "綠葉舞步"
            },
            damage: 30
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
