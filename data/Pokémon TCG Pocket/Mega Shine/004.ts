import { Card } from "../../../interfaces";
import Set from "../Mega Shine";

const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2b/004",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2b/004"
    },
    name: {
        en: "Illumise",
        fr: "Lumivole",
        es: "Illumise",
        it: "Illumise",
        de: "Illumise",
        "pt-br": "Illumise",
        "zh-tw": "甜甜螢",
        ko: "네오비트",
        ja: "イルミーゼ"
    },
    illustrator: "Kouki Saitou",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    dexId: [314],
    stage: "Basic",
    description: {
        en: "It guides Volbeat to draw signs in the night sky. There are scholars who research the meaning of these signs.",
        fr: "Il guide Muciole pour dessiner des signes dans le ciel nocturne. Certains érudits étudient la signification de ces signes.",
        es: "Guía a Volbeat para dibujar señales en el cielo nocturno. Hay estudiosos que investigan el significado de estos signos.",
        it: "Guida Volbeat a disegnare segni nel cielo notturno. Ci sono studiosi che ricercano il significato di questi segni.",
        de: "Es leitet Volbeat an, Zeichen in den Nachthimmel zu zeichnen. Es gibt Wissenschaftler, die die Bedeutung dieser Zeichen erforschen.",
        "pt-br": "Ele orienta Volbeat a desenhar sinais no céu noturno. Existem estudiosos que pesquisam o significado desses sinais.",
        "zh-tw": "它引導電螢蟲在夜空中繪製標誌。有學者研究這些標誌的涵義。"
    },
    attacks: [
        {
            cost: ["Grass"],
            name: {
                en: "Mental Crush",
                fr: "Écrasement Mental",
                es: "Aplastamiento Mental",
                it: "Sbriciolamente",
                de: "Mentaler Zermalmer",
                "pt-br": "Esmagamento Mental",
                "zh-tw": "心靈粉碎"
            },
            effect: {
                en: "If your opponent's Active Pokémon is Confused, this attack does 40 more damage.",
                fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 40 dégâts supplémentaires.",
                es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 40 puntos de daño más.",
                it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 40 danni in più.",
                de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt dieser Angriff 40 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 40 pontos de dano a mais.",
                "zh-tw": "如果對手的出戰寶可夢處於混亂狀態，則這次攻擊造成的傷害增加 40 點。"
            },
            damage: "20+"
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
