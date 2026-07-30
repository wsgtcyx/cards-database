import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/182"
    },
    name: {
        en: "Mega Sharpedo ex",
        fr: "Méga-Sharpedo-ex",
        es: "Mega-Sharpedo ex",
        it: "Mega Sharpedo-ex",
        de: "Mega-Tohaido-ex",
        "pt-br": "Mega Sharpedo ex",
        "zh-tw": "超級巨牙鯊ex",
        ko: "메가샤크니아 ex",
        ja: "メガサメハダーex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 190,
    types: ["Water"],
    dexId: [319],
    evolveFrom: {
        en: "Carvanha",
        fr: "Carvanha",
        es: "Carvanha",
        it: "Carvanha",
        de: "Kanivanha",
        "pt-br": "Carvanha",
        "zh-tw": "利牙魚",
        ko: "샤프니아",
        ja: "キバニア"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Water"],
            name: {
                en: "Turbo Shark"
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
            damage: 70
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 0
};

export default card;
