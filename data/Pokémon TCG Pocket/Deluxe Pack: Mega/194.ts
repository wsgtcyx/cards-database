import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/194",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/194",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/194",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/194",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/194",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/194",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/194"
    },
    name: {
        en: "Swanna ex",
        fr: "Lakmécygne-ex",
        es: "Swanna ex",
        it: "Swanna-ex",
        de: "Swaroness-ex",
        "pt-br": "Swanna ex",
        "zh-tw": "舞天鵝ex",
        ja: "スワンナex",
        ko: "스완나 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 150,
    types: [
        "Colorless"
    ],
    dexId: [
        581
    ],
    evolveFrom: {
        en: "Ducklett",
        fr: "Couaneton",
        es: "Ducklett",
        it: "Ducklett",
        de: "Piccolente",
        "pt-br": "Ducklett",
        "zh-tw": "鴨寶寶",
        ja: "Ducklett",
        ko: "Ducklett"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: [
                "Colorless",
                "Colorless",
                "Colorless"
            ],
            name: {
                en: "Jet Wing",
                fr: "Aile Jet",
                es: "Ala Propulsión",
                "pt-br": "Asa a Jato",
                "zh-tw": "噴射之翼",
                it: "Ala Jet",
                de: "Jet-Flügel",
                ja: "Jet Wing",
                ko: "Jet Wing"
            },
            effect: {
                en: "During your next turn, this Pokémon can't attack.",
                fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
                es: "Durante tu próximo turno, este Pokémon no puede atacar.",
                it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
                de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
                "pt-br": "Durante o seu próximo turno, este Pokémon não poderá atacar.",
                "zh-tw": "在下個自己的回合,這隻寶可夢無法使用招式。",
                ja: "During your next turn, this Pokémon can't attack.",
                ko: "During your next turn, this Pokémon can't attack."
            },
            damage: 140
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
