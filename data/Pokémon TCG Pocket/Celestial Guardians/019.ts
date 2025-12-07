import { Card } from "../../../interfaces";
import Set from "../Celestial Guardians";
const card: Card = {
    set: Set,
    name: {
        en: "Steenee",
        fr: "Candine",
        es: "Steenee",
        it: "Steenee",
        de: "Frubaila",
        'pt-br': "Steenee",
        ko: "달무리나",
        "zh-tw": "斯蒂尼"
    },
    illustrator: "Mizue",
    rarity: "Two Diamond",
    category: "Pokemon",
    hp: 80,
    types: ["Grass"],
    evolveFrom: {
        en: "Bounsweet",
        "fr": "Bonbon",
        "es": "dulce",
        "it": "Dolcezza",
        "de": "Bounsweet",
        "pt-br": "Doce",
        "zh-tw": "邦斯威特"
    },
    description: {
        en: "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants.",
        fr: "Il dégage un doux parfum qui a le pouvoir\nde redonner du tonus, et qui est très\npopulaire en odeur de déodorant.",
        es: "Desprende un olor dulce que reanima a cualquiera\ny que es popular como aroma de desodorante.",
        it: "Sparge attorno a sé un dolce profumo che può donare\nil buonumore e che è molto apprezzato nei deodoranti.",
        de: "Es verströmt ein süßes Aroma, das für gute Laune sorgt\nund auch als Duftnote für Deodorants sehr beliebt ist.",
        'pt-br': "Steenee espalha um aroma doce que faz os outros\nse sentirem revigorados. Este mesmo aroma é popular\nem antitranspirantes.",
        ko: "기운이 솟을 것만 같은\n달콤한 향기를 흩뿌린다.\n땀 억제제의 향료로 인기가 좋다.",
        "zh-tw": "Steenee 散發出一種甜美的香味，讓其他人感到精力充沛。同樣的氣味在止汗劑中也很受歡迎。"
    },
    stage: "Stage1",
    attacks: [{
            name: {
                en: "Double Spin",
                fr: "Double Tour",
                es: "Doble Giro",
                it: "Doppioturbo",
                de: "Doppeldreher",
                'pt-br': "Giro Duplo",
                ko: "더블스핀",
                "zh-tw": "雙旋轉"
            },
            damage: "30x",
            cost: ["Grass"],
            effect: {
                en: "Flip 2 coins. This attack does 30 damage for each heads.",
                fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
                es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
                it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
                de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
                'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
                ko: "동전을 2번 던져서 앞면이 나온 수 × 30데미지를 준다.",
                "zh-tw": "翻轉 2 個硬幣。這次攻擊對每個頭造成 30 點傷害。"
            }
        }],
    weaknesses: [{
            type: "Fire",
            value: "+20"
        }],
    retreat: 1,
    boosters: ["solgaleo"]
};
export default card;
