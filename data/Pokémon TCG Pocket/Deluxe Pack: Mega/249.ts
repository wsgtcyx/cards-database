import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/249",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/249",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/249",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/249",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/249",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/249",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/249"
    },
    name: {
        en: "Petilil",
        fr: "Chlorobule",
        es: "Petilil",
        it: "Petilil",
        de: "Lilminip",
        "pt-br": "Petilil",
        "zh-tw": "百合根娃娃",
        ja: "チュリネ",
        ko: "치릴리"
    },
    illustrator: "Naoki Saito",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: [
        "Grass"
    ],
    description: {
        en: "If the leaves on its head are pruned with\nregularity, this Pokémon can be grown into\na fine plump shape.",
        fr: "Si on taille ses feuilles de temps à autre, cela lui donne une forme parfaitement ronde et harmonieuse.",
        es: "Adquiere un aspecto esplendoroso cuando se le recortan las hojas de la cabeza con cierta asiduidad.",
        it: "Le foglie che ha sul capo vanno spuntate di tanto in tanto per permettergli di crescere florido e bello rotondo.",
        de: "Wenn man ab und zu seine Blätter schneidet, wächst sein Körper rund und prächtig heran.",
        "pt-br": "Se as folhas em sua cabeça forem podadas regularmente, este Pokémon pode crescer com um elegante formato rechonchudo.",
        "zh-tw": "如果偶爾修剪葉子，就會長成圓鼓鼓很華麗的樣子。",
        ja: "If the leaves on its head are pruned with\nregularity, this Pokémon can be grown into\na fine plump shape.",
        ko: "If the leaves on its head are pruned with\nregularity, this Pokémon can be grown into\na fine plump shape."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Flop",
                fr: "Flop",
                es: "Vuelta",
                it: "Tonfo",
                de: "Plumps",
                "pt-br": "Baque",
                "zh-tw": "活蹦亂跳",
                ja: "Flop",
                ko: "Flop"
            },
            damage: 10,
            cost: [
                "Colorless"
            ]
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
