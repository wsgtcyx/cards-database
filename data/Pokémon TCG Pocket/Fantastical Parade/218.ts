import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/218",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/218",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/218",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/218",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/218",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/218",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/218"
    },
    name: {
        en: "Hitmonlee",
        "fr": "Kicklee",
        "es": "Hitmonlee",
        "it": "Hitmonlee",
        "de": "Kicklee",
        "pt-br": "Hitmonlee",
        "zh-tw": "飛腿郎"
    },
    illustrator: "Shigenori Negishi",
    rarity: "One Shiny",
    category: "Pokemon",
    hp: 80,
    types: ["Fighting"],
    description: {
        en: "This amazing Pokémon has an awesome sense of\nbalance. It can kick in succession from any position.",
        "fr": "Cet étonnant Pokémon a un formidable sens de\néquilibre. Il peut donner des coups de pied successivement depuis n'importe quelle position.",
        "es": "Este increíble Pokémon tiene un increíble sentido de\nequilibrio. Puede patear sucesivamente desde cualquier posición.",
        "it": "Questo fantastico Pokémon ha un fantastico senso di\nequilibrio. Può calciare in successione da qualsiasi posizione.",
        "de": "Dieses erstaunliche Pokémon hat ein unglaubliches Gespür für\nGleichgewicht. Es kann aus jeder Position nacheinander treten.",
        "pt-br": "Este incrível Pokémon tem um incrível senso de\nequilíbrio. Ele pode chutar sucessivamente de qualquer posição.",
        "zh-tw": "這個神奇的神奇寶貝有一種很棒的感覺\n平衡。它可以從任何位置連續踢球。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stretch Kick",
                "fr": "Allonge",
                "es": "Patada Amplia",
                "it": "Calciallungo",
                "de": "Streckkick",
                "pt-br": "Chute Esticado",
                "zh-tw": "伸展踢"
            },
            cost: ["Fighting"],
            effect: {
                en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon.",
                "fr": "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
                "es": "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
                "it": "Questo attacco infligge 30 danni a 1 dei Pokémon nella panchina del tuo avversario.",
                "de": "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
                "pt-br": "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
                "zh-tw": "這次攻擊對對手後備隊的 1 只寶可夢造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Psychic",
            value: "+20"
        }],
    retreat: 1
};
export default card;
