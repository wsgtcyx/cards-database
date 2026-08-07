import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/056",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/056",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/056",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/056",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/056",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/056",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/056"
    },
    name: {
        en: "Tadbulb",
        "fr": "Têtampoule",
        "es": "Tadbulb",
        "it": "Tadbulb",
        "de": "Blipp",
        "pt-br": "Tadbulb",
        "zh-tw": "光蚪仔"
    },
    illustrator: "okayamatakatoshi",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Lightning"],
    description: {
        en: "It floats using the electricity stored in its body.\nWhen thunderclouds are around, Tadbulb will\nfloat higher off the ground.",
        "fr": "Il flotte grâce à l'électricité stockée dans son corps.\nQuand les nuages ​​d'orage sont là, Tadbulb va\nflotter plus haut au-dessus du sol.",
        "es": "Flota gracias a la electricidad almacenada en su cuerpo.\nCuando haya nubes de tormenta, Tadbulb\nflotar más alto del suelo.",
        "it": "Galleggia sfruttando l'elettricità immagazzinata nel suo corpo.\nQuando ci sono nuvole temporalesche, Tadbulb lo farà\ngalleggiare più in alto da terra.",
        "de": "Es schwimmt mit der in seinem Körper gespeicherten Elektrizität.\nWenn Gewitterwolken in der Nähe sind, wird Tadbulb es tun\nhöher über dem Boden schweben.",
        "pt-br": "Ele flutua usando a eletricidade armazenada em seu corpo.\nQuando as nuvens de trovoada estiverem por perto, Tadbulb irá\nflutuar mais alto do chão.",
        "zh-tw": "它利用體內儲存的電力漂浮。\n當雷雨雲出現時，Tadbulb 會\n漂浮得離地面更高。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Charge",
                "fr": "Chargeur",
                "es": "Carga",
                "it": "Sottocarica",
                "de": "Ladevorgang",
                "pt-br": "Carga",
                "zh-tw": "收費"
            },
            cost: ["Colorless"],
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                "fr": "Prenez une Énergie {L} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                "es": "Toma una Energía {L} de tu Zona de Energía y únela a este Pokémon.",
                "it": "Prendi un'Energia {L} dalla tua Zona Energetica e assegnala a questo Pokémon.",
                "de": "Nimm eine {L}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue uma Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{L}能量並將其附加到該神奇寶貝上。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1
};
export default card;
