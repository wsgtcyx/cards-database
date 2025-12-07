import { Card } from "../../../interfaces";
import Set from "../Mythical Island";
const card: Card = {
    set: Set,
    name: {
        en: "Ponyta",
        fr: "Ponyta",
        es: "Ponyta",
        it: "Ponyta",
        de: "Ponita",
        'pt-br': "Ponyta",
        ko: "포니타",
        "zh-tw": "小火馬",
    },
    illustrator: "Tomokazu Komiya",
    category: "Pokemon",
    hp: 60,
    types: ["Fire"],
    description: {
        en: "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger.",
        fr: "À la naissance, il ne court pas très vite. C'est en faisant\nla course avec ses camarades qu'il se muscle les jambes.",
        es: "Al nacer es un poco lento, pero va\nfortaleciendo las patas paulatinamente\nal disputar carreras con sus congéneres.",
        it: "Appena nato non è un buon corridore, ma col tempo\nirrobustisce le sue zampe rincorrendo i suoi simili.",
        de: "Nach der Geburt fällt ihm das Laufen schwer.\nDie Wettrennen, die es sich mit seinen Freunden\nliefert, stärken jedoch seine Beinmuskulatur.",
        'pt-br': "Nasce sem saber correr muito bem, mas, à medida\nque corre com outros da sua espécie, suas pernas\nvão ficando mais fortes.",
        ko: "갓 태어났을 때는 달리는 것이 서툴다.\n동료와 달리기 경주를 하는 사이에\n하반신이 튼튼하게 성장한다.",
        "zh-tw": "剛出生的時候是不能正常運行的。當它與其他同類賽跑時，它的腿會變得更加強壯。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Stomp",
                fr: "Écrasement",
                es: "Pisotón",
                it: "Pestone",
                de: "Stampfer",
                'pt-br': "Pisotear",
                ko: "짓밟기",
                "zh-tw": "跺腳"
            },
            damage: "10+",
            cost: ["Fire"],
            effect: {
                en: "Flip a coin. If heads, this attack does 30 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
                ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣。如果正面，此攻擊會造成 30 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Water",
            value: "+20"
        }],
    retreat: 1,
    rarity: "One Diamond"
};
export default card;
