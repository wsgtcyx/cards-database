import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/100"
    },
    name: {
        en: "Galarian Obstagoon",
        "fr": "Obstagoon galarien",
        "es": "Obstagoon de Galar",
        "it": "Ostacolo Galarian",
        "de": "Galarischer Obstagoon",
        "pt-br": "Obstagoon Galariano",
        "zh-tw": "伽勒安障礙"
    },
    illustrator: "kodama",
    rarity: "Three Diamond",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    evolveFrom: {
        en: "Galarian Linoone",
        "fr": "Linéon de Galar",
        "es": "Linoone de Galar",
        "it": "Linoone Galariano",
        "de": "Galarischer Linoone",
        "pt-br": "Linoone de Galar",
        "zh-tw": "加拉利安·利努內"
    },
    description: {
        en: "It evolved after experiencing numerous fights.\nWhile crossing its arms, it lets out a shout that\nwould make any opponent flinch.",
        "fr": "Il a évolué après avoir connu de nombreux combats.\nTout en croisant les bras, il pousse un cri qui\nferait tressaillir n’importe quel adversaire.",
        "es": "Evolucionó después de experimentar numerosas peleas.\nMientras cruza sus brazos, suelta un grito que\nHaría que cualquier oponente se estremeciera.",
        "it": "Si è evoluto dopo aver sperimentato numerosi combattimenti.\nIncrociando le braccia lancia un grido\nfarebbe trasalire qualsiasi avversario.",
        "de": "Es entwickelte sich nach zahlreichen Kämpfen.\nWährend es die Arme verschränkt, stößt es einen Schrei aus\nwürde jeden Gegner zusammenzucken lassen.",
        "pt-br": "Ele evoluiu depois de passar por inúmeras lutas.\nAo cruzar os braços, solta um grito que\nfaria qualquer oponente recuar.",
        "zh-tw": "它是在經歷了無數次戰鬥後進化而來的。\n它交叉著雙臂，發出一聲大喊：\n會讓任何對手退縮。"
    },
    stage: "Stage2",
    attacks: [{
            name: {
                en: "Merciless Strike",
                "fr": "Frappe impitoyable",
                "es": "Golpe despiadado",
                "it": "Colpo spietato",
                "de": "Gnadenloser Schlag",
                "pt-br": "Ataque Impiedoso",
                "zh-tw": "無情打擊"
            },
            damage: 70,
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 50 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire subit des dégâts, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival tiene daño, este ataque hace 50 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario ha dei danni su di sé, questo attacco infligge 50 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners Schaden hat, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente sofrer dano, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢受到傷害，則這次攻擊造成的傷害增加 50 點。"
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
