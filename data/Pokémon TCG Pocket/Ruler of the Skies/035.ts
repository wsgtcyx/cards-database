import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/035",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/035",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/035",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/035",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/035",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/035",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/035"
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
    rarity: "Four Diamond",
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
                en: "Turbo Shark",
                fr: "Turbo Requin",
                es: "Turboescualo",
                "pt-br": "Turbarão",
                "zh-tw": "增能鯊擊"
            },
            effect: {
                en: "Take a {W} Energy from your Energy Zone and attach it to 1 of your Benched {W} Pokémon.",
                fr: "Prenez une Énergie {W} de votre zone Énergie et attachez-la à l'un de vos Pokémon {W} de Banc.",
                es: "Une 1 Energía {W} de tu área de Energía a 1 de tus Pokémon {W} en Banca.",
                it: "Prendi un'Energia {W} dalla tua Zona Energetica e assegnala a 1 dei tuoi Pokémon {W} in panchina.",
                de: "Nimm eine {W}-Energie aus deiner Energiezone und lege sie an eines deiner {W}-Pokémon auf deiner Bank an.",
                "pt-br": "Pegue 1 Energia {W} da sua Zona de Energia e ligue-a a 1 dos seus Pokémon {W} no Banco.",
                "zh-tw": "從自己的能量區抽出1個{W}能量,附於備戰區的{W}寶可夢身上。"
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
