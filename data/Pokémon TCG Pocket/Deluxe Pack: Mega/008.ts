import { Card } from "../../../interfaces";
import Set from "../Deluxe Pack: Mega";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4b/008",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4b/008",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4b/008",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4b/008",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4b/008",
        "pt-br": "https://game.pokemontcgpocket.app/pt-br/tcgp/B4b/008",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4b/008"
    },
    name: {
        en: "Mega Pinsir ex",
        fr: "Méga-Scarabrute-ex",
        es: "Mega-Pinsir ex",
        it: "Mega Pinsir-ex",
        de: "Mega-Pinsir-ex",
        "pt-br": "Mega Pinsir ex",
        "zh-tw": "超級凱羅斯ex",
        ja: "メガカイロスex",
        ko: "메가쁘사이저 ex"
    },
    illustrator: "PLANETA CG Works",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 170,
    types: [
        "Grass"
    ],
    stage: "Basic",
    suffix: "EX",
    attacks: [
        {
            name: {
                en: "Critical Scissors",
                fr: "Ciseaux Acérés",
                es: "Tijeretazo Crítico",
                it: "Sforbiciata Decisiva",
                de: "Kritische Scheren",
                "pt-br": "Tesouras Críticas",
                "zh-tw": "會心一剪",
                ja: "Critical Scissors",
                ko: "Critical Scissors"
            },
            damage: "80+",
            cost: [
                "Grass",
                "Grass",
                "Colorless"
            ],
            effect: {
                en: "Flip a coin. If heads, this attack does 70 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 70 Schadenspunkte mehr zu.",
                "pt-br": "Jogue uma moeda. Se sair cara, este ataque causará 70 pontos de dano a mais.",
                "zh-tw": "擲1次硬幣若為正面,則增加70點傷害。",
                ja: "Flip a coin. If heads, this attack does 70 more damage.",
                ko: "Flip a coin. If heads, this attack does 70 more damage."
            }
        }
    ],
    weaknesses: [
        {
            type: "Fire",
            value: "+20"
        }
    ],
    retreat: 2
};

export default card;
