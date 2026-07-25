import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/101",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/101"
    },
    name: {
        en: "Mega Gyarados ex",
        fr: "Méga-Léviator-ex",
        es: "Mega-Gyarados ex",
        it: "Mega Gyarados-ex",
        de: "Mega-Garados-ex",
        "pt-br": "Mega Gyarados ex",
        "zh-tw": "超級暴鯉龍ex",
        ko: "메가갸라도스 ex",
        ja: "メガギャラドスex"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 210,
    types: ["Water"],
    dexId: [130],
    evolveFrom: {
        en: "Magikarp",
        fr: "Magicarpe",
        es: "Magikarp",
        it: "Magikarp",
        de: "Karpador",
        "pt-br": "Magikarp",
        "zh-tw": "鯉魚王",
        ko: "잉어킹",
        ja: "コイキング"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Water", "Water", "Water", "Colorless"],
            name: {
                en: "Mega Blaster",
                fr: "Méga Maelström",
                es: "Megachorro",
                it: "Megaesplosione",
                de: "Mega-Blaster",
                "pt-br": "Megadetonador",
                "zh-tw": "超級爆破"
            },
            effect: {
                en: "Discard the top 3 cards of your opponent's deck.",
                fr: "Défaussez les 3 premières cartes du deck de votre adversaire.",
                es: "Descarta las 3 primeras cartas del mazo de tu oponente.",
                it: "Scarta le prime 3 carte del mazzo del tuo avversario.",
                de: "Wirf die obersten 3 Karten des Decks deines Gegners ab.",
                "pt-br": "Descarte as 3 primeiras cartas do baralho do seu oponente.",
                "zh-tw": "丟棄對手牌組頂的 3 張牌。"
            },
            damage: 140
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
