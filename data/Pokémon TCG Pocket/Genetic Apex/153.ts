import { Card } from "../../../interfaces";
import Set from "../Genetic Apex";
const card: Card = {
    set: Set,
    name: {
        en: "Marowak ex",
        fr: "Ossatueur-ex",
        es: "Marowak ex",
        it: "Marowak-ex",
        de: "Knogga-ex",
        'pt-br': "Marowak ex",
        ko: "텅구리 ex",
        "zh-tw": "馬羅瓦克超級"
    },
    illustrator: "PLANETA Mochizuki",
    category: "Pokemon",
    hp: 140,
    types: ["Fighting"],
    stage: "Stage1",
    evolveFrom: {
        en: "Cubone",
        "fr": "Cubone",
        "es": "cubone",
        "it": "Cubone",
        "de": "Cubone",
        "pt-br": "Cubo",
        "zh-tw": "庫博內"
    },
    suffix: "EX",
    attacks: [{
            cost: ["Fighting", "Fighting"],
            name: {
                en: "Bonemerang",
                fr: "Osmerang",
                es: "Huesomerang",
                it: "Ossomerang",
                de: "Knochmerang",
                'pt-br': "Ossomerangue",
                ko: "뼈다귀부메랑",
                "zh-tw": "骨梅蘭"
            },
            effect: {
                en: "Flip 2 coins. This attack does 80 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
                'pt-br': "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 80데미지를 준다.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 80 點傷害。"
            },
            damage: "80×"
        }],
    weaknesses: [{
            type: "Grass",
            value: "+20"
        }],
    retreat: 1,
    rarity: "Four Diamond",
    boosters: ["mewtwo"]
};
export default card;
