import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/415",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/415",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/415",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/415",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/415",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/415",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/415"
    },
    name: {
        en: "Mega Gyarados ex",
        fr: "Méga-Léviator-ex",
        es: "Mega-Gyarados ex",
        it: "Mega Gyarados-ex",
        de: "Mega-Garados-ex",
        "pt-br": "Mega Gyarados ex",
        "zh-tw": "超級暴鯉龍ex",
        ja: "メガギャラドスex",
        ko: "메가갸라도스 ex"
    },
    illustrator: "5ban Graphics",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 210,
    types: [
        "Water"
    ],
    evolveFrom: {
        en: "Magikarp",
        fr: "Magicarpe",
        es: "Magikarp",
        it: "Magikarp",
        de: "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王",
        ja: "Magikarp",
        ko: "Magikarp"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Mega Blaster",
                fr: "Méga Maelström",
                es: "Megachorro",
                it: "Megaesplosione",
                de: "Mega-Blaster",
                "pt-br": "Megadetonador",
                "zh-tw": "超級爆破",
                ja: "Mega Blaster",
                ko: "Mega Blaster"
            },
            damage: 140,
            cost: [
                "Water",
                "Water",
                "Water",
                "Colorless"
            ],
            effect: {
                en: "Discard the top 3 cards of your opponent's deck.",
                fr: "Défaussez les 3 premières cartes du dessus du deck de votre adversaire.",
                es: "Descarta las 3 primeras cartas de la baraja de tu rival.",
                it: "Scarta le prime 3 carte del mazzo dell'avversario.",
                de: "Lege die obersten 3 Karten vom Deck deines Gegners ab.",
                "pt-br": "Descarte as 3 cartas de cima do baralho do seu oponente.",
                "zh-tw": "將對手的牌庫上方3張卡丟棄。",
                ja: "Discard the top 3 cards of your opponent's deck.",
                ko: "Discard the top 3 cards of your opponent's deck."
            }
        }
    ],
    weaknesses: [
        {
            type: "Lightning",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
