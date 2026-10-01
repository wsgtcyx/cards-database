import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/101",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/101",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/101",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/101",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/101",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/101",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/101"
    },
    name: {
        en: "Bellibolt ex",
        fr: "Ampibidou-ex",
        es: "Bellibolt ex",
        it: "Bellibolt-ex",
        de: "Wampitz-ex",
        "pt-br": "Bellibolt ex",
        "zh-tw": "電肚蛙ex",
        ja: "ハラバリーex",
        ko: "찌리배리 ex"
    },
    suffix: "EX",
    illustrator: "PLANETA Yamashita",
    rarity: "Four Diamond",
    category: "Pokemon",
    dexId: [
        939
    ],
    hp: 160,
    types: [
        "Lightning"
    ],
    evolveFrom: {
        en: "Tadbulb",
        fr: "Têtampoule",
        es: "Tadbulb",
        it: "Tadbulb",
        de: "Blipp",
        "pt-br": "Tadbulb",
        "zh-tw": "光蚪仔",
        ja: "Tadbulb",
        ko: "Tadbulb"
    },
    stage: "Stage1",
    attacks: [
        {
            name: {
                en: "High-Voltage Cannon",
                fr: "Canon Haute-Tension",
                es: "Cañón de Alto Voltaje",
                it: "Cannone Folgorante",
                de: "Starkstromkanone",
                "pt-br": "Canhão de Alta Voltagem",
                "zh-tw": "高壓電炮",
                ja: "High-Voltage Cannon",
                ko: "High-Voltage Cannon"
            },
            damage: "70+",
            cost: [
                "Lightning",
                "Lightning"
            ],
            effect: {
                en: "If you have 4 or more {L} Energy in play, this attack does 70 more damage.",
                fr: "Si vous avez 4 Énergies {L} ou plus en jeu, cette attaque inflige 70 dégâts supplémentaires.",
                es: "Si tienes en juego 4 o más Energías {L}, este ataque hace 70 puntos de daño más.",
                it: "Se hai 4 o più Energie {L} in gioco, questo attacco infligge 70 danni in più.",
                de: "Wenn du 4 oder mehr {L}-Energien im Spiel hast, fügt diese Attacke 70 Schadenspunkte mehr zu.",
                "pt-br": "Se você tiver 4 ou mais Energias {L} em jogo, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "若自己的場上的{L}能量有4個以上,則增加70點傷害。",
                ja: "If you have 4 or more {L} Energy in play, this attack does 70 more damage.",
                ko: "If you have 4 or more {L} Energy in play, this attack does 70 more damage."
            }
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
