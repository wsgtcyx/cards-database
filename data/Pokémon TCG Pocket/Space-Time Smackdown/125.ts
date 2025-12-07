import { Card } from "../../../interfaces";
import Set from "../Space-Time Smackdown";
const card: Card = {
    set: Set,
    name: {
        en: "Lickilicky ex",
        fr: "Coudlangue-ex",
        es: "Lickilicky ex",
        it: "Lickilicky-ex",
        de: "Schlurplek-ex",
        'pt-br': "Lickilicky ex",
        ko: "내룸벨트 ex",
        "zh-tw": "舔舔EX"
    },
    illustrator: "PLANETA Igarashi",
    rarity: "Four Diamond",
    category: "Pokemon",
    hp: 160,
    types: ["Colorless"],
    evolveFrom: {
        en: "Lickitung",
        "fr": "Léchage",
        "es": "lamiendo",
        "it": "Lickitung",
        "de": "Lecken",
        "pt-br": "Lickitung",
        "zh-tw": "利基通"
    },
    stage: "Stage1",
    suffix: "EX",
    attacks: [{
            name: {
                en: "Licking Fury",
                fr: "Langue Frénétique",
                es: "Furia Lingual",
                it: "Leccate Furiose",
                de: "Schleckwut",
                'pt-br': "Lambida Furiosa",
                ko: "낼름낼름러시",
                "zh-tw": "舔怒"
            },
            damage: "100+",
            cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
            effect: {
                en: "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
                fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
                es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño más por cada cara.",
                it: "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni in più ogni volta che esce testa.",
                de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 40 Schadenspunkte mehr pro Kopf zu.",
                'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 40 pontos de dano a mais para cada cara.",
                ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 40데미지를 추가한다.",
                "zh-tw": "拋一枚硬幣，直到出現反面。這次攻擊對每個頭造成 40 點額外傷害。"
            }
        }],
    weaknesses: [{
            type: "Fighting",
            value: "+20"
        }],
    retreat: 4,
    boosters: ["palkia"]
};
export default card;
