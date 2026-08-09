import { Card } from "../../../interfaces";
import Set from "../Ruler of the Skies";
const card: Card = {
    set: Set,
    image: {
        en: "https://game.pokemontcgpocket.app/en/tcgp/B4/053",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B4/053",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B4/053",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B4/053",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B4/053",
        de: "https://game.pokemontcgpocket.app/de/tcgp/B4/053",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B4/053"
    },
    name: {
        en: "Luxray",
        fr: "Luxray",
        es: "Luxray",
        it: "Luxray",
        de: "Luxtra",
        "pt-br": "Luxray",
        "zh-tw": "倫琴貓",
        ko: "렌트라",
        ja: "レントラー"
    },
    illustrator: "aoki",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 140,
    types: ["Lightning"],
    dexId: [405],
    evolveFrom: {
        en: "Luxio",
        fr: "Luxio",
        es: "Luxio",
        it: "Luxio",
        de: "Luxio",
        "pt-br": "Luxio",
        "zh-tw": "勒克貓",
        ko: "럭시오",
        ja: "ルクシオ"
    },
    stage: "Stage2",
    description: {
        en: "LUXRAY’s ability to see through objects comes in handy when it’s scouting for danger.",
        fr: "Il est capable de voir à travers tout ce qui existe, ce qui lui est très utile pour détecter le moindre danger.",
        "es": "Tiene la capacidad de ver a través de todo, algo que resulta extremadamente valioso cuando acecha el peligro.",
        it: "L'abilità radioscopica di Luxray si rivela molto utile quando si vuole rilevare la presenza di oggetti pericolosi.",
        "de": "Beim Aufspüren von Gefahren ist Luxtras Röntgenblick äußerst hilfreich.",
        "pt-br": "A habilidade do Luxray de ver através dos objetos é muito útil quando confere se há perigos.",
        "zh-tw": "倫琴貓的透視能力\n在發現危險事物時\n非常有幫助。"
    },
    attacks: [
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                en: "Revenge Blast",
                fr: "Explo-Vengeance",
                es: "Estallido Venganza",
                it: "Vendicabomba",
                de: "Rachestoß",
                "pt-br": "Raio de Vingança",
                "zh-tw": "復仇暴擊"
            },
            effect: {
                en: "This attack does 50 more damage for each point your opponent has gotten.",
                fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque point que votre adversaire a gagné.",
                es: "Este ataque hace 50 puntos de daño más por cada punto que haya conseguido tu rival.",
                it: "Questo attacco infligge 50 danni in più per ogni punto ottenuto dall'avversario.",
                "pt-br": "Este ataque causa 50 pontos de dano a mais para cada ponto que seu oponente recebeu.",
                "zh-tw": "增加對手已經獲得的分數×50點傷害。",
                "de": "Diese Attacke fügt für jeden von deinem Gegner erhaltenen Punkt 50 Schadenspunkte mehr zu."
            },
            damage: "80+"
        }
    ],
    weaknesses: [
        {
            type: "Fighting",
            value: "+20"
        }
    ],
    retreat: 1
};
export default card;
