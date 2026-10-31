import { Card } from "../../../interfaces";
import Set from "../Fantastical Parade";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/B2/176",
        es: "https://game.pokemontcgpocket.app/es/tcgp/B2/176",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/B2/176",
        it: "https://game.pokemontcgpocket.app/it/tcgp/B2/176",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/B2/176",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/B2/176",
        en: "https://game.pokemontcgpocket.app/en/tcgp/B2/176",
        ja: "https://game.pokemontcgpocket.app/ja/tcgp/B2/176",
        ko: "https://game.pokemontcgpocket.app/ko/tcgp/B2/176"
    },
    name: {
        en: "Galarian Obstagoon",
        "fr": "Ixon de Galar",
        "es": "Obstagoon de Galar",
        "it": "Obstagoon di Galar",
        "de": "Galar-Barrikadax",
        "pt-br": "Obstagoon de Galar",
        "zh-tw": "伽勒爾堵攔熊",
        ja: "ガラルタチフサグマ",
        ko: "가라르 가로막구리"
    },
    illustrator: "Mousho",
    rarity: "One Star",
    category: "Pokemon",
    hp: 150,
    types: ["Darkness"],
    evolveFrom: {
        en: "Galarian Linoone",
        "fr": "Linéon de Galar",
        "es": "Linoone de Galar",
        "it": "Linoone di Galar",
        "de": "Galar-Geradaks",
        "pt-br": "Linoone de Galar",
        "zh-tw": "伽勒爾直衝熊",
        ja: "ガラルマッスグマ",
        ko: "가라르 직구리"
    },
    description: {
        en: "It evolved after experiencing numerous fights.\nWhile crossing its arms, it lets out a shout that\nwould make any opponent flinch.",
        "fr": "Il a évolué après avoir connu de nombreux combats.\nTout en croisant les bras, il pousse un cri qui\nferait tressaillir n’importe quel adversaire.",
        "es": "Evolucionó después de experimentar numerosas peleas.\nMientras cruza sus brazos, suelta un grito que\nHaría que cualquier oponente se estremeciera.",
        "it": "Si è evoluto dopo aver sperimentato numerosi combattimenti.\nIncrociando le braccia lancia un grido\nfarebbe trasalire qualsiasi avversario.",
        "de": "Es entwickelte sich nach zahlreichen Kämpfen.\nWährend es die Arme verschränkt, stößt es einen Schrei aus\nwürde jeden Gegner zusammenzucken lassen.",
        "pt-br": "Ele evoluiu depois de passar por inúmeras lutas.\nAo cruzar os braços, solta um grito que\nfaria qualquer oponente recuar.",
        "zh-tw": "它是在經歷了無數次戰鬥後進化而來的。\n它交叉著雙臂，發出一聲大喊：\n會讓任何對手退縮。",
        ja: "ケンカを 繰り返し 進化。 腕をクロスし 叫ぶ 雄叫びは どんな 相手も 怯ませるぞ。",
        ko: "싸움을 반복하면서 진화한다.\n팔을 크로스하고 우렁차게 외치면\n어떤 상대라도 풀죽게 된다."
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
                "zh-tw": "無情打擊",
                ja: "むじひないちげき",
                ko: "무자비한일격"
            },
            damage: "70+",
            cost: ["Darkness", "Darkness"],
            effect: {
                en: "If your opponent's Active Pokémon has damage on it, this attack does 50 more damage.",
                "fr": "Si le Pokémon Actif de votre adversaire subit des dégâts, cette attaque inflige 50 dégâts supplémentaires.",
                "es": "Si el Pokémon Activo de tu rival tiene daño, este ataque hace 50 puntos de daño más.",
                "it": "Se il Pokémon attivo del tuo avversario ha dei danni su di sé, questo attacco infligge 50 danni in più.",
                "de": "Wenn das Aktive Pokémon deines Gegners Schaden hat, fügt dieser Angriff 50 weitere Schadenspunkte zu.",
                "pt-br": "Se o Pokémon Ativo do seu oponente sofrer dano, este ataque causará 50 de dano a mais.",
                "zh-tw": "如果對手的活躍寶可夢受到傷害，則這次攻擊造成的傷害增加 50 點。",
                ja: "相手のバトルポケモンがダメージを受けているなら、50ダメージ追加。",
                ko: "상대의 배틀 포켓몬이 데미지를 받고 있다면 50데미지를 추가한다."
            }
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 2
};
export default card;
