import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/113",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/113",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/113",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/113",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/113",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/113",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/113"
    },
    name: {
        en: "Bellibolt",
        fr: "Ampibidou",
        es: "Bellibolt",
        it: "Bellibolt",
        de: "Wampitz",
        "pt-br": "Bellibolt",
        "zh-tw": "電肚蛙",
        pt: "Bellibolt"
    },
    suffix: "EX",
    illustrator: "REND",
    rarity: "Two Star",
    category: "Pokemon",
    hp: 160,
    types: ["Lightning"],
    dexId: [939],
    evolveFrom: {
        en: "Tadbulb",
        fr: "Têtampoule",
        es: "Tadbulb",
        it: "Tadbulb",
        de: "Blipp",
        "pt-br": "Tadbulb",
        "zh-tw": "光蚪仔",
        pt: "Tadbulb"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "High-Voltage Cannon",
                "fr": "Canon à haute tension",
                "es": "Cañón de alto voltaje",
                "it": "Cannone ad alta tensione",
                "de": "Hochspannungskanone",
                "pt-br": "Canhão de alta tensão",
                "zh-tw": "高壓砲"
            },
            damage: "70+",
            cost: ["Lightning", "Lightning"],
            effect: {
                en: "If you have 4 or more Lightning Energy in play, this attack does 70 more damage.",
                "fr": "Si vous avez 4 Énergies de Foudre ou plus en jeu, cette attaque inflige 70 dégâts supplémentaires.",
                "es": "Si tienes 4 o más Lightning Energy en juego, este ataque hace 70 daños más.",
                "it": "Se hai 4 o più Energie Lightning in gioco, questo attacco infligge 70 danni in più.",
                "de": "Wenn du 4 oder mehr Blitzenergie im Spiel hast, verursacht dieser Angriff 70 Schadenspunkte mehr.",
                "pt-br": "Se você tiver 4 ou mais Energia Elétrica em jogo, este ataque causa 70 de dano a mais.",
                "zh-tw": "如果你場上有 4 個或更多閃電能量，則此攻擊造成的傷害增加 70 點。"
            },
        },
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20",
        },
    ],
    retreat: 3,
};
export default card;
