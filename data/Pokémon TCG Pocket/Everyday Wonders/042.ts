import { Card } from "../../../interfaces";
import Set from "../Everyday Wonders";

const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B3b/042",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B3b/042",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B3b/042",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B3b/042",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B3b/042",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B3b/042",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B3b/042"
    },
    name: {
        en: "Cacturne",
        fr: "Cacturne",
        es: "Cacturne",
        it: "Cacturne",
        de: "Noktuska",
        "pt-br": "Cacturne",
        "zh-tw": "夢歌仙人掌",
        ko: "밤선인",
        ja: "ノクタス"
    },
    illustrator: "Mina Nakai",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 100,
    types: ["Darkness"],
    dexId: [332],
    evolveFrom: {
        en: "Cacnea",
        fr: "Cacnea",
        es: "Cacnea",
        it: "Cacnea",
        de: "Tuska",
        "pt-br": "Cacnea",
        "zh-tw": "刺球仙人掌",
        ko: "선인왕",
        ja: "サボネア"
    },
    stage: "Stage1",
    description: {
        en: "It lives in deserts. It becomes active at night when it hunts for prey exhausted from the desert’s heat.",
        fr: "Il vit dans les déserts. Il devient actif la nuit lorsqu’il chasse des proies épuisées par la chaleur du désert.",
        es: "Vive en los desiertos. Se vuelve activo por la noche cuando caza presas exhausto por el calor del desierto.",
        it: "Vive nei deserti. Diventa attivo di notte quando va a caccia di prede stremato dal caldo del deserto.",
        de: "Es lebt in Wüsten. Es wird nachts aktiv, wenn es erschöpft von der Wüstenhitze auf Beutejagd geht.",
        "pt-br": "Vive em desertos. Torna-se ativo à noite quando caça presas, exausto pelo calor do deserto.",
        "zh-tw": "它生活在沙漠中。當它在夜間尋找因沙漠炎熱而疲憊不堪的獵物時，它就會變得活躍。"
    },
    attacks: [
        {
            cost: ["Darkness"],
            name: {
                en: "Finishing Blow",
                fr: "Coup final",
                es: "Golpe final",
                it: "Colpo finale",
                de: "Letzter Schlag",
                "pt-br": "Golpe Finalizador",
                "zh-tw": "致命刺擊"
            },
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
                es: "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 60 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 60 danni in più.",
                de: "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 60 pontos de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢受到傷害，則這次攻擊造成的傷害增加 60 點。"
            },
            damage: "10+"
        }
    ],
    weaknesses: [
        {
            type: "Grass",
            value: "+20"
        }
    ],
    retreat: 1
};

export default card;
