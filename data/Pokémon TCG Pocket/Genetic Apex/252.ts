import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Exeggutor ex",
        fr: "Noadkoko-ex",
        es: "Exeggutor ex",
        it: "Exeggutor-ex",
        de: "Kokowei-ex",
        'pt-br': "Exeggutor ex",
        ko: "나시 ex",
        "zh-tw": "椰蛋樹 ex",
    },
    illustrator: "PLANETA CG Works",
    category: "Pokemon",
    hp: 160,
    types: ["Grass"],
    stage: "Stage1",
    evolveFrom: {
        en: "Exeggcute",
        "fr": "Oeuf mignon",
        "es": "Ejecutar",
        "it": "Exeggcute",
        "de": "Exeggcute",
        "pt-br": "Exeggcute",
        "zh-tw": "蛋蛋可愛"
    },
    suffix: "EX",
    attacks: [{
            cost: ["Grass"],
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
            effect: {
                en: "Flip a coin. If heads, this attack does 40 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
                ko: "동전을 1번 던져서 앞면이 나오면 40데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 40 點額外傷害。"
            },
            damage: "40+"
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 3,
    rarity: "Two Star",
    boosters: ["charizard"]
};
export default card;
