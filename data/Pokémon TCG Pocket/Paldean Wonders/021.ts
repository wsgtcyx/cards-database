import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2a/021",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2a/021",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2a/021",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2a/021",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2a/021",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2a/021",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2a/021"
    },
    name: {
        en: "Chi-Yu",
        fr: "Yuyu",
        es: "Chi-Yu",
        it: "Chi-Yu",
        de: "Yuyu",
        "pt-br": "Chi-Yu",
        "zh-tw": "古玉魚",
        pt: "Chi-Yu",
        'es-mx': "Chi-Yu"
    },
    illustrator: "Dsuke",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Fire"],
    dexId: [1004],
    description: {
        en: "The envy accumulated within curved beads that sparked multiple conflicts has clad itself in fire and become a Pokémon.",
        "fr": "L'envie accumulée dans les perles incurvées qui ont déclenché de multiples conflits s'est revêtue de feu et est devenue un Pokémon.",
        "es": "La envidia acumulada dentro de cuentas curvas que provocaron múltiples conflictos se ha revestido de fuego y se ha convertido en un Pokémon.",
        "it": "L'invidia accumulata nelle perle ricurve che hanno scatenato molteplici conflitti si è rivestita di fuoco ed è diventata un Pokémon.",
        "de": "Der in gebogenen Perlen angesammelte Neid, der mehrere Konflikte auslöste, hat sich in Feuer gehüllt und ist zu einem Pokémon geworden.",
        "pt-br": "A inveja acumulada nas contas curvas que provocaram múltiplos conflitos se revestiu de fogo e se tornou um Pokémon.",
        "zh-tw": "彎曲的珠子中累積的嫉妒，引發了多次衝突，已經將自己包裹在火焰中，變成了寶可夢。"
    },
    stage: "Basic",
    attacks: [
        {
            name: {
                en: "Megafire of Envy",
                fr: "Jalousie Méga Brûlante",
                es: "Megafuego de Envidia",
                it: "Megafuoco d'Invidia",
                de: "Megafeuer des Neids",
                "pt-br": "Megafogo da Inveja",
                "zh-tw": "嫉妒之火",
                pt: "Megafogo da Inveja"
            },
            damage: "40+",
            cost: ["Fire", "Colorless"],
            effect: {
                en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
                fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
                es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
                it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
                de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
                "pt-br": "Se algum dos seus Pokémon foi nocauteado pelo dano de um ataque durante o último turno do seu oponente, esse ataque causará 60 de dano a mais.",
                "zh-tw": "如果你的任何一隻寶可夢在對手的最後回合中因攻擊而被擊倒，則這次攻擊造成的傷害增加 60 點。",
                'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
                pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais."
            },
        },
    ],
    weaknesses: [
        {
            type: "Water",
            value: "+20",
        },
    ],
    retreat: 1,
};
export default card;
