import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/018"
    },
    name: {
        en: "Sinistcha",
        fr: "Théffroyable",
        es: "Sinistcha",
        it: "Sinistcha",
        de: "Fatalitcha",
        "pt-br": "Sinistcha",
        "zh-tw": "來悲粗茶",
        ko: "그우린차",
        ja: "ヤバソチャ"
    },
    illustrator: "Tomokazu Komiya",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [1013],
    evolveFrom: {
        en: "Poltchageist",
        fr: "Poltchageist",
        es: "Poltchageist",
        it: "Poltchageist",
        de: "Mortcha",
        "pt-br": "Poltchageist",
        "zh-tw": "斯魔茶",
        ko: "차데스",
        ja: "チャデス"
    },
    stage: "Stage1",
    description: {
        en: "It prefers cool, dark places, such as the back of a shelf or the space beneath a home's floorboards. It wanders in search of prey after sunset."
    },
    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                en: "Scald",
                fr: "Ébullition",
                es: "Escaldar",
                it: "Idrovampata",
                de: "Siedewasser",
                "zh-tw": "熱水"
            },
            effect: {
                en: "Your opponent's Active Pokémon is now Burned.",
                fr: "Le Pokémon Actif de votre adversaire est désormais Brûlé.",
                es: "El Pokémon Activo de tu rival ahora está Quemado.",
                it: "Il Pokémon attivo del tuo avversario è ora bruciato.",
                de: "Das aktive Pokémon deines Gegners ist jetzt verbrannt.",
                "pt-br": "O Pokémon Ativo do seu oponente agora está Queimado.",
                "zh-tw": "你對手的活躍寶可夢現在被燒毀了。"
            },
            damage: 40
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
