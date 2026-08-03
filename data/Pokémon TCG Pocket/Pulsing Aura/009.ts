import { Card } from "../../../interfaces";
import Set from "../Pulsing Aura";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3/009",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3/009",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3/009",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3/009",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3/009",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3/009",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3/009"
    },
    name: {
        en: "Surskit",
        fr: "Arakdo",
        es: "Surskit",
        it: "Surskit",
        de: "Gehweiher",
        "pt-br": "Surskit",
        "zh-tw": "溜溜糖球",
        ko: "비구술",
        ja: "アメタマ"
    },
    illustrator: "Masakazu Fukuda",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 50,
    types: ["Grass"],
    dexId: [283],
    stage: "Basic",
    description: {
        en: "It secretes a thick, sweet-scented syrup from the tip of its head. It lives on weed-choked ponds.",
        fr: "Il sécrète un sirop épais et parfumé du bout de sa tête. Il vit dans les étangs obstrués par les mauvaises herbes.",
        es: "Segrega un jarabe espeso y de aroma dulce desde la punta de su cabeza. Vive en estanques llenos de maleza.",
        it: "Secerne uno sciroppo denso e profumato dalla punta della testa. Vive in stagni invasi dalle erbacce.",
        de: "Aus der Spitze seines Kopfes sondert es einen dicken, süß duftenden Sirup ab. Es lebt in Teichen, die von Unkraut überwuchert sind.",
        "pt-br": "Ele secreta um xarope espesso e de aroma adocicado na ponta da cabeça. Vive em lagos cheios de ervas daninhas.",
        "zh-tw": "它的頭尖會分泌出濃稠的、帶有甜味的糖漿。它生活在雜草叢生的池塘裡。"
    },
    attacks: [
        {
            cost: ["Colorless"],
            name: {
                en: "Firefighting",
                fr: "Anti-Flammes",
                es: "Antiincendios",
                it: "Estinzione",
                de: "Feuerwehr",
                "pt-br": "Apagar Incêndios",
                "zh-tw": "消火"
            },
            effect: {
                en: "Discard a {R} Energy from your opponent's Active Pokémon.",
                fr: "Défaussez une Énergie {R} du Pokémon Actif de votre adversaire.",
                es: "Descarta una Energía {R} del Pokémon Activo de tu rival.",
                it: "Scarta un'Energia {R} dal Pokémon attivo del tuo avversario.",
                de: "Wirf eine {R}-Energie vom Aktiven Pokémon deines Gegners ab.",
                "pt-br": "Descarte uma Energia {R} do Pokémon Ativo do seu oponente.",
                "zh-tw": "丟棄對手的活躍寶可夢的 {R} 能量。"
            },
            damage: 10
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
