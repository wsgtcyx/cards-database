import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/100",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/100",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/100",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/100",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/100",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/100",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/100"
    },
    name: {
        en: "Tadbulb",
        fr: "Têtampoule",
        es: "Tadbulb",
        it: "Tadbulb",
        de: "Blipp",
        "pt-br": "Tadbulb",
        "zh-tw": "光蚪仔",
        ja: "ズピカ",
        ko: "빈나두"
    },
    illustrator: "okayamatakatoshi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: [
        "Lightning"
    ],
    description: {
        en: "It floats using the electricity stored in its body.\nWhen thunderclouds are around, Tadbulb will\nfloat higher off the ground.",
        fr: "Il flotte dans les airs grâce à l'électricité emmagasinée dans son corps. Les jours d'orage, il lévite un peu plus haut qu'à l'accoutumée.",
        es: "Flota en el aire gracias a la electricidad almacenada en su cuerpo. Con nubarrones de tormenta, lo hace a mayor altura de lo habitual.",
        it: "Fluttua grazie all'elettricità immagazzinata nel suo corpo. Quando in cielo compaiono nubi temporalesche fluttua più in alto del solito.",
        de: "Durch den in seinem Körper gespeicherten Strom kann es schweben. Bei Gewittern schwebt es höher über dem Boden als gewöhnlich.",
        "pt-br": "Flutua usando a eletricidade armazenada em seu corpo. Quando nuvens de tempestade sobranceiam os céus, Tadbulb flutua ainda mais alto.",
        "zh-tw": "會用蓄積在體內的電力浮在空中。出現雷雲時則能浮得比平時還要高。",
        ja: "It floats using the electricity stored in its body.\nWhen thunderclouds are around, Tadbulb will\nfloat higher off the ground.",
        ko: "It floats using the electricity stored in its body.\nWhen thunderclouds are around, Tadbulb will\nfloat higher off the ground."
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Charge",
                fr: "Chargeur",
                es: "Carga",
                it: "Sottocarica",
                de: "Ladevorgang",
                "pt-br": "Carga",
                "zh-tw": "充電",
                ja: "Charge",
                ko: "Charge"
            },
            cost: [
                "Colorless"
            ],
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {L} de votre zone Énergie et attachez-la à ce Pokémon.",
                es: "Une 1 Energía {L} de tu área de Energía a este Pokémon.",
                it: "Prendi un'Energia {L} dalla tua Zona Energia e assegnala a questo Pokémon.",
                de: "Lege 1 {L}-Energie aus deinem Energiebereich an dieses Pokémon an.",
                "pt-br": "Pegue 1 Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從自己的能量區抽出1個{L}能量,附於這隻寶可夢身上。",
                ja: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                ko: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon."
            }
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
