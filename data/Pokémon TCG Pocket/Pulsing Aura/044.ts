import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/044",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/044",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/044",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/044",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/044",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/044"
    },
    name: {
        en: "Gorebyss",
        fr: "Rosabyss",
        es: "Gorebyss",
        it: "Gorebyss",
        de: "Saganabyss",
        "pt-br": "Gorebyss",
        "zh-tw": "櫻花魚",
        ko: "분홍장이",
        ja: "サクラビス"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Water"],
    dexId: [368],
    evolveFrom: {
        en: "Clamperl",
        fr: "Coquiperl",
        es: "Clamperl",
        it: "Clamperl",
        de: "Perlu",
        "pt-br": "Clamperl",
        "zh-tw": "珍珠貝",
        ko: "진주몽",
        ja: "パールル"
    },
    stage: "Stage1",
    description: {
        en: "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon.",
        fr: "Il se nourrit en aspirant les fluides corporels\nde ses proies. Le reste tombe au fond de la mer,\nnourrissant ainsi d’autres Pokémon.",
        es: "Absorbe los fluidos corporales de su presa. Los\nrestos que deja caen hasta el lecho marino y se\nconvierten en alimento para otros Pokémon.",
        it: "Succhia i fluidi corporei delle sue prede. La\ncarne che ne rimane sprofonda sui fondali marini\ne diventa prezioso nutrimento per altri Pokémon.",
        de: "Es saugt die Körpersäfte seiner Beute aus.\nWas übrig bleibt, sinkt zu Boden und wird\nvon anderen Pokémon verspeist.",
        "pt-br": "Ele suga os fluidos corporais de suas presas. Os restos de carne vão para o fundo do mar, onde se transformam em alimento para outros Pokémon.",
        "zh-tw": "會吸取獵物的體液。\n剩下的肉會沉入海底，\n成為其他寶可夢的食物。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Aqua Edge",
                fr: "Aqua-Dague",
                es: "Filo Agua",
                it: "Acquataglio",
                de: "Aquaschneide",
                "pt-br": "Aqua Gume",
                "zh-tw": "水之刀鋒"
            },
            damage: 40
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
