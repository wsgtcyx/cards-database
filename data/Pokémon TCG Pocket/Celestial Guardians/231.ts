import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    image: {
        de: "https://game.pokemontcgpocket.app/de/tcgp/A3/231",
        es: "https://game.pokemontcgpocket.app/es/tcgp/A3/231",
        fr: "https://game.pokemontcgpocket.app/fr/tcgp/A3/231",
        it: "https://game.pokemontcgpocket.app/it/tcgp/A3/231",
        "pt-br": "https://game.pokemontcgpocket.app/pt/tcgp/A3/231",
        "zh-tw": "https://game.pokemontcgpocket.app/zh-tw/tcgp/A3/231",
        en: "https://game.pokemontcgpocket.app/en/tcgp/A3/231"
    },
    name: {
        en: "Exeggutor ex",
        fr: "Noadkoko-ex",
        es: "Exeggutor ex",
        it: "Exeggutor-ex",
        de: "Kokowei-ex",
        'pt-br': "Exeggutor ex",
        ko: "나시 ex",
        "zh-tw": "椰蛋樹ex",
    },
    illustrator: "PLANETA CG Works",
    rarity: "Two Shiny",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    evolveFrom: {
        en: "Exeggcute",
        "fr": "Noeunoeuf",
        "es": "Exeggcute",
        "it": "Exeggcute",
        "de": "Owei",
        "pt-br": "Exeggcute",
        "zh-tw": "蛋蛋",
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Tropical Swing",
                fr: "Coup Tropical",
                es: "Golpe Tropical",
                it: "Tropicolpo",
                de: "Tropenschwung",
                'pt-br': "Balanço Tropical",
                ko: "트로피컬스윙",
                "zh-tw": "熱帶鞦韆"
            },
            damage: "40+",
            cost: ["Grass"],
            effect: {
                en: "Flip a coin. If heads, this attack does 40 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
                ko: "동전을 1번 던져서 앞면이 나오면 40데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    boosters: ["lunala"]
};
export default card;
