import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/007",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/007",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/007",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/007",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/007",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/007"
    },
    name: {
        en: "Cacturne",
        "fr": "Cactus",
        "es": "cacturne",
        "it": "Cacturne",
        "de": "Kakturne",
        "pt-br": "Cacturne",
        "zh-tw": "仙人掌"
    },
    illustrator: "Suwama Chiaki",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 120,
    types: ["Grass"],
    evolveFrom: {
        en: "Cacnea",
        "fr": "Cacnéie",
        "es": "cacnea",
        "it": "Cacnea",
        "de": "Cacnea",
        "pt-br": "Cacneia",
        "zh-tw": "卡內亞"
    },
    description: {
        en: "It lives in deserts. It becomes active at night\nwhen it hunts for prey exhausted from the\ndesert's heat.",
        "fr": "Il vit dans les déserts. Il devient actif la nuit\nquand il chasse des proies épuisées par le\nla chaleur du désert.",
        "es": "Vive en los desiertos. Se vuelve activo por la noche.\ncuando caza presas exhausto por el\nEl calor del desierto.",
        "it": "Vive nei deserti. Diventa attivo di notte\nquando va a caccia di prede stremato dal\nil calore del deserto.",
        "de": "Es lebt in Wüsten. Es wird nachts aktiv\nwenn es erschöpft nach Beute jagt\nWüstenhitze.",
        "pt-br": "Vive em desertos. Torna-se ativo à noite\nquando caça uma presa exausto do\ncalor do deserto.",
        "zh-tw": "它生活在沙漠中。它在晚上變得活躍\n當它捕獵精疲力竭的獵物時\n沙漠的炎熱。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Spike Rend",
                "fr": "Pointe déchirée",
                "es": "Desgarro de pico",
                "it": "Spike Rend",
                "de": "Spike Rend",
                "pt-br": "Pico rasgado",
                "zh-tw": "斯派克·雷德"
            },
            damage: 60,
            cost: ["Grass", "Grass", "Colorless"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
                "es": "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 60 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 60 danni in più.",
                "de": "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢受到傷害，則這次攻擊造成的傷害增加 60 點。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 2
};
export default card;
