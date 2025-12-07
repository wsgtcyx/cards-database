import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Eevee",
        fr: "Évoli",
        es: "Eevee",
        it: "Eevee",
        de: "Evoli",
        'pt-br': "Eevee",
        ko: "이브이",
        "zh-tw": "伊布"
    },
    illustrator: "Shibuzoh.",
    rarity: "One Diamond",
    category: "Pokemon",
    hp: 60,
    types: ["Colorless"],
    description: {
        en: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
        fr: "Ses multiples évolutions lui permettent\nde s'adapter à tout type de milieu naturel.",
        es: "Es capaz de evolucionar de muchas maneras\npara adaptarse sin problemas a cualquier medio.",
        it: "La capacità di evolversi in diverse specie gli permette\ndi adattarsi perfettamente a qualsiasi tipo di ambiente.",
        de: "Um sich jeder Umgebung perfekt anpassen zu\nkönnen, ist es in der Lage, sich zu verschiedenen\nPokémon zu entwickeln.",
        'pt-br': "Sua capacidade de evoluir para muitas formas\npermite que se adapte fácil e perfeitamente\na qualquer ambiente.",
        ko: "환경 변화에 곧바로 적응할 수 있도록\n여러 형태로 진화할 수 있는\n가능성을 가지고 있다.",
        "zh-tw": "它進化成多種形態的能力使其能夠順利、完美地適應任何環境。"
    },
    stage: "Basic",
    attacks: [{
            name: {
                en: "Quick Attack",
                fr: "Vive-Attaque",
                es: "Ataque Rápido",
                it: "Attacco Rapido",
                de: "Ruckzuckhieb",
                'pt-br': "Ataque Rápido",
                ko: "전광석화",
                "zh-tw": "快速攻擊"
            },
            damage: 10,
            cost: ["Colorless"],
            effect: {
                en: "Flip a coin. If heads, this attack does 20 more damage.",
                fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts de plus.",
                es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
                it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
                de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
                'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
                ko: "동전을 1번 던져서 앞면이 나오면 20데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣。如果正面，這次攻擊會造成 20 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["dialga", "palkia"]
};
export default card;
