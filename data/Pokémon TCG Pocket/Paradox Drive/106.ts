import { Card } from "../../../interfaces";
import Set from "../Paradox Drive";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3a/106",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3a/106",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3a/106",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3a/106",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3a/106",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3a/106"
    },
    name: {
        en: "Bellibolt ex",
        fr: "Ampibidou-ex",
        es: "Bellibolt ex",
        it: "Bellibolt-ex",
        de: "Wampitz-ex",
        "pt-br": "Bellibolt ex",
        "zh-tw": "電肚蛙ex",
        ko: "찌리배리 ex",
        ja: "ハラバリーex"
    },
    illustrator: "PLANETA Yamashita",
    rarity: "Two Shiny",
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
        ko: "빈나두",
        ja: "ズピカ"
    },
    stage: "Stage1",
    attacks: [
        {
            cost: ["Lightning", "Lightning"],
            name: {
                en: "High-Voltage Cannon",
                fr: "Canon Haute-Tension",
                es: "Cañón de Alto Voltaje",
                it: "Cannone Folgorante",
                de: "Starkstromkanone",
                "pt-br": "Canhão de Alta Voltagem",
                "zh-tw": "高壓電炮"
            },
            effect: {
                en: "If you have 4 or more {L} Energy in play, this attack does 70 more damage.",
                fr: "Si vous avez 4 Énergie {L} ou plus en jeu, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si tienes 4 o más Energías {L} en juego, este ataque hace 70 daños más.",
                it: "Se hai 4 o più {L} Energia in gioco, questo attacco infligge 70 danni in più.",
                de: "Wenn du 4 oder mehr {L}-Energie im Spiel hast, fügt dieser Angriff 70 Schadenspunkte mehr zu.",
                "pt-br": "Se você tiver 4 ou mais {L} Energias em jogo, este ataque causará 70 de dano a mais.",
                "zh-tw": "如果你場上有 4 或更多 {L} 能量，則此攻擊會造成 70 點以上傷害。"
            },
            damage: "70+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 3
};

export default card;
