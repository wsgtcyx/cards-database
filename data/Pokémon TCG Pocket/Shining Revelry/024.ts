import { Card } from "../../../interfaces";
import Set from "../Shining Revelry";
const card: Card = {
    set: Set,
    name: {
        en: "Electrode",
        fr: "Électrode",
        es: "Electrode",
        it: "Electrode",
        de: "Lektrobal",
        'pt-br': "Electrode",
        ko: "붐볼",
        "zh-tw": "頑皮雷彈"
    },
    illustrator: "Shigenori Negishi",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 90,
    types: ["Lightning"],
    evolveFrom: {
        en: "Voltorb",
        "fr": "Voltorbe",
        "es": "Voltorb",
        "it": "Voltorb",
        "de": "Voltobal",
        "pt-br": "Voltorb",
        "zh-tw": "霹靂電球"
    },
    description: {
        en: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
        fr: "Plus il accumule de l'énergie de type Électrik, plus il est rapide.\nMais il a aussi davantage de chances d'exploser.",
        es: "Cuanta más energía almacena, mayor\nvelocidad alcanza, aunque aumenta\ntambién el riesgo de que explote.",
        it: "L'energia Elettro che immagazzina\nlo fa andare sempre più veloce, ma\nlo fa anche esplodere più facilmente.",
        de: "Je mehr elektrische Energie es speichert, desto\nschneller ist es. Allerdings steigt dabei auch das\nRisiko, dass es explodiert.",
        'pt-br': "Quanto mais energia carrega, mais\nvelocidade ganha. Mas também aumenta\na sua probabilidade de explodir.",
        ko: "전기 에너지를 모을수록\n고속으로 이동할 수 있게 되나\n그만큼 폭발하기도 쉬워진다.",
        "zh-tw": "它充電的能量越多，速度就越快。但這也使得它更容易爆炸。"
    },
    stage: "Stage1",
    attacks: [{
        name: {
            en: "Tumbling Attack",
            fr: "Attaque Trébuchante",
            es: "Ataque Tambaleante",
            it: "Attacco Capriola",
            de: "Taumler",
            'pt-br': "Ataque Cambalhota",
            ko: "롤링어택",
            "zh-tw": "翻滾攻擊"
        },
        damage: "50+",
        cost: ["Lightning", "Lightning"],
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
        type: "Fighting",
        value: "+20"
    }],
    retreat: 1
};
export default card;
