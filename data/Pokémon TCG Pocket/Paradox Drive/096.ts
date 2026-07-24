import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/096",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/096"
    },
    name: {
        en: "Tadbulb",
        fr: "Têtampoule",
        es: "Tadbulb",
        it: "Tadbulb",
        de: "Blipp",
        "pt-br": "Tadbulb",
        "zh-tw": "光蚪仔",
        ko: "빈나두",
        ja: "ズピカ"
    },
    illustrator: "Taiga Kasai",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 50,
    types: ["Lightning"],
    dexId: [938],
    stage: "Basic",
    description: {
        en: "It floats using the electricity stored in its body. When thunderclouds are around, Tadbulb will float higher off the ground.",
        fr: "Il flotte grâce à l’électricité stockée dans son corps. Lorsque des nuages ​​​​d'orage sont présents, Têtampoule flottera plus haut au-dessus du sol.",
        es: "Flota gracias a la electricidad almacenada en su cuerpo. Cuando hay nubes de tormenta, Tadbulb flotará más alto del suelo.",
        it: "Galleggia sfruttando l'elettricità immagazzinata nel suo corpo. Quando ci sono nuvole temporalesche, Tadbulb galleggerà più in alto da terra.",
        de: "Es schwimmt mit der in seinem Körper gespeicherten Elektrizität. Wenn Gewitterwolken in der Nähe sind, schwebt Blipp höher über dem Boden.",
        "pt-br": "Ele flutua usando a eletricidade armazenada em seu corpo. Quando há nuvens de trovoada, o Tadbulb flutuará mais alto do solo.",
        "zh-tw": "它利用體內儲存的電力漂浮。當雷雨雲出現時，光蚪仔 會漂浮在離地面更高的地方。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Charge",
                fr: "Chargeur",
                es: "Carga",
                it: "Sottocarica",
                de: "Ladevorgang",
                "pt-br": "Carga",
                "zh-tw": "充電"
            },
            effect: {
                en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
                fr: "Prenez une Énergie {L} de votre Zone d'Énergie et attachez-la à ce Pokémon.",
                es: "Toma una Energía {L} de tu Zona de Energía y únela a este Pokémon.",
                it: "Prendi un'Energia {L} dalla tua Zona Energetica e assegnala a questo Pokémon.",
                de: "Nimm eine {L}-Energie aus deiner Energiezone und lege sie an dieses Pokémon an.",
                "pt-br": "Pegue uma Energia {L} da sua Zona de Energia e ligue-a a este Pokémon.",
                "zh-tw": "從你的能量區取出一個{L}能量並將其附加到該寶可夢上。"
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
