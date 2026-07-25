import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/041",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/041",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/041",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/041",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/041",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/041"
    },
    name: {
        en: "Tadbulb",
        fr: "Têtampoule",
        es: "Tadbulb",
        it: "Tadbulb",
        de: "Blipp",
        "pt-br": "Tadbulb",
        "zh-tw": "光蚪仔",
        pt: "Tadbulb"
    },
    illustrator: "Saya Tsuruta",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [938],
    description: {
        en: "It floats using the electricity stored in its body. When thunderclouds are around, Tadbulb will float higher off the ground.",
        "fr": "Il flotte grâce à l’électricité stockée dans son corps. Lorsque des nuages ​​​​d'orage sont présents, Têtampoule flottera plus haut au-dessus du sol.",
        "es": "Flota gracias a la electricidad almacenada en su cuerpo. Cuando hay nubes de tormenta, Tadbulb flotará más alto del suelo.",
        "it": "Galleggia sfruttando l'elettricità immagazzinata nel suo corpo. Quando ci sono nuvole temporalesche, Tadbulb galleggerà più in alto da terra.",
        "de": "Es schwimmt mit der in seinem Körper gespeicherten Elektrizität. Wenn Gewitterwolken in der Nähe sind, schwebt Blipp höher über dem Boden.",
        "pt-br": "Ele flutua usando a eletricidade armazenada em seu corpo. Quando há nuvens de trovoada, o Tadbulb flutuará mais alto do solo.",
        "zh-tw": "它利用體內儲存的電力漂浮。當雷雨雲出現時，光蚪仔 會漂浮在離地面更高的地方。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Electro Ball",
                fr: "Boule Élek",
                es: "Bola Voltio",
                it: "Energisfera",
                de: "Elektroball",
                "pt-br": "Bola Eletro",
                "zh-tw": "電球",
                pt: "Bola Elétrica"
            },
            damage: 20,
            cost: ["Lightning"],
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
