import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/057",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/057",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/057",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/057",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/057",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/057",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/057"
    },
    name: {
        en: "Chinchou",
        fr: "Loupio",
        es: "Chinchou",
        it: "Chinchou",
        de: "Lampi",
        "pt-br": "Chinchou",
        "zh-tw": "燈籠魚",
        ko: "초라기",
        ja: "チョンチー"
    },
    illustrator: "Yukiko Baba",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Lightning"],
    dexId: [170],
    stage: "Basic",
    description: {
        en: "It shoots positively and negatively charged electricity from the tips of its two antennae and stuns its opponents.",
        fr: "Il projette de l'électricité chargée positivement et négativement depuis le bout de ses deux antennes et étourdit ses adversaires.",
        es: "Dispara electricidad cargada positiva y negativamente desde las puntas de sus dos antenas y aturde a sus oponentes.",
        it: "Spara elettricità con carica positiva e negativa dalle punte delle sue due antenne e stordisce i suoi avversari.",
        de: "Es schießt positiv und negativ geladene Elektrizität aus den Spitzen seiner beiden Antennen und betäubt seine Gegner.",
        "pt-br": "Ele dispara eletricidade com carga positiva e negativa das pontas de suas duas antenas e atordoa seus oponentes.",
        "zh-tw": "它從兩根觸角的尖端發射正電和負電，擊暈對手。"
    },
    attacks: [
        {
            cost: ["Lightning"],
            name: {
                en: "Razor Fin",
                fr: "Aileron-Rasoir",
                es: "Aleta Afilada",
                it: "Pinnalama",
                de: "Rasierflosse",
                "pt-br": "Barbatana Cortante",
                "zh-tw": "鰭快刀"
            },
            damage: 20
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
