import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2b/021",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2b/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2b/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2b/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2b/021"
    },
    name: {
        en: "Phione",
        fr: "Phione",
        es: "Phione",
        it: "Phione",
        de: "Phione",
        "pt-br": "Phione",
        "zh-tw": "霏歐納",
        ko: "피오네",
        ja: "フィオネ"
    },
    illustrator: "kawayoo",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 70,
    types: ["Water"],
    dexId: [489],
    stage: "Basic",
    description: {
        en: "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
        fr: "Ce Pokémon des mers chaudes revient toujours à son lieu\nde naissance, peu importe la distance.",
        es: "Va a la deriva por mares cálidos. Siempre vuelve a donde\nnació, por mucho que se haya alejado.",
        it: "Si sposta nei mari caldi. Torna sempre dove è nato, anche se\nsi trova molto lontano.",
        de: "Lässt sich in warmen Meeren treiben, kehrt aber immer\nan den Platz seiner Geburt zurück.",
        "pt-br": "Ele flutua em mares quentes. Ele sempre retorna ao lugar onde nasceu, não importa o quão longe tenha ido.",
        "zh-tw": "它在溫暖的海洋中漂流。無論漂流多遠，它總會回到它誕生的地方。"
    },
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Aqua Turbo",
                fr: "Aqua Turbo",
                es: "Turbina de Agua",
                it: "Idroturbina",
                de: "Wasser-Turbo",
                "pt-br": "Aqua Turbo",
                "zh-tw": "水流渦輪"
            },
            effect: {
                en: "Take a {W} Energy from your Energy Zone and attach it to 1 of your Benched {W} Pokémon.",
                fr: "Prenez une Énergie {W} de votre Zone d'Énergie et attachez-la à l'un de vos Pokémon {W} de Banc.",
                es: "Toma una Energía {W} de tu Zona de Energía y únela a 1 de tus Pokémon {W} en Banca.",
                it: "Prendi un'Energia {W} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon {W} in panchina.",
                de: "Nimm eine {W}-Energie aus deiner Energiezone und lege sie an eines deiner {W}-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue uma Energia {W} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon {W} no Banco.",
                "zh-tw": "從你的能量區取出一個 {W} 能量並將其附加到你後備的 1 只 {W} 寶可夢上。"
            },
            damage: 10
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
